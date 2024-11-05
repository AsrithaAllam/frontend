import React, { useEffect, useContext, useState } from "react";
import "tailwindcss/tailwind.css";
import datacloud from "../../../Assets/data-cloud.jpeg";
// import dynamic from "../Asse/ts/dynamic_image.jpeg";
import time from "../../../Assets/time.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  requestLoginAction,
  setResetStateLogin,
} from "../../../Redux/LoginState/LoginActionCreator";
import LOCAL_KEYS, { setToLocalStorage } from "../../../helpers/Localstorage";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Loader";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dynamicImage, setDynamicImage] = useState("");

  const { loginResponse, isLoading } = useSelector(
    (state) => state.LoginReducer
  );

  useEffect(() => {
    if (loginResponse !== null) {
      setToLocalStorage(LOCAL_KEYS.ACCESS_TOKEN, loginResponse.access_token);
      setToLocalStorage(LOCAL_KEYS.REFRESH_TOKEN, loginResponse.refresh_token);
      setToLocalStorage(LOCAL_KEYS.USER_DETAILS, loginResponse.userDetails);
      toast.success("login success");
      dispatch(setResetStateLogin());
    }
  }, [loginResponse]);

  useEffect(() => {
    // setDynamicImage("https://static.digit.in/vinayaka-chavithi-2024-1536x1134.jpg")
  }, []);

  return (
    <div className="flex items-center justify-evenly h-screen bg-white">
      <Loader isLoading={isLoading} />
      <div className="absolute top-0 left-0 p-8 ">
        <img src={datacloud} alt="Logo" className="h-20 w-30" />
      </div>
      <LoginForm />
      <img className="w-1/2 " src={dynamicImage || time} alt="Background" />
    </div>
  );
};

export default Login;
