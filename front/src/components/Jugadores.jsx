import Card from "./Card";
// import imgPrueba from "../assets/img/agusTch.jpeg";
// import cuadroTCH from "../assets/img/cuadroTchouk.jpeg";
import axios from "axios";
import { useEffect, useState } from "react";

function Jugadores() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7033/api/Jugadores")
      .then((response) => {
        // Maneja la respuesta de la API aquí
        setJugadores(response.data);
      })
      .catch((error) => {
        // Maneja los errores aquí
        console.error("Error al recuperar datos de la API:", error);
      });
  }, []);

  return (
    <div className="row">
      {jugadores.map(({ id, nombre, imagen, infoPlayer }) => {
        return (
          <Card
            key={id}
            id={id}
            name={nombre}
            img={imagen}
            infoPlayer={infoPlayer}
          />
        );
      })}
    </div>
  );
}

export default Jugadores;
