
import "./MiOrg.css";

const MiOrg = (props) => {
    console.log(props)
    //useState - Retorna un arreglo con dos elementos
    //useState es una función que recibe un argumento, el valor inicial del estado
    //const [estado, actualizarEstado] = useState(valorInicial); --> Asi se usa
/*     const [mostrar, actualizarMostrar] = useState(true);
    const manejarClick = () => {
        //EL estado se actualiza porque se llama a la función actualizarMostrar
        console.log("Ocultar / Mostrar elemento", !mostrar);
        actualizarMostrar(!mostrar);
    } */

    return <section className="orgSection">
        <h3 className="title">Mi organización </h3>
        <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar} /> 
    </section>
}

export default MiOrg;