import React, { useState ,useEffect} from "react";
import { ResetPasswordSchema } from "../../../Helpers";
import { Formik, Form, Field } from "formik";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { requestResetPassword } from "../../../../Redux/LoginState/LoginActionCreator";

function ResetForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ResetPasswordReducer = useSelector(
    (state) => state.ResetPasswordReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const resetPassword = (values) => {
    dispatch(requestResetPassword({ token, newPassword:values.newPassword}));
    console.log(values);
    setIsSubmitted(true);
  };
  useEffect(() => {
    if (
      ResetPasswordReducer.resetResponse &&
      !ResetPasswordReducer.resetLoading
    ) {
      toast.success("password updated successfully");
    }
  });

  console.log(token, "asritha");

  return (
    <div className="flex items-center justify-center h-screen">
      {isSubmitted ? (
        <p>
          {" "}
          Password Reset Sucessfull, Please{" "}
          <Link className="text-primary" to={"/login"}>
            Click Here
          </Link>{" "}
          to login.
        </p>
      ) : (
        <Formik
          initialValues={{
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={ResetPasswordSchema}
          onSubmit={(values) => {
            if (values.newPassword === values.confirmPassword) {
              resetPassword(values);
            } else {
              toast.error("Passwords do not match");
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className="bg-white p-6 rounded-lg shadow-none w-96">
              <h1 className="text-2xl text-gray-800 font-semibold mb-6 flex items-center justify-center">
                Reset Password
              </h1>

              {/* New Password Field */}
              <div className="mb-4 relative">
                <label className="block text-black-700 text-lg mb-2">
                  New Password
                </label>
                <Field
                  name="newPassword"
                  type={isPasswordVisible ? "text" : "password"}
                  className="w-full p-0.5 border mb-6 rounded focus:outline-none hover:ring-2 hover:ring-blue-400"
                />
                {isPasswordVisible ? (
                  <FaEye
                    onClick={() => setIsPasswordVisible(false)}
                    className="absolute right-3 top-[45px] cursor-pointer"
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setIsPasswordVisible(true)}
                    className="absolute right-3 top-[45px] cursor-pointer"
                  />
                )}
                {errors.newPassword && touched.newPassword && (
                  <p className="text-red-400">{errors.newPassword}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="mb-4 relative">
                <label className="block text-black-700 text-lg mb-2">
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  className="w-full p-0.5 border mb-6 rounded focus:outline-none hover:ring-2 hover:ring-blue-400"
                />
                {isConfirmPasswordVisible ? (
                  <FaEye
                    onClick={() => setIsConfirmPasswordVisible(false)}
                    className="absolute right-3 top-[45px] cursor-pointer"
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setIsConfirmPasswordVisible(true)}
                    className="absolute right-3 top-[45px] cursor-pointer"
                  />
                )}
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="text-red-400">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white font-medium text-sm bg-blue-500 hover:bg-gray-500 px-4 py-2 rounded"
              >
                {"Submit"}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default ResetForm;
