import React from "react";
import Hoc from "../../components/HOC";
import AdminDashboard from "./AdminDashboard";
import EmployeeDashboard from "./EmployeeDashboard";
import { getValuesFromLocalstorage } from "../../components/Helpers";

const Dashboard = () => {
  const userDetails = getValuesFromLocalstorage("userDetails");
  return userDetails?.acctType === "ADMIN" ? <AdminDashboard /> : <EmployeeDashboard />
};

export default Hoc(Dashboard);
