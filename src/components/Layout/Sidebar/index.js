import React, { useContext, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  LogoutIcon,
  DocumentIcon,
} from "@heroicons/react/outline";
import { getValuesFromLocalstorage } from "../../Helpers";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Adminnavigation = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    current: true,
    href: "/",
    children: false,
  },
  {
    name: "Employee",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Manage Employee", path: "/manageemployee" },
      // { name: "Add Project", path: "/addproject" },
      { name: "Add Employee Status", path: "/addemployeestatus" },
      // { name: "Update Project", path: "/updateproject" },
      { name: "View Invoices", path: "/viewinvoices" },
    ],
  },
  {
    name: "Client",
    icon: FolderIcon,
    current: false,
    href: "/addclient",
    children: false,
  },
  {
    name: "projects",
    icon: FolderIcon,
    current: false,
    href: "addproject",
    children: false,
  },
  {
    name: "Reports",
    icon: CalendarIcon,
    current: false,
    children: [
      { name: "Timesheet", path: "/timesheet" },
      { name: "Projects", path: "/projects" },
      { name: "Budget", path: "/budget" },
    ],
  },
  {
    name: "logout",
    icon: LogoutIcon,
    current: false,
    children: false,
  },
];

const empNavigation = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    current: true,
    href: "/",
    children: false,
  },
  {
    name: "Documents",
    icon: DocumentIcon,
    current: false,
    children: false,
    href: "/documents",
  },
  {
    name: "logout",
    icon: LogoutIcon,
    current: false,
    children: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const navigate = useNavigate();
  const [Navigation, setNavigation] = useState(
    getValuesFromLocalstorage("userDetails")?.acctType === "ADMIN"
      ? Adminnavigation
      : empNavigation
  );

  const handleLogout = (item) => {
    if (item.name === "logout") {
      Swal.fire({
        title:
          "<span style='color: #4e58a8; font-size: 20px; font-style: poppins'>Are you sure you want to Logout?</span>",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          navigate("/login");
        }
      });
    }
    console.log(item);
  };

  return (
    <div className="lg:w-1/6 border-r border-gray-200 bg-white h-full">
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1" aria-label="Sidebar">
          {Navigation?.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  onClick={() => handleLogout(item)}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-primary text-white hover:text-gray-900"
                      : "bg-primary text-white hover:bg-secondaryBlue hover:text-gray-900",
                    "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md my-3"
                  )}
                >
                  {/* Icon */}
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-white"
                        : "text-white group-hover:text-gray-500",
                      "mr-3 flex-shrink-0 h-5 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {/* Show text only on medium and large screens */}
                  <span className="hidden md:inline-block">{item.name}</span>
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? "bg-primary text-white "
                          : "bg-primary text-white hover:bg-secondaryBlue hover:text-gray-900",
                        "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 my-3"
                      )}
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-white group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      {/* Show text only on medium and large screens */}
                      <span className="hidden md:inline-block flex-1">
                        {item.name}
                      </span>
                      <svg
                        className={classNames(
                          open ? "text-gray-400 rotate-90" : "text-gray-300",
                          "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          href={subItem.path}
                          className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-white bg-primary rounded-md hover:text-black hover:bg-secondaryBlue"
                        >
                          {/* Only show text on medium and larger screens */}
                          <span className="hidden md:inline-block">
                            {subItem.name}
                          </span>
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
