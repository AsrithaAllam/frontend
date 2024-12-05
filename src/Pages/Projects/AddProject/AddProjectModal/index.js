import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ModalComponent from "../../../../components/Modal";
import { projectValidationSchema } from "../../../../components/Helpers";

const AddProjectModal = ({
  onClose,
  show,
  onAddProject,
  title,
  initialValues,
  usersList,
  clientsList,
}) => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    onAddProject(values);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalComponent show={show} onClose={handleClose} title={title}>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={projectValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form className="h-[60vh] overflow-y-scroll no-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="text-sm font-sm text-gray-700">
                  User Id
                </label>
                <Field
                  as="select"
                  name="userId"
                  className="w-full border border-gray-300 rounded-lg p-1"
                  onChange={(e) => {
                    handleChange(e); // Update Formik's state
                  }}
                >
                  <option value="">Select a user</option>
                  {usersList.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.userName}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="userId"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
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
              <div className="mb-4">
                <label
                  className=" text-sm font-sm text-gray-700"
                >
                  Client Id
                </label>
                <Field
                  type="number"
                  name="clientId"
                  as="select"
                  className="w-full border border-gray-300 rounded-lg p-1"
                  onChange={(e) => {
                    handleChange(e); // Update Formik's state
                  }}
                >
                  <option value="">Select a client</option>
                  {clientsList.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}

                  </Field>
                <ErrorMessage
                  name="clientId"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Start Date */}
              <div className="mb-4">
                <label
               
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
            <div className="col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-1 rounded-lg"
              >
                {title}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalComponent>
  );
};
export default AddProjectModal;
