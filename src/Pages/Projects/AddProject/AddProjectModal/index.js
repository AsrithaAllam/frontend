import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ModalComponent from "../../../../components/Modal";
import { projectValidationSchema } from "../../../../components/Helpers";
import Select from "react-select";

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
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
          <Form className="h-[60vh] overflow-y-scroll no-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="text-sm font-sm text-gray-700">User Id</label>
                <Select
                  value={usersList.find((user) => user.id == values?.userId)}
                  name="userId"
                  placeholder="Select a user"
                  options={usersList}
                  getOptionValue={(option) => option.id}
                  getOptionLabel={(option) => option.userName}
                  onChange={(selectedOption) => {
                    setFieldValue("userId", selectedOption?.id); // Update Formik state
                  }}
                  isDisabled={title === "Edit Project"}
                />
                <ErrorMessage
                  name="userId"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className=" text-sm font-sm text-gray-700">
                  Project Name
                </label>
                <Field
                  type="text"
                  name="projectName"
                  className="w-full border border-gray-300 rounded-[0.3rem] p-1 h-[2.4rem]"
                  disabled={title === "Edit Project"}
                />
                <ErrorMessage
                  name="projectName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className=" text-sm font-sm text-gray-700">
                  Client Id
                </label>
                <Select
                  value={clientsList.find((user) => user.id == values?.clientId)}
                  name="clientId"
                  placeholder="Select a client"
                  options={clientsList}
                  getOptionValue={(option) => option.id}
                  getOptionLabel={(option) => option.name}
                  onChange={(selectedOption) => setFieldValue("clientId", selectedOption.id)}
                  isDisabled={title === "Edit Project"}
                />
                <ErrorMessage
                  name="clientId"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Start Date */}
              <div className="mb-4">
                <label className=" text-sm font-sm text-gray-700">
                  Start Date
                </label>
                <Field
                  type="date"
                  name="startDate"
                  className="w-full border border-gray-300 rounded-[0.3rem] p-1 h-[2.4rem]"
                  disabled={title === "Edit Project"}
                />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* End Date with restriction */}
              <div className="mb-4">
                <label className=" text-sm font-sm text-gray-700">
                  End Date
                </label>
                <Field
                  type="date"
                  name="endDate"
                  className="w-full border border-gray-300 rounded-[0.3rem] p-1 h-[2.4rem]"
                />
                <ErrorMessage
                  name="endDate"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label className=" text-sm font-sm text-gray-700">Budget</label>
                <Field
                  type="number"
                  name="budget"
                  className="w-full border border-gray-300 rounded-[0.3rem] p-1 h-[2.4rem]"
                />
                <ErrorMessage
                  name="budget"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label className=" text-sm font-sm text-gray-700">
                  Net Pay
                </label>
                <Field
                  type="number"
                  name="netPay"
                  className="w-full border border-gray-300 rounded-[0.3rem] p-1 h-[2.4rem]"
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
