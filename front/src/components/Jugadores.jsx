import Card from "./Card";
import imgPrueba from "../assets/img/agusTch.jpeg";
import cuadroTCH from "../assets/img/cuadroTchouk.jpeg";

function Jugadores() {
  const jugadores = [
    {
      name: "Diaz Agustin",
      img: imgPrueba,
      infoPlayer: `Medio de cuadro de ferro`,
    },
    {
      name: "Cuadro",
      img: cuadroTCH,
      infoPlayer: "Cuadro de rebote de tchoukball ",
    },
  ];

  return (
    <div className="row">
      {jugadores.map(({ name, img, infoPlayer }) => {
        return (
          <Card key={name} name={name} img={img} infoPlayer={infoPlayer} />
        );
      })}
    </div>
  );
}

export default Jugadores;
