import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// funcion para mostrar todos los productos
const ListarProductos = () =>{

    const [productos,setProductos] = useState([]);
    
    useEffect(()=>{

        axios.get("http://localhost:8000/api/listarproductos")
            .then(res=>{
                setProductos(res.data);
            })
            .catch(err=> console.log(err))
    },[])

    const borrarProducto = idProd =>{
        axios.delete("http://localhost:8000/api/productos/"+idProd)
            .then(res =>{
                //actualizar lista FIlTER
                let nuevaListaProd = productos.filter(producto => producto._id !== idProd);
                setProductos(nuevaListaProd);
            })
    }

    return(
        <div>
            <h1>All Products</h1>
            <Link className="btn btn-success" to="/crearproducto">Nuevo producto</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Acciones</th>
                        
                    </tr>
                </thead>
                
                <tbody>
                    {
                        productos.map((producto,index)=>(
                            <tr key={index}>
                                <td>{producto.title}</td>
                                <td>{producto.price}</td>
                                <td>{producto.description}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/producto/${producto._id}`}>Detalle</Link>
                                    <Link className="btn btn-warning" to={`/producto/editar/${producto._id}`}>Editar</Link>
                                    <button className="btn btn-danger" onClick={()=>borrarProducto(producto._id)}>Eliminar</button>
                                </td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListarProductos;