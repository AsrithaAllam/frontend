import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaSearch } from "react-icons/fa"; // Import search icon


const CustomDataTable = ({ columns, 
                           data=[],
                           handleChangePage,
                           handleRowsChange,
                           serverPagenation,
                           paginationTotalRows}) => {
  const [search, setSearch] = useState("");
  const modifiedColumns = [
    ...columns,
  ];
  // const [search, setSearch] = useState("");
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

  const handlePageChange = (page) => {
    handleChangePage(page-1);
  };

  const handleRowsPerPage = (rowsPerPage) => {
    handleRowsChange(rowsPerPage);
  };

  // useEffect(() => {
  //   if (search) {
  //     const filtered = data.filter(
  //       (row) =>
  //         (row.firstName &&
  //           row.firstName.toLowerCase().includes(search.toLowerCase())) ||
  //         (row.lastName &&
  //           row.lastName.toLowerCase().includes(search.toLowerCase()))
  //     );
  //     setFilteredData(filtered);
  //   } else {
  //     setFilteredData(data);
  //   }
  // }, [search, data]);

  return (
    <div >
      <div className=" flex items-center float-left h-10 px-4 py-2 m-2 border-2 border-black rounded-full w-80">
        <input
          className=" w-full h-full text-sm p-1 border-none outline-none rounded-full focus:ring-0"
          placeholder="Search by name"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
         <FaSearch className=" text-gray-500 " />
      </div>
        <DataTable
          columns={columns}
          data={data || []}
          pagination
          paginationServer={serverPagenation}
          striped
          highlightOnHover
          customStyles={customStyles}
          paginationTotalRows={paginationTotalRows}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPage}
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
        />
    </div>
  );
};

export default CustomDataTable;
