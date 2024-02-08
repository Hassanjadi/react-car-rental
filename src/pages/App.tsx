import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchCar from "./Client/SearchCars";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Home from "./Client/Home";
import Dashboard from "./admin/Dashboard";
import LayoutClient from "../layout/LayoutClient";
import LayoutAdmin from "../layout/LayoutAdmin";
import AddCars from "./admin/AddCars";
import EditCars from "./admin/EditCars";
import ListCars from "./admin/ListCars";

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
            path="/search-car"
            element={
              <LayoutClient>
                <SearchCar />
              </LayoutClient>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <LayoutAdmin>
                <Dashboard />
              </LayoutAdmin>
            }
          />
          <Route
            path="/list-car"
            element={
              <LayoutAdmin>
                <ListCars />
              </LayoutAdmin>
            }
          />
          <Route
            path="/add-car"
            element={
              <LayoutAdmin>
                <AddCars />
              </LayoutAdmin>
            }
          />
          <Route
            path="/edit-car"
            element={
              <LayoutAdmin>
                <EditCars />
              </LayoutAdmin>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
