import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import Hoc from "../../../HOC";
import ModalComponent from "../../../Modal";
import { employeeValidationSchema } from "../../../Helpers";
import CustomDataTable from "../../../CustomDataTable";
import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {setResetStateUser,requestUserAction} from "../../../../Redux/UserState/UserActionCreator";

const columns = [
    {
      name: 'UserName',
      selector: row => row.userName,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Gender',
      selector: row => row.gender,
      sortable: true,
    },
    {
      name: 'JoinDate',
      selector: row => row.joinDate,
      sortable: true,
    },
    {
      name: 'EndDate',
      selector: row => row.endDate,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
      sortable: true,
    },
    {
        name: 'AccountType',
        selector: row => row.accountType,
        sortable: true,
      },
      {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
      },
      {
        name: 'ReportsTo',
        selector: row => row.reportsTo,
        sortable: true,
      },
  ];

  const AddEmployee = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userState = useSelector((state) => state.UserReducer);
    
 
    const handleSubmit = (values, { resetForm }) => {
        console.log("Submit button clicked in handlesubmit");
        dispatch(requestUserAction(values));
        setFormData([...formData, values]);
        resetForm();
        setIsModalOpen(false);
        console.log("Form values:", formData);
      };

      const handleDelete = (idToDelete) => {
        const updatedData = formData.filter((item) => item.id !== idToDelete);
        setFormData(updatedData);
      };

      const handleClose = () => {
        setIsModalOpen(false);
      };

      useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("employees"));
        if (storedData) {
          setFormData(storedData);
        }
      }, []);

      useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(formData));
      }, [formData]);

      useEffect(() => {
        if (userState.data) {
            toast.success("Employee added successfully");
            dispatch(setResetStateUser()); 
        }
        if (userState.error) {
            toast.error("Error adding employee");
        }
    }, [userState.data, userState.error, dispatch]);

      return (
        <div className="h-[92vh] mx-auto p-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-20 right-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-5"
          >
            Add Employee
          </button>
          <ModalComponent
            show={isModalOpen}
            onClose={handleClose}
            title={"Add Employee"}
          >
            <Formik
          initialValues={{
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            gender: "",
            joinDate: "",
            endDate: "",
            accountType: "",
            status: "",
            phone: "",
            email: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            country: "",
            zip: "",
            reportsTo: "",
          }}
          validationSchema={employeeValidationSchema}
          onSubmit={handleSubmit}
          >
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh] overflow-y-scroll no-scrollbar">
                <div>
                  <label className=" text-gray-700 text-sm" htmlFor="userName">User Name</label>
                  <Field
                    id="userName"
                    name="userName"
                    type="text"
                    className="w-full border border-gray-300 p-1 rounded "
                    placeholder="User Name"
                  />
                  <ErrorMessage
                name="userName"
                component="div"
                className="text-red-500"
              />
                </div>

                <div>
                  <label className=" text-gray-700 text-sm" htmlFor="password">Password</label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className="w-full border border-gray-300 p-1 rounded"
                    placeholder="Password"
                  />
                 <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
                </div>

                <div>
                  <label className=" text-gray-700 text-sm" htmlFor="firstName">First Name</label>
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="w-full border border-gray-300 p-1 rounded"
                    placeholder="First Name"
                  />
                  <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
                </div>

                <div>
                  <label className=" text-gray-700 text-sm" htmlFor="lastName">Last Name</label>
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="w-full border border-gray-300 p-1 rounded"
                    placeholder="Last Name"
                  />
                  <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
                </div>

                {/* Gender Field in one row */}
                <div className="md:col-span-2">
                  <label className=" text-gray-700 text-sm cursor-default" htmlFor="gender">
                    Gender
                  </label>
                  <div className="flex items-center  space-x-6">
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="Male"
                      />
                      <span className="ml-2 text-sm">Male</span>
                    </label>
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="Female"
                      />
                      <span className="ml-2 text-sm">Female</span>
                    </label>
                  </div>
                  <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500"
              />
                </div>

                {/* Join Date and End Date in one row */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className=" text-gray-700 text-sm" htmlFor="joinDate">Join Date</label>
                    <Field
                      id="joinDate"
                      name="joinDate"
                      type="date"
                      className="w-full border border-gray-300 p-1 rounded"
                    />
                    <ErrorMessage
                name="joinDate"
                component="div"
                className="text-red-500"
              />
                  </div>

                  <div>
                    <label className=" text-gray-700 text-sm" htmlFor="endDate">End Date</label>
                    <Field
                      id="endDate"
                      name="endDate"
                      type="date"
                      className="w-full border border-gray-300 p-1 rounded"
                    />
                    <ErrorMessage
                name="endDate"
                component="div"
                className="text-red-500"
              />
                  </div>
                </div>

                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className=" text-gray-700 text-sm" htmlFor="accountType">
                      Account Type
                    </label>
                    <div className="flex items-center ">
                      <label className="mr-4">
                        <Field type="radio" name="accountType" value="User" />
                        <span className="ml-2 text-sm">User</span>
                      </label>
                      <label className="mr-4">
                        <Field type="radio" name="accountType" value="Admin"/>
                        <span className="ml-2 text-sm">Admin</span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="accountType"
                          value="Employee Admin"
                          id="accountType"
                        />
                        <span className="ml-2">Employee Admin</span>
                      </label>
                    </div>
                    <ErrorMessage
                name="accountType"
                component="div"
                className="text-red-500"
              />
                  </div>

                  <div>
                    <label className=" text-gray-700 text-sm" htmlFor="status">Status</label>
                    <div className="flex items-center ">
                      <label className="mr-4">
                        <Field type="radio" name="status" value="Active" />
                        <span className="ml-2 text-sm">Active</span>
                      </label>
                      <label>
                        <Field type="radio" name="status" value="Inactive" />
                        <span className="ml-2 text-sm">Deactive</span>
                      </label>
                    </div>
                    <ErrorMessage
                name="status"
                component="div"
                className="text-red-500"
              />
                  </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className=" text-gray-700 text-sm" htmlFor="phone">Phone</label>
                    <Field
                      id="phone"
                      name="phone"
                      type="number"
                      className="w-full border border-gray-300 p-1 rounded"
                      placeholder="Phone Number"
                    />
                    <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500"
              />
                  </div>

                  <div>
                    <label className=" text-gray-700 text-sm" htmlFor="email">Email</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="w-full border border-gray-300 p-1 rounded"
                      placeholder="Email"
                    />
                    <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
                  </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className=" text-gray-700 text-sm" htmlFor="address1">Address</label>
                    <Field
                      id="address1"
                      name="address1"
                      className="w-full border border-gray-300 p-1 rounded"
                      placeholder="Address"
                    />
                    <ErrorMessage
                name="address1"
                component="div"
                className="text-red-500"
              />
                  </div>

                  <div>
                    <label className=" text-gray-700 text-sm" htmlFor="address2">
                      Address Line 2
                    </label>
                    <Field
                      id="address2"
                      name="address2"
                      className="w-full border border-gray-300 p-1 rounded"
                      placeholder="Address Line 2"
                    />
                    <ErrorMessage
                name="address2"
                component="div"
                className="text-red-500"
              />
                  </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className=" text-gray-700 text-sm" htmlFor="city">City</label>
                    <Field
                      id="city"
                      name="city"
                      type="string"
                      className="w-full border border-gray-300 p-1 rounded"
                      placeholder="City"
                    />
                    <ErrorMessage
                name="city"
                component="div"
                className="text-red-500"
              />
                  </div>

                  <div>
                    <label className=" text-gray-700 text-sm" htmlFor="state">State</label>
                    <Field
                      id="state"
                      name="state"
                      type="text"
                      className="w-full border border-gray-300 p-1 rounded"
                      placeholder="State"
                    />
                   <ErrorMessage
                name="state"
                component="div"
                className="text-red-500"
              />
                  </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label className=" text-gray-700 text-sm" htmlFor="zip">ZIP Code</label>
                    <Field
                      id="zip"
                      name="zip"
                      className=" w-full border border-gray-300 p-1 rounded"
                      placeholder="ZIP Code"
                    />
                    <ErrorMessage
                name="zip"
                component="div"
                className="text-red-500"
              />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className=" text-gray-700 text-sm" htmlFor="reportsTo">Reports To</label>
                  <Field
                    as="select"
                    id="reportsTo"
                    name="reportsTo"
                    className="w-full border border-gray-300 p-1 rounded"
                  >
                    <option value="">- Select Manager -</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
                <option value="Michael Johnson">Michael Johnson</option>
                </Field>
                  <ErrorMessage
                name="reportsTo"
                component="div"
                className="text-red-500"
              />
                </div>

                <div className="col-span-2 flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 mr-2"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-1  hover:bg-blue-700 rounded-lg"
                    > 
                    Submit
                  </button>
                </div>
              </Form>
          </Formik>

          </ModalComponent>

<CustomDataTable
  columns={columns}
  data={formData}
  onDelete={handleDelete} 
/>
</div> 
  )}

  export default Hoc(AddEmployee);