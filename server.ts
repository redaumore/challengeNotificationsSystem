import express, { Application } from 'express';
import Server from './src/index';

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 5) : 8080;

app
  .listen(PORT, 'localhost', function () {
    console.log(`Server running on PORT: ${PORT}`);
  })
  .on('error', (err: any) => {
    console.log(err);
  });
