import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeStatus from "./Pages/EmployeeStatus";
import ProtectedRoute from "./components/Navigation/ProtectedRoute";
import PublicRoute from "./components/Navigation/PublicRoute";
import Dashboard from "./Pages/Dashboard";
import EmployeeProfile from "./Pages/Profile"
import AddProject from "./Pages/Projects/AddProject";
import AddClient from "./Pages/Client/AddClient"
import Documents from "./Pages/Employee/Documents";
import TimeSheet from "./Pages/Employee/TimeSheet";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Reset from "./Pages/ResetPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import EmployeeTable from "./Pages/Employee/EmployeeTable";
import NotFound from "./Pages/NotFound";



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
            {/* <Route exact path ="/manageemployee" element={<AddEmployee />}/> */}
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/resetPassword" element={<ForgotPassword/>}/>
            <Route path="/resetpassword/:token" element={<Reset/>}/>
          </Route>
          <Route exact path="*" element={<NotFound/>} />
        </Routes>
      </Router>
  );
};

export default App;

