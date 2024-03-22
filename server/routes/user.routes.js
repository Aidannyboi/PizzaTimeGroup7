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
    .post(logout)


router.route("/user")
    .put(UpdateOneUser)
    .delete(deleteOneUser)
    .post(createUser)
    .get(getOneUser)

router.route("/user/password")
    .put(UpdateUserPassword)

router.route("/user/orders")
    .get(getAllUserOrders)

router.route("/users")
    .get(getAllUsers)

export default router;