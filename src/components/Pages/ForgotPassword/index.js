import React, { useEffect, useContext, useState } from "react";
import "tailwindcss/tailwind.css";
import datacloud from "../../../Assets/data-cloud.jpeg";
// import dynamic from "../Asse/ts/dynamic_image.jpeg";

import time from "../../../Assets/time.jpg";

import { useDispatch, useSelector } from "react-redux";
import { requestLoginAction, setResetStateLogin } from "../../../Redux/LoginState/LoginActionCreator";
import LOCAL_KEYS, { setToLocalStorage } from "../../../helpers/Localstorage";
import { useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import Loader from "../../Loader";
// import ResetForm from "./ResetForm";



const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dynamicImage, setDynamicImage] = useState("");

  const { loginResponse } = useSelector((state)=>state.LoginReducer);
  const ForgetPasswordState = useSelector(
    (state) => state.ForgotPasswordReducer
  );

  useEffect(() => {
    if (loginResponse !== null) {
      setToLocalStorage(LOCAL_KEYS.ACCESS_TOKEN, loginResponse.access_token);
      setToLocalStorage(LOCAL_KEYS.REFRESH_TOKEN, loginResponse.refresh_token);
      setToLocalStorage(LOCAL_KEYS.USER_DETAILS, loginResponse.userDetails);
      dispatch(setResetStateLogin());
      navigate("/", { replace: true });
    }
  }, [loginResponse]);

  

  useEffect(() => {

    // setDynamicImage("https://static.digit.in/vinayaka-chavithi-2024-1536x1134.jpg")
  }, []);

  return (
    <div className="flex items-center justify-evenly bg-white">
      <Loader isLoading ={ForgetPasswordState?.loading} />
      <div className="absolute top-0 right-0 p-10 ">
        <img src={datacloud} alt="Logo" className="h-20 w-30" />
      </div>
      <ForgotPasswordForm/>
      <img
        className="w-1/2 h-screen"
        src={dynamicImage || time}
        alt="Background"
      />
    </div>
  );
};

export default ForgotPassword;
