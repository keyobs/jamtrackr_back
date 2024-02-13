import { Request, Response } from 'express';
import dotenv from 'dotenv';
import app from '../index';

dotenv.config();

const port = process.env.PORT || 9001;

app.get('/api', (req: Request, res: Response) => {
    res.send('you summouned me !');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
