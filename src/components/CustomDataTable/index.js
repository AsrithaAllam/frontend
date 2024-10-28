
import React from "react";
import DataTable from "react-data-table-component";
import { MdDelete } from "react-icons/md";

const CustomDataTable = ({ columns, data, onDelete }) => {
  const modifiedColumns = [
    ...columns,
    {
      name: 'Action',
      cell: row => (
        <button onClick={() => onDelete(row.id)} className="text-red-500 hover:text-red-700">
          <MdDelete size={24} />
        </button>
      ),
    },
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
