import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';



const app = express();
app.use(express.json(), cors({credentials: true,origin: 'http://localhost:5173' }));


dotenv.config();

//origin: 'http://localhost:5173'

//app.use("/api", router)

const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

