  import { useState } from "react";
  
  
  function Titulo({ cor }) {
    const [texto, setTexto] = useState("Texto Inicial")
    const [inputText, setInputText] = useState("")

    function clicou() {
      setTexto(inputText);
    }

    return (
      <div>
        <h2 style={{ color: cor }}>{texto}</h2>
        <input type="text" value={inputText} onChange={(e)=>{
          setInputText(e.target.value)
        }}/>
      
        <button onClick={clicou} type="button">Trocar Texto</button>
      </div>
    );
  }
  
  export default Titulo;
  