import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Cars } from "./pages/Cars.jsx";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cars",
    element: <Cars />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
