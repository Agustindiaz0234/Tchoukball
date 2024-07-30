import userService from "../../services/userService";
import JugadoresList from "./JugadoresList";
import Cards from "./Cards";

function List() {
  return <>{userService.isLogged ? <JugadoresList /> : <Cards />}</>;
}

export default List;
