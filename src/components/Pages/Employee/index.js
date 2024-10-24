import React, { useState } from "react";

const EmployeeTable = () => {
  const [entries, setEntries] = useState(5); // Number of rows to display
  const [page, setPage] = useState(1); // Current page
  const totalPages = 7; // Assume there are 7 pages (or calculate dynamically based on data)

  const employees = [
    { id: 1, name: "Yogendra, Tyagi", email: "Yogendra377@gmail.com", gender: "M", joinDate: "08-31-2022", endDate: "12-30-2024", phone: "6099100540", accountType: "User", status: "A", role: "User" },
    { id: 2, name: "Yatheeswar, Guntko", email: "yatheeswar@gmail.com", gender: "M", joinDate: "09-23-2021", endDate: "12-26-2023", phone: "6092877677", accountType: "User", status: "D", role: "User" },
    { id: 3, name: "vinay kumar, saru", email: "vinay@unisoftllc.com", gender: "M", joinDate: "01-30-2021", endDate: "12-30-2024", phone: "6097322535", accountType: "User", status: "D", role: "User" },
    { id: 4, name: "Vijaya Kumar Reddy, Gatla", email: "vgtala65@gmail.com", gender: "M", joinDate: "07-31-2023", endDate: "12-28-2024", phone: "9989891918", accountType: "User", status: "A", role: "User" },
    { id: 5, name: "Veeraswamy, Veeramreddy", email: "veeraswamy4861@gmail.com", gender: "M", joinDate: "07-31-2024", endDate: "12-30-2025", phone: "6402294861", accountType: "User", status: "A", role: "User" },
    // Add more data as necessary
  ];

  const handleEdit = (id) => {
    // Handle edit action
    console.log(`Edit employee with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete action
    console.log(`Delete employee with id: ${id}`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Add</button>
        <div>
          <span className="mr-2">Show</span>
          <select className="border p-1 rounded" value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
          <span className="ml-2">Entries</span>
        </div>
      </div>

      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Employee Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Join Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Account Type</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.slice(0, entries).map((employee) => (
            <tr key={employee.id}>
              <td className="border border-gray-300 px-4 py-2">{employee.name}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.email}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.gender}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.joinDate}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.endDate}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.phone}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.accountType}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.status}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.role}</td>
              <td className="border border-gray-300 px-4 py-2 flex justify-around">
                <button onClick={() => handleEdit(employee.id)} className="bg-yellow-500 text-white py-1 px-2 rounded">Edit</button>
                <button onClick={() => handleDelete(employee.id)} className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <p>Showing 1 to {entries} of {employees.length} entries</p>
        <div className="flex space-x-2">
          <button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-gray-300 p-2 rounded">
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`p-2 rounded ${page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="bg-gray-300 p-2 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
