import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeStatus from "./components/Pages/EmployeeStatus";
import ProtectedRoute from "./components/Navigation/ProtectedRoute";
import PublicRoute from "./components/Navigation/PublicRoute";
import Dashboard from "./components/Pages/Dashboard";
import EmployeeProfile from "./components/Pages/Profile"
import AddProject from "./components/Pages/Projects/AddProject";
import AddClient from "./components/Pages/Client/AddClient"
import Documents from "./components/Pages/Employee/Documents";
import TimeSheet from "./components/Pages/Employee/TimeSheet";
import Login from "./components/Pages/Login";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Reset from "./components/Pages/ResetPassword";
import UpdatePassword from "./components/Pages/UpdatePassword";
import EmployeeTable from "./components/Pages/Employee/EmployeeTable";


const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/manageemployee" element={<EmployeeTable />} />
            <Route exact path="/addproject" element={<AddProject />} />
            <Route path="/profile" element={<EmployeeProfile />} />
            <Route exact path="/timesheet" element={<TimeSheet />} />
            <Route exact path="/documents" element={<Documents />} />
            <Route exact path="/addemployeestatus" element={<EmployeeStatus />} />
            <Route exact path="/updatePassword" element={<UpdatePassword/>}/>
            <Route exact path ="/addclient" element={<AddClient />}/>
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            <Route path="/resetpassword/:token" element={<Reset/>}/>
          </Route>
        </Routes>
      </Router>
  );
};

export default App;

