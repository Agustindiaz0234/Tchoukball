import { useEffect, useState } from "react";
import Card from "./Card";
import jugadoresService from "../../services/jugadoresService";

function Cards() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    jugadoresService.list().then((data) => {
      setJugadores(data);
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
