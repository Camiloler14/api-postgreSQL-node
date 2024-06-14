import express from 'express'
import { PORT } from './config.js';
import userRoutes from './routes/users.routes.js'
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(userRoutes);

app.listen(PORT);
console.log("server running on port", PORT)