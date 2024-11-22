import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Hoc from "../../../components/HOC";
import ModalComponent from "../../../components/Modal";
import { clientValidationSchema } from "../../../components/Helpers";
import CustomDataTable from "../../../components/CustomDataTable";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setResetStateClientsList, requestClientAction,requestClientsListAction,setResetStateClient } from "../../../Redux/ClientState/ClientActionCreator";
import Loader from "../../../components/Loader";

const AddClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const clientsListState = useSelector((state) => state.ClientsListReducer);
  const addClientReducer = useSelector((state) => state.ClientReducer);
  const [search, setSearch] = useState("");

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

  const handleSubmit = (values, { resetForm }) => {
    dispatch(requestClientAction(values));
    dispatch(requestClientsListAction());
    resetForm();
    setIsModalOpen(false);
  };

  const handleEdit = (row) => {
    // dispatch(requestUserById(row.id));
    console.log("handle edit");
  };

  const handleDelete = (idToDelete) => {
    console.log(idToDelete);
  };

  const handlePageChange = (page)=>{
    dispatch(requestClientsListAction({page: page, size: 5, search: search}));
  }

  const handleRowsChange = (size)=>{
    dispatch(requestClientsListAction({page: 0, size: size, search: ""}));
    setSearch("");
  }


  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(setResetStateClientsList());
    dispatch(requestClientsListAction({ page: clientsListState?.page, size: clientsListState?.size }));
    dispatch(setResetStateClient());
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(requestClientsListAction({ page: 0, size: clientsListState?.size, search: search }));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search]);
  
  return (
    <div className="p-2 w-full overflow-x-scroll overflow-y-hidden">
      <Loader isLoading={clientsListState?.loading} />
      <ModalComponent
        show={isModalOpen}
        onClose={handleClose}
        title={"Add Client"}
      >
        <Formik
          initialValues={{
            name: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            country: "",
            zip: "",
          }}
          validationSchema={clientValidationSchema} // Fixing the validation schema prop name
          onSubmit={handleSubmit}
        >
          {/* <Form className="grid grid-cols-2 gap-4 h-[52vh] "> */}
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh] overflow-y-scroll no-scrollbar">
            <div>
              <label className=" text-sm font-sm" htmlFor="clientName">
                Client Name
              </label>
              <Field
                name="name"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="addressLine1">
                Address
              </label>
              <Field
                name="addressLine1"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="addressLine1"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="addressLine2">
                Address Line 2
              </label>
              <Field
                name="addressLine2"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="city">
                City
              </label>
              <Field
                name="city"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="state">
                State
              </label>
              <Field
                name="state"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="country">
                Country
              </label>
              <Field
                as="select"
                name="country"
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="zip">
                Zip
              </label>
              <Field
                name="zip"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="zip"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-1 rounded-lg"
              >
                Add Client
              </button>
            </div>
          </Form>
        </Formik>
      </ModalComponent>
      
      {/* <div className="flex justify-end items-center mb-4"> */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl px-5 text-blue-900">Client Trak</h2>
        <button
          type="submit"
          onClick={()=>setIsModalOpen(true)}
          className="bg-blue-500 text-white py-1 px-4 rounded"
        >
          Add client
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
    </div>
  );
};

export default Hoc(AddClient);
