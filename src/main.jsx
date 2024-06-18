import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Cars } from "./pages/Cars.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Hello</p>,
  },
  {
    path: "/cars",
    element: <p>Hello</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
