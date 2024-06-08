import pelotaTchouk from "../assets/img/pelotaTchouk.png";
import ferroTchouk from "../assets/img/ferropibes.jpeg";
import HomeButton from "./HomeButton.jsx";
import { Route, Routes } from "react-router-dom";
import Formulario from "./Formulario.jsx";

function Home() {
  return (
    <div>
      <div>
        <h1>Titulo</h1>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="row mt-3">
              <img
                className="ferroTchoukImg"
                src={ferroTchouk}
                alt="Foto del grupo"
              ></img>
            </div>
          }
        />
        <Route path="/jugadores" element={<Formulario />} />
      </Routes>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <HomeButton label="INICIO" link={"/"} />
          </div>
          <div className="col">
            <HomeButton label="JUGADORES" link={"/jugadores"} />
          </div>
          <div className="col">
            <HomeButton label="REDES" />
          </div>
          <div className="col">
            <HomeButton label="SPONSORS" />
          </div>
        </div>
      </div>
      <div className="justify-content-center align-items-center">
        <div className="row1">
          {/* <button>
            <img src={pelotaTchouk}></img>FIXTURE
          </button>
          <button>
            <img src={pelotaTchouk}></img>FOTOS
          </button>
          <button>
            <img src={pelotaTchouk}></img>COLABORACION
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
