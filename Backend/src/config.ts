require('dotenv').config();
import 'reflect-metadata';

import { Express } from 'express';
import bodyParser from 'body-parser';
import { Router } from './Router';
import { getEnvironmentVar as getEnv } from './utils';

// Import controllers to use with routes
import './controllers';
import { connectDb } from './dataAccess/config';

export const configuration = (app: Express): void => {
  
  // Configure Middleware
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(Router.getInstance());

  // Environment Variables
  const applicationPort = parseInt(getEnv('SERVER_PORT'));

  const host = getEnv('DB_HOST');
  const port = getEnv('MONGO_DB_PORT');
  const database = getEnv('MONGO_INITDB_DATABASE');
  const username = getEnv('MONGO_INITDB_ROOT_USERNAME');
  const password = getEnv('MONGO_INITDB_ROOT_PASSWORD');

  const connectionString = `mongodb://${host}:${port}/${database}?authSource=admin`;
  connectDb(connectionString, username, password);

  // Start App
  app.listen(applicationPort, () => {
    console.log(`Listening on port ${applicationPort}`);
  });
}