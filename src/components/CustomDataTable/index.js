import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const CustomDataTable = ({ columns, data }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // const filteredData = data.filter(row =>

  // Object.values(row).some(value =>
  //   value && value.toString().toLowerCase().includes(search.toLowerCase())
  // )
  // );

  const customStyles = {
    rows: {
      style: {
        fontSize: "0.8rem",
      },
    },
    headCells: {
      style: {
        fontSize: "0.8rem",
        backgroundColor: "black",
        color: "white",
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
      },
    },
  };
 
  useEffect(() => {
    if (search !== "") {
      const dummyData = data.filter((row) => {
        
        if (row.firstName.includes(search)) {
          return row;
        }
      });
      setFilteredData(dummyData);
    } else {
      setFilteredData(data);
      console.log(data, "hi");
    }
  }, [search]);

  return (
    <div>
      <input
        className="flex float-end h-6 p-4 m-2 border-2 border-black rounded"
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <DataTable
        className="border-gray-400 border-2 radius-xl customBoder"
        columns={columns}
        data={filteredData}
        pagination
        striped
        highlightOnHover
        customStyles={customStyles}
        // noDataComponent={filteredData.length === 0 ? "No matching data found" : ""}
      />
    </div>
  );
};

export default CustomDataTable;
