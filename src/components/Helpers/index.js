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
  userName: Yup.string().required("Username is Required"),
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

export const projectValidationSchema = Yup.object({
  userId: Yup.number().required("User ID is required"),
  username: Yup.string().required("Username is required"),
  projectName: Yup.string().required("Project Name is required"),
  clientId: Yup.string().required("Client is required"),
  startDate: Yup.date().required("Start Date is required"),
  endDate: Yup.date()
    .required("End Date is required")
    .min(Yup.ref("startDate"), "End date cannot be before start date"),
  budget: Yup.number().required("Budget is required"),
  netPay: Yup.number().required("Net Pay is required"),
});
 
export const clientValidationSchema = Yup.object({
  name: Yup.string().required('Client Name is required'),
  addressLine1: Yup.string().required('Address is required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  country: Yup.string().required('Country is required'),
  zip: Yup.string().required('ZIP is required'),
});

export const employeeValidationSchema=Yup.object({
  userName:Yup.string().required('User Name required'),
  password: Yup.string().required('Password required'),
  firstName:Yup.string().required('First Name required'),
  lastName:Yup.string().required('Last Name required'),
  email:Yup.string().required('Email is required'),
  Gender : Yup.string().required('Gender is required'),
  joinDate: Yup.date().required('Join Date is required'),
  endDate: Yup.date().required('End Date is required'),
  phone: Yup.string().required("Phone Number is required"),
  accountType : Yup.string().required("Account type is required"),
  status: Yup.string().required("status is required"),
  reportsTo :Yup.string().required("Reporting to is required"),
  address1 : Yup.string().required('Address is required'),
  address2:Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  country: Yup.string().required('Country is required'),
  zip: Yup.string().required('Zip required'),
});

export const editvalidationSchema = Yup.object({
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
