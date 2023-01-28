import React,{useState,useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import axios from 'axios';

//para llamar a 1 producto por su id
const Producto = () =>{

    const {id} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(()=>{

        axios.get("http://localhost:8000/api/productos/"+id)
            .then(res=>{
                console.log(res.data);
                setProducto(res.data);
            })
            .catch(err=> console.log(err))
    },[])

    return(
        <div className="card">
            <h1>{producto.title}</h1>
            <p>${producto.price}</p>
            <p>{producto.description}</p>
         
        </div>
    )

}

export default Producto;