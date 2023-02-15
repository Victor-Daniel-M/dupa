import express from 'express';
import { ProjectDeps } from '../../../config/projectDependencies';
import { AuthRouter } from './auth';

export function routes(projectDeps: ProjectDeps) {
  const routes = express.Router();

  const authRouter = AuthRouter(projectDeps);

  routes.use('/auth', authRouter);

  return routes;
}
