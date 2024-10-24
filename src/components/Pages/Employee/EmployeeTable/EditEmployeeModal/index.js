import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const EditEmployeeModal = ({ onClose, employee }) => {
  const EmployeeSchema = Yup.object().shape({
    userName: Yup.string().required('User name is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Edit Employee</h2>

        {/* Make sure the form is wrapped properly */}
        <Formik
          initialValues={{
            userName: employee.userName || '',
            firstName: employee.firstName || '',
            lastName: employee.lastName || '',
            email: employee.email || '',
            phone: employee.phone || ''
          }}
          validationSchema={EmployeeSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log('Form values:', values);
            setSubmitting(false);
            onClose(); // Close the modal after form submission
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-sm">User Name</label>
                <Field name="userName" className="w-full border px-3 py-2" />
                {errors.userName && touched.userName ? (
                  <div className="text-red-500 text-sm">{errors.userName}</div>
                ) : null}
              </div>
              {/* Add other fields similarly */}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
