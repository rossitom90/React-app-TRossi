import logo from './logo.svg';
import './App.css';
import Saludos from './components/Saludo';
import BoxForChildren from './components/BoxForChildren';
import NavBar from './components/NavBar';
import bodyProductos from './components/bodyProductos';

function App() {
  return (
<>
<NavBar/>
<bodyProductos/>
<Saludos/>
</> 

  );
}

export default App;
