import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import data_cloud from "../../../Assets/data-cloud.png";
import { UserCircleIcon } from "@heroicons/react/outline";

function Header() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menu, setMenu] = useState([
    {
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Settings",
      path: "/updatePassword",
    },
    {
      name: "Logout",
      path: "logout",
    },
  ]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.reload();
        // navigate('/login');
      }
    });
  };

  const handleNavigation = (path) => {
    if (path === "logout") {
      handleLogout();
    } else {
      navigate(path);
      setDropdownOpen(false);
    }
  };

  return (
    <div className="h-[10vh] flex justify-between items-center px-4 md:px-10 bg-gradient-to-r from-blue-700 to-purple-300 text-gray-200 shadow-md">
      <div className="flex items-center">
        <img
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 p-1 rounded-lg bg-slate-50"
          src={data_cloud}
          alt="Workflow"
        />
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white pl-2 sm:pl-3 md:pl-4">
          TimeTrak DataCloud
        </h3>
      </div>
      <div className="relative flex items-center">
        <UserCircleIcon
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="h-12 w-12 text-gray-500 cursor-pointer hover:text-gray-400 transition-colors duration-200"
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-40 w-48 bg-white text-gray-900 rounded-md shadow-lg z-20 transition-opacity duration-200 ease-in-out">
            <div className="">
              {menu.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  className={`block px-4 py-2 text-sm ${
                    item.path === "logout"
                      ? "hover:bg-red-600 hover:text-white"
                      : "hover:bg-blue-600 hover:text-white"
                  } hover:text-white rounded-none transition-colors duration-200 w-full text-left`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
