import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import fakeAuth from "../auth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    fakeAuth.login(() => navigate(from));
  };

  return (
    <div>
      <h2>Login</h2>
      <p>You must login to see Dashboard</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
