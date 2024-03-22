import Pizza from "../models/pizza.model.js"   

async function createPizza(req, res){
    try{
        

        const newPizza = await Pizza.create(req.body)
        res.json(newPizza)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getAllPizzas(req, res){
    try{

        const pizzas = await Pizza.find()
        res.json(pizzas)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getOnePizza(req, res){
    try{

        const pizza = await Pizza.findById(req.params.id)
        res.json(pizza)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function deleteOnePizza(req, res){
    try{

        const pizza = await Pizza.findByIdAndDelete(req.params.id)
        res.json(pizza)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function UpdateOnePizza(req, res){
    try{

        const pizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        res.json(pizza)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}


export {
    createPizza,
    getAllPizzas,
    getOnePizza,
    deleteOnePizza,
    UpdateOnePizza
}