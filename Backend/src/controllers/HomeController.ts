import { Request, Response } from 'express';
import { controller, get, use } from './decorators';
import { logger } from './decorators/logger';

@controller('/')
class RootController {

  @get()
  @use(logger)
  public getRoot(req: Request, res: Response): void {
    res.status(200).json({ test: 'response' });
  }
}