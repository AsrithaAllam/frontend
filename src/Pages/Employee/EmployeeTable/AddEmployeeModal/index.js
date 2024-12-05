import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch ,useSelector} from "react-redux";
import { AddUserSchema, EditUserSchema } from "../../../../components/Helpers";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalComponent from "../../../../components/Modal";
import {
  requestUserAction,
  requestUsersListAction,
  } from "../../../../Redux/UserState/UserActionCreator";
import { toast } from "react-toastify";

const reportsToOptions = ["John Doe", "Jane Smith", "Michael Johnson"];
const countryOptions = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "India",
];

const AddEmployeeModal = ({
  onClose,
  show,
  onAddEmployee,
  title,
  initialValues,
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  

  const handleAdd = () => {
    setSelectedEmployee(null);
    setIsAddModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsAddModalOpen(false);
    onClose();
  };
 
 
  return (
    <ModalComponent show={show} onClose={onClose} title={title}>
      <Formik
        initialValues={initialValues}
        validationSchema={
          title === "Add Employee" ? AddUserSchema : EditUserSchema
        }
        onSubmit={(values) => {
          const changedKeys = Object.keys(values).filter(
            (key) => values[key] != initialValues[key]
          );

          const changedValues = {};
          changedKeys.forEach((key) => {
            if (key === "joinDate" || key === "endDate") {
              changedValues[key] = `${values[key]}T00:00:00`;
            } else {
              changedValues[key] = values[key];
            }
          });
          onAddEmployee(changedValues);
        }}
      >
        {({ errors, touched, handleChange }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh] overflow-y-scroll no-scrollbar">
            <div>
              <label className=" text-gray-700 text-sm">User Name</label>
              <Field
                id="userName"
                name="userName"
                className="w-full border border-gray-300 p-1 rounded "
                placeholder="User Name"
              />
              {errors.userName && touched.userName && (
                <div className="text-red-500 text-sm">{errors.userName}</div>
              )}
            </div>

            <div>
              <label className=" text-gray-700 text-sm">Password</label>
              <Field
                id="pwd"
                name="password"
                type="password"
                className="w-full border border-gray-300 p-1 rounded"
                placeholder="Password"
                disabled={title === "Edit Employee"}
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm">{errors.password}</div>
              )}
            </div>
 
            <div>
              <label className=" text-gray-700 text-sm">First Name</label>
              <Field
                id="firstName"
                name="firstName"
                className="w-full border border-gray-300 p-1 rounded"
                placeholder="First Name"
                // disabled={title === "Edit Employee"}
              />
              {errors.firstName && touched.firstName && (
                <div className="text-red-500 text-sm">{errors.firstName}</div>
              )}
            </div>

            <div>
              <label className=" text-gray-700 text-sm">Last Name</label>
              <Field
                id="lastName"
                name="lastName"
                className="w-full border border-gray-300 p-1 rounded"
                placeholder="Last Name"
              />
              {errors.lastName && touched.lastName && (
                <div className="text-red-500 text-sm">{errors.lastName}</div>
              )}
            </div>

            {/* Gender Field in one row */}
            <div className="md:col-span-2">
              <label className=" text-gray-700 text-sm cursor-default">
                Gender
              </label>
              <div className="flex items-center  space-x-6">
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="gender"
                    value="M"
                    id="gender-male"
                  />
                  <span className="ml-2 text-sm">Male</span>
                </label>
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="gender"
                    value="F"
                    id="gender-female"
                  />
                  <span className="ml-2 text-sm">Female</span>
                </label>
              </div>
              {errors.gender && touched.gender && (
                <div className="text-red-500 text-sm">{errors.gender}</div>
              )}
            </div>

            {/* Join Date and End Date in one row */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-gray-700 text-sm">Join Date</label>
                <Field
                  id="joinDate"
                  name="joinDate"
                  type="date"
                  className="w-full border border-gray-300 p-1 rounded"
                  // onChange={(value)=>{console.log(value.target.value, "vlp")}}
                />
                {errors.joinDate && touched.joinDate && (
                  <div className="text-red-500 text-sm">{errors.joinDate}</div>
                )}
              </div>

              <div>
                <label className=" text-gray-700 text-sm">End Date</label>
                <Field
                  id="endDate"
                  name="endDate"
                  type="date"
                  className="w-full border border-gray-300 p-1 rounded"
                />
                {errors.endDate && touched.endDate && (
                  <div className="text-red-500 text-sm">{errors.endDate}</div>
                )}
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-gray-700 text-sm">Account Type</label>
                <div className="flex items-center ">
                  <label className="mr-4">
                    <Field type="radio" name="acctType" value="USER" />
                    <span className="ml-2 text-sm">User</span>
                  </label>
                  <label className="mr-4">
                    <Field type="radio" name="acctType" value="ADMIN" />
                    <span className="ml-2 text-sm">Admin</span>
                  </label>
                  <label>
                    <Field type="radio" name="acctType" value="EMPADMIN" />
                    <span className="ml-2">Employee Admin</span>
                  </label>
                </div>
                {errors.acctType && touched.acctType && (
                  <div className="text-red-500 text-sm">{errors.acctType}</div>
                )}
              </div>

              <div>
                <label className=" text-gray-700 text-sm">Status</label>
                <div className="flex items-center ">
                  <label className="mr-4">
                    <Field type="radio" name="stsCd" value="A" />
                    <span className="ml-2 text-sm">Active</span>
                  </label>
                  <label>
                    <Field type="radio" name="stsCd" value="N" />
                    <span className="ml-2 text-sm">Deactive</span>
                  </label>
                </div>
                {errors.stsCd && touched.stsCd && (
                  <div className="text-red-500 text-sm">{errors.stsCd}</div>
                )}
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-gray-700 text-sm">Phone</label>
                <Field
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 p-1 rounded"
                  placeholder="Phone Number"
                />
                {errors.phone && touched.phone && (
                  <div className="text-red-500 text-sm">{errors.phone}</div>
                )}
              </div>

              <div>
                <label className=" text-gray-700 text-sm">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 p-1 rounded"
                  placeholder="Email"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-gray-700 text-sm">Address</label>
                <Field
                  id="address"
                  name="addressLine1"
                  className="w-full border border-gray-300 p-1 rounded"
                  placeholder="Address"
                />
                {errors.addressLine1 && touched.addressLine1 && (
                  <div className="text-red-500 text-sm">
                    {errors.addressLine1}
                  </div>
                )}
              </div>

              <div>
                <label className=" text-gray-700 text-sm">Address Line 2</label>
                <Field
                  id="addressLine2"
                  name="addressLine2"
                  className="w-full border border-gray-300 p-1 rounded"
                  placeholder="Address Line 2"
                />
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-gray-700 text-sm">City</label>
                <Field
                  id="city"
                  name="city"
                  className="w-full border border-gray-300 p-1 rounded"
                  placeholder="City"
                />
                {errors.city && touched.city && (
                  <div className="text-red-500 text-sm">{errors.city}</div>
                )}
              </div>

              <div>
                <label className=" text-gray-700 text-sm">State</label>
                <Field
                  id="state"
                  name="state"
                  className="w-full border border-gray-300 p-1 rounded"
                  placeholder="State"
                />
                {errors.state && touched.state && (
                  <div className="text-red-500 text-sm">{errors.state}</div>
                )}
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-gray-700 text-sm">Country</label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="w-full border border-gray-300 p-1 rounded"
                >
                  <option value="">Select Country</option>
                  {countryOptions.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </Field>
                {errors.country && touched.country && (
                  <div className="text-red-500 text-sm">{errors.country}</div>
                )}
              </div>

              <div>
                <label className=" text-gray-700 text-sm">ZIP Code</label>
                <Field
                  id="zip"
                  name="zip"
                  className=" w-full border border-gray-300 p-1 rounded"
                  placeholder="ZIP Code"
                />
                {errors.zip && touched.zip && (
                  <div className="text-red-500 text-sm">{errors.zip}</div>
                )}
              </div>
            </div>

            {/* <div className="md:col-span-2">
                  <label className=" text-gray-700 text-sm">Reports To</label>
                  <Field
                    as="select"
                    id="reportsTo"
                    name="reportsTo"
                    className="w-full border border-gray-300 p-1 rounded"
                  >
                    <option value="">Select Manager</option>
                    {reportsToOptions.map((manager, index) => (
                      <option key={index} value={manager}>
                        {manager}
                      </option>
                    ))}
                  </Field>
                  {errors.reportsTo && touched.reportsTo && (
                    <div className="text-red-500 text-sm">
                      {errors.reportsTo}
                    </div>
                  )}
                </div> */}

            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 mr-2"
                onClick={handleCloseModals}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={`py-2 px-4 rounded text-white ${
                  isSubmitting
                    ? "bg-blue-300 cursor-not-allowed opacity-50"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalComponent>
  );
};

export default AddEmployeeModal;
