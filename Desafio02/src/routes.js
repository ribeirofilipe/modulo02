import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import authMiddleware from './app/middlewares/auth';
import isAdmin from './app/middlewares/admin';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.use(isAdmin);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:id', UserController.update);

routes.post('/students', StudentController.store);
routes.put('/student/:id', StudentController.update);

export default routes;
