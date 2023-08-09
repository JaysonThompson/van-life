import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { loginUser } from "../api/loginUser.js";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        setError(null);
        localStorage.setItem("loggedIn", true);
        navigate("/host");
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {location.state?.message && (
        <h3 className="login-first">{location.state.message}</h3>
      )}
      <h1>Sign in to your accout</h1>
      {error?.message && <h3 className="login-error">{error.message}</h3>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={loginFormData.email}
          placeholder="Email address"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={loginFormData.password}
          placeholder="Password"
          onChange={handleChange}
        ></input>

        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
