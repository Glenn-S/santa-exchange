import { Router } from "../../Router";
import { MetadataKeys } from "./MetadataKeys";
import { Methods } from "./Methods";
import { RequestHandler, Request, Response, NextFunction } from "express";

const bodyValidators = (keys: string[]): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property key: ${key}`);
        return;
      }
    }

    next();
  };
};

export const controller = (routePrefix: string): Function => {
  return (target: Function): void => {
    const router = Router.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path: string = Reflect.getMetadata(MetadataKeys.Path, target.prototype, key) || '';
      const method: Methods = Reflect.getMetadata(MetadataKeys.Method, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) || [];
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.Validator, target.prototype, key) || [];

      const validator = bodyValidators(requiredBodyProps);

      // remove the trailing / from the route prefix to make concatenating easier
      if (routePrefix.charAt(routePrefix.length-1) === '/' && path.length > 0) {
        routePrefix = routePrefix.substr(0, routePrefix.length-2);
      }

      // make sure the path has a leading '/' if it is not default route
      if (path.length > 0 && path.charAt(0) !== '/') {
        throw new Error(`path must start with leading '/'`);
      }

      router[method](
        `${routePrefix}${path}`, 
        ...middlewares, 
        validator,
        routeHandler);
    }
  };
};