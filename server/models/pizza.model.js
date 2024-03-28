import {model, Schema, SchemaType} from 'mongoose';
import Topping from './topping.model.js';
import Size from './size.model.js'
import Crust from './crust.model.js';

const PizzaSchema = new Schema({

    size: {
        type: String,
        required: [true, "Size is Required"]
    },

    crust: {
        type: String,
        required: [true, "Size is Required"]
    },

    toppings: {
        type: String,
        required: [false, "Please select toppings"]
    },

    price: {
        type: Number,
        default: 0
    }
    
}, {timestamp: true})


/*PizzaSchema.pre('save', async function(next) {
    
    console.log(this)

    const crust = await Crust.find({_id: this.crust._id})
    const size  = await Size.find({_id: this.size._id})
    
    let toppings_total = 0

    for(let i = 0; i<this.toppings.length; i++){
        let topping = await Topping.find({_id: this.toppings[i]})
        toppings_total= toppings_total + topping[0].price
        
    }
    
    toppings_total = crust[0].price + size[0].price + toppings_total
    this.price = toppings_total
    next();
    
})*/

const Pizza = model("Pizza", PizzaSchema);
export default Pizza;