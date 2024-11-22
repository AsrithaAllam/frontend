import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaSearch } from "react-icons/fa"; // Import search icon

const CustomDataTable = ({ columns, data }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

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
    if (search) {
      const filtered = data.filter(
        (row) =>
          (row.firstName &&
            row.firstName.toLowerCase().includes(search.toLowerCase())) ||
          (row.lastName &&
            row.lastName.toLowerCase().includes(search.toLowerCase()))
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [search, data]);

  return (
    <div >
      <div className=" flex items-center float-right h-10 px-4 py-2 m-2 border-2 border-black rounded-full w-80">
        <input
          className=" w-full h-full text-sm border-none outline-none rounded-full focus:ring-0"
          placeholder="Search by first name or last name"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
         <FaSearch className=" text-gray-500 " />
      </div>
      {search && filteredData.length === 0 ? (
        <p className="text-center mt-4">No matching data found</p>
      ) : (
        <DataTable
          columns={columns}
          data={filteredData || []}
          pagination
          striped
          highlightOnHover
          customStyles={customStyles}
        />
      )}
    </div>
  );
};

export default CustomDataTable;
