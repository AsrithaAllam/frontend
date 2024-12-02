import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  HomeIcon, UsersIcon, FolderIcon, CalendarIcon,
  LogoutIcon, DocumentIcon, BriefcaseIcon, ClipboardListIcon
} from "@heroicons/react/outline";
import { getValuesFromLocalstorage } from "../../Helpers";

const AdminNavigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/', children: false },
  {
    name: 'Employee', icon: UsersIcon, children: false, href:'/manageemployee'
      // { name: 'Manage Employee', path: '/manageemployee' },
      // { name: 'Add Employee Status', path: '/addemployeestatus' },
      // { name: 'View Invoices', path: '/viewinvoices' },
    
  },
  { name: 'Client', icon: BriefcaseIcon, href: '/addclient', children: false },
  { name: 'Projects', icon: ClipboardListIcon, href: '/addproject', children: false },
  {
    name: 'Reports', icon: CalendarIcon, children: [
      { name: 'Timesheet', path: '/timesheet' },
      { name: 'Projects', path: '/projects' },
      { name: 'Budget', path: '/budget' },
    ]
  },
];

const EmpNavigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/', children: false },
  { name: 'Documents', icon: DocumentIcon, href: '/documents', children: false },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState({});
  const userType = getValuesFromLocalstorage("userDetails")?.acctType || 'EMPLOYEE';
  const Navigation = userType === "ADMIN" ? AdminNavigation : EmpNavigation;

  // Automatically open dropdown based on current path
  useEffect(() => {
    Navigation.forEach(item => {
      if (item.children) {
        const isDropdownActive = item.children.some(subItem => subItem.path === location.pathname);
        if (isDropdownActive) {
          setIsOpen(prevState => ({ ...prevState, [item.name]: true }));
        }
      }
    });
  }, [location.pathname, Navigation]);

  const handleToggle = (name) => {
    setIsOpen((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

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
        navigate('/login');
      }
    });
  };

  return (
    <div className="lg:w-1/5 h-[92vh] shadow-xl bg-slate-100">
      <div className="flex flex-col space-y-2 mt-2">
        {Navigation.map((item) => {
          const isActiveMain = item.href === location.pathname || (item.children && item.children.some(subItem => subItem.path === location.pathname));

          return (
            <div key={item.name}>
              <div
                className={`flex items-center justify-between p-3 rounded-none cursor-pointer transition-colors duration-200 ${
                  isActiveMain ? ' text-primary' : 'hover:text-secondaryBlue'
                }`}
                onClick={() => item.children ? handleToggle(item.name) : item.name === 'Logout' ? handleLogout() : navigate(item.href)}
              >
                <div className="flex items-center ml-2">
                  <item.icon className={`h-7 w-7 ${isActiveMain && 'text-primary'} mr-5`} />
                  <span className="font-normal">{item.name}</span>
                </div>
                {item.children && <span>{isOpen[item.name] ? '▲' : '▼'}</span>}
              </div>
              {isOpen[item.name] && item.children && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children.map((subItem) => (
                    <div
                      key={subItem.name}
                      className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                        location.pathname === subItem.path ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600'
                      }`}
                      onClick={() => navigate(subItem.path)}
                    >
                      <span>{subItem.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
