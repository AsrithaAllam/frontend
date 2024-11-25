import React from "react";
import DataTable from "react-data-table-component";
import { FaSearch } from "react-icons/fa";

const CustomDataTable = ({
  columns,
  data = [],
  enableSearch = false,
  search,
  setSearch,
  serverPagenation = false,
  paginationTotalRows,
  handleChangePage,
  handleRowsChange,
}) => {
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
        position: "sticky",
        top: 0,
        zIndex: 0,
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
    handleChangePage(page - 1);
  };

  const handleRowsPerPage = (rowsPerPage) => {
    handleRowsChange(rowsPerPage);
  };

  return (
    <div className="relative flex flex-col">
      <div className="flex items-center float-left h-10 px-4 py-2 m-2 border-2 border-black rounded-full w-80">
        <input
          className="w-full h-full text-sm p-1 border-none outline-none rounded-full focus:ring-0"
          placeholder="Search by name"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="text-gray-500" />
      </div>
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationServer={serverPagenation}
          striped
          highlightOnHover
          customStyles={customStyles}
          paginationTotalRows={paginationTotalRows}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPage}
          paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30, 35]}
          fixedHeader fixedHeaderScrollHeight=
          '74vh'
        />
         
      </div>
  );
};

CustomDataTable.defaultProps = {
  data: [],
};

export default CustomDataTable;
