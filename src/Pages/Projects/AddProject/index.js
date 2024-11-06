import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiFillDelete } from "react-icons/ai";
import Hoc from "../../../components/HOC";
import { FaEdit } from "react-icons/fa";
import ModalComponent from "../../../components/Modal";
import { projectValidationSchema } from "../../../components/Helpers";
import CustomDataTable from "../../../components/CustomDataTable";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {setResetStateProjectsList,requestProjectAction, requestProjectsListAction,setResetStateProject} from "../../../Redux/ProjectState/ProjectActionCreator";

const clients = ["Client A", "Client B", "Client C", "Client D"];
const columns = [
  { name: 'User Id', selector: row => row.userId, sortable: true },
  // { name: 'User Name', selector: row => row.username, sortable: true },
  { name: 'Project', selector: row => row.projectName, sortable: true },
  // { name: 'Client', selector: row => row.client, sortable: true },
  { name: 'Start Date', selector: row => row.startDate, sortable: true },
  { name: 'End Date', selector: row => row.endDate, sortable: true },
  {name: 'Budget', selector: row => row.budget , sortable: true},
  {name: 'Netpay', selector: row => row.netPay , sortable: true}
];

const AddProject = () => {
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const dispatch=useDispatch();
  const projectListState  =  useSelector((state) => state.ProjectsListReducer);
  const addProjectReducer = useSelector((state) => state.ProjectReducer)


  const handleSubmit = (values, { resetForm }) => {
    setFormData([...formData, values]);
    dispatch(requestProjectAction(values));
    dispatch(requestProjectsListAction());
    resetForm();
    setIsModalOpen(false);
    console.log("Form values:", values);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setEditIndex(null); // reset edit mode on modal close
  };

  // const handleSubmit = (values, { resetForm }) => {
  //   if (editIndex !== null) {
  //     // Update existing entry
  //     const updatedData = formData.map((item, index) =>
  //       index === editIndex ? values : item
  //     );
  //     setFormData(updatedData);
  //     setEditIndex(null); // Reset edit mode
  //   } else {
  //     // Add new entry
  //     setFormData([...formData, values]);
  //   }
  //   resetForm();
  //   setModalOpen(false);
  //   console.log("Form values:", values);
  // };


  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setIsModalOpen(true);
  };

  useEffect(()=>{
  dispatch(setResetStateProjectsList());
  dispatch(requestProjectsListAction());
  dispatch(setResetStateProject());

  },[]
  )

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("projects"));
  //   if (storedData) setFormData(storedData);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("projects", JSON.stringify(formData));
  // }, [formData]);

  return (
    <div className="h-[92vh] mx-auto p-10">
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-20 right-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-5"
      >
        Add Project
      </button>
      <ModalComponent
        show={isModalOpen}
        onClose={handleClose}
        title={editIndex !== null ? "Update Project" : "Add Project"}
      >
        <Formik
          initialValues={{
            userId: editIndex !== null ? formData[editIndex].userId : "",
            username: editIndex !== null ? formData[editIndex].username : "",
            projectName: editIndex !== null ? formData[editIndex].projectName : "",
            client: editIndex !== null ? formData[editIndex].client : "",
            startDate: editIndex !== null ? formData[editIndex].startDate : "",
            endDate: editIndex !== null ? formData[editIndex].endDate : "",
            budget: editIndex !== null ? formData[editIndex].budget : "",
            netPay: editIndex !== null ? formData[editIndex].netPay : "",
          }}
          validationSchema={projectValidationSchema}
          onSubmit={handleSubmit}
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
                      {editIndex !== null ? "Update Project" : "Add Project"}
                    </button>
                  </div>
                </Form>
              )}
        </Formik>
      </ModalComponent>
      
      <CustomDataTable
        columns={[
          ...columns,
          {
            name: 'Actions',
            cell: (row, index) => (
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700">
                  <MdEdit size={24} />
                </button>
                <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
                  <MdDelete size={24} />
                </button>
              </div>
            ),
          },
        ]}
        // data={formData}
        data={projectListState?.projectsResponse || []}
      />
    </div>
  );
};

export default Hoc(AddProject);
