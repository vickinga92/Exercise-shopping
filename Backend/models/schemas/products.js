const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Exercise1Schema = new Schema({
    
    id: {type:Number, required: false},
    title: {type:String, required: false},
    price: {type:Number, required: false},
    img: {type:String, required: false},
    discount: {type:Number, required: false},
    itemCount: {type:Number, required: false},

});

module.exports = Exercise1Schema