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
    <div className="w-full max-h-[85vh] overflow-y-scroll p-5 ">
  <form onSubmit={formik.handleSubmit} className="flex flex-col md:flex-row lg:flex-row gap-10">
    <div className="lg:w-1/3 md:w-1/2 w-full">
      <select
        id="employee"
        name="employee"
        value={formik.values.employee}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border border-gray-300 rounded-lg p-1 h-11 w-full"
      >
        <option value="">Select Employee</option>
        {employees.map((employee) => (
          <option key={employee.id} value={employee.id}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
    <div className="lg:w-1/3 md:w-1/2 w-full">
      <select
        id="project"
        name="project"
        value={formik.values.project}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border border-gray-300 rounded-lg p-1 h-11 w-full"
      >
        <option value="">Select Project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
    </div>
    <div className="lg:w-1/3 md:w-1/2 w-full">
      <input
        type="date"
        id="fromDate"
        name="fromDate"
        value={formik.values.fromDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border border-gray-300 rounded-lg p-1 w-full h-11"
      />
    </div>
    <div className="flex gap-4 w-full justify-center md:justify-end lg:justify-end">
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-lg hover:bg-gray-600"
      >
        Submit
      </button>
      <button
        type="button"
        onClick={handleSaveExcel}
        className="bg-sky-400 text-white px-4 rounded-lg hover:bg-sky-500"
      >
        Save Excel
      </button>
    </div>
  </form>
  {message && (
    <div className="mx-auto mt-6 p-4 text-center text-3xl bg-red-100 border border-red-300 text-red-600 rounded-lg shadow-md w-full">
      {message}
    </div>
  )}
</div>
  );
};

export default AdminDashboard;
