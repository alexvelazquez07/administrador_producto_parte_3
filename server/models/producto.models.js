const mongoose = require("mongoose");

//Schema
const ProductoSchema = new mongoose.Schema({
    title: { 
      type: String 
    },
    price: { 
      type: Number 
    },
    description: { 
      type: String 
    },
  },{ timestamps: true }
);

const Producto = mongoose.model('Producto', ProductoSchema)

module.exports = Producto