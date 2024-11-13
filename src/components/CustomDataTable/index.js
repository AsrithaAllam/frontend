import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Loader from "../Loader";

const CustomDataTable = ({ columns, data }) => {
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

  return (
    <div>
      <input className="flex float-end h-6 p-4 m-2 border-2 border-black rounded" placeholder="search" type="text" />
    
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




