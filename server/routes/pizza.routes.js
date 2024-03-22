import{
    createPizza,
    getAllPizzas,
    getOnePizza,
    deleteOnePizza,
    UpdateOnePizza
}from "../controllers/pizza.controller.js"

import {Router} from "express"

const pizza_router = Router()

pizza_router.route("/pizzas")
    .post(createPizza)
    .get(getAllPizzas)

pizza_router.route("/pizzas/:id")
    .get(getOnePizza)
    .delete(deleteOnePizza)
    .put(UpdateOnePizza)
    

export default pizza_router;