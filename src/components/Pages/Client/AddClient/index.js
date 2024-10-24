import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Hoc from '../../../HOC';
import { MdDelete } from "react-icons/md";

// Validation Schema using Yup
const validationSchema = Yup.object({
  clientName: Yup.string().required('Client Name is required'),
  address: Yup.string().required('Address is required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  country: Yup.string().required('Country is required'),
  zip: Yup.string().required('ZIP is required'),
});

const AddClient = () => {
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('clients'));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  // Update localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (values, { resetForm }) => {
    setFormData([...formData, values]);
    resetForm();
    setIsModalOpen(false); // Close modal on submit
    console.log('Form values:', values);
  };

  // Handle row deletion
  const handleDelete = (indexToDelete) => {
    const updatedData = formData.filter((_, index) => index !== indexToDelete);
    setFormData(updatedData);
  };

  return (
    <div className="p-6 w-full">
      {/* Add Client Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add Client
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-medium">Add Client</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
            </div>

            <Formik
              initialValues={{
                clientName: '',
                address: '',
                addressLine2: '',
                city: '',
                state: '',
                country: '',
                zip: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="grid grid-cols-2 gap-4">
                <div>
                  <label className=" text-sm font-sm" htmlFor="clientName">
                    CLIENT NAME
                  </label>
                  <Field
                    name="clientName"
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <ErrorMessage name="clientName" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className=" text-sm font-sm" htmlFor="address">
                    ADDRESS
                  </label>
                  <Field
                    name="address"
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <ErrorMessage name="address" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className=" text-sm font-sm" htmlFor="addressLine2">
                    ADDRESS LINE 2
                  </label>
                  <Field
                    name="addressLine2"
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label className=" text-sm font-sm" htmlFor="city">
                    CITY
                  </label>
                  <Field
                    name="city"
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <ErrorMessage name="city" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className=" text-sm font-sm" htmlFor="state">
                    STATE
                  </label>
                  <Field
                    name="state"
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <ErrorMessage name="state" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className=" text-sm font-sm" htmlFor="country">
                    COUNTRY
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
                  <ErrorMessage name="country" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className=" text-sm font-sm" htmlFor="zip">
                    ZIP
                  </label>
                  <Field
                    name="zip"
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <ErrorMessage name="zip" component="div" className="text-red-500" />
                </div>

                <div className="col-span-2 flex justify-end mt-4">
                  <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                    Add Client
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      )}

      {/* Table for displaying form data */}
      {formData.length > 0 && (
        <table className="table-auto w-full mt-8">
          <thead>
            <tr>
              <th className="px-4 py-2">Client Name</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Address Line 2</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">ZIP</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((client, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{client.clientName}</td>
                <td className="border px-4 py-2">{client.address}</td>
                <td className="border px-4 py-2">{client.addressLine2}</td>
                <td className="border px-4 py-2">{client.city}</td>
                <td className="border px-4 py-2">{client.state}</td>
                <td className="border px-4 py-2">{client.country}</td>
                <td className="border px-4 py-2">{client.zip}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 text-center hover:text-red-700"
                  >
                    {/* Delete */}
                    <MdDelete size={24}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Hoc(AddClient);
