import { Request, Response } from "express";
require("dotenv").config();

const app = require('../index');

const port = process.env.PORT || 5000;

app.get('/init', (req: Request, res: Response) => {
    res.send(`you summouned me !`);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 