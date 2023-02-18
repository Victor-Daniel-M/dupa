import express from 'express';
import { AuthRouter } from './auth';

export function routes(projectDeps: any) {
  const routes = express.Router();

  const authRouter = AuthRouter(projectDeps);

  routes.use('/auth', authRouter);

  return routes;
}
