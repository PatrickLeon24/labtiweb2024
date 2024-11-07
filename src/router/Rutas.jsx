import { createHashRouter } from "react-router-dom"
import Home from "../home/Home"
import Disponibilidad from "../disponibilidad/Disponibilidad"
import Cursos from "../cursos/Cursos"

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
        }



        
    ])
}
export default Rutas