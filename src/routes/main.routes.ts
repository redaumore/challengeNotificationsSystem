import { Router } from 'express';
import { home } from '../controllers/home.controller';

class MainRoutes {
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', home);
  }
}

export default new MainRoutes().router;
