import logo from './logo.svg';
import './App.css';
import { RouterProvider } from "react-router-dom"
import Rutas from "./router/Rutas"

const App= ()=> {
  return (
    <RouterProvider router={ Rutas() } />
    
  );
}

export default App;
