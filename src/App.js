
import './App.css';
import freecodecamplogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./Componentes/Boton";
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from "mathjs";

function App() {

  const [ input, setInput ] = useState ("");

  const agregarInput = valor => {
    setInput(input + valor);
  }

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Por favor, pon un valor.")
    }
  }

  return (
    <div className="App">
      <div className="contenedor-logo">
        <img
          src={freecodecamplogo}
          className="freecodecamp-logo"
          alt="freecodecamp-logo" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={ input }/>
        <div className="fila">
          <Boton manejarClick = { agregarInput }>1</Boton>
          <Boton manejarClick = { agregarInput }>2</Boton>
          <Boton manejarClick = { agregarInput }>3</Boton>
          <Boton manejarClick = { agregarInput }>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick = { agregarInput }>4</Boton>
          <Boton manejarClick = { agregarInput }>5</Boton>
          <Boton manejarClick = { agregarInput }>6</Boton>
          <Boton manejarClick = { agregarInput }>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick = { agregarInput }>7</Boton>
          <Boton manejarClick = { agregarInput }>8</Boton>
          <Boton manejarClick = { agregarInput }>9</Boton>
          <Boton manejarClick = { agregarInput }>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick = { calcularResultado }>=</Boton>
          <Boton manejarClick = { agregarInput }>0</Boton>
          <Boton manejarClick = { agregarInput }>.</Boton>
          <Boton manejarClick = { agregarInput }>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear = {() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
