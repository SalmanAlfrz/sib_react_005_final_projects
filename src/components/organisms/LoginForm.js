import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../Atoms/Button";

const LoginForm = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let { username, password } = input;
    if ((username === "admin") & (password === "admin")) {
      let token = 12345;
      localStorage.setItem("token", token);
      localStorage.setItem("isAdmin", true);

      navigate("/home");
    } else {
      axios
        .post(`https://fakestoreapi.com/auth/login`, { username, password })
        .then((res) => {
          let { token } = res.data;

          localStorage.setItem("token", token);

          navigate("/home");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  return (
    <>
      <div className="grid h-screen place-items-center" style={{marginTop: "-80px"}}>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left mr-64">
              <h1 className="text-5xl font-bold" style={{ color: "#48a127" }}>Belanjapedia</h1>
              <p className="py-6 text-xl">Belanja apapun dan Dimanapun</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="">
                  <input
                    value={input.username}
                    onChange={handleInput}
                    type={"text"}
                    name="username"
                    className="input input-bordered"
                    placeholder="Email address or phone number"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="">
                  <input
                    value={input.password}
                    onChange={handleInput}
                    type={"password"}
                    name="password"
                    className="input input-bordered"
                    placeholder="Password"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="mt-6">
                  <Button type={"submit"} buttonPrimary isFullWidth>
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
