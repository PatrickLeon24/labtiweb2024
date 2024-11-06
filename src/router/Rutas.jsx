import { createHashRouter } from "react-router-dom"
import Home from "../home/Home"


const Rutas = () => {
    return createHashRouter([
        {
            path: "/",
            element: <Home/>
        }

        
    ])
}
export default Rutas