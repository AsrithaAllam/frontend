import React from "react";
import Hoc from "../../components/HOC";

const NotFoundPage = () => {
  return (
    <div className="grid place-content-center w-full bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We cannnot find that page.</p>

        <a
          href="/"
          className="mt-6 inline-block rounded bg-primary cursor-pointer px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Hoc(NotFoundPage);