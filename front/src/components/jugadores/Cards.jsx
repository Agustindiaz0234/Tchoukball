import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function Cards() {
  const [jugadores, setJugadores] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/api/Jugadores`).then((response) => {
      setJugadores(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      {jugadores.map((jugadores) => (
        <Card
          key={jugadores.id}
          name={jugadores.nombre}
          edad={jugadores.edad}
          img={jugadores.idImagen}
        />
      ))}
    </>
  );
}

export default Cards;
