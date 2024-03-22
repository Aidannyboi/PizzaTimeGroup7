import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';

import topping_router from './routes/topping.routes.js';
import router from './routes/user.routes.js';
import pizza_router from './routes/pizza.routes.js';
import order_router from './routes/order.routes.js';
import crust_router from './routes/crust.routes.js';
import size_router from './routes/size.routes.js';




const app = express();
app.use(express.json(), cors({credentials: true,origin: 'http://localhost:5173' }));


dotenv.config();

//origin: 'http://localhost:5173'

app.use("/api", router, topping_router, pizza_router, order_router, crust_router, size_router)

const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

