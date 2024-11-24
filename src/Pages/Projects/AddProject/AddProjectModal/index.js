import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ModalComponent from "../../../../components/Modal";
import { projectValidationSchema } from "../../../../components/Helpers";
import { useDispatch, useSelector } from "react-redux";
import {setResetStateProjectsList,requestProjectAction, requestProjectsListAction,setResetStateProject} from "../../../../Redux/ProjectState/ProjectActionCreator";

const AddProjectModal = ({ onClose, show ,onAddProject ,title, initialValues }) => {

    const clients = ["Client A", "Client B", "Client C", "Client D"];


    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedProject,setSelectedProject]=useState(null);
    const [editIndex,setEditIndex]=useState(null);
    const dispatch = useDispatch();

    const handleAdd = () => {
      setSelectedProject(null);
      setIsModalOpen(true);
    };

    const handleSubmit = (values, { resetForm }) => {
        dispatch(requestProjectAction(values));
        resetForm();
        setIsModalOpen(false);
        console.log("Form values:", values);
        onAddProject(values);
      };
    
      const handleCloseModals = () => {
        setIsModalOpen(false);
        onClose();
        // setEditIndex(null); // reset edit mode on modal close
      };
      console.log("init",initialValues);
     
      return(
        <ModalComponent  show={show} onClose={onClose} title={title}>
        {/* // title={editIndex !== null ? "Update Project" : "Add Project"} */}
        
        <Formik
          initialValues={initialValues}
          validationSchema={projectValidationSchema}
          onSubmit={handleSubmit}
        >
           {({errors,touched,handleChange }) => (
                // <Form className="h-[60vh] overflow-y-scroll no-scrollbar">
                <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh] overflow-y-scroll no-scrollbar">
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                    <div className="mb-4">
                      <label htmlFor="userId" className="text-sm font-sm text-gray-700">
                        User Id
                      </label>
                      <Field
                        id="userId"
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
                      <label htmlFor="projectName" className=" text-sm font-sm text-gray-700">
                        Project Name
                      </label>
                      <Field
                        type="text"
                        id="projectName"
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
                      <label htmlFor="clientId" className=" text-sm font-sm text-gray-700">
                        Client Id
                      </label>
                      <Field
                        id="clientId"
                        type="number"
                        name="clientId"
                        className="w-full border border-gray-300 rounded-lg p-1"
                      />
                      <ErrorMessage
                        name="clientId"
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
                        id="startDate"
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
                        id="endDate"
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
                        id="budget"
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
                        id="netPay"
                        className="w-full border border-gray-300 rounded-lg p-1"
                      />
                      <ErrorMessage
                        name="netPay"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  {/* </div> */}
                  {/* <div className="flex justify-end space-x-4 mt-2">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                    >
                      {editIndex !== null ? "Update Project" : "Add Project"}
                    </button>
                  </div> */}
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
                className="bg-blue-500 text-white px-4 py-1 rounded-lg"
              >
                Add Project
              </button>
            </div>
                </Form>
              )}
        </Formik>
      </ModalComponent>
      
      )}
      export default AddProjectModal;