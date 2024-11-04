import React, { useState, useEffect } from "react";
import CustomDataTable from "../../../CustomDataTable";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  setResetStateUser,
  requestUserAction,
  requestUsersListAction,
  setResetStateUsersList,
  requestUserById,
  setResetStateUserById,
} from "../../../../Redux/UserState/UserActionCreator";
import Hoc from "../../../HOC";
import { MdDelete, MdEdit } from "react-icons/md";
import AddEmployeeModal from "./AddEmployeeModal";
import Loader from "../../../Loader";

const EmployeeTable = () => {
  const [modalOpen, setModalOpen] = useState({title:"", isOpen:false});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersListState = useSelector((state) => state.UsersListReducer);
  const userDetailsReducer = useSelector ((state) =>state.UserByIdReducer);
  const addUserReducer = useSelector ((state) =>state.UserReducer);
  console.log(userDetailsReducer,"user")
 const initialValues={    
    userName: "",
    email: "",
    password: "",
    fname: "",
    lname: "",
    gender: "",
    joinDate: "",
    endDate: "",
    phone: null,
    addressline1: "",
    addressline2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    acctType: "",
    stsCd: "",
    // reportsTo: "",
}
const closeModal =()=>{
  setModalOpen({title:"", isOpen:false})
  dispatch(setResetStateUserById())

}

useEffect(()=>{
  if(!userDetailsReducer?.byIdLoading &&  userDetailsReducer?.byIdResponse){
    setModalOpen({title:"Edit Employee", isOpen: true});
  }
},[userDetailsReducer])

useEffect(()=>{
if(!addUserReducer?.isLoading && addUserReducer?.isResponse){
  setModalOpen({title:"", isOpen:false})
}
},[addUserReducer])

  const columns = [
    {
      name: "Name",
      selector: (row) => `${row.fname} ${row.lname}`,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "User Type",
      selector: (row) => row.acctType,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.stsCd,
      sortable: true,
    },

    {
      name: "Actions",
      cell: (row, index) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEdit(row)}
            className="text-blue-500 hover:text-blue-700"
          >
            <MdEdit size={24} />
          </button>
          <button
            onClick={() => handleDelete(index)}
            className="text-red-500 hover:text-red-700"
          >
            <MdDelete size={24} />
          </button>
        </div>
      ),
    },
  ];
  const handleDelete = (row) => {
   console.log(row)
  };

  const handleEdit = (row) => {
    dispatch(requestUserById(row.id))
  };
const handleClick =()=>{
  setModalOpen({title:"Add Employee", isOpen:true})
}
  useEffect(() => {
    dispatch(setResetStateUsersList())
    dispatch(requestUsersListAction());
    dispatch(setResetStateUserById());
    dispatch(setResetStateUser())
  }, []);


  const handleAddEmployee = (newEmployee) => {
    dispatch(requestUserAction(newEmployee)); 
    // console.log("values dispatched",newEmployee);
    // toast.success("Employee added successfully!"); 
    // setModalOpen({title:"", isOpen:false}); 
  }

  return (
    <div className="p-2 w-full">
      <Loader isLoading={usersListState?.usersLoading || userDetailsReducer?.byIdLoading } />

      <div className="flex justify-end items-center mb-4">
        <button type="submit" 
        onClick={handleClick}
        className="bg-blue-500 text-white py-1 px-4 rounded">
          Add Employee
        </button>

      </div>
      
      <CustomDataTable
        columns={columns}
        data={usersListState?.usersResponse || []}
        // onDelete={handleDelete}
      />
      <AddEmployeeModal initialValues ={modalOpen.title === "Add Employee" ? initialValues : userDetailsReducer?.byIdResponse  } show={modalOpen.isOpen}  onClose={closeModal} title={modalOpen.title} onAddEmployee={handleAddEmployee} />

    </div>
  );
};

export default Hoc(EmployeeTable);



