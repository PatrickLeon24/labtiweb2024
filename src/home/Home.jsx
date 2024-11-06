import Card from "../card/Card"
import Sidebar from "../sidebar/sidebar"
import TopBar from "../topbar/TopBar"

const Home = () => {

    return<> <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    {/* TopBar en la parte superior */}
    <TopBar />
    
    {/* Contenedor para el Sidebar y el contenido principal */}
    <div style={{ display: 'flex', flexGrow: 1 }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal que ocupa el espacio restante */}
      <div style={{ marginTop:'64px', padding: '20px', flexGrow: 1 }}>
        {/* Este es el espacio en blanco donde puedes poner el contenido */}
        <h2>Conoce los Laboratorios</h2>
        <p>Aquí va el contenido principal de tu aplicación.</p>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  </div>
    </>
}
export default Home