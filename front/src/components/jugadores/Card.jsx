import axios from "axios";
import { useEffect, useState } from "react";

function Card({ name, edad, img, linkSponsor }) {
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <>
      <form style={{ margin: "10px" }}>
        <img
          src={`${apiUrl}/api/Imagen/${img}`}
          style={{ width: "200px", height: "200px" }}
        />
        <div>
          <label>Nombre: {name}</label>
        </div>
        <div>
          <label>Altura:</label>
        </div>
        <div>
          <label>Edad: {edad}</label>
        </div>
        <div>{linkSponsor ? <a href={linkSponsor}>Link</a> : <a></a>}</div>
      </form>
    </>
  );
}

export default Card;
