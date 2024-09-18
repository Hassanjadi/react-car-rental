import React from "react";
import ReactDOM from "react-dom/client";
import { Cars } from "./pages/Cars.jsx";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { CarFilterProvider } from "./context/CarsFilterContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CarsDetail from "./pages/CarsDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cars",
    element: (
      <CarFilterProvider>
        <Cars />
      </CarFilterProvider>
    ),
  },
  {
    path: "/cars/:id",
    element: (
      <CarFilterProvider>
        <CarsDetail />
      </CarFilterProvider>
    ),
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
