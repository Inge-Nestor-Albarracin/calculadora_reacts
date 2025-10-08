import { useState } from "react";
import Boton from "./componentes/boton";

function App() {
  const [valor, setValor] = useState(""); // siempre trabajamos con strings

  // función para concatenar valores
  const agregarNumero = (num) => {
    setValor(valor + num);
  };

  // función para calcular el resultado al presionar "="
  const calcularResultado = () => {
    let resultado = 0;

    if (valor.includes("+")) {   // si el string contiene '+', partimos por ahí
      const [a, b] = valor.split("+"); // a = parte izquierda, b = parte derecha
      resultado = parseFloat(a) + parseFloat(b);  
    } else if (valor.includes("-")) {
      const [a, b] = valor.split("-");
      resultado = parseFloat(a) - parseFloat(b);
    } else if (valor.includes("*")) {
      const [a, b] = valor.split("*");
      resultado = parseFloat(a) * parseFloat(b);
    } else if (valor.includes("/")) {
      const [a, b] = valor.split("/");
      resultado = parseFloat(a) / parseFloat(b);
    }

    setValor(resultado.toString()); // mostramos el resultado
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Calculadora React</h1>

      {/* pantalla */}
      <div
        style={{
          width: "200px",
          margin: "10px auto",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "24px",
          textAlign: "right",
        }}
      >
        {valor}
      </div>

      {/* botones */}
      <div>
        <Boton onClick={() => agregarNumero("1")}>1</Boton>
        <Boton onClick={() => agregarNumero("2")}>2</Boton>
        <Boton onClick={() => agregarNumero("3")}>3</Boton>
        <Boton onClick={() => agregarNumero("4")}>4</Boton>
        <Boton onClick={() => agregarNumero("5")}>5</Boton>
        <Boton onClick={() => agregarNumero("6")}>6</Boton>
        <Boton onClick={() => agregarNumero("7")}>7</Boton>
        <Boton onClick={() => agregarNumero("8")}>8</Boton>
        <Boton onClick={() => agregarNumero("9")}>9</Boton>
        <Boton onClick={() => agregarNumero("0")}>0</Boton>
        <Boton onClick={() => agregarNumero("+")}>+</Boton>
        <Boton onClick={() => agregarNumero("-")}>-</Boton>
        <Boton onClick={() => agregarNumero("*")}>*</Boton>
        <Boton onClick={() => agregarNumero("/")}>/</Boton>
        <Boton onClick={calcularResultado}>=</Boton>
      </div>
    </div>
  );
}

export default App;

