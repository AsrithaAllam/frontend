import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Loader from "../Loader";

const CustomDataTable = ({ columns, data }) => {
  const [search, setSearch] = useState("");
  const modifiedColumns = [
    ...columns,
  ];

  const customStyles = {
    rows: {
      style: {
        // fontFamily: 'Poppins',
        fontSize:'0.8rem',
      },
    },
    headCells: {
      style: {
        fontSize: "0.8rem",
        // height: "7vh",
        backgroundColor:"black",
        color: "white"
      },
    },
    cells: {
      style: {
        fontSize: "0.8rem",
      },
    },
    pagination: {
      style: {
        fontSize: "0.8rem",
        // height: "7vh"
      },
    },
  };
  const handleSearch = () => {
    console.log("Searching for:", search);
  }

  return (
  
    <div className="flex-row justify-items-center space-x-2">
    <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 mb-4 border border-gray-400 rounded"
      />
      <button
          onClick={handleSearch}
          className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Search
        </button>
    <DataTable
      className="border-gray-400 border-2 radius-xl customBoder"
      columns={modifiedColumns}
      data={data}
      pagination
      striped
      highlightOnHover
      customStyles={customStyles}
    />
    </div>
  );
};

export default CustomDataTable;




