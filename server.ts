import app from './src/app';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 9001;

//starting server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


