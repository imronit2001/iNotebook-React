import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Login Succesfull", "success");
      navigate("/");
    } else {
      props.showAlert("Incorrect Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <form
        className="container w-50 mt-5"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={credentials.email}
            onChange={onChange}
            name="email"
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={credentials.password}
            onChange={onChange}
            name="password"
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </React.Fragment>
  );
};

export default Login;
