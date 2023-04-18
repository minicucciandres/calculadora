import React from "react";
import '../hojas-de-stilo/BotonClear.css'
import '../hojas-de-stilo/Pantalla.css'
const BotonClear = (props) => (
    <div
        className='boton-clear'
        onClick={props.manejarClear}>
        {props.children}
    </div>
);


export default BotonClear;