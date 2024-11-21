import React from "react";
import"./css/style.css";
import"bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import App from './components/App';

import projectroute from "./projectroute";
import { Outlet, Link } from "react-router-dom";

import { createBrowserRouter,RouterProvider } from "react-router-dom";
// console.log(ReactDOM);

const result = ReactDOM.createRoot(document.getElementById("root"));

// result .render(<App />);

result.render(<RouterProvider router={projectroute}/>)