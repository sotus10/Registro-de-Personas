//Importamos los componentes necesarios
import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
//Creamos el componente Formulario
const Formulario = () => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejando el envio", e);
    }

    return (
        <section className="formulario"> 
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" required 
                    valor={nombre} 
                    actualizarValor={actualizarNombre} 
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" required 
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <CampoTexto 
                    titulo="Foto" 
                    placeholder="Ingresar enlace de foto" required 
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones />
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )
}

export default Formulario