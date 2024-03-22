import Crust from "../models/crust.model.js"   

async function createCrust(req, res){
    try{

        const newCrust = await Crust.create(req.body)
        res.json(newCrust)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getAllCrusts(req, res){
    try{

        const crusts = await Crust.find()
        res.json(crusts)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getOneCrust(req, res){
    try{

        const crust = await Crust.findById(req.params.id)
        res.json(crust)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function deleteOneCrust(req, res){
    try{

        const crust = await Crust.findByIdAndDelete(req.params.id)
        res.json(crust)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function UpdateOneCrust(req, res){
    try{

        const crust = await Crust.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        res.json(crust)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}


export {
    createCrust,
    getAllCrusts,
    getOneCrust,
    deleteOneCrust,
    UpdateOneCrust
}