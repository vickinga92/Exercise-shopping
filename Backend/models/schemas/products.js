const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Exercise1Schema = new Schema({
    
    id: {type:String, required: false},
    title: {type:String, required: false},
    price: {type:Number, required: false},
    img: {type:String, required: false}

});

module.exports = Exercise1Schema