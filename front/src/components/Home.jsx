import pelotaTchouk from "../assets/img/pelotaTchouk.png";
import ferroTchouk from "../assets/img/ferropibes.jpeg";
import HomeButton from "./HomeButton.jsx";

function Home() {
  return (
    <div>
      <img
        className="ferroTchoukImg"
        src={ferroTchouk}
        alt="Foto del grupo"
      ></img>
      <div className="rowContainer">
        <div className="row">
          <HomeButton label="INICIO" />
          <HomeButton label="JUGADORES" link={"/jugadores"} />
          <HomeButton label="REDES" />
          <HomeButton label="SPONSORS" />
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
    </div>
  );
}

export default Home;
