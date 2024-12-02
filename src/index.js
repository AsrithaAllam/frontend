import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {store} from "./Redux/index"
import { Provider } from "react-redux"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store= {store}>
      <App />
      <ToastContainer />
    </Provider>
);

reportWebVitals();
