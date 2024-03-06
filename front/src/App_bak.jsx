import "./App.css";
import ferroTchouk from "./assets/img/ferropibes.jpeg";
import cuadro from "./assets/img/cuadroTchouk.jpeg";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cards from "./components/Jugadores.jsx";
import InfoFrame from "./components/InfoFrame.jsx";
import pelotaTchouk from "./assets/img/pelotaTchouk.png";

function App() {
  const navigate = useNavigate();

  const handleButtonClick = (ruta) => {
    navigate(ruta);
  };

  const tchoukball11 = [
    {
      info: ` Tchoukball (pronunciado en español como chukbol) es un deporte de equipo que se juega bajo techo, 
      desarrollado en los años 1970 por el biólogo suizo Hermann Brandt,
       quien creía que: «El objetivo de las actividades físicas humanas no es ser campeones,
      sino contribuir a la construcción de una sociedad armoniosa».
      Su objetivo era desarrollar un deporte de equipo que no implicara heridas graves como las que ocurren en otros
       deportes.
      El chukbol se ha convertido en un deporte internacional, 
      jugado en Taiwán, España, Reino Unido, Suiza, India, Japón, Canadá, Brasil, Estados Unidos, Italia, República Checa,
       Macao, Singapur, Argentina, Perú, Uruguay, Colombia, México y Chile.
       Es regulado por la Federación Internacional de Tchoukball (FITB), fundada en 1971.`,
      imgInfo: cuadro,
    },
  ];

  return (
    <div className="app">
      <img
        className="ferroTchoukImg"
        src={ferroTchouk}
        alt="Foto del grupo"
      ></img>
      <div className="rowContainer">
        <div className="row">
          <button onClick={() => handleButtonClick("/")}>
            {" "}
            <img src={pelotaTchouk}></img>INICIO
          </button>
          <button onClick={() => handleButtonClick("/jugadores")}>
            <img src={pelotaTchouk}></img>JUGADORES
          </button>
          <button>
            <img src={pelotaTchouk}></img>REDES
          </button>
          <button>
            <img src={pelotaTchouk}></img>SPONSORS
          </button>
        </div>
        <div className="row1">
          <button>
            <img src={pelotaTchouk}></img>FIXTURE
          </button>
          <button>
            <img src={pelotaTchouk}></img>FOTOS
          </button>
          <button>
            <img src={pelotaTchouk}></img>COLABORACION
          </button>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              {tchoukball11.map(({ info, imgInfo }) => {
                return <InfoFrame key={info} info={info} imgInfo={imgInfo} />;
              })}
            </main>
          }
        />

        <Route path="/jugadores" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
