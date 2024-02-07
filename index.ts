import { Express} from "express";

const express = require('express');
const dotenv = require('dotenv');;

dotenv.config()

const app: Express = express(); 

//using the dependancies
app.use(express.json());

//exporting app
module.exports = app;