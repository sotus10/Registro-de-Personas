import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props)=> {
    const [valor, actualizarValor] = useState("Juan Diego")
    console.log("Datos: ", props.titulo);
    const placeholderModificado = `${props.placeholder}...`;

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        actualizarValor(e.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{ props.titulo }</label>
            <input 
            placeholder={ placeholderModificado } 
            required={props.required} 
            value={valor}
            onChange={manejarCambio}
            />
        </div>
    )
}

export default CampoTexto;