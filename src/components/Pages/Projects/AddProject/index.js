import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiFillDelete } from "react-icons/ai";
import Hoc from "../../../HOC";
import { FaEdit } from "react-icons/fa";
import ModalComponent from "../../../Modal";
import { projectValidationSchema } from "../../../Helpers";

const clients = ["Client A", "Client B", "Client C", "Client D"];

const AddProject = () => {
  
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(null);

  const handleClose =()=>{
    setModalOpen(false)
  }
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("projects"));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  useEffect(() => {
    if (formData.length > 0) {
      localStorage.setItem("projects", JSON.stringify(formData));
    }
  }, [formData]);

  const handleSubmit = (values, { resetForm }) => {
    if (isEditing !== null) {
      const updatedData = formData.map((data, index) =>
        index === isEditing ? values : data
      );
      setFormData(updatedData);
      setIsEditing(null); // Reset editing state
    } else {
      setFormData([...formData, values]);
    }
    setModalOpen(false);
    resetForm();
  };

  const handleEdit = (index) => {
    setIsEditing(index);
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  return (
    <div className="h-[92vh] mx-auto p-10">
      <button
        onClick={() => setModalOpen(true)}
        className="absolute top-20 right-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-5"
      >
        Add Project
      </button>
      <ModalComponent show={isModalOpen} onClose={handleClose} title={"Add Project"} >
            <Formik
              initialValues={{
                userId: isEditing !== null ? formData[isEditing].userId : "",
                username:
                  isEditing !== null ? formData[isEditing].username : "",
                projectName:
                  isEditing !== null ? formData[isEditing].projectName : "",
                client: isEditing !== null ? formData[isEditing].client : "",
                startDate:
                  isEditing !== null ? formData[isEditing].startDate : "",
                endDate: isEditing !== null ? formData[isEditing].endDate : "",
                budget: isEditing !== null ? formData[isEditing].budget : "",
                netPay: isEditing !== null ? formData[isEditing].netPay : "",
              }}
              projectValidationSchema={projectValidationSchema}
              onSubmit={(values) => {
                handleSubmit(values);
                // onAddProject(values);
              }}
              
            >
              {({ resetForm }) => (
                <Form className="h-[60vh] overflow-y-scroll no-scrollbar">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-4">
                      <label
                        htmlFor="userId"
                        className="text-sm font-sm text-gray-700"
                      >
                        User Id
                      </label>
                      <Field
                        type="number"
                        name="userId"
                        className="w-full border border-gray-300 rounded-lg p-1"
                      />
                      <ErrorMessage
                        name="userId"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className=" text-sm font-sm text-gray-700"
                      >
                        Username
                      </label>
                      <Field
                        type="text"
                        name="username"
                        className="w-full border border-gray-300 rounded-lg p-1"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="projectName"
                        className=" text-sm font-sm text-gray-700"
                      >
                        Project Name
                      </label>
                      <Field
                        type="text"
                        name="projectName"
                        className="w-full border border-gray-300 rounded-lg p-1"
                      />
                      <ErrorMessage
                        name="projectName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    {/* Client dropdown */}
                    <div className="mb-4">
                      <label
                        htmlFor="client"
                        className=" text-sm font-sm text-gray-700"
                      >
                        Client
                      </label>
                      <Field
                        as="select"
                        name="client"
                        className="w-full border border-gray-300 rounded-lg p-1"
                      >
                        <option value="">Select a Client</option>
                        {clients.map((client, index) => (
                          <option key={index} value={client}>
                            {client}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="client"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    {/* Start Date */}
                    <div className="mb-4">
                      <label
                        htmlFor="startDate"
                        className=" text-sm font-sm text-gray-700"
                      >
                        Start Date
                      </label>
                      <Field
                        type="date"
                        name="startDate"
                        className="w-full border border-gray-300 rounded-lg p-1"
                      />
                      <ErrorMessage
                        name="startDate"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    {/* End Date with restriction */}
                    <div className="mb-4">
                      <label
                        htmlFor="endDate"
                        className=" text-sm font-sm text-gray-700"
                      >
                        End Date
                      </label>
                      <Field
                        type="date"
                        name="endDate"
                        className="w-full border border-gray-300 rounded-lg p-1"
                      />
                      <ErrorMessage
                        name="endDate"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="budget"
                        className=" text-sm font-sm text-gray-700"
                      >
                        Budget
                      </label>
                      <Field
                        type="number"
                        name="budget"
                        className="w-full border border-gray-300 rounded-lg p-1"
                      />
                      <ErrorMessage
                        name="budget"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="netPay"
                        className=" text-sm font-sm text-gray-700"
                      >
                        Net Pay
                      </label>
                      <Field
                        type="number"
                        name="netPay"
                        className="w-full border border-gray-300 rounded-lg p-1"
                      />
                      <ErrorMessage
                        name="netPay"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4 mt-2">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                    >
                      {isEditing !== null ? "Update Project" : "Add Project"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
        </ModalComponent>

      {formData.length > 0 && (
          <table className="min-w-full text-center border mt-10">
            <thead>
              <tr>
                <th className="border px-4 py-2">User ID</th>
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Project Name</th>
                <th className="border px-4 py-2">Client</th>
                <th className="border px-4 py-2">Start Date</th>
                <th className="border px-4 py-2">End Date</th>
                <th className="border px-4 py-2">Budget</th>
                <th className="border px-4 py-2">Net Pay</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{data.userId}</td>
                  <td className="border px-4 py-2">{data.username}</td>
                  <td className="border px-4 py-2">{data.projectName}</td>
                  <td className="border px-4 py-2">{data.client}</td>
                  <td className="border px-4 py-2">{data.startDate}</td>
                  <td className="border px-4 py-2">{data.endDate}</td>
                  <td className="border px-4 py-2">{data.budget}</td>
                  <td className="border px-4 py-2">{data.netPay}</td>
                  <td className="border px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 flex items-center"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 flex items-center"
                    >
                      <AiFillDelete size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      )}
    </div>
  );
};

export default Hoc(AddProject);
