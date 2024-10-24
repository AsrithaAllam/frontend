import React from "react";
import Hoc from "../../HOC";
import { getValuesFromLocalstorage } from "../../Helpers";
import AdminDashboard from "./AdminDashboard";
import EmployeeDashboard from "./EmployeeDashboard";

const Dashboard = () => {
  const userDetails = getValuesFromLocalstorage("userDetails");
  return userDetails?.acctType === "ADMIN" ? <AdminDashboard /> : <EmployeeDashboard />
};

export default Hoc(Dashboard);
