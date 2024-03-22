import Order from "../models/order.model.js"   

async function createOrder(req, res){
    try{

        const newOrder = await Order.create(req.body)
        res.json(newOrder)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

// Modify to orders by user
async function getAllOrders(req, res){
    try{

        const orders = await Order.find()
        res.json(orders)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getOneOrder(req, res){
    try{

        const order = await Order.findById(req.params.id)
        res.json(order)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function deleteOneOrder(req, res){
    try{

        const order = await Order.findByIdAndDelete(req.params.id)
        res.json(order)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}


//Not needed
async function UpdateOneOrder(req, res){
    try{

        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        res.json(order)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}


export {
    createOrder,
    getAllOrders,
    getOneOrder,
    deleteOneOrder,
    UpdateOneOrder
}