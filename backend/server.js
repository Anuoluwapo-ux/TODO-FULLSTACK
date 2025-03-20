import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import { connectDB } from './config/db.js';
import { authRouters } from './routes/authRoutes.js';
import { todoRouters } from './routes/postRoutes.js';

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ greetings: "hello wrld!!!!!" })
});

app.use('/api/auth', authRouters)
app.use('/api/todo', todoRouters)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started and running on port: ${PORT}`));