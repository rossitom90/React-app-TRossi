import logo from './logo.svg'
import './App.css'
import Saludos from './components/Saludo'
import BoxForChildren from './components/BoxForChildren'
import NavBar from './components/NavBar'
import BodyProducto from './components/bodyProductos'
import Footerr from './components/Footer'
import ItemListContainer from './components/shop/itemlistContainer'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <div>
          <BodyProducto />
          <BodyProducto />
          <BodyProducto />
          <BodyProducto />
        </div>

        <ItemListContainer greeting={'Mi Tienda'} />
        <Saludos />
      </body>

      <footer>
        <Footerr />
      </footer>
    </>
  )
}

export default App
