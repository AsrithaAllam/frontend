import React, { useState, useEffect } from "react";
import Hoc from "../../../components/HOC";
// import { FaEdit } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MdDelete, MdEdit } from "react-icons/md";
import ModalComponent from "../../../components/Modal";
import { projectValidationSchema } from "../../../components/Helpers";
import CustomDataTable from "../../../components/CustomDataTable";
import { useDispatch, useSelector } from "react-redux";
import {setResetStateProjectsList,requestProjectAction, requestProjectsListAction,setResetStateProject} from "../../../Redux/ProjectState/ProjectActionCreator";
import AddProjectModal from "./AddProjectModal";
import Loader from "../../../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const projectListState  =  useSelector((state) => state.ProjectsListReducer);
  const addProjectReducer = useSelector((state) => state.ProjectReducer);
  const [serch, setSerch] = useState("");


  const [modalOpen, setModalOpen] = useState({ title: "", isOpen: false });
  // const editUserReducer = useSelector((state)=>state.EditUserReducer) 
// console.log(editUserReducer,"edit")

 
  const columns = [
    
    // { name: 'User Name', selector: row => row.username, sortable: true },
    { name: 'ProjectName', selector: row => row.projectName, sortable: true },
    { name: 'Start Date', selector: row => row.startDate, sortable: true },
    { name: 'End Date', selector: row => row.endDate, sortable: true },
    {name: 'Budget', selector: row => row.budget , sortable: true},
    {name: 'Netpay', selector: row => row.netPay , sortable: true},
    // { name: 'User Id', selector: row => row.userId, sortable: true },
    // { name: 'Client', selector: row => row.clientID, sortable: true },
      {
        name: 'Actions',
        cell: (row) => (
          <div className="flex space-x-2">
            <button onClick={() => handleEdit(row.id)} className="text-blue-500 hover:text-blue-700">
              <MdEdit size={24} />
            </button>
            <button onClick={() => handleDelete(row.id)} className="text-red-500 hover:text-red-700">
              <MdDelete size={24} />
            </button>
          </div>
        ),
      },
  ];
const initialValues ={
  userId: "",
  projectName: "",
  clientId: "",
  startDate:  "",
  endDate:  "",
  budget:"",
  netPay:  "",
}

const closeModal = () => {
  setModalOpen({ title: "", isOpen: false });
  // dispatch(setResetStateUserById());
  // dispatch(setResetStateEditUser())
};

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

  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    // setIsModalOpen(true);
  };

   const handleAddProject= (newProject) =>{
    console.log(newProject,"data");
    if(modalOpen.title==="Add Project"){
      dispatch(requestProjectAction(newProject));
    }else{
      console.log("not an Adding new project");
    }
   };

  useEffect(()=>{
  dispatch(setResetStateProjectsList());
  dispatch(requestProjectsListAction());
  dispatch(setResetStateProject());
  },[]
  )

  const handleClick = () => {
    setModalOpen({ title: "Add Project", isOpen: true });
  };

  return (
    <div className="p-2 w-full overflow-x-scroll overflow-y-hidden">
     <div className="flex justify-end items-center mb-4">
        <button
          type="submit"
          onClick={handleClick}
          className="bg-blue-500 text-white py-1 px-4 rounded"
        >
          Add Project
        </button>
      </div>
      <ModalComponent
        show={isModalOpen}
        onClose={handleClose}
        title={editIndex !== null ? "Update Project" : "Add Project"}
      >
        <Formik
          initialValues={initialValues}
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
                    <div className="mb-4">
                      <label
                        htmlFor="clientId"
                        className=" text-sm font-sm text-gray-700"
                      >
                        Client Id
                      </label>
                      <Field
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
                   <div className="col-span-2 flex justify-end mt-4">
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
      
      <CustomDataTable
        columns={columns}
        data={[]}
        search={serch}
        setSearch={setSerch}
        serverPagenation={true}
      />
      
      <AddProjectModal initialValues={initialValues} 
        show={modalOpen.isOpen} 
        onClose={closeModal}
        title={modalOpen.title}
        onAddProject={handleAddProject}
        />
    </div>
  );
};

export default Hoc(AddProject);
