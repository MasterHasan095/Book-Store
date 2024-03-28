import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';
const app = express();

//Middleware
app.use(express.json());

//Cors for everyone

app.use(cors());

//Allow custom cors origin
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)

app.get("/", (req, res) => {
  return res.status(234).send("Nigga");
});

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL).then(() => {
    console.log(`App connected to database`);
    app.listen(PORT, () => {
      console.log(`App is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
