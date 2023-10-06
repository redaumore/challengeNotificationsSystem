import { Application } from 'express';
import mainRoutes from './main.routes';

export default class Routes {
  constructor(app: Application) {
    app.use('/api', mainRoutes);
  }
}
