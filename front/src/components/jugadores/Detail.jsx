import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageUploader from "./ImageUploader";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import jugadoresService from "../../services/jugadoresService";

function DetailJugadores() {
  const { id } = useParams();
  const { modo } = useParams();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [jugador, setJugador] = useState({
    nombre: "",
    fechaDeNacimiento: "",
    edad: 0,
    idImagen: null,
  });

  useEffect(() => {
    if (modo == "agregar") return;

    jugadoresService.getId(id).then((data) => {
      setJugador(data);
    });
  }, [id, modo]);

  const handleImageSelected = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      axios
        .post(`${apiUrl}/api/Imagen/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Imagen agregada");
          const imageData = response.data;
          console.log("ID de imagen:", imageData.id);
          setJugador({ ...jugador, idImagen: imageData.id });
        })
        .catch((error) => {
          alert("error al subir la imagen", error);
        });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleGuardar = (e) => {
    e.preventDefault();

    if (modo == "agregar") {
      jugadoresService.add(jugador);
      navigate("/");
    }

    if (modo == "editar") {
      jugadoresService.edit(jugador, id);
      navigate("/");
    }
  };

  function handleClear() {
    setJugador({ ...jugador, idImagen: null });
  }

  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="inputPassword6" className="col-form-label">
            Password
          </label>
        </div>
        <div className="col-auto">
          <input
            type="password"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          ></input>
        </div>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Must be 8-20 characters long.
          </span>
        </div>
      </div>
      <form onSubmit={handleGuardar}>
        <div className="input-group mb-3">
          <span className="input-group-text">Nombre</span>
          <input
            className="form-control"
            type="text"
            value={jugador.nombre}
            onChange={(e) => setJugador({ ...jugador, nombre: e.target.value })}
          />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={
              jugador.fechaDeNacimiento
                ? dayjs(jugador.fechaDeNacimiento.split("T")[0])
                : null
            }
            onChange={(date) => {
              if (date) {
                setJugador({
                  ...jugador,
                  fechaDeNacimiento: date.format("YYYY-MM-DD"),
                });
              }
            }}
          />
        </LocalizationProvider>

        <div className="input-group mb-3">
          <span className="input-group-text">Imagen del jugador:</span>

          {jugador.idImagen !== null && (
            <>
              <img
                src={`${apiUrl}/api/Imagen/${jugador.idImagen}`}
                alt="Player"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
              <button onClick={handleClear}>clear</button>
            </>
          )}
          {jugador.idImagen === null && (
            <ImageUploader onImageSelected={handleImageSelected} />
          )}
        </div>

        <button type="sumbit">Guardar</button>
      </form>
    </>
  );
}

export default DetailJugadores;
