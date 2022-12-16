import React from "react";
import '../Estilos/BotonBorrar.css';

const BotonBorrar = (props) => (
  <div 
    className='borrar' 
    onClick={props.clickClear}>
    {props.children}
  </div>
  );

export default BotonBorrar;