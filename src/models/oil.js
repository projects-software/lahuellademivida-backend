'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OilSchema = Schema({
    name: String,
    type: String,
    shortDescription: String,
    realName: String,
    description: [],
    image: String

})
//define coleccion el primer parametro del mongoose.model
module.exports = mongoose.model('oils', OilSchema)