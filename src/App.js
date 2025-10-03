import { useState } from "react";
import Boton from "./componentes/boton";

function App() {
  const [valor, setValor] = useState("");

  const agregarNumero = (num) => {
    setValor(valor + num);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Calculadora React</h1>

      
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
        {valor || 0}
      </div>

      {/* Botones */}
      <div>
        <Boton onClick={() => agregarNumero("7")}>1</Boton>
        <Boton onClick={() => agregarNumero("7")}>2</Boton>
        <Boton onClick={() => agregarNumero("7")}>3</Boton>
        <Boton onClick={() => agregarNumero("7")}>4</Boton>
        <Boton onClick={() => agregarNumero("7")}>5</Boton>
        <Boton onClick={() => agregarNumero("7")}>6</Boton>
        <Boton onClick={() => agregarNumero("7")}>7</Boton>
        <Boton onClick={() => agregarNumero("8")}>8</Boton>
        <Boton onClick={() => agregarNumero("9")}>9</Boton>
        <Boton onClick={() => agregarNumero("+")}>+</Boton>
      </div>
    </div>
  );
}

export default App;
