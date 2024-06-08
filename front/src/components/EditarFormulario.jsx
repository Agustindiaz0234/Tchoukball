import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import ImageUploader from "./ImageUploader";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function EditarFormulario() {
  const { id } = useParams();
  const { modo } = useParams();
  const navigate = useNavigate();

  const [jugador, setJugador] = useState({
    nombre: "",
    fechaDeNacimiento: "",
    edad: 0,
    idImagen: null,
  });

  useEffect(() => {
    if (modo == "agregar") return;

    axios
      .get(`https://localhost:7033/api/Jugadores/${id}`)
      .then((response) => {
        setJugador(response.data);
      })
      .catch((error) => {
        console.log("error al recuperar los datos del jugador", error);
      });
  }, [id, modo]);

  const handleImageSelected = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      axios
        .post("https://localhost:7033/api/Imagen/upload", formData, {
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
      axios
        .post("https://localhost:7033/api/Jugadores", jugador)
        .then((response) => {
          alert("Jugador agregado", response.data);
          navigate("/");
        })
        .catch((error) => {
          alert("error al agregar jugador", error);
        });
    }

    if (modo == "editar") {
      axios
        .put(`https://localhost:7033/api/Jugadores/${id}`, jugador)
        .then((response) => {
          alert("Se han actualizado los datos del jugador", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("No se pudieron guardar los datos del jugador", error);
        });
    }
  };

  function handleClear() {
    setJugador({ ...jugador, idImagen: null });
  }

  return (
    <>
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
                src={`https://localhost:7033/api/Imagen/${jugador.idImagen}`}
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

export default EditarFormulario;
