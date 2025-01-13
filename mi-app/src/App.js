//Importamos los componentes al documento principal App.js
import Equipo from './componentes/Equipo';
import {useState} from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);

  //Ternario --> condición? si es verdadero : si es falso

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf"
    }
]

  return (
    <div >
      <Header />
      { /*mostrarFormulario === true ? <Formulario /> : <></> */}
      { mostrarFormulario && <Formulario /> }
      <MiOrg  cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo) => {
          console.log("Equipo:", equipo);
          return <Equipo /> 
        } )
      }

    </div>
  );
}

export default App;
