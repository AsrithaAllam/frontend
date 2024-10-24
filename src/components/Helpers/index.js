import React from "react";
import * as Yup from "yup";

export const getValuesFromLocalstorage = (storageKey) => {
  const userDetails =
    storageKey === "accessToken"
      ? localStorage.getItem(storageKey)
      : JSON.parse(localStorage.getItem(storageKey));

  return userDetails || null;
};

export const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is Required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be 8 characters length")
    .required("Password is Required"),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Email is Required"),
});

export const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
  .min(8, "New Password is too short")
  .max(25,"New Password is too long")
  .required("Password is Required"),
  confirmPassword: Yup.string()
  
  .min(8, "New Password is too short")
  .max(25,"New Password is too long")
  .required("Password is Required")
  .oneOf([Yup.ref('newPassword'),null],'passwords must match')
})

export const UpdatePasswordSchema = Yup.object().shape({

  oldPassword:Yup.string("old password is required"),
  newPassword: Yup.string()
  .min(6, "New Password is too short")
  .max(25,"New Password is too long")
  .required("Password is Required"),
  confirmPassword: Yup.string()
  .min(6, "New Password is too short")
  .max(25,"New Password is too long")
  .required("Password is Required")
  .oneOf([Yup.ref('newPassword'),null],'passwords must match')
})
export const validationSchema = Yup.object({
  userName: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  joinDate: Yup.date().required("Required"),
  endDate: Yup.date(),
  accountType: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  reportsTo: Yup.string().required("Required"),
});
