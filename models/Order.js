const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creando el esquema
const OrderSchema = new Schema({
    name: { type: String, required: true},
    date: { type: Date, default: Date.now},
    status : { type: String, required: true},
    total : { type: Number, required: true}
});

module.exports = Order = mongoose.model('order', OrderSchema);