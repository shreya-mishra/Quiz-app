import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import colors from "colors";
import { notFound, errorHandler } from './middleware/errorMiddlewares.js';
import dotenv from "dotenv";


dotenv.config();
connectDB();

const app = express();

// GET Request to "/" route
app.use(express.json())

app.get("/api", (req, res) => {
    res.json("API is running..");
});
app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(process.env.PORT, console.log(`Server running on PORT ${process.env.PORT}..`.bold));
