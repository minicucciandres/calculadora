import React from "react";
import '../hojas-de-stilo/Pantalla.css'

//esta es otra forma de definir el componente sin fucntion
const Pantalla=({ input })=>(
<div className="input">
{input}
</div>

);

export default Pantalla;