import express, { Application } from 'express';
import app from '.';

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 5) : 8080;

const server = app
  .listen(PORT, 'localhost', function () {
    console.log(`Server running on PORT: ${PORT}`);
  })
  .on('error', (err: any) => {
    console.log(err);
  });

module.exports = server;
