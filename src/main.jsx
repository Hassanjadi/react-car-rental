import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { CarFilterProvider } from "./context/CarsFilterContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Cars } from "./pages/Cars.jsx";

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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarFilterProvider>
      <RouterProvider router={router} />
    </CarFilterProvider>
  </React.StrictMode>
);
