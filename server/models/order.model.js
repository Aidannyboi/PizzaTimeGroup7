import {model, Schema} from 'mongoose';
import Pizza from './pizza.model.js'

const OrderSchema = new Schema({

    date: {
        type: Date,
        required: [false, "Please use valid date"],
        default: new Date()
    },

    method: {
        type: String,
        default: "CarryOut"
    },

    items: {
        type: [{
            "item": { type: Schema.Types.ObjectId },
            "quantity" : { type: Number }
        }],

        required: [true, "please add items to the order"]
    
    },

    favorite: {
        type: Boolean,
        default: false
    },

    total: {
        type: Number,
        default: 0
    }

}, {timestamp: true})


OrderSchema.pre('save', async function(next) {
    

    console.log(this)
    let order_total = 0
    for(let i = 0; i<this.items.length; i++){
        
        let item = await Pizza.find({_id: this.items[i].item})
        
        order_total= order_total + (item[0].price * this.items[i].quantity)
    }
    
    this.total = order_total
    
    next();
    
})

const Order = model("Order", OrderSchema);
export default Order;