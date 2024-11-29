import React, { useState, useEffect } from "react";
import Hoc from "../../../components/HOC";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MdDelete, MdEdit } from "react-icons/md";
import ModalComponent from "../../../components/Modal";
import { projectValidationSchema } from "../../../components/Helpers";
import CustomDataTable from "../../../components/CustomDataTable";
import { useDispatch, useSelector } from "react-redux";
import {setResetStateProjectsList,requestProjectAction, 
  requestProjectsListAction,setResetStateProject,
  setResetEditProject,requestEditProject ,
  setResetStateProjectById,requestProjectById} from "../../../Redux/ProjectState/ProjectActionCreator";
import AddProjectModal from "./AddProjectModal";
import Loader from "../../../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState({ title: "", isOpen: false });
  const [editIndex, setEditIndex] = useState(null);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const projectListState  =  useSelector((state) => state.ProjectsListReducer);
  const addProjectReducer = useSelector((state) => state.ProjectReducer);
  const projectByIdReducer= useSelector((state) => state.ProjectByIdReducer)
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState({ title: "", isOpen: false });
  const [editData,setEditData]=useState({});
  const editProjectReducer = useSelector((state)=>state.EditProjectReducer) 
// console.log(editProjectReducer,"edit")

 
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
            <button onClick={() => handleEdit(row)} className="text-blue-500 hover:text-blue-700">
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

  const handleSubmit = (values, { resetForm }) => {
    setFormData([...formData, values]);
    dispatch(requestProjectAction(values));
    dispatch(requestProjectsListAction());
    resetForm();
    setIsModalOpen(false);
    console.log("Form values:", values);
  };

  const handleClose = () => {
    setIsModalOpen({ title: "", isOpen: false });
    setEditIndex(null); // reset edit mode on modal close
    dispatch(setResetEditProject());
    dispatch(setResetStateProjectById());
  };

  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  const handleEdit = (row) => {
    // setEditData({projectName:row.projectName,id:row.id    
    // });
    setEditData({...row, projectName:row.projectName,id:row.id,                 
    });
    console.log("row",row);
    setIsModalOpen({ title: "Edit Project", isOpen: true });
  };

   const handleAddProject= (newProject) =>{
    console.log(newProject,"data");
    if(isModalOpen.title==="Add Project"){
      dispatch(requestProjectAction(newProject));
    }else{
      const updatedProject = {
        ...editData,
        ...newProject,
       };
      console.log("updated project",updatedProject);
      dispatch(requestEditProject(updatedProject));
    }
   };

   const handlePageChange = (page) => {
    dispatch(requestProjectsListAction({ page: page, size: 5, search:search }));
  };

  const handleRowsChange = (size) => {
    dispatch(requestProjectsListAction({ page: 0, size:size , search: "" }));
    setSearch("");
  };
  useEffect(()=>{
  dispatch(setResetStateProjectsList());
  // dispatch(requestProjectsListAction());
  dispatch(requestProjectsListAction({ page: projectListState?.page, size:projectListState?.size }));
  dispatch(setResetStateProject());
  dispatch(setResetStateProjectById());
  dispatch(setResetEditProject());
  },[])

  useEffect(() => {
    if (!addProjectReducer?.isLoading && addProjectReducer?.isResponse) {
      toast.success("Project added successfully");
      dispatch(requestProjectsListAction({ page: projectListState?.page, size: projectListState?.size }));
      handleClose();
    } else if (!addProjectReducer?.isLoading && addProjectReducer?.isError) {
      toast.error("Error adding project");
    }
   }, [addProjectReducer]);

  useEffect(() => {
    if (!editProjectReducer?.Loading && editProjectReducer?.Response) {
      toast.success("Project updated successfully");
      dispatch(requestProjectsListAction({ page: projectListState?.page, size: projectListState?.size }));
      // dispatch(requestProjectsListAction({ page: 0, size: 5, search }));
      handleClose();
    } else if (!editProjectReducer?.Loading && editProjectReducer?.Error) {
      toast.error("Error updating project");
    }
   }, [editProjectReducer]);

  const handleClick = () => {
    setIsModalOpen({ title: "Add Project", isOpen: true });
  };
console.log(projectListState?.projectsResponse?.content,"project list");

  return (
    <div className="p-2 w-full overflow-x-scroll overflow-y-hidden">
      <ToastContainer />
      <Loader
        isLoading={
          projectListState?.projectsLoading ||
          projectByIdReducer?.byIdLoading ||
          editProjectReducer?.Loading ||
          addProjectReducer?.isLoading
        }
      />
      <div className="absolute flex mb-4 right-6 z-10">
        <button
          onClick={() => setIsModalOpen({ title: "Add Project", isOpen: true })}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition-all duration-300"
        >
          <span className="text-xl font-extrabold">+</span>
        </button>
      </div>
            
      <CustomDataTable
        columns={columns}
        data={projectListState?.projectsResponse?.content}
        search={search}
        onDelete={handleDelete}
        setSearch={setSearch}
        serverPagenation
        enableSearch={false}
        paginationTotalRows={projectListState?.projectsResponse?.totalElements}
        handleChangePage={handlePageChange}
        handleRowsChange={handleRowsChange}
      />
      
      <AddProjectModal initialValues={ isModalOpen.title === "Add Project"
            ? initialValues
            : editData} 
        show={isModalOpen.isOpen} 
        onClose={handleClose}
        title={isModalOpen.title}
        onAddProject={handleAddProject}
        />
    </div>
  );
};

export default Hoc(AddProject);
