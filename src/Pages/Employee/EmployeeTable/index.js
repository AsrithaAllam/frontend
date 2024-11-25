import React, { useState, useEffect } from "react";
import CustomDataTable from "../../../components/CustomDataTable";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  setResetStateUser,
  requestUserAction,
  requestUsersListAction,
  setResetStateUsersList,
  requestUserById,
  setResetStateUserById,
  setResetStateEditUser,
  requestEdituser,
} from "../../../Redux/UserState/UserActionCreator";
import Hoc from "../../../components/HOC";
import { MdDelete, MdEdit } from "react-icons/md";
import AddEmployeeModal from "./AddEmployeeModal";
import Loader from "../../../components/Loader";

const EmployeeTable = () => {
  const [modalOpen, setModalOpen] = useState({ title: "", isOpen: false });
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const usersListState = useSelector((state) => state.UsersListReducer);
  const userDetailsReducer = useSelector((state) => state.UserByIdReducer);
  const addUserReducer = useSelector((state) => state.UserReducer);
  const editUserReducer = useSelector((state) => state.EditUserReducer);

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    joinDate: "",
    endDate: "",
    phone: null,
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    acctType: "",
    stsCd: "",
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
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
    // {
    //   name: "Gender",
    //   selector: (row) => row.gender.toUpperCase(),
    //   sortable: true,
    // },
    {
      name: "Status",
      selector: (row) => row.stsCd,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEdit(row)}
            className="text-blue-500 hover:text-blue-700"
          >
            <MdEdit size={24} />
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="text-red-500 hover:text-red-700"
          >
            <MdDelete size={24} />
          </button>
        </div>
      ),
    },
  ];

  const closeModal = () => {
    setModalOpen({ title: "", isOpen: false });
    dispatch(setResetStateUserById());
    dispatch(setResetStateEditUser());
  };

  useEffect(() => {
    if (!userDetailsReducer?.byIdLoading && userDetailsReducer?.byIdResponse) {
      setModalOpen({ title: "Edit Employee", isOpen: true });
    }
  }, [userDetailsReducer]);

  useEffect(() => {
    if (!addUserReducer?.isLoading && addUserReducer?.isResponse) {
      setModalOpen({ title: "", isOpen: false });
      toast.success("User Created successfully");
    }
    if (!addUserReducer?.isLoading && addUserReducer?.isError) {
      toast.error("User not created. Something went wrong");
    }
  }, [addUserReducer]);

  useEffect(() => {
    if (!editUserReducer?.Loading && editUserReducer?.Response) {
      setModalOpen({ title: "", isOpen: false });
      toast.success("User Details Updated Successfully");
    }
    if (!editUserReducer?.Loading && editUserReducer?.Error) {
      toast.error("Something went wrong");
    }
  }, [editUserReducer]);

  const handleDelete = (row) => {
    console.log(row);
  };

  const handleEdit = (row) => {
    dispatch(requestUserById(row.id));
  };

  const handleClick = () => {
    setModalOpen({ title: "Add Employee", isOpen: true });
  };
  const handlePageChange = (page)=>{
    dispatch(requestUsersListAction({page: page, size: usersListState.size, search: search}));
  }
  const handleRowsChange = (size)=>{
    dispatch(requestUsersListAction({page: 0, size: size, search: ""}));
    setSearch("");
  }

  useEffect(() => {
    dispatch(setResetStateUsersList());
    dispatch(requestUsersListAction({ page: usersListState?.page, size: usersListState?.size }));
    dispatch(setResetStateUserById());
    dispatch(setResetStateUser());
    dispatch(setResetStateEditUser());
  }, [dispatch]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(requestUsersListAction({ page: 0, size: usersListState?.size, search: search }));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search]);

  const handleAddEmployee = (newEmployee) => {
    if (modalOpen.title === "Add Employee") {
      dispatch(requestUserAction(newEmployee));
    } else {
      dispatch(
        requestEdituser({
          ...newEmployee,
          id: userDetailsReducer?.byIdResponse.id,
        })
      );
    }
  };

  return (
    <div className="p-4 w-full h-[92vh] overflow-y-hidden">
      <ToastContainer />
      <Loader
        isLoading={
          usersListState?.usersLoading ||
          userDetailsReducer?.byIdLoading ||
          editUserReducer?.Loading ||
          addUserReducer?.isLoading
        }
      />

      <div className="absolute flex  mb-4 right-6">
        <button
          onClick={handleClick}
          className="flex items-center float-right justify-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition-all duration-300"
        >
          <span className="text-xl font-extrabold">+</span>
        </button>
      </div>

      <CustomDataTable
        columns={columns}
        search={search}
        setSearch={setSearch}
        data={usersListState?.usersResponse?.content}
        onDelete={handleDelete} 
        enableSearch={false}
        serverPagenation
        paginationTotalRows={usersListState?.usersResponse?.totalElements}
        handleChangePage={handlePageChange}
        handleRowsChange={handleRowsChange}
      />
       
      <AddEmployeeModal
        initialValues={
          modalOpen.title === "Add Employee"
            ? initialValues
            : userDetailsReducer?.byIdResponse
        }
        show={modalOpen.isOpen}
        onClose={closeModal}
        title={modalOpen.title}
        onAddEmployee={handleAddEmployee}
      />
    </div>
  );
};
export default Hoc(EmployeeTable);
