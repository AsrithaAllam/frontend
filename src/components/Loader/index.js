import React from "react";
import { ClockLoader } from "react-spinners";
// import PropTypes from "prop-types";

const Loader = (props) => {
  const { isLoading } = props;

  return isLoading ? (
    <div className="absolute z-50 flex justify-center items-center top-[45%] left-[48%]">
      <div className=" bg-gradient-to-r from-primary to-secondary p-4 rounded-3xl">
        <ClockLoader loading={isLoading} size={40} color={"#fff"} />
      </div>
    </div>
  ) : null;
};

// Loader.propTypes = {
//   isLoading: PropTypes.bool,
// };

export default Loader;
