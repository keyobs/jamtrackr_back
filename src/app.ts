import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { query } from './config/db';

const app: Express = express();

//using dependencies
app.use(express.json());
app.use(cors());

app.get('/api', (req: Request, res: Response) => {
    const response = res.status(200);
    response.send('you summouned me !');
});

app.get('/v1', async (req, res) => {
    try {
        const result = await query('SELECT * FROM leagues', []); // Use the imported query function
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error oh no');
    }
});

export default app;
