import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Hoc from "../../../components/HOC";
import ModalComponent from "../../../components/Modal";
import CustomDataTable from "../../../components/CustomDataTable";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {setResetStateProjectsList,requestProjectAction, 
  requestProjectById,requestProjectsListAction,
  setResetStateProject,requestEditProject,
  setResetStateProjectById,setResetEditProject} from "../../../Redux/ProjectState/ProjectActionCreator";
import Loader from "../../../components/Loader";
import AddProjectModal from "./AddProjectModal";


const AddProject = () => {
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState({ title: "", isOpen: false });
  const [editIndex, setEditIndex] = useState(null);
  const dispatch=useDispatch();
  const projectListState  =  useSelector((state) => state.ProjectsListReducer);
  const addProjectReducer = useSelector((state) => state.ProjectReducer);
  const editProjectReducer = useSelector((state) => state.EditProjectReducer);
  const projectByIdReducer = useSelector((state) => state.ProjectByIdReducer);
  const [search, setSearch] = useState("");
  const [editData,setEditData]=useState({});

  const clients = ["Client A", "Client B", "Client C", "Client D"];
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
    dispatch(setResetEditProject());
    dispatch(setResetStateProjectById());
  };

  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  const handlePageChange = (page)=>{
    dispatch(requestProjectsListAction({page: page, size:projectListState?.size, search: search}));
  }
 
  const handleRowsChange = (size)=>{
    dispatch(requestProjectsListAction({page: 0, size: size, search: ""}));
    setSearch("");
  }

  const handleEdit = (row) => {
    dispatch(requestProjectById(row.id));
    setIsModalOpen({ title: "Edit Project", isOpen: true });
    // setEditIndex(index);
    // setIsModalOpen(true);
  };

  const handleAddProject = (values) => {
    if (isModalOpen.title === "Add Project") {
      dispatch(requestProjectAction(values));
    } else {
      const updatedProject = {
        ...editData,
        ...values,
        // id:editData.id
        // id: projectByIdReducer?.byIdResponse?.id, 
      };
      console.log("updated project",updatedProject);
      dispatch(requestEditProject(updatedProject));
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(requestProjectsListAction({ page: 0, size: projectListState?.size, search: search }));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search]);

  useEffect(()=>{
  dispatch(setResetStateProjectsList());
  dispatch(requestProjectsListAction({ page: 0, size: projectListState?.size, search: search }));
  dispatch(setResetStateProject());
  dispatch(setResetStateProjectById());
    dispatch(setResetEditProject());
  },[]
  )

  useEffect(() => {
    if (!addProjectReducer?.isLoading && addProjectReducer?.isResponse) {
      toast.success("Project added successfully");
      dispatch(requestProjectsListAction({ page: projectListState?.page, size: projectListState?.size }));
      setSearch("");
      handleClose();
      dispatch(setResetStateProject()); 
    } else if (!addProjectReducer?.isLoading && addProjectReducer?.isError) {
      toast.error("Error adding project");
      dispatch(setResetStateProject());
    }
  }, [addProjectReducer]);
  
  useEffect(() => {
    if (!projectByIdReducer?.byIdLoading && projectByIdReducer?.byIdResponse) {
      console.log("Fetched Project Data:", projectByIdReducer.byIdResponse);
      setIsModalOpen({ title: "Edit Project", isOpen: true });
      dispatch(setResetStateProjectById()); 
    }
  }, [projectByIdReducer]);
  
  useEffect(() => {
    if (!editProjectReducer?.Loading && editProjectReducer?.Response) {
      toast.success("Project updated successfully");
      dispatch(requestProjectsListAction({ page: projectListState?.page, size: projectListState?.size }));
      handleClose();
      dispatch(setResetEditProject()); 
    } else if (!editProjectReducer?.Loading && editProjectReducer?.Error) {
      toast.error("Error updating project");
      dispatch(setResetEditProject());
    }
  }, [editProjectReducer]);
  

  return (
    <div className="p-4 w-full h-[90vh] overflow-y-hidden">
      <Loader isLoading={projectListState?.projectsLoading} />
      <div className="absolute flex  mb-4 z-10 right-6">
        <button
          onClick={()=>setIsModalOpen(true)}
          className="flex items-center cursor-pointer float-right justify-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition-all duration-300"
        >
          <span className="text-xl cursor-pointer font-extrabold">+</span>
        </button>
      </div>
          
      <CustomDataTable
        columns={columns}
        data={ projectListState?.projectsResponse?.content  || [] }
        paginationTotalRows={projectListState?.projectsResponse?.totalElements}
        search={search}
        setSearch={setSearch}
        serverPagenation={true}
        handleChangePage={handlePageChange}
        handleRowsChange={handleRowsChange}
      />

<AddProjectModal
        initialValues={
          isModalOpen.title === "Add Project"
            ? initialValues
            : editData
        }
        show={isModalOpen.isOpen}
        onClose={handleClose}
        title={isModalOpen.title}
        onAddClient={handleAddProject}
      />
    </div>
  );
};

export default Hoc(AddProject);
