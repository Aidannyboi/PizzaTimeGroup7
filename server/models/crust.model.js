import {model, Schema} from 'mongoose';

const CrustSchema = new Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [10, "Name must be max 10 characters"]
    },

    price: {
        type: Number,
        required: [true, "Crust price is required"],
        default: [0]
    },

}, {timestamp: true})


const Crust = model("Crust", CrustSchema);
export default Crust;