import React, { useState ,useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { UpdatePasswordSchema } from "../../Helpers";
import Hoc from "../../HOC";
import {
  requestUpdatePassword,
  setResetUpdatePassword,
} from "../../../Redux/LoginState/LoginActionCreator";
import LOCAL_KEYS, {
  parseLocalStorageJSON,
} from "../../../helpers/Localstorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdatePassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const UpdatePasswordState = useSelector(
    (state) => state.UpdatePasswordReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = parseLocalStorageJSON(LOCAL_KEYS.USER_DETAILS);

  console.log(userDetails, "user");
  const resetPassword = (values) => {
    dispatch(requestUpdatePassword({ values: values, id: userDetails.id }));
    console.log(values);
    // toast.success("Password has been updated successfully");
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (
      UpdatePasswordState?.updateResponse &&
      !UpdatePasswordState?.updateLoading
    ) {
      toast.success("Password updated successful");
    }
    if (
      UpdatePasswordState?.updateError &&
      !UpdatePasswordState?.updateLoading
    ) {
      toast.error("Unable to update password");
    }
  }, [UpdatePasswordState]);

  useEffect(() => {
    dispatch(setResetUpdatePassword());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setResetUpdatePassword());
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <ToastContainer />

      <Formik
        initialValues={{
          newPassword: "",
          confirmPassword: "",
          oldPassword: "",
        }}
        validationSchema={UpdatePasswordSchema}
        onSubmit={(values, {resetForm}) => {
          if (values.newPassword === values.confirmPassword) {
            resetPassword(values);
            resetForm();
          } else {
            toast.error("Passwords do not match");
          }
        }}
      >
        {({ errors, touched ,resetForm }) => (
        <Form className="bg-slate-50 p-6 rounded-lg shadow-none w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* <Form className="bg-slate-50 p-6 rounded-lg shadow-none w-96 "> */}
            <h1 className="text-2xl text-gray-800 font-semibold mb-6 flex items-center justify-center">
              Update Password
            </h1>

            <div className="mb-4 relative">
              <label className="block text-black-700 mb-2 text-sm">
                Old Password
              </label>
              <Field
                name="oldPassword"
                type={passwordVisible ? "text" : "password"}
                className="w-full p-0.5 border mb-6 rounded focus:outline-none hover:ring-2 hover:ring-blue-400 "
              />
              {passwordVisible ? (
                <FaEye
                  onClick={() => setPasswordVisible(false)}
                  className="absolute right-3 top-[34px] cursor-pointer"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setPasswordVisible(true)}
                  className="absolute right-3 top-[34px] cursor-pointer"
                />
              )}
              {errors.oldPassword && touched.oldPassword && (
                <p className="text-red-400">{errors.newPassword}</p>
              )}
            </div>

            {/* New Password Field */}
            <div className="mb-4 relative">
              <label className="block text-black-700 mb-2 text-sm">
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
                  className="absolute right-3 top-[34px] cursor-pointer"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setIsPasswordVisible(true)}
                  className="absolute right-3 top-[34px] cursor-pointer"
                />
              )}
              {errors.newPassword && touched.newPassword && (
                <p className="text-red-400">{errors.newPassword}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4 relative">
              <label className="block text-black-700 text-sm mb-2">
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                type={isConfirmPasswordVisible ? "text" : "password"}
                className="w-full p-0.5 border mb-6 rounded text-sm focus:outline-none hover:ring-2 hover:ring-blue-400"
              />
              {isConfirmPasswordVisible ? (
                <FaEye
                  onClick={() => setIsConfirmPasswordVisible(false)}
                  className="absolute right-3 top-[34px] cursor-pointer"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setIsConfirmPasswordVisible(true)}
                  className="absolute right-3 top-[34px] cursor-pointer"
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
    </div>
  );
}

export default Hoc(UpdatePassword);
