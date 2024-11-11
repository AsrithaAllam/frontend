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


  // {
  //   name: 'City',
  //   selector: row => row.city,
  //   sortable: true,
  // },
  // {
  //   name: 'State',
  //   selector: row => row.state,
  //   sortable: true,
  // },
  // {
  //   name: 'Country',
  //   selector: row => row.country,
  //   sortable: true,
  // },
  // {
  //   name: 'ZIP',
  //   selector: row => row.zip,
  //   sortable: true,
  // },


const AddClient = () => {
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const clientsListState = useSelector((state) => state.ClientsListReducer);
  const addClientReducer = useSelector((state) => state.ClientReducer);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSubmit = (values, { resetForm }) => {
    setFormData([...formData, values]);
    dispatch(requestClientAction(values));
    dispatch(requestClientsListAction());
    resetForm();
    setIsModalOpen(false);
    console.log("Form values:", values);
  };

  const handleEdit = (row) => {
    // dispatch(requestUserById(row.id));
    console.log("handle edit");
  };

  const handleDelete = (idToDelete) => {
    const updatedData = formData.filter((item) => item.id !== idToDelete);
    setFormData(updatedData);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    dispatch(setResetStateClientsList());
    dispatch(requestClientsListAction());
    dispatch(setResetStateClient());
  }, []);

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("clients"));
  //   if (storedData) {
  //     setFormData(storedData);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("clients", JSON.stringify(formData));
  // }, [formData]);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    
  }; 
  return (
    <div className="p-2 w-full overflow-x-scroll overflow-y-hidden">
      
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
          <Form className="grid grid-cols-2 gap-4 h-[52vh] ">
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
        <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-1 border-2 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Search
        </button>
      </div>
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
        // data={formData}
        data={clientsListState?.clientsResponse || []}
        onDelete={handleDelete} 
      />
    </div>
  );
};

export default Hoc(AddClient);
