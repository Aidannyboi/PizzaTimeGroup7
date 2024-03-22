import{
    createOrder,
    getAllOrders,
    getOneOrder,
    deleteOneOrder,
    UpdateOneOrder
}from "../controllers/order.controller.js"

import {Router} from "express"

const order_router = Router()

order_router.route("/orders")
    .post(createOrder)
    .get(getAllOrders)

order_router.route("/orders/:id")
    .get(getOneOrder)
    .delete(deleteOneOrder)
    .put(UpdateOneOrder)
    

export default order_router;