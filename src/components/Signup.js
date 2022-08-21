import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Registration Succesfull", "success");
      navigate("/");
    } else {
      props.showAlert("Registration Failed", "danger");
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
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="name@example.com"
            value={credentials.name}
            onChange={onChange}
            name="name"
            required
          />
          <label htmlFor="floatingName">Name</label>
        </div>
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
            minLength="5"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingcPassword"
            placeholder="cPassword"
            value={credentials.cpassword}
            onChange={onChange}
            name="cpassword"
            required
            minLength="5"
          />
          <label htmlFor="floatingcPassword">Confirm Password</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
      </form>
    </React.Fragment>
  );
};

export default Signup;
