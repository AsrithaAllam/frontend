import React, { useState, useEffect } from "react";
// import * as Yup from "yup";
import {toast } from "react-toastify";
import Hoc from "../../../components/HOC";
// import ModalComponent from "../../../components/Modal";
// import { clientValidationSchema } from "../../../components/Helpers";
import CustomDataTable from "../../../components/CustomDataTable";
import { MdDelete, MdEdit } from "react-icons/md";
import AddClientModal from "./AddClientModal";
import { useDispatch, useSelector } from "react-redux";
import { setResetStateClientsList, 
  requestClientAction,
  requestClientsListAction,
  setResetStateClient ,
  setResetEditClient,
  requestEditClient,
  setResetStateClientById,
  requestClientById,
} from "../../../Redux/ClientState/ClientActionCreator";
import Loader from "../../../components/Loader";

const AddClient = () => {
  const [isModalOpen, setIsModalOpen] = useState({ title: "", isOpen: false });
  const dispatch = useDispatch();
  const clientsListState = useSelector((state) => state.ClientsListReducer);
  const addClientReducer = useSelector((state) => state.ClientReducer);
  const editClientReducer = useSelector((state) => state.EditClientReducer);
  const clientByIdReducer = useSelector((state) => state.ClientByIdReducer);
  const [search, setSearch] = useState("");
  // const [editData,setEditData]=useState({name: "",
  //   addressLine1: "",
  //   addressLine2: "",
  //   city: "",
  //   state: "",
  //   country: "",
  //   zip: "",});

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
      name: 'Client Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Address Line1',
      selector: row => row.addressLine1,
      sortable: true,
    },
    {
      name: 'Address Line2',
      selector: row => row.addressLine2,
      sortable: true,
    },
    {
      name: 'City',
      selector: row => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: row => row.state,
      sortable: true,
    },
    {
      name: 'Country',
      selector: row => row.country,
      sortable: true,
    },
    {
      name: 'Zip',
      selector: row => row.zip,
      sortable: true,
    },
    // {
    //   name: 'Address',
    //   // selector: row =>`${row.address}, ${row.city}, ${row.state},${row.country}`,
    //   selector: row => row.address,
    //   sortable: true,
    // },
  
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
    },];

    const handleEdit = (row) => {
      dispatch(setResetStateClient());
    dispatch(requestClientById(row.id)); // Fetch client data by ID
    // setEditData({name:row.name,id:row.id});
    // setEditData({...row, name:row.name,id:row.id,                 
    // });
    setIsModalOpen({ title: "Edit Client", isOpen: true });
  };
  

  const handleAddClient = (values) => {
    if (isModalOpen.title === "Add Client") {
      dispatch(requestClientAction(values));
    } else {
      const updatedClient = {
        ...values,
        // id:editData.id
        // id: clientByIdReducer?.byIdResponse?.id, 
        id:clientByIdReducer?.byIdResponse?.id,
      };
      console.log("updated client",updatedClient);
      dispatch(requestEditClient(updatedClient));
    }
  };

  const handleDelete = (idToDelete) => {
    console.log(idToDelete);
  };

  const handlePageChange = (page)=>{
    dispatch(requestClientsListAction({page: page, size:clientsListState?.size, search: search}));
  }
 
  const handleRowsChange = (size)=>{
    dispatch(requestClientsListAction({page: 0, size: size, search: ""}));
    setSearch("");
  }
  const handleClose = () => {
    setIsModalOpen({ title: "", isOpen: false });
    dispatch(setResetEditClient());
    dispatch(setResetStateClientById());
  };


  useEffect(() => {
    dispatch(setResetStateClientsList());
    dispatch(requestClientsListAction({ page: clientsListState?.page, size: clientsListState?.size }));
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
    if (!addClientReducer?.isLoading && addClientReducer?.isResponse) {
      toast.success("Client added successfully");
      dispatch(setResetStateClient());
      dispatch(requestClientsListAction({ page: clientsListState?.page, size: clientsListState?.size }));
      setSearch("");
      handleClose();
      // dispatch(setResetStateClient()); 
    } else if (!addClientReducer?.isLoading && addClientReducer?.isError) {
      toast.error("Error adding client");
      dispatch(setResetStateClient());
    }
  }, [addClientReducer]);
  
  useEffect(() => {
    if (!clientByIdReducer?.byIdLoading && clientByIdReducer?.byIdResponse) {
       console.log("ID data:",clientByIdReducer) 
      setIsModalOpen({ title: "Edit Client", isOpen: true });
      } else if (!clientByIdReducer?.byIdLoading && clientByIdReducer?.byIdError) {
      toast.error("Error fetching client data");
      dispatch(setResetStateClientById());
    }
  }, [clientByIdReducer]);
  
  
  useEffect(() => {
    if (!editClientReducer?.Loading && editClientReducer?.Response) {
      toast.success("Client updated successfully");
      dispatch(requestClientsListAction({ page: clientsListState?.page, size: clientsListState?.size }));
      handleClose();
      dispatch(setResetEditClient()); 
    } else if (!editClientReducer?.Loading && editClientReducer?.Error) {
      toast.error("Error updating client");
      dispatch(setResetEditClient());
    }
  }, [editClientReducer]);
  
  
  return (
    <div className="p-4 w-full h-[90vh] overflow-y-scroll">
    
      <Loader isLoading={clientsListState?.loading} />
       
      <div className="absolute flex  mb-4 z-10 right-6">
        <button
          onClick={()=>setIsModalOpen({ title: "Add Client", isOpen: true })}
          className="flex items-center cursor-pointer float-right justify-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition-all duration-300"
        >
          <span className="text-xl cursor-pointer font-extrabold">+</span>
        </button>
      </div>
      <CustomDataTable
        columns={columns}
        data={clientsListState?.response?.content}
        onDelete={handleDelete} 
        enableSearch={false}
        search={search}
        setSearch={setSearch}
        serverPagenation
        paginationTotalRows={clientsListState?.response?.totalElements}
        handleChangePage={handlePageChange}
        handleRowsChange={handleRowsChange}
      />

<AddClientModal
        initialValues={
          isModalOpen.title === "Add Client"
            ? initialValues
            : clientByIdReducer.byIdResponse
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
