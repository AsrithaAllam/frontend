import React, { useEffect } from "react";
import { ForgotPasswordSchema } from "../../../components/Helpers";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  requestForgotPassword,
  setResetForgotPassword,
} from "../../../Redux/LoginState/LoginActionCreator";

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ForgetPasswordState = useSelector(
    (state) => state.ForgotPasswordReducer
  );

  const forgotPassword = (values) => {
    dispatch(requestForgotPassword(values));
  };

  useEffect(() => {
    dispatch(setResetForgotPassword());
  }, []);

  useEffect(() => {
    if (ForgetPasswordState?.response && !ForgetPasswordState?.loading) {
      toast.success("Email Sent Successful");
    } 
    if(ForgetPasswordState?.error && !ForgetPasswordState?.loading) {
      toast.error("Something went wrong")
    }
  }, [ForgetPasswordState]);
  
  useEffect(() => {
    return () => {
      dispatch(setResetForgotPassword());
    };
  }, []);

  return (
    <div>
      {!ForgetPasswordState?.response ? (
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values) => {
            forgotPassword(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="bg-white p-10 rounded-lg w-96 shadow-none ">
              <h1 className="text-lg text-gray-700 font-bold m-10 flex items-center justify-center">
                Reset Password...
              </h1>
              <div className="mb-4">
                <label className="block text-black-700 mb-2">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-[0.3rem] p-1 h-[2.4rem]"
                />
                {errors.email && touched.email ? (
                  <p className="text-red-400">{errors.email}</p>
                ) : null}
              </div>
              <Link
                className="text-sm w-full font-medium text-primary px-4 py-1 rounded mr-2"
                to={"/Login"}
              >
                Sign In
              </Link>

              <button
                type="submit"
                className="w-full md:w-1/2 text-white font-medium text-lg bg-primary hover:bg-secondaryBlue hover:text-gray-700 px-4 py-1 rounded"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <div>
          <p>Email has been sent to your registred Email address</p>
          <Link
            className="text-sm w-full font-medium text-primary px-4 py-1 rounded mr-2"
            to={"/login"}
          >
            Sign In Here
          </Link>
        </div>
      )}
    </div>
  );
}

export default ForgotPasswordForm;
