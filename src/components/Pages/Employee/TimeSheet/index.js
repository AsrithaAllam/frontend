import React, { useState } from "react";
import Hoc from "../../../HOC";

const TimeSheet = () => {
  const [project, setProject] = useState("");
  const [location, setLocation] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [totalHours, setTotalHours] = useState(0);
  const [holidayList, setHolidayList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    const timesheetData = {
      project,
      location,
      fromDate,
      toDate,
      totalHours,
      holidayList,
    };
    setIsModalOpen(false);
   
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl max-h-screen">
            {error && (
              <div className="absolute top-0 left-0 right-0 bg-red-400 text-white text-center p-2 rounded-t-lg">
                {error}
              </div>
            )}
            <button
              className="absolute top-2 right-2 px-1 font-bold text-white bg-blue-600 hover:bg-blue-800 rounded transition-all"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold text-center mb-4">Upload Timesheet</h2>

            <div className="overflow-y-auto p-6 space-y-4 max-h-96">
              <div>
                <label className="block text-sm">Project</label>
                <select
                  className="w-full p-2 mt-1 border rounded"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  <option>Select Project</option>
                  <option>TimeTrack React</option>
                  <option>RPM</option>
                  <option>Project3</option>
                </select>
              </div>

              <div>
                <label className="block text-sm">Work Location</label>
                <select
                  className="w-full p-2 mt-1 border rounded"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Select Work Location</option>
                  <option>Office</option>
                  <option>Home</option>
                </select>
              </div>

              <div>
                <label className="block text-sm">From Date</label>
                <input
                  type="date"
                  className="w-full p-2 mt-1 border rounded"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm">To Date</label>
                <input
                  type="date"
                  className="w-full p-2 mt-1 border rounded"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm">Total Hours</label>
                <input
                  type="number"
                  className="w-full p-2 mt-1 border rounded"
                  value={totalHours}
                  onChange={(e) => setTotalHours(e.target.value)}
                  placeholder="TOTAL HOURS"
                />
              </div>

              <div>
                <label className="block text-sm">Add Holidays</label>
                <button
                  className="px-4 py-2 mt-1 font-bold text-white bg-green-500 hover:bg-green-600 rounded transition-all"
                  onClick={() =>
                    setHolidayList([...holidayList, { date: "", note: "" }])
                  }
                >
                  +
                </button>
              </div>

              <div>
                {holidayList.map((holiday, index) => (
                  <div key={index} className="flex items-center space-x-2 mt-2">
                    <label className="text-sm">On Date</label>
                    <input
                      type="date"
                      className="w-full p-1 border rounded"
                      value={holiday.date}
                      onChange={(e) =>
                        setHolidayList(
                          holidayList.map((h, i) =>
                            i === index ? { ...h, date: e.target.value } : h
                          )
                        )
                      }
                    />
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={holiday.note}
                      onChange={(e) =>
                        setHolidayList(
                          holidayList.map((h, i) =>
                            i === index ? { ...h, note: e.target.value } : h
                          )
                        )
                      }
                      placeholder="Note"
                    />
                    <button
                      className="px-4 py-2 font-bold text-white bg-red-500 hover:bg-red-600 rounded transition-all"
                      onClick={() =>
                        setHolidayList(
                          holidayList.filter((_, i) => i !== index)
                        )
                      }
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>

              <div>
                <input
                  type="file"
                  className="w-full p-1 border rounded"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 p-4 bg-gray-100">
              {/* <button
                className="px-4 py-1 font-bold text-white bg-gray-500 hover:bg-gray-600 rounded transition-all"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button> */}
              <button
                className="px-4 py-1 font-bold text-white bg-blue-500 hover:bg-blue-600 rounded transition-all"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="px-4 py-1 font-bold text-white bg-gray-500 hover:bg-gray-600 rounded transition-all"
              >
                Save Excel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hoc(TimeSheet);
