import React from "react";
import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";
import "../style/layoutAdmin.css";

const LayoutAdmin = (props: { children: any }) => {
  return (
    <div className="container-fluid layout">
      <div className="col-md-2 sidebar">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="body">{props.children}</div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
