import{
    createUser,
    deleteOneUser,
    UpdateOneUser,
    login,
    logout,
    getAllUsers,
    getAllUserOrders,
    UpdateUserPassword,
    getOneUser
}from "../controllers/user.controller.js"



import {Router} from "express"

const router = Router()

router.route("/user/signin")
    .post(login)

router.route('/user/logout')
    .delete(logout)

router.route("/user")
    .get(getOneUser)
    .post(createUser)
    .put(UpdateOneUser)
    .delete(deleteOneUser)

router.route("/user/password")
    .put(UpdateUserPassword)

router.route("/user/orders")
    .get(getAllUserOrders)

router.route("/users")
    .get(getAllUsers)

export default router;