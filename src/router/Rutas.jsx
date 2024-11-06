import { createHashRouter } from "react-router-dom"
import Home from "../home/Home"
import Disponibilidad from "../disponibilidad/Disponibilidad"


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

        
    ])
}
export default Rutas