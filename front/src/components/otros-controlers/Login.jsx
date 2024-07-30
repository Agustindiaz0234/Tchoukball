import { useState } from "react";
import userService from "../../services/userService";
import { Navigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ userName: "", password: "" });

  const iniciarSesion = (e) => {
    e.preventDefault();
    userService.login(user);
    <Navigate to="/home" />;
  };

  return (
    <>
      <form onSubmit={iniciarSesion}>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            className="form-control"
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
          <label className="form-label">Email address</label>
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="password"
            className="form-control"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <label className="form-label">Password</label>
        </div>
        <button className="btn btn-primary btn-block mb-4" type="sumbit">
          Sign in
        </button>
      </form>
    </>
  );
}

export default Login;
