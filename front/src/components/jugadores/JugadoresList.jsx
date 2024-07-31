import { useState, useEffect } from "react";
import jugadoresService from "../../services/jugadoresService";

function JugadoresList() {
  const [jugadores, setJugadores] = useState([]);
  // eslint-disable-next-line no-undef
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    jugadoresService.list().then((data) => {
      setJugadores(data);
    });
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();
    jugadoresService.delete(id);
    location.reload();
  };

  return (
    <>
      <div className="col-12 col-lg-8 offset-0">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha de nacimiento</th>
                <th>Edad</th>
                <th>Foto</th>
                <th>
                  {" "}
                  <a
                    className="btn btn-primary"
                    href={`/jugador/agregar`}
                    style={{ width: "100%" }}
                  >
                    Agregar
                  </a>{" "}
                </th>
              </tr>
            </thead>
            <tbody className="table-group-diver">
              {jugadores.map((jugador) => (
                <tr key={jugador.id}>
                  <td>{jugador.nombre}</td>
                  <td>{jugador.fechaDeNacimiento.split("T")[0]}</td>
                  <td>{jugador.edad}</td>
                  <td>
                    <img
                      src={`${apiUrl}/api/Imagen/${jugador.idImagen}`}
                      alt="Player"
                      style={{ maxWidth: "50px" }}
                    />
                  </td>
                  <td>
                    <a
                      className="btn btn-warning"
                      href={`/jugador/editar/${jugador.id}`}
                      style={{ width: "50%" }}
                    >
                      Editar
                    </a>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(e, jugador.id)}
                      type="button"
                      style={{ width: "50%" }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default JugadoresList;
