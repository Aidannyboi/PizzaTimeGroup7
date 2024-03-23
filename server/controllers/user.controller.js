import User from "../models/user.model.js"   
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Order from '../models/order.model.js'
//import dotenv from 'dotenv';


const SECRET_KEY = process.env.SECRET_KEY


async function validateUser(){
    
    const userId = jwt.verify(req.cookies.usertoken, SECRET_KEY)

    const user = await User.findById(userId.id)

    return(user)
}

async function createUser(req, res){
    try{

        if(req.body.password !== req.body.confirm){
            res.status(400).json({confirm: {message: "Passwords do not match"}})
        }else{

            const newUser = await User.create(req.body)        
            const userToken = jwt.sign({
                id: newUser._id
            }, SECRET_KEY);
            
            res.cookie("usertoken", userToken, {
                httpOnly: true
            })
            res.json({message: "User Created"})

        }




    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }


}

// BACK END ONLY
async function getAllUsers(req, res){
    try{

        const users = await User.find()
        res.json(users)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getOneUser(req, res){
    try{

        const user = validateUser()

        if (user.length > 0){
            const u = {
                first_name: user.first_name,
                last_name: user.last_name,
                address: user.address,
                city: user.city,
                state: user.state,
                email: user.email,
                orders: user.orders
            }

            res.json(u)

        }else{
            res.status(400).json({user: {message: "User not found"}})
        }
        

            

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function deleteOneUser(req, res){
    try{

        const user = validateUser()

        if (user.length > 0){
            const u = await User.findByIdAndDelete(req.body.id)
            res.json(u)
        }else{
            res.status(400).json({user: {message: "User not found"}})
        }
        

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function UpdateOneUser(req, res){
    try{

        const u = validateUser()
        
        if (u.length > 0){
            const user = await User.findByIdAndUpdate(user._id, {...req.body, password: false}, {new: true, runValidators: true})
            res.json(user)
        }else{

            res.status(400).json({user: {message: "User not found"}})
        }

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function UpdateUserPassword(req, res){
    try{

        const u = validateUser()
        
        if (u.length > 0){
            const user = await User.findByIdAndUpdate(user_id, req.body, {new: true, runValidators: true})
            res.json(user)
        }else{
            res.status(400).json({user: {message: "User not found"}})
        }
        

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getAllUserOrders(req, res){
    
    try{

        const u = validateUser()

        if(u.length > 0){

            let orders = []

            for(let i = 0; i < u.orders.length; i++){
    
                let order = await Order.findById(u.orders[i])
                if(order.length > 0){
                    orders.push(order)
                }
    
            }
    
            res.json(orders)
        }else{
            res.status(400).json({user: {message: "User not found"}})

        }

    }catch(error){
        console.log(error)
        res.status(400).json(error)
    }



}

async function login(req, res){

    
    try{
        const user = await User.findOne({email: req.body.email});
        
        if(user===null){
            
                return res.status(400).json({email: {message: "Email not found"}})
            
        }else{
            const correctPassword = await bcrypt.compare(req.body.password, user.password);
            if(!correctPassword){
                return res.status(400).json({password: {message: "Password doesnt match"}})
            }else{
                const userToken = jwt.sign({
                    id: user._id
                }, SECRET_KEY);
                
                res.cookie("usertoken", userToken, {
                    httpOnly: true
                })
                res.json({msg: "success"})
            }
            

        }
        
        
    }catch(error){
        console.log(error)
        res.status(400).json(error)
    }
}

async function logout(req, res) {

    
    res.status(202).clearCookie("usertoken").send('cookie cleared')
    res.end()

}



export {
    createUser,
    getAllUsers,
    getOneUser,
    getAllUserOrders,
    deleteOneUser,
    UpdateOneUser,
    UpdateUserPassword,
    login,
    logout,

}