import { useState } from "react";
import "./contato.scss";

export default function Contato() {
  
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contato" id="contato">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contato.</h2>
          <form onSubmit={handleSubmit}> 
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit">Enviar</button>
          {message && <span>Pode deixar que jajá eu te respondo :)</span>}
          </form>
        </div>
    </div>
  )
}
