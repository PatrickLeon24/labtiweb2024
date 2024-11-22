import { createHashRouter } from "react-router-dom"
import Home from "../home/Home"
import Disponibilidad from "../disponibilidad/Disponibilidad"
import Cursos from "../cursos/Cursos"
import Manual from "../manual/Manual"
import Material from "../material/Material"



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
        }



        
    ])
}
export default Rutas