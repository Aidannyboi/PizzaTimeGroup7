import{
    createCrust,
    getAllCrusts,
    getOneCrust,
    deleteOneCrust,
    UpdateOneCrust
}from "../controllers/crust.controller.js"

import {Router} from "express"

const crust_router = Router()

crust_router.route("/crusts")
    .post(createCrust)
    .get(getAllCrusts)

crust_router.route("/crusts/:id")
    .get(getOneCrust)
    .delete(deleteOneCrust)
    .put(UpdateOneCrust)
    

export default crust_router;