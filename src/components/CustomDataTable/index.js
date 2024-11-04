import React from "react";
import DataTable from "react-data-table-component";

const CustomDataTable = ({ columns, data }) => {
  const modifiedColumns = [
    ...columns,
  ];

  return (
    <DataTable
      columns={modifiedColumns}
      data={data}
      pagination
      striped
      highlightOnHover
    />
  );
};

export default CustomDataTable;




