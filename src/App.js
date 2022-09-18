import logo from './logo.svg';
import './App.css';
import Saludos from './components/Saludo';
import BoxForChildren from './components/BoxForChildren';
import Example from './components/NavBar';

function App() {
  return (
<>
<Example></Example>

<h1>Hola Mundo!!</h1>
    <Saludos name='Tomas' age={32} />
    <Saludos name='Cecilia' age={29} />
    <Saludos name='Ezequiel' age={35} />
    <Saludos name='Martin' age={28} />

    <BoxForChildren></BoxForChildren>
</> 

  );
}

export default App;
