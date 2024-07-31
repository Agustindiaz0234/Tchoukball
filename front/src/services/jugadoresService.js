import api from "./apiService";

const jugadoresService ={
    list: () =>{
        return api.get(`/api/Jugadores`).then((response) => {
            return response.data
          }).catch((error) => {
            console.error("Error fetching jugadores:", error);
          });
    },

    getId: (id)=>{

      return api.get(`/api/Jugadores/${id}`).then((response)=>{
        return response.data
      })
      .catch((error) => {
        console.log("error al recuperar los datos del jugador", error);
      });
    },

    delete: (id) =>{
        return api.delete(`/api/Jugadores/${id}`).then((response)=>{
            console.log('Se elimino al jugador con el id: ',id, response)
        }).catch((error) => {
            console.log("Error al eliminar usuario", error);
          });
    },

    add: (jugador) =>{
      return api.post(`/api/Jugadores/`, jugador).then((response)=>{
        alert("Jugador agregado", response.data)
      }).catch((error) => {
        alert("error al agregar jugador", error);
      });
    },

    edit: (jugador, id)=>{
      return api.put(`/api/Jugadores/${id}`, jugador).then((response)=>{
        alert("Se han actualizado los datos del jugador", response.data)
      }).catch((error)=>{
        console.log("No se pudieron guardar los datos del jugador", error)
      })
    }
  }

export default jugadoresService

