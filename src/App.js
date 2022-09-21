import logo from './logo.svg';
import './App.css';
import Saludos from './components/Saludo';
import BoxForChildren from './components/BoxForChildren';
import NavBar from './components/NavBar';
import BodyProducto from './components/bodyProductos';
import footerr from './components/Footer';

function App() {
  return (
<>
<header>
<NavBar/>
</header>

<body>
<Saludos/>

</body>

<footer>

<footerr/>

</footer>
</> 

  );
}

export default App;
