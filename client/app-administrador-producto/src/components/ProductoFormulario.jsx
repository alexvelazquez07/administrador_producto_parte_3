import React, {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const ProductoFormulario = () => {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

//Funcion que evita refrescar la pantalla
const submiHandler = (e) => {
  e.preventDefault()
  axios.post('http://localhost:8000/api/crearproducto',{
    title,
    price,
    description
  }).then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err)
  })
}

  return (
    <div className='col-3 mx-auto'>
        <h1>Product Manager</h1>
        <form onSubmit={submiHandler}>
            <label htmlFor=""className='form-label'>Title: </label>
            <input type="text"className='form-control' onChange={(e)=>setTitle(e.target.value)}/>
            <label htmlFor=""className='form-label'>Price: </label>
            <input type="number"className='form-control' onChange={(e)=>setPrice(e.target.value)}/>
            <label htmlFor=""className='form-label'>Description: </label>
            <input type="text"className='form-control' onChange={(e)=>setDescription(e.target.value)} />
            <button className='btn btn-success mt-3'> Create </button>
            
        </form>
        <Link className="btn btn-success mt-3" to="/listarproductos">List Products</Link>
    </div>
  )
}

export default ProductoFormulario