import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
};

const routeBinder = (method: string): Function => {
  return (path: string): Function => {
    return (target: any, key: string, desc: RouteHandlerDescriptor): void => {
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
    };
  };
};

export const get = routeBinder(Methods.GET);
export const post = routeBinder(Methods.POST);
export const put = routeBinder(Methods.PUT);
export const patch = routeBinder(Methods.PATCH);
export const del = routeBinder(Methods.DELETE);