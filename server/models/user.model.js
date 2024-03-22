import {model, Schema} from 'mongoose';
import bcrypt from 'bcrypt'

const UserSchema = new Schema({

    first_name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "First Name must be at least 3 characters long"],
        maxlength: [20, "First Name must be max 20 characters long"]
    },

    last_name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Last Name must be at least 3 characters long"],
        maxlength: [20, "Last Name must be max 20 characters long"]
    },


    address: {
        type: String,
        required: [true, "Address is required"]
    },

    city: {
        type: String,
        required: [true, "City is required"],
        minlength: [3, "City name must at least 3 characters long"],
        maxlength: [20, "City name must be max 20 characters long"]
    },

    state: {
        type: String, 
        required: [true, "State is required"],
        length: [2, "Please use valid US state abbreviation"]
    },

    email: {
        
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        /* validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        } */
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']

    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },


    orders: {

        type:[
            Schema.Types.ObjectId,
        ],
        default: []
    },



}, {timestamp: true})

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });


})


UserSchema.pre('findOneAndUpdate', async function (next) {
    
    const user = await User.findById( this._conditions._id)

    if (this._update.password === false){
        this._update = {...this._update, password: user.password}
    }else{
        this._update.password = await bcrypt.hash(this._update.password, 10)
    }

    next()
})

const User = model("User", UserSchema);
export default User;