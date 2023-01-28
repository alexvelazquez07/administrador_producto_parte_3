import React,{useState,useEffect} from "react";
import { useParams,useNavigate  } from "react-router-dom";
import axios from "axios";

const ActualizarProducto = () =>{
    const {id} = useParams();
    const [title, setNombre] = useState("");
    const [price, setPrecio] = useState(""); 
    const [description, setDescripcion] = useState("");


    useEffect(()=>{
        axios.get("http://localhost:8000/api/productos/"+id)
            .then(res=>{
                console.log(res.data);
                setNombre(res.data.title);
                setPrecio(res.data.price);
                setDescripcion(res.data.description)
            })
            .catch(err=> console.log(err))
    },[])

    //para el formulario
  /*  const actualizarProducto = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/productos/"+id, {
            nombre,
            precio,
            descripcion
        })
            .then(res => history.push("/"))
            .catch(err => console.log(err));
    }*/
//Funcion que evita refrescar la pantalla
const submiHandler = (e) => {
    e.preventDefault()
    axios.put("http://localhost:8000/api/productos/"+id,{
      title,
      price,
      description
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
  }

    return(
        <div className='col-3 mx-auto'>
            <h1>Editar producto</h1>
            <form onSubmit={submiHandler}>
                <div className='form-group' >
                    <label htmlFor="title" >Nombre</label>
                    <input id="title" name="title" type="text" value={title} onChange={(e)=> setNombre(e.target.value)} className='form-control'/>
                </div>
                <div className='form-group' >
                    <label>Precio</label>
                    <input id="price" name="price" type="number" value={price} onChange={(e)=> setPrecio(e.target.value)} className='form-control'/>
                </div>
                <div className='form-group' >
                    <label>Descripcion</label>
                    <input id="description" name="description" type="text" value={description} onChange={(e)=> setDescripcion(e.target.value)} className='form-control'/>
                </div>
                    <button type="submit" className="btn btn-success  mt-3" value="Guardar Producto">Guardar Producto</button>
                
                
            </form>
        </div>
    )
}

export default ActualizarProducto;