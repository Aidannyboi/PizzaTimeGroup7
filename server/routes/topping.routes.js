import{
    createTopping,
    getAllToppings,
    getOneTopping,
    deleteOneTopping,
    UpdateOneTopping
}from "../controllers/topping.controller.js"

import {Router} from "express"

const topping_router = Router()

topping_router.route("/toppings")
    .post(createTopping)
    .get(getAllToppings)

topping_router.route("/toppings/:id")
    .get(getOneTopping)
    .delete(deleteOneTopping)
    .put(UpdateOneTopping)
    

export default topping_router;