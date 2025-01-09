//Importamos los componentes al documento principal App.js
import {useState} from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);

  //Ternario --> condición? si es verdadero : si es falso

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div >
      <Header />
      { /*mostrarFormulario === true ? <Formulario /> : <></> */}
      { mostrarFormulario && <Formulario /> }
      <MiOrg  cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
