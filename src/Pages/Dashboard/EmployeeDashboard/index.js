import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdDocument } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

const EmployeeDashboard = () => {
  const [timesheets, setTimesheets] = useState([]);
  const [selectedProject, setSelectedProject] = useState("timetrack-react");
  const navigate = useNavigate();

  useEffect(() => { 
    // toast.success("welcome to dashboard")
    const fetchTimesheets = async () => {
      try {
        const response = await axios.get("http://localhost:4000/timesheets");
        setTimesheets(response.data);
      } catch (error) {
        console.error("Error fetching timesheets", error);
      }
    };

    fetchTimesheets();
  }, []);
  

  const filteredTimesheets = timesheets.filter((timesheet) => timesheet.project === selectedProject);

  return (
    <div className="bg-slate-200 h-[90vh] w-5/6 px-5 pt-2">
      <div className="flex justify-end items-center mb-4">
        <button
          onClick={() => navigate("/timesheet")}
          className="bg-white text-black py-2 px-4 rounded text-xl flex items-center hover:text-blue-500 hover:bg-white"
        >
          <span className="text-2xl font-bold">+</span>
          <IoMdDocument className="mr-2" />
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* <h2 className="text-2xl font-semibold mb-4">Timesheets</h2> */}
        <div className="flex items-center mb-4">
          <label htmlFor="projects" className="mr-4 font-semibold">
            Projects:
          </label>
          <select
            id="projects"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="border border-gray-300 rounded-lg py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="TimeTrack React">TimeTrack React</option>
            <option value="RPM">RPM</option>
            <option value="Project3">Project3</option>
          </select>
        </div>
        {filteredTimesheets.length === 0 ? (
          <div className="bg-red-100 text-red-600 text-center py-6 rounded-lg border border-red-300">
            No Timesheet(s) found for {selectedProject}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                    Project
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                    Location
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                    From Date
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                    To Date
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                    Total Hours
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                    Holidays
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTimesheets.map((timesheet) => (
                  <tr key={timesheet.id}>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {timesheet.project}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {timesheet.location}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {timesheet.fromDate}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {timesheet.toDate}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {timesheet.totalHours}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {timesheet.holidayList.length > 0 ? (
                        <ul>
                          {timesheet.holidayList.map((holiday, index) => (
                            <li key={index}>
                              {holiday.date}: {holiday.note}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span>No holidays</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
