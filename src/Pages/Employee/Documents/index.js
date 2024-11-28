import React, { useState } from "react";
import { HiDownload, HiTrash } from "react-icons/hi";
import { useFormik } from "formik";
import { documentValidationSchema } from "../../../components/Helpers"; 
import Hoc from "../../../components/HOC";

const Documents = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [savedFiles, setSavedFiles] = useState([
    { name: "Passport1", type: "Passport", expiryDate: "2025-12-31" },
    { name: "Visa", type: "Visa", expiryDate: "2023-11-15" },
    { name: "EAD1", type: "EAD", expiryDate: null },
  ]);

  const formik = useFormik({
    initialValues: {
      documentType: "Passport",
      startDate: "",
      issueDate: "",
      expiryDate: "",
      referenceId: "",
      statusCode: "",
    },
    validationSchema: documentValidationSchema, // Apply schema
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      console.log("Uploaded Files", uploadedFiles);
    },
  });

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  const removeFile = (fileName) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName)
    );
  };

  return (
    <div className="w-5/6 mx-auto my-10 space-y-6 h-[78vh] p-4 overflow-y-scroll bg-white rounded-lg shadow-lg">
      {/* Saved Files Section */}
      <div className="bg-white shadow-md rounded-lg px-10 py-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">
          Documents List
        </h3>
        <div className="space-y-2">
          {savedFiles.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm"
            >
              <div>
                <p className="text-gray-700 font-semibold">Name: {item.name}</p>
                <p className="text-gray-600">Type: {item.type}</p>
                <p className="text-gray-500">
                  Expiry Date: {item.expiryDate || "N/A"}
                </p>
              </div>
              <button className="bg-primary rounded p-2 text-white hover:bg-blue-600 transition">
                <HiDownload />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-md rounded-lg px-6 py-2">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">Documents</h3>
        <form
          className="flex flex-col space-y-4"
          onSubmit={formik.handleSubmit}
        >
          {uploadedFiles.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800">
                Uploaded Documents:
              </h4>
              <ul className="list-disc pl-5 text-gray-600">
                {uploadedFiles.map((file) => (
                  <li
                    key={file.name}
                    className="flex items-center justify-between"
                  >
                    <span>{file.name}</span>
                    <button
                      onClick={() => removeFile(file.name)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <HiTrash />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Form Fields */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <label className="block text-gray-700">Document Type</label>
              <select
                id="documentType"
                name="documentType"
                value={formik.values.documentType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Document Type</option>
                {["Passport", "Visa", "I-20", "EAD"].map((docType, index) => (
                  <option key={index} value={docType}>
                    {docType}
                  </option>
                ))}
              </select>
              {formik.touched.documentType && formik.errors.documentType ? (
                <p className="text-red-500 text-sm">{formik.errors.documentType}</p>
              ) : null}
            </div>
            <div className="w-full">
              <label htmlFor="startDate" className="block text-gray-700">
                Start Date
              </label>
              <input
                id="startDate"
                type="Date"
                value={formik.values.startDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.startDate && formik.errors.startDate ? (
                <p className="text-red-500 text-sm">{formik.errors.startDate}</p>
              ) : null}
            </div>
            <div className="w-full">
              <label htmlFor="issueDate" className="block text-gray-700">
                Issue Date
              </label>
              <input
                id="issueDate"
                type="Date"
                value={formik.values.issueDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.issueDate && formik.errors.issueDate ? (
                <p className="text-red-500 text-sm">{formik.errors.issueDate}</p>
              ) : null}
            </div>

            <div className="w-full">
              <label htmlFor="expiryDate" className="block text-gray-700">
                Expiry Date
              </label>
              <input
                id="expiryDate"
                type="date"
                value={formik.values.expiryDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.expiryDate && formik.errors.expiryDate ? (
                <p className="text-red-500 text-sm">{formik.errors.expiryDate}</p>
              ) : null}
            </div>

            <div className="w-full">
              <label htmlFor="referenceId" className="block text-gray-700">
                Reference ID
              </label>
              <input
                id="referenceId"
                type="text"
                value={formik.values.referenceId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.referenceId && formik.errors.referenceId ? (
                <p className="text-red-500 text-sm">{formik.errors.referenceId}</p>
              ) : null}
            </div>

            <div className="w-full">
              <label className="block text-gray-700">status Code</label>
              <select
                id="statusCode"
                name="statusCode"
                value={formik.values.statusCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select  Status Code</option>
                {["Passport", "Visa", "I-20", "EAD"].map((stsCd, index) => (
                  <option key={index} value={stsCd}>
                    {stsCd}
                  </option>
                ))}
              </select>
              {formik.touched.statusCode && formik.errors.statusCode ? (
                <p className="text-red-500 text-sm">{formik.errors.statusCode}</p>
              ) : null}
            </div>

            <div className="w-full">
              <label className="block text-gray-700 mb-2">Choose Documents</label>
              <input
                id="documents"
                type="file"
                multiple
                onChange={handleFileChange}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.documents && formik.errors.documents ? (
                <p className="text-red-500 text-sm">{formik.errors.documents}</p>
              ) : null}
            </div>

          </div>

          <div className="w-full flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-sm py-1 px-2 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-sm py-1 px-2 rounded"
            >
              Save Excel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hoc(Documents);
