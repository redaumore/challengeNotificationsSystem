import 'reflect-metadata';
import express, { Application } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import './controllers/IndexHandler';
import './controllers/NotificationsHandler';
import container from './inversify.config';
import bodyParser from 'body-parser';

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 5) : 8080;

class App {
  public port?: number;
  private server: InversifyExpressServer;
  private app: Application = express();

  constructor() {
    this.port = PORT;
    this.server = new InversifyExpressServer(container);
  }

  public initConfig() {
    console.log('initConfig');
    this.server.setConfig((app: express.Application) => {
      app.use(bodyParser.json({ limit: '10mb', type: 'application/json' }));
      app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    });
  }

  public build() {
    console.log('initConfig');
    this.app = this.server.build();
  }

  public listen() {
    console.log('initConfig');
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}

export default App;
