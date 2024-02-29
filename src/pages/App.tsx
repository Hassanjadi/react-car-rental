import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutClient from "../layout/LayoutClient";
import LayoutAdmin from "../layout/LayoutAdmin";
import Dashboard from "./admin/Dashboard";
import EditCars from "./admin/EditCars";
import ListCars from "./admin/ListCars";
import Register from "./auth/Register";
import SearchCar from "./client/Cars";
import AddCars from "./admin/AddCars";
import Login from "./auth/Login";
import Home from "./client/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutClient>
                <Home />
              </LayoutClient>
            }
          />
          <Route
            path="/cars"
            element={
              <LayoutClient>
                <SearchCar />
              </LayoutClient>
            }
          />
          <Route
            path="/dashboard"
            element={
              <LayoutAdmin>
                <Dashboard />
              </LayoutAdmin>
            }
          />
          <Route
            path="/list-cars"
            element={
              <LayoutAdmin>
                <ListCars />
              </LayoutAdmin>
            }
          />
          <Route
            path="/add-cars"
            element={
              <LayoutAdmin>
                <AddCars />
              </LayoutAdmin>
            }
          />
          <Route
            path="/edit-cars"
            element={
              <LayoutAdmin>
                <EditCars />
              </LayoutAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
