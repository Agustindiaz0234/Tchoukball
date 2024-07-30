import React from "react";
import { Route, Navigate } from "react-router-dom";
import userService from "../services/userService"; // Ajusta la ruta según tu estructura de carpetas

const AuthRoute = ({ element: Element, fallback: Fallback, ...rest }) => {
  return userService.isLogged ? <Element {...rest} /> : <Fallback {...rest} />;
};

export default AuthRoute;
