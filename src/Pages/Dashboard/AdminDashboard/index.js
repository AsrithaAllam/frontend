import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const employees = [
  { id: "asritha", name: "asritha" },
  { id: "bhargavi", name: "bhargavi" },
  { id: "dinesh", name: "dinesh" },
  { id: "manohar", name: "manohar" },
  { id: "pravallika", name: "pravallika" },
  { id: "satish", name: "satish" }, 
];

const projects = [
  { id: "RPM", name: "RPM" },
  { id: "TimeTrack", name: "TimeTrack" },
  { id: "project3", name: "Project 3" },
];

const validationSchema = Yup.object({
  employee: Yup.string().required("Employee is required"),
  project: Yup.string().required("Project is required"),
  fromDate: Yup.date().required("Date is required").nullable(),
});

const AdminDashboard = () => {
  const [message, setMessage] = useState("");
  const handleSaveExcel = () => {
    console.log("Save to Excel");
  };

  return (
    <div className="w-full max-h-[90vh] overflow-y-scroll p-5 ">
      <Formik 
      initialValues={{
        employee: "",
        project: "",
        fromDate: "",
      }
    }
      validationSchema={validationSchema}
      onSubmit={(values , {resetForm}) => {
        setMessage("No Timesheet found");
        resetForm();
      }}
      >
      {({ values, errors, touched, handleChange, setFieldValue, handleSubmit, handleBlur }) => (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row lg:flex-row gap-5"
      >
        <div className="lg:w-2/3 md:w-1/2 w-full">
          <Select
            value={
              employees.find((user) => user.id == values?.employee) ||
              null
            }
            name="employee"
            onChange={(selectedOption) => {
              setFieldValue("employee", selectedOption?.id);
            }}
            placeholder="Select client"
            options={employees}
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.name}
          />
        </div>
        <div className="lg:w-2/3 md:w-1/2 w-full">
          <Select
            value={
              employees.find((user) => user.id == values?.project) ||
              null
            }
            name="project"
            onChange={(selectedOption) => {
              setFieldValue("project", selectedOption?.id);
            }}
            placeholder="Select project"
            options={projects}
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.name}
          />

        </div>
        <div className="lg:w-2/3 md:w-1/2 w-full">
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={values.fromDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border border-gray-300 rounded-[0.3rem] p-1 h-[2.4rem]"
          />
        </div>
        <div className="flex gap-4 w-full justify-center">
          <button
            type="submit"
            className="bg-blue-500 w-full text-white px-4 rounded-lg hover:bg-gray-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleSaveExcel}
            className="bg-sky-400 text-white w-full px-4 rounded-lg hover:bg-sky-500"
          >
            Save Excel
          </button>
        </div>
      </form>
      )}
      </Formik>
      {message && (
        <div className="mx-auto mt-6 p-4 text-center text-3xl bg-red-100 border border-red-300 text-red-600 rounded-lg shadow-md w-full">
          {message}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
