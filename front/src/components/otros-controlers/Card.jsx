import { useState } from "react";
// import imgPrueba from '../assets/img/agusTch.jpeg'
import "./card.css";
import "./Frame.css";

function Card({ id, name, img, infoPlayer }) {
  const [mostrarRecuadro, setMostrarRecuadro] = useState(false);
  const [informacion, setInformacion] = useState("");

  const abrirRecuadro = () => {
    setMostrarRecuadro(true);
    console.log("Se ejecuta");
    setInformacion(infoPlayer);
  };

  const cerrarRecuadro = () => {
    setMostrarRecuadro(false);
    setInformacion("");
  };
  return (
    <div className="container">
      <div className="image-container">
        <img src={`https://localhost:7033/${id}`} alt="Imagen jugador"></img>
        <div onClick={abrirRecuadro} className="overlay">
          <p className="message">{name}</p>
        </div>
        {mostrarRecuadro && (
          <div>
            <div className="overlay-background"></div>
            <div className="frame">
              <p>{informacion}</p>
              <img className="img-frame" src={img} alt="Imagen jugador" />
              <button onClick={cerrarRecuadro}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
