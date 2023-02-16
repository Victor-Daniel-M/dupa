import express from 'express';
import { AuthController } from '../../../adapter/controllers/login.controller';
import { LoginUserUseCase } from '../../../application/usecases/loginBrokerViaSystem';
import { ProjectDeps } from '../../../config/projectDependencies';

export function AuthRouter(projectDeps: ProjectDeps) {
  const router = express.Router();

  // load controller with dependencies
  // const controller = new AuthController(projectDeps);

  // router.route('/login').post(controller.login.bind(controller));

  return router;
}