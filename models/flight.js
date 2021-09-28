const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: String,
    arrival: Date,
})

const flightSchema = new Schema({
    airline : String,
    flightNo : Number,
    airport : String,
    departs: Date, 
    destinations: [destinationSchema]

    
  });
  
module.exports = mongoose.model('Flight', flightSchema);