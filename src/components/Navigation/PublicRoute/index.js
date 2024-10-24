
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getValuesFromLocalstorage } from "../../Helpers";

const PublicRoutes = () => {
  const userDetails = getValuesFromLocalstorage('userDetails')
  return !userDetails  ? <Outlet /> : <Navigate to="/" />

};

export default PublicRoutes;