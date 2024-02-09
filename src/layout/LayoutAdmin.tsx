import React from "react";
import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import "../style/dashboard.css";

const LayoutAdmin = (props: { children: any }) => {
  return (
    <>
      <div className="col-md-2 side">
        <Sidebar />
      </div>
      <div className="navbar bar">
        <Navbar />
      </div>
      <div className="body">{props.children}</div>
    </>
  );
};

export default LayoutAdmin;
