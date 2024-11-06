import React, { useState } from "react";
import { HiDownload, HiTrash } from "react-icons/hi";
import Hoc from "../../../components/HOC";

const Documents = () => {
  const [selectedDocumentType, setSelectedDocumentType] = useState("Passport");
  const [startDate, setStartDate] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [statusCode, setStatusCode] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [savedFiles, setSavedFiles] = useState([
    { name: "Passport1", type: "Passport", expiryDate: "2025-12-31" },
    { name: "Visa", type: "Visa", expiryDate: "2023-11-15" },
    { name: "EAD1", type: "EAD", expiryDate: null },
  ]);

  const documentTypes = [
    { name: "Passport" },
    { name: "Visa" },
    { name: "I-20" },
    { name: "EAD" },
  ];

  const statusCodes = ["Active(A)", "Deactive(D)", "Closed(C)"];

  const handleDocumentTypeChange = (e) => {
    setSelectedDocumentType(e.target.value);
  };

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  const removeFile = (fileName) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName)
    );
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsUpdated(true);
    console.log({
      selectedDocumentType,
      startDate,
      issueDate,
      expiryDate,
      referenceId,
      statusCode,
      uploadedFiles,
    });
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
          onSubmit={handleUpdate}
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

          {/* For larger screens - side by side. For medium/small screens - one by one */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <label className="block text-gray-700">Document Type</label>
              <select
                id="documentType"
                value={selectedDocumentType}
                onChange={handleDocumentTypeChange}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {documentTypes.map((docType, index) => (
                  <option key={index} value={docType.name}>
                    {docType.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="startDate" className="block text-gray-700">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-full">
              <label htmlFor="issueDate" className="block text-gray-700">
                Issue Date
              </label>
              <input
                id="issueDate"
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-full">
              <label htmlFor="expiryDate" className="block text-gray-700">
                Expiry Date
              </label>
              <input
                id="expiryDate"
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-full">
              <label htmlFor="referenceId" className="block text-gray-700">
                Reference ID
              </label>
              <input
                id="referenceId"
                type="text"
                value={referenceId}
                onChange={(e) => setReferenceId(e.target.value)}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-full">
              <label className="block text-gray-700 mb-2">Status Code</label>
              <select
                id="statusCode"
                value={statusCode}
                onChange={(e) => setStatusCode(e.target.value)}
                className="w-full shadow border rounded py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Status Code</option>
                {statusCodes.map((code, index) => (
                  <option key={index} value={code}>
                    {code}
                  </option>
                ))}
              </select>
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
            </div>
          </div>

          <div className="w-full flex justify-end space-x-4">
            {/* <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-1 px-6 rounded"
            >
              Cancel
            </button> */}
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
