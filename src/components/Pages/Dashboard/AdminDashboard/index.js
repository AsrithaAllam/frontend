import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const formik = useFormik({
    initialValues: {
      employee: "",
      project: "",
      fromDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setMessage("No Timesheet found");
      formik.resetForm();
    },
  });

  const handleSaveExcel = () => {
    console.log("Save to Excel");
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex items-center  mt-6">
        <div className="flex items-center ">
          <div className="flex mr-4">
            <label htmlFor="employee" className="p-2 text-gray-700 text-sm">
              EMPLOYEES
            </label>
            <select
              id="employee"
              name="employee"
              value={formik.values.employee}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-gray-300 rounded-lg p-1 w-40"
            >
              <option value="">Select Employee</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
            {formik.touched.employee && formik.errors.employee ? (
              <div className="text-red-500 text-sm">{formik.errors.employee}</div>
            ) : null}
          </div>
          <div className="flex mr-4">
            <label htmlFor="project" className="p-2 text-gray-700 text-sm">
              PROJECTS
            </label>
            <select
              id="project"
              name="project"
              value={formik.values.project}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-gray-300 rounded-lg p-1 w-40"
            >
              <option value="">Select Project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
            {formik.touched.project && formik.errors.project ? (
              <div className="text-red-500 text-sm">{formik.errors.project}</div>
            ) : null}
          </div>
          <div className="flex">
            <label htmlFor="fromDate" className="p-2 text-gray-700 text-sm">
              FROM DATE
            </label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              value={formik.values.fromDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-gray-300 rounded-lg p-1 w-40"
            />
            {formik.touched.fromDate && formik.errors.fromDate ? (
              <div className="text-red-500 text-sm">{formik.errors.fromDate}</div>
            ) : null}
          </div>
        </div>
        <div className="flex space-x-4 mt-4 ml-4 mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleSaveExcel}
            className="bg-sky-400 text-white px-4 py-2 rounded-lg hover:bg-sky-500"
          >
            Save Excel
          </button>
        </div>
      </form>
      {message && (
        <div className="mx-auto mt-6 p-4 text-center text-3xl bg-red-100 border border-red-300 text-red-600 rounded-lg shadow-md">
          {message}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
