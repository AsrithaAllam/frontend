import React, { useState, useEffect } from "react";
import CustomDataTable from "../../../CustomDataTable";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  setResetStateUser,
  requestUserAction,
  requestUsersListAction,
} from "../../../../Redux/UserState/UserActionCreator";
import Hoc from "../../../HOC";
import { MdDelete, MdEdit } from "react-icons/md";
import AddEmployeeModal from "./AddEmployeeModal";

const EmployeeTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersListState = useSelector((state) => state.UsersListReducer);

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
            onClick={() => handleEdit(index)}
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
    console.log(row)
  };
const handleClick =()=>{
  setModalOpen(true)
}
  useEffect(() => {
    dispatch(requestUsersListAction());
  }, []);


  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button type="submit" 
        onClick={handleClick}
        className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Employee
          
        </button>

      </div>
      
      <CustomDataTable
        columns={columns}
        data={usersListState.usersResponse || []}
        // onDelete={handleDelete}
      />{" "}
      <AddEmployeeModal  show={modalOpen}  onClose={()=>setModalOpen(false)} />
    </div>
  );
};

export default Hoc(EmployeeTable);
