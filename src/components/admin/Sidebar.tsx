import React from "react";
import "../../style/sidebarAdmin.css";
import FeatherIcon from "feather-icons-react";

const Sidebar = () => {
  return (
    <>
      <div className="brand">
        <div className="logo">
          <img src="" alt="" />
        </div>
        Binar Car Rental
      </div>
      <ul className="nav flex-column">
        {/* Dashboard menu item */}
        <li className="nav-item">
          <a className="nav-link sidebar-link" href="/dashboard">
            <FeatherIcon icon="home" size="20" />
            Dashboard
          </a>
        </li>
        {/* Car menu item */}
        <li className="nav-item">
          <a className="nav-link sidebar-link" href="/list-car">
            <FeatherIcon icon="truck" size="20" />
            Cars
          </a>
        </li>
        {/* Car menu item */}
        <li className="nav-item">
          <a className="nav-link sidebar-link" href="/add-car">
            <FeatherIcon icon="plus-circle" size="20" />
            Add Car
          </a>
        </li>
        {/* Car menu item */}
        <li className="nav-item">
          <a className="nav-link sidebar-link" href="/edit-car">
            <FeatherIcon icon="edit" size="20" />
            Edit Car
          </a>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
