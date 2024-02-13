import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express(); 

//using the dependencies
app.use(express.json());
app.use(cors());

//exporting app
export default app;