const ProductoController = require("../controllers/producto.controller");

module.exports = function (app) {
    app.post("/api/crearproducto", ProductoController.crearProducto);
    app.get("/api/listarproductos",ProductoController.get_all);
    app.get("/api/productos/:id",ProductoController.get_product);
    app.put("/api/productos/:id",ProductoController.update_product);
    app.delete("/api/productos/:id",ProductoController.delete_product);
};