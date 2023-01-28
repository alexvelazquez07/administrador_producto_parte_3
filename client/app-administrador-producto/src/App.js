import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductoFormulario from './components/ProductoFormulario';
import ListarProductos from './components/ListarProductos';
import Producto from './components/Producto';
import ActualizarProducto from './components/ActualizarProducto';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/crearproducto" element={<ProductoFormulario/>}/>
            <Route path="/listarproductos" element={<ListarProductos/>}/>
            <Route path="/producto/:id" element={<Producto/>}/>
            <Route path="/producto/editar/:id" element={<ActualizarProducto/>}/>
          </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
