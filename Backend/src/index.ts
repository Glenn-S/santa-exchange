import express from 'express';
import { configuration } from './config';

const app = express();
configuration(app);
