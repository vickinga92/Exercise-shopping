const mongoose = require('mongoose')
const ExerciseSchema = require('./schemas/products')

let Exercise1 = mongoose.model('products', ExerciseSchema);

module.exports = Exercise1