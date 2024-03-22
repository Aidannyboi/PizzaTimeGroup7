import {model, Schema} from 'mongoose';

const SizeSchema = new Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [10, "Name must be max 10 characters"]
    },

    price: {
        type: Number,
        required: [true, "Size price is required"],
        default: [0]
    },

}, {timestamp: true})


const Size = model("Size", SizeSchema);
export default Size;