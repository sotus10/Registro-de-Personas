//Importamos los componentes necesarios
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
//Creamos el componente Formulario
const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejando el envio", e);
    }

    return (
        <section className="formulario"> 
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required />
                <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required />
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required />
                <ListaOpciones />
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )
}

export default Formulario