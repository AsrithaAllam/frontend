import React, { useState ,useEffect} from "react";
import Hoc from "../../../HOC";
import AddEmployeeModal from "./AddEmployeeModal";
import EditEmployeeModal from "./EditEmployeeModal";
import { FaEdit, FaTrash } from 'react-icons/fa';

const EmployeeTable = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [entries, setEntries] = useState(5); // Number of rows to display
  const [employees1, setEmployees1] = useState([]); 
  
  
  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees1");
    if (savedEmployees) {
      setEmployees1(JSON.parse(savedEmployees));
    }
  }, []); 

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const openEditModal = (employee) => {
    setSelectedEmployee(employee); // Set the selected employee data
    setIsEditModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEmployee(null); // Reset selected employee when closing modal
  };

  // Define handleEdit function outside of the closeEditModal function
  const handleEdit = (employee) => {
    setSelectedEmployee(employee); // Set the employee to be edited
    setIsEditModalOpen(true); // Open the edit modal
  };

  
  const handleAddEmployee = (newEmployee) => {
    const updatedEmployees = [
      ...employees1,
      { id: employees1.length + 1, ...newEmployee },
    ];
    setEmployees1(updatedEmployees);
    
    localStorage.setItem("employees1", JSON.stringify(updatedEmployees));
    
    setIsAddModalOpen(false); 
  };

  return (
    <div className="container h-[92vh] mx-auto p-4">
      <div className="flex justify-end">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={openAddModal}
      >
        Add Employee
      </button>
      </div>
  <table className="table-auto w-full">
  <thead>
    <tr>
      <th className="border px-4 py-2">Name</th>
      <th className="border px-4 py-2">Email</th>
      <th className="border px-4 py-2">Gender</th>
      <th className="border px-4 py-2 w-1/6">Join Date</th> 
      <th className="border px-4 py-2 w-1/6">End Date</th> 
      <th className="border px-4 py-2">Phone</th>
      <th className="border px-4 py-2">Account Type</th>
      <th className="border px-4 py-2">Status</th>
      <th className="border px-4 py-2">ReportsTo</th>
      <th className="border px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {employees1.slice(0, entries).map((employee) => (
      <tr key={employee.id}>
        <td className="border px-4 py-2">{employee.firstName} {employee.lastName}</td>
        <td className="border px-4 py-2">{employee.email}</td>
        <td className="border px-4 py-2">{employee.gender}</td>
        <td className="border px-4 py-2 w-1/6">{employee.joinDate}</td> 
        <td className="border px-4 py-2 w-1/6">{employee.endDate}</td>  
        <td className="border px-4 py-2">{employee.phone}</td>
        <td className="border px-4 py-2">{employee.accountType}</td>
        <td className="border px-4 py-2">{employee.status}</td>
        <td className="border px-4 py-2">{employee.reportsTo}</td>
        <td className="border px-4 py-2 text-center">
        <div className="flex justify-evenly">
          <button onClick={() => handleEdit(employee)} className="text-blue-500 hover:text-blue-700">
            <FaEdit size={20} />
          </button>
          <button className="text-red-500 hover:text-red-700">
              <FaTrash size={16} />
            </button>
            </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      {isAddModalOpen && <AddEmployeeModal show={isAddModalOpen} onClose={closeAddModal} onAddEmployee={handleAddEmployee}/>}
      {isEditModalOpen && selectedEmployee && (
        <EditEmployeeModal
          onClose={closeEditModal}
          employee={selectedEmployee} 
        />
      )}
    </div>
  );
};

export default Hoc(EmployeeTable);
