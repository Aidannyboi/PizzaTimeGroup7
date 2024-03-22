import Topping from "../models/topping.model.js"   

async function createTopping(req, res){
    try{

        const newTopping = await Topping.create(req.body)
        res.json(newTopping)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getAllToppings(req, res){
    try{

        const toppings = await Topping.find()
        res.json(toppings)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getOneTopping(req, res){
    try{

        const topping = await Topping.findById(req.params.id)
        res.json(topping)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function deleteOneTopping(req, res){
    try{

        const topping = await Topping.findByIdAndDelete(req.params.id)
        res.json(topping)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function UpdateOneTopping(req, res){
    try{

        const topping = await Topping.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        res.json(topping)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}


export {
    createTopping,
    getAllToppings,
    getOneTopping,
    deleteOneTopping,
    UpdateOneTopping
}