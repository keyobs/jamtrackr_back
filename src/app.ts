import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();

//using dependencies
app.use(express.json());
app.use(cors());

app.get('/api', (req: Request, res: Response) => {
    const response = res.status(200);
    response.send('you summouned me !');
});

export default app;
