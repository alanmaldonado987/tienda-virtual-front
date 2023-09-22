import React, { useEffect, useState } from "react";
import "../styles/Login.scss";
import img_form_container from "../assets/login_img.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginUserService from "../services/LoginUserService";
import { saveToken } from "../services/LoginUserService";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loged, setLoged] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      console.log(data)
      const response = await loginUserService(data);
      console.log(response.data);
      if (response.status === 201) {
        saveToken(response.data.token, response.data.role)
        setLoged(true);
        navigate("/ListProducts");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="login_form_container">
          <div className="login_header">
            <h2>WELCOME BACK!</h2>
            <p>
              Don't have a account,{" "}
              <span>
                <Link to={"/register"}>Sing Up</Link>
              </span>
            </p>
          </div>
          <div className="login_form_login">
            <form onSubmit={handleSubmit(loginUser)}>
              <label>Username</label>
              <input
                placeholder="daniel123@gmail.com"
                type="text"
                required
                name="email"
                {...register("email")}
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="*******"
                required
                name="password"
                {...register("password")}
              />

              <div className="login_options">
                <div className="">
                  <input type="checkbox" /> Remember me
                </div>
                <div className="login_forget_password">
                  <p>Forget Password?</p>
                </div>
              </div>
              <button className="login_sing_up">Sing In</button>
            </form>
          </div>
        </div>
        <div className="login_img_form_container">
          <img src={img_form_container} className="login_img_form_container_img" />
        </div>
      </div>
    </>
  );
}
