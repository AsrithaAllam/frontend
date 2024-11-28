import React, { useState } from "react";
import { useFormik } from "formik";
import { timeSheetValidationSchema } from "../../../components/Helpers";
import Hoc from "../../../components/HOC";

const TimeSheet = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const formik = useFormik({
    initialValues: {
      project: "",
      location: "",
      fromDate: "",
      toDate: "",
      totalHours: "",
      holidayList: [],
    },
    validationSchema: timeSheetValidationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted: ", values);
      setIsModalOpen(false);
    },
  });

  const addHoliday = () => {
    formik.setFieldValue("holidayList", [
      ...formik.values.holidayList,
      { date: "", note: "" },
    ]);
  };

  const removeHoliday = (index) => {
    formik.setFieldValue(
      "holidayList",
      formik.values.holidayList.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl max-h-screen">
            <button
              className="absolute top-2 right-2 px-1 font-bold text-white bg-blue-600 hover:bg-blue-800 rounded transition-all"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold text-center mb-4">Upload Timesheet</h2>

            <form
              onSubmit={formik.handleSubmit}
              className="overflow-y-auto p-6 space-y-4 max-h-96"
            >
              <div>
                <label className="block text-sm">Project</label>
                <select
                  name="project"
                  className="w-full p-2 mt-1 border rounded"
                  value={formik.values.project}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select Project</option>
                  <option>TimeTrack React</option>
                  <option>RPM</option>
                  <option>Project3</option>
                </select>
                {formik.touched.project && formik.errors.project && (
                  <p className="text-red-500 text-sm">{formik.errors.project}</p>
                )}
              </div>

              <div>
                <label className="block text-sm">Work Location</label>
                <select
                  name="location"
                  className="w-full p-2 mt-1 border rounded"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select Work Location</option>
                  <option>Office</option>
                  <option>Home</option>
                </select>
                {formik.touched.location && formik.errors.location && (
                  <p className="text-red-500 text-sm">{formik.errors.location}</p>
                )}
              </div>

              <div>
                <label className="block text-sm">From Date</label>
                <input
                  type="date"
                  name="fromDate"
                  className="w-full p-2 mt-1 border rounded"
                  value={formik.values.fromDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fromDate && formik.errors.fromDate && (
                  <p className="text-red-500 text-sm">{formik.errors.fromDate}</p>
                )}
              </div>

              <div>
                <label className="block text-sm">To Date</label>
                <input
                  type="date"
                  name="toDate"
                  className="w-full p-2 mt-1 border rounded"
                  value={formik.values.toDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.toDate && formik.errors.toDate && (
                  <p className="text-red-500 text-sm">{formik.errors.toDate}</p>
                )}
              </div>

              <div>
                <label className="block text-sm">Total Hours</label>
                <input
                  type="number"
                  name="totalHours"
                  className="w-full p-2 mt-1 border rounded"
                  value={formik.values.totalHours}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.totalHours && formik.errors.totalHours && (
                  <p className="text-red-500 text-sm">{formik.errors.totalHours}</p>
                )}
              </div>

              <div>
                <label className="block text-sm">Holidays</label>
                <button
                  type="button"
                  className="px-4 py-2 mt-1 font-bold text-white bg-green-500 hover:bg-green-600 rounded transition-all"
                  onClick={addHoliday}
                >
                  +
                </button>
                {formik.values.holidayList.map((holiday, index) => (
                  <div key={index} className="flex items-center space-x-2 mt-2">
                    <input
                      type="date"
                      name={`holidayList[${index}].date`}
                      className="w-full p-1 border rounded"
                      value={holiday.date}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <input
                      type="text"
                      name={`holidayList[${index}].note`}
                      className="w-full p-1 border rounded"
                      value={holiday.note}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Note"
                    />
                    <button
                      type="button"
                      className="px-4 py-2 font-bold text-white bg-red-500 hover:bg-red-600 rounded transition-all"
                      onClick={() => removeHoliday(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="px-4 py-1 font-bold text-white bg-blue-500 hover:bg-blue-600 rounded transition-all"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="px-4 py-1 font-bold text-white bg-gray-500 hover:bg-gray-600 rounded transition-all"
                >
                  Save Excel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hoc(TimeSheet);
