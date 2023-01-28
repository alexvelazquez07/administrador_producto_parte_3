const Producto = require("../models/producto.models");


//Crear un Producto
const crearProducto =  (req, res)=>{
  Producto.create(req.body)
  .then((resultado)=>{
      console.log(req.body)
      res.json(resultado)
  }).catch((error)=>{
      console.log(error)
  })
}

//Llama atodos los productos
const get_all = (req, res) =>{
  Producto.find()
  .then(productos =>res.json(productos))
  .catch(err => res.json({message:"hubo un error"+err}));
}

//llama a un producto en especifico por su id
const get_product = (req, res) =>{
  Producto.findOne({_id:req.params.id})
      .then(producto => res.json(producto))
      .catch(err => res.json({message:"Hubo un error"+err}));
}

//actualizamos el producto
const update_product = (req, res) => {
  Producto.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
      .then(producto => res.json(producto))
      .catch(err => res.json({message: "Hubo un error al actualizar" + err }))
}


//borramos el producto
const delete_product =(req, res) =>{
  Producto.deleteOne({_id: req.params.id})
      .then(result => res.json(result))
      .catch(err => res.json({message:"hubo un error al eliminar"+ err }))
}



module.exports = {
  crearProducto,
  get_all,
  get_product,
  update_product,
  delete_product
}
