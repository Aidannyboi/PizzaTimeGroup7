import{
    createSize,
    getAllSizes,
    getOneSize,
    deleteOneSize,
    UpdateOneSize
}from "../controllers/size.controller.js"

import {Router} from "express"

const size_router = Router()

size_router.route("/sizes")
    .post(createSize)
    .get(getAllSizes)

size_router.route("/sizes/:id")
    .get(getOneSize)
    .delete(deleteOneSize)
    .put(UpdateOneSize)
    

export default size_router;