import express, { Application, Express } from 'express';
import cors, { CorsOptions } from 'cors';
import bodyParser from 'body-parser';
import { router as mainRoutes } from './routes/main.routes';
import { notDeepStrictEqual } from 'assert';

const app: Application = express();

const corsOptions: CorsOptions = {
  origin: 'http://localhost:8090',
};

app.use('/', mainRoutes);
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

export default app;
