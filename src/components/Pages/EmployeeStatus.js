import React, { useState } from "react";
import Hoc from "../HOC";

const EmployeeStatus = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [statusCode, setStatusCode] = useState("");
  const [documentsUploaded, setDocumentsUploaded] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false); 


  const employees = ["Asritha", "Smith", "Johnson", "Michael"];
  const statusOptions = [
    "CPT",
    "OPT",
    "H1",
    "H4",
    "EAD",
    "Green Card",
    "Citizen",
  ];

  const statusCodes = ["Active(A)", "Deactive(D)", "Closed(C)"];

  const handleUpdate = (e) => {
    e.preventDefault();
    setDocumentsUploaded(true); 
    setIsUpdated(true);
    
    console.log({
      selectedEmployee,
      selectedStatus,
      startDate,
      endDate,
      statusCode,
      documentsUploaded: documentsUploaded ? "Yes" : "No",
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-6">
      <div className="md:w-2/3">
        <h2 className="text-2xl font-semibold mb-4 text-center border-b-2 border-gray-200 pb-4">
          EDIT Employee Status
        </h2>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleUpdate}
        >
          <div className="mb-4">
            <div className="relative">
              <select
                id="employee"
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
              >
                <option value="">Select Employee</option>
                {employees.map((employee, index) => (
                  <option key={index} value={employee}>
                    {employee}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <select
                id="status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
              >
                <option value="">Select Status</option>
                {statusOptions.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Documents Upload</h3>
            <div className="mb-4">
              <input
                id="documents"
                type="file"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Upload
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="statusCode"
            >
              Status Code
            </label>
            <div className="relative">
              <select
                id="statusCode"
                value={statusCode}
                onChange={(e) => setStatusCode(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
              >
                <option value="">Select Status Code</option>
                {statusCodes.map((code, index) => (
                  <option key={index} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-1/3 p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4">CURRENT Employee Status</h3>
        <p>Employee Name: {isUpdated ? selectedEmployee : "N/A"}</p>
        <p>Start Date: {isUpdated ? startDate : "N/A"}</p>
        <p>End Date: {isUpdated ? endDate : "N/A"}</p>
        <p>Status: {isUpdated ? selectedStatus : "N/A"}</p>
        <p>Status Code: {isUpdated ? statusCode : "N/A"}</p>
        <p>Documents Submitted: {isUpdated ? (documentsUploaded ? "Yes" : "No") : "N/A"}</p>
      </div>
    </div>
  );
};

export default Hoc(EmployeeStatus);
