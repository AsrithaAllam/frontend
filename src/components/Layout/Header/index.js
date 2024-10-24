import React from "react";
import { UserIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import data_cloud from "../../../Assets/data-cloud.jpeg";

function Header() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/profile");
  };

  return (
    <div className="h-[8vh] flex justify-between bg-primary w-full items-center px-4 md:px-10">
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
      <div className="flex items-center">
        {/* <UserIcon
          className="h-8 w-8 sm:h-8 sm:w-8  md:h-10 md:w-10 cursor-pointer text-white"
          onClick={handleNavigation}
        /> */}
         <svg onClick={handleNavigation}
         fill="black" viewBox="0 0 24 24"  className="h-9 w-9">
      <path
        fill="black"
        fillRule="evenodd"
        d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        clipRule="evenodd"
      />
      <path
        fill="black"
        fillRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
        clipRule="evenodd"
      />
    </svg>
      </div>
    </div>
  );
}

export default Header;
