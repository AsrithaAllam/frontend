import React, { useEffect, useState } from "react";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestLoginAction } from "../../../Redux/LoginState/LoginActionCreator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignupSchema } from "../../../components/Helpers";
import { useSelector } from "react-redux";

function LoginForm() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const  LoginReducerState = useSelector(state=>state.LoginReducer) 
  const loginAction = (values) => {
    dispatch(requestLoginAction(values));
    
  };

  useEffect(()=>{
    if(LoginReducerState.loginResponse && !LoginReducerState.isLoading){
      navigate("/", { replace: true });

    }
  },[LoginReducerState])

  return (
    <div>
      <ToastContainer />
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values) => {
          loginAction(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-transparent p-20 rounded-lg shadow-none w-full max-w-lg">
            <h1 className="text-2xl text-gray-800 font-semibold flex items-center justify-center">
              Sign In
            </h1>
            <div className="mb-4">
              <label className="block text-black-700 text-lg mb-2">
                Username
              </label>
              <Field
                name="userName"
                className="w-full px-2 py-1 border mb-6 rounded focus:outline-none hover:ring-2 hover:ring-blue-400"
              />
              {errors.userName && touched.userName ? (
                <p className="text-red-400">{errors.userName}</p>
              ) : null}
            </div>
            <div className="mb-6 relative">
              <label className="block text-black-700 text-lg mb-2">
                Password
              </label>
              <Field
                type={!isOpen ? "password" : "text"}
                name="password"
                className="w-full px-2 py-1 border rounded focus:outline-none hover:ring-2 hover:ring-blue-400 pr-10"
              />
              <div
                className="absolute inset-y-0 right-0 top-8 flex items-center px-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? <FaRegEyeSlash /> : <FaEye />}
              </div>
              {errors.password && touched.password ? (
                <p className="text-red-400">{errors.password}</p>
              ) : null}
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border mr-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                />
                <label className="text-black-700 text-lg">Remember Me</label>
              </div>
              <Link
                className="italic text-blue-400 p-4 mr-2"
                to={"/forgotpassword"}
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full md:w-1/2 text-white font-medium text-lg bg-blue-500 hover:bg-gray-500 p-2 rounded"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
