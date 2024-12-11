import React, { useState, useEffect } from "react";
import { ResetPasswordSchema } from "../../../components/Helpers";
import { Formik, Form, Field } from "formik";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { requestResetPassword, setResetStatePassword } from "../../../Redux/LoginState/LoginActionCreator";

function ResetForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [missingCriteria, setMissingCriteria] = useState([]);
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();
  const resetPasswordState = useSelector((state) => state.ResetPasswordReducer);

  const checkPasswordStrength = (password) => {
    const criteria = [
      { test: (pw) => /[a-z]/.test(pw), message: "Include a lowercase letter" },
      {
        test: (pw) => /[A-Z]/.test(pw),
        message: "Include an uppercase letter",
      },
      { test: (pw) => /\d/.test(pw), message: "Include a number" },
      {
        test: (pw) => /[^a-zA-Z\d\s:?,]/.test(pw),
        message: "Include a special character",
      }, // Exclude "?"
      { test: (pw) => pw.length >= 8, message: "At least 8 characters long" },
    ];

    const unmetCriteria = criteria
      .filter((criterion) => !criterion.test(password))
      .map((criterion) => criterion.message);

    setMissingCriteria(unmetCriteria);
    setPasswordStrength(criteria.length - unmetCriteria.length);
  };

  const renderStrengthBar = () => {
    if (missingCriteria.length === 0) return null;

    const colors = [
      "bg-red-500",
      "bg-yellow-500",
      "bg-blue-500",
      "bg-green-500",
    ];
    const width = `${(passwordStrength / 5) * 100}%`;

    return (
      <div className="relative h-2 w-full bg-gray-200 rounded mt-2">
        <div
          className={`absolute top-0 left-0 h-2 rounded transition-all ${
            colors[passwordStrength - 1] || "bg-red-500"
          }`}
          style={{ width }}
        ></div>
      </div>
    );
  };

  const resetPassword = (values) => {
    dispatch(requestResetPassword(values));
  };

  useEffect(() => {
    if (resetPasswordState?.resetResponse && !resetPasswordState?.resetLoading) {
      setIsSubmitted(true);
      toast.success("Password reset has been done sucessfully");
      navigate("/login");
      dispatch(setResetStatePassword());
    }
  }, [resetPasswordState]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      {isSubmitted ? (
        <p className="text-center text-lg font-medium">
          Password Reset Successful. Please{" "}
          <Link className="text-blue-500 hover:underline" to={"/login"}>
            Click Here
          </Link>{" "}
          to login.
        </p>
      ) : (
        <Formik
          initialValues={{
            newPassword: "",
            confirmPassword: "",
            token: token,
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
          {({ errors, touched, values }) => (
            <Form className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Reset Password
              </h1>

              {/* New Password Field */}
              <div className="mb-6 relative">
                <label className="block text-gray-700 text-sm mb-2">
                  New Password
                </label>
                <Field
                  name="newPassword"
                  type={isPasswordVisible ? "text" : "password"}
                  className="w-full px-4 py-1 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  onKeyUp={(e) => checkPasswordStrength(e.target.value)}
                />
                {isPasswordVisible ? (
                  <FaEye
                    onClick={() => setIsPasswordVisible(false)}
                    className="absolute right-3 top-[42px] cursor-pointer text-gray-800"
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setIsPasswordVisible(true)}
                    className="absolute right-3 top-[42px] cursor-pointer text-gray-800"
                  />
                )}
                {errors.newPassword && touched.newPassword && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.newPassword}
                  </p>
                )}

                {/* Password Strength Bar */}
                {values.newPassword && renderStrengthBar()}

                {/* Missing Criteria */}
                {values.newPassword && missingCriteria.length > 0 && (
                  <ul className="mt-2 text-sm text-gray-600">
                    {missingCriteria.map((criteria, index) => (
                      <li key={index} className="text-red-500">
                        {criteria}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="mb-6 relative">
                <label className="block text-gray-700 text-sm mb-2">
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  className="w-full px-4 py-1 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                {isConfirmPasswordVisible ? (
                  <FaEye
                    onClick={() => setIsConfirmPasswordVisible(false)}
                    className="absolute right-3 top-[42px] cursor-pointer text-gray-800"
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setIsConfirmPasswordVisible(true)}
                    className="absolute right-3 top-[42px] cursor-pointer text-gray-800"
                  />
                )}
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default ResetForm;
