import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express(); 

//using the dependencies
app.use(express.json());

//exporting app
export default app;