import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  setResetStateClientsList,
  requestClientAction,
  requestClientsListAction,
  setResetStateClient,
  setResetEditClient,
  requestEditClient,
  setResetStateClientById,
  requestClientById,
} from "../../../Redux/ClientState/ClientActionCreator";
import CustomDataTable from "../../../components/CustomDataTable";
import AddClientModal from "./AddClientModal";
import Loader from "../../../components/Loader";
import { MdDelete, MdEdit } from "react-icons/md";
import Hoc from "../../../components/HOC";

const AddClient = () => {
  const [isModalOpen, setIsModalOpen] = useState({ title: "", isOpen: false });
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [editData,setEditData]=useState({});


  const clientsListState = useSelector((state) => state.ClientsListReducer);
  const addClientReducer = useSelector((state) => state.ClientReducer);
  const editClientReducer = useSelector((state) => state.EditClientReducer);
  const clientByIdReducer = useSelector((state) => state.ClientByIdReducer);

  const initialValues = {
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  };

  const columns = [
    {
      name: "Client Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Address Line1",
      selector: (row) => row.addressLine1,
      sortable: true,
    },
    {
      name: "Address Line2",
      selector: (row) => row.addressLine2,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "Zip",
      selector: (row) => row.zip,
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
            onClick={() => handleDelete(row.id)}
            className="text-red-500 hover:text-red-700"
          >
            <MdDelete size={24} />
          </button>
        </div>
      ),
    },
  ];

  const handleClose = () => {
    setIsModalOpen({ title: "", isOpen: false });
    dispatch(setResetEditClient());
    dispatch(setResetStateClientById());
  };

  const handleAddClient = (values) => {
    if (isModalOpen.title === "Add Client") {
      dispatch(requestClientAction(values));
    } else {
      const updatedClient = {
        ...editData,
        ...values,
        // id:editData.id
        // id: clientByIdReducer?.byIdResponse?.id, 
      };
      console.log("updated client",updatedClient);
      dispatch(requestEditClient(updatedClient));
    }

  };

  const handleDelete = (idToDelete) => {
    console.log(`Delete client with ID: ${idToDelete}`);
    };

  const handleEdit = (row) => {
    // dispatch(requestClientById(row.id)); // Fetch client data by ID
    // setEditData({name:row.name,id:row.id});
    setEditData({...row, name:row.name,id:row.id,                 
    });
    setIsModalOpen({ title: "Edit Client", isOpen: true });
  };

  const handlePageChange = (page)=>{
    dispatch(requestClientsListAction({page: page, size:clientsListState?.size, search: search}));
  }
 
  const handleRowsChange = (size)=>{
    dispatch(requestClientsListAction({page: 0, size: size, search: ""}));
    setSearch("");
  };

   useEffect(() => {
    if (!addClientReducer?.isLoading && addClientReducer?.isResponse) {
      toast.success("Client added successfully");
      dispatch(requestClientsListAction({ page: clientsListState?.page, size: clientsListState?.size }));
      setSearch("");
      handleClose();
      dispatch(setResetStateClient()); // Reset the reducer state after processing
    } else if (!addClientReducer?.isLoading && addClientReducer?.isError) {
      toast.error("Error adding client");
      dispatch(setResetStateClient());
    }
  }, [addClientReducer]);
  
  useEffect(() => {
    if (!clientByIdReducer?.byIdLoading && clientByIdReducer?.byIdResponse) {
      console.log("Fetched Client Data:", clientByIdReducer.byIdResponse);
      setIsModalOpen({ title: "Edit Client", isOpen: true });
      dispatch(setResetStateClientById()); // Reset state after processing
    }
  }, [clientByIdReducer]);
  
  useEffect(() => {
    if (!editClientReducer?.Loading && editClientReducer?.Response) {
      toast.success("Client updated successfully");
      dispatch(requestClientsListAction({ page: clientsListState?.page, size: clientsListState?.size }));
      handleClose();
      // dispatch(setResetEditClient()); // Reset state after successful update
    } else if (!editClientReducer?.Loading && editClientReducer?.Error) {
      toast.error("Error updating client");
      dispatch(setResetEditClient());
    }
  }, [editClientReducer]);
  
  useEffect(() => {
    dispatch(requestClientsListAction({ page: clientsListState?.page, size: clientsListState?.size }));
    dispatch(setResetStateClientsList());
    dispatch(setResetStateClient());
    dispatch(setResetStateClientById());
    dispatch(setResetEditClient());
  }, []);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(requestClientsListAction({ page: 0, size: clientsListState?.size, search: search }));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search]);
  

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(requestClientsListAction({ page: 0, size: clientsListState?.size, search: search }));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search]);

  return (
    <div className="p-2 w-full overflow-x-scroll overflow-y-hidden">
      <ToastContainer />
      <Loader
        isLoading={
          clientsListState?.loading ||
          clientByIdReducer?.byIdLoading ||
          editClientReducer?.Loading ||
          addClientReducer?.isLoading
        }
      />
      <div className="absolute flex mb-4 right-6">
        <button
          onClick={() => setIsModalOpen({ title: "Add Client", isOpen: true })}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition-all duration-300"
        >
          <span className="text-xl font-extrabold">+</span>
        </button>
      </div>

      <CustomDataTable
        columns={columns}
        data={clientsListState?.response?.content}
        onDelete={handleDelete}
        serverPagenation
        search={search}
        setSearch={setSearch}
        enableSearch={false}
        paginationTotalRows={clientsListState?.response?.totalElements}
        handleChangePage={handlePageChange}
        handleRowsChange={handleRowsChange}
      />

      <AddClientModal
        initialValues={
          isModalOpen.title === "Add Client"
            ? initialValues
            : editData
        }
        show={isModalOpen.isOpen}
        onClose={handleClose}
        title={isModalOpen.title}
        onAddClient={handleAddClient}
      />
    </div>
  );
};

export default Hoc(AddClient);
