import express, { Request, Response, NextFunction } from 'express';
import fs from 'fs';

// const infoStream = fs.createWriteStream('logs/info.txt');
// const errorStream = fs.createWriteStream('logs/error.txt');
// const debugStream = fs.createWriteStream('logs/debug.txt');

export const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.info(req);
  next();
}