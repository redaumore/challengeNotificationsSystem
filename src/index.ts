import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import bodyParser from 'body-parser';
import mainRoutes from './routes/main.routes';
import Routes from './routes';

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: 'http://localhost:8090',
    };
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    //app.use(express.urlencoded({ extended: true }));
  }
}
