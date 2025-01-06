//Importamos los componentes al documento principal App.js
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  return (
    <div >
      <Header />
      <Formulario />
      <MiOrg />
    </div>
  );
}

export default App;
