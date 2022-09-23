import logo from './logo.svg';
import './App.css';
import Saludos from './components/Saludo';
import BoxForChildren from './components/BoxForChildren';
import NavBar from './components/NavBar';
import BodyProducto from './components/bodyProductos';
import footerr from './components/Footer';
import ItemListContainer from './components/shop/itemlistContainer';

function App() {
  return (
<>
<header>
<NavBar/>
</header>

<body>
  <ItemListContainer greeting={'Hola, bienvenidos al eCommerce'}/>
<Saludos/>

</body>

<footer>

<footerr/>

</footer>
</> 

  );
}

export default App;
