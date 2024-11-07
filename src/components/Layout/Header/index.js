import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import data_cloud from "../../../Assets/data-cloud.jpeg";

function Header() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to Logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.reload();
        // navigate('/login'); 
      }
    });
  };

  const handleNavigation = (path) => {
    setDropdownOpen(false); 
    navigate(path);
  };

  return (
    <div className="h-[8vh] flex justify-between items-center px-4 md:px-10 bg-gradient-to-r from-blue-900 to-gray-900 text-gray-200 shadow-md">
      <div className="flex items-center">
        <img
          className="h-6 w-auto sm:h-8 md:h-10"
          src={data_cloud}
          alt="Workflow"
        />
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white pl-2 sm:pl-3 md:pl-4">
          TimeTrak DataCloud
        </h3>
      </div>
      <div className="relative flex items-center">
        <svg 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          fill="white"
          viewBox="0 0 24 24"
          className="h-9 w-9 cursor-pointer hover:text-gray-400 transition-colors duration-200"
        >
          <path
            fill="white"
            fillRule="evenodd"
            d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
            clipRule="evenodd"
          />
          <path
            fill="white"
            fillRule="evenodd"
            d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
            clipRule="evenodd"
          />
        </svg>
        {dropdownOpen && (
          <div className="absolute right-0 mt-40 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-20 transition-opacity duration-200 ease-in-out">
            <div className="py-2">
              <button
                onClick={() => handleNavigation("/profile")}
                className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white rounded-md transition-colors duration-200 w-full text-left"
              >
                Profile
              </button>
              <button
                onClick={() => handleNavigation("/updatePassword")}
                className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white rounded-md transition-colors duration-200 w-full text-left"
              >
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm hover:bg-red-600 hover:text-white rounded-md transition-colors duration-200 w-full text-left"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
