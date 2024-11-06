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
    <DataTable
      className="border-gray-400 border-2 radius-xl customBoder"
      columns={modifiedColumns}
      data={data}
      pagination
      striped
      highlightOnHover
      customStyles={customStyles}
    />
  );
};

export default CustomDataTable;




