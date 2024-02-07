const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/init', (req, res) => {
    res.send(`you summouned me !`);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 