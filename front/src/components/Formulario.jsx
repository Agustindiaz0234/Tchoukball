import { useState, useEffect } from "react";
import axios from "axios";
import HomeButton from "./HomeButton";

function Formulario() {
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

  // const handleEditar = (jugador) => {
  //   history.push({
  //     pathname: `/editar/${jugador.id}`,
  //     state: { jugador },
  //   });
  // };

  return (
    <>
      <div className="row mt-3">
        <div className="col-12 col-lg-8 offset-0 offset-lg-2">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha de nacimiento</th>
                  <th>Edad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-group-diver">
                {jugadores.map((jugador) => (
                  <tr key={jugador.id}>
                    <td>{jugador.nombre}</td>
                    <td>{jugador.fechaDeNacimiento}</td>
                    <td>{jugador.edad}</td>
                    <td>
                      <HomeButton link={`/editar/${jugador.id}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formulario;
