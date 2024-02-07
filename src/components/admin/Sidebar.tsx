import React from "react";
import "../../style/sidebarAdmin.css";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Dashboard
          </a>
        </li>
        {/* Car menu item */}
        <li className="nav-item">
          <a className="nav-link sidebar-link" href="/dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-truck"
            >
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            Cars
          </a>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
