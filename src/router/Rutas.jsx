import { createHashRouter } from "react-router-dom"
import Home from "../home/Home"
import Disponibilidad from "../disponibilidad/Disponibilidad"
import Cursos from "../cursos/Cursos"
import Manual from "../manual/Manual"
import Material from "../material/Material"
import ComponenteDetalle from "../manual/ComponenteDetalle";


const Rutas = () => {
    return createHashRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/disponibilidad",
            element: <Disponibilidad/>
        },
        {
            path: "/Cursos",
            element: <Cursos/>
        },
        {
            path: "/Manuales",
            element: <Manual/>
        },
        {
            path: "/Materiales",
            element: <Material/>
        },
        {
            path: "/componentes/:id",  // La ruta con un parámetro dinámico ':id'
            element: <ComponenteDetalle />  // Componente que se mostrará al hacer click
        }
      



        
    ])
}
export default Rutas