import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Hoc from "../../../components/HOC";
import ModalComponent from "../../../components/Modal";
import { clientValidationSchema } from "../../../components/Helpers";
import CustomDataTable from "../../../components/CustomDataTable";

import { useDispatch, useSelector } from "react-redux";
import { setResetStateClientsList, requestClientAction,requestClientsListAction,setResetStateClient } from "../../../Redux/ClientState/ClientActionCreator";

const columns = [
  {
    name: 'Client Name',
    selector: row => row.clientName,
    sortable: true,
  },
  {
    name: 'Address',
    selector: row =>`${row.address}, ${row.city}, ${row.state},${row.country}`,
    sortable: true,
  },
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
];

const AddClient = () => {
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const clientsListState = useSelector((state) => state.ClientsListReducer);
  const addClientReducer = useSelector((state) => state.ClientReducer);

  const handleSubmit = (values, { resetForm }) => {
    setFormData([...formData, values]);
    dispatch(requestClientAction(values));
    dispatch(requestClientsListAction());
    resetForm();
    setIsModalOpen(false);
    console.log("Form values:", values);
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

  
  return (
    <div className="h-[92vh] mx-auto p-10">
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-20 right-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-5"
      >
        Add Client
      </button>
      <ModalComponent
        show={isModalOpen}
        onClose={handleClose}
        title={"Add Client"}
      >
        <Formik
          initialValues={{
            clientName: "",
            address: "",
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
                name="clientName"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="clientName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className=" text-sm font-sm" htmlFor="address">
                Address
              </label>
              <Field
                name="address"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <ErrorMessage
                name="address"
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
