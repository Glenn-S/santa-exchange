import { Request, Response } from 'express';
import { controller, get, post, use } from './decorators';

@controller('/auth')
class LoginController {

  @get('/login')
  public getLogin(req: Request, res: Response): void {
    res.status(200).json({ test: 'login response' });
  }
}