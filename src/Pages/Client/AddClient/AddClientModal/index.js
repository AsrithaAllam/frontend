import React, { useState, useEffect } from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { AddClientSchema, EditClientSchema ,clientValidationSchema} from "../../../../components/Helpers";
import ModalComponent from "../../../../components/Modal";
import {requestClientAction} from "../../../../Redux/ClientState/ClientActionCreator";

const AddClientModal = ({
    onClose,
    show,
    onAddClient,
    title,
    initialValues,
  }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(true);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch=useDispatch();

    const handleCloseModals = () => {
        setIsAddModalOpen(false);
        onClose();
      };

      const handleSubmit = (values, { resetForm }) => {
        dispatch(requestClientAction(values));
        resetForm();
        setIsAddModalOpen(false);
        onAddClient(values);
      };
      return (
        <ModalComponent show={show} onClose={onClose} title={title}>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={clientValidationSchema}
            onSubmit={handleSubmit}
            >
          
            {({ errors, touched, handleChange }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh] overflow-y-scroll no-scrollbar">
            <div>
              <label className=" text-sm font-sm" htmlFor="clientName">
                Client Name
              </label>
              <Field
                name="name"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                disabled={title === "Edit Client"}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="addressLine1">
                Address
              </label>
              <Field
                name="addressLine1"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="addressLine1"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="addressLine2">
                Address Line 2
              </label>
              <Field
                name="addressLine2"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="city">
                City
              </label>
              <Field
                name="city"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="state">
                State
              </label>
              <Field
                name="state"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="country">
                Country
              </label>
              <Field
                as="select"
                name="country"
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="zip">
                Zip
              </label>
              <Field
                name="zip"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="zip"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="col-span-2 flex justify-end mt-4">
            <button
                type="button"
                className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 mr-2"
                onClick={handleCloseModals}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={`py-2 px-4 rounded text-white ${
                    isSubmitting
                      ? "bg-blue-300 cursor-not-allowed opacity-50"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  disabled={isSubmitting}
              >
                {title}
               </button>
            </div>
          </Form>    
           )}
           </Formik>
         </ModalComponent>
       );
  }
  export default AddClientModal;