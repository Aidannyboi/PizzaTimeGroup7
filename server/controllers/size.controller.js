import Size from "../models/size.model.js"   

async function createSize(req, res){
    try{

        const newSize = await Size.create(req.body)
        res.json(newSize)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getAllSizes(req, res){
    try{

        const sizes = await Size.find()
        res.json(sizes)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function getOneSize(req, res){
    try{

        const size = await Size.findById(req.params.id)
        res.json(size)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function deleteOneSize(req, res){
    try{

        const size = await Size.findByIdAndDelete(req.params.id)
        res.json(size)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

async function UpdateOneSize(req, res){
    try{

        const size = await Size.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        res.json(size)

    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}


export {
    createSize,
    getAllSizes,
    getOneSize,
    deleteOneSize,
    UpdateOneSize
}