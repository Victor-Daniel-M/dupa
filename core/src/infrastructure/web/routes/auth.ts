import express from 'express';

export function AuthRouter(projectDeps: any) {
  const router = express.Router();

  // load controller with dependencies
  // const controller = new AuthController(projectDeps);

  // router.route('/login').post(controller.login.bind(controller));

  return router;
}
