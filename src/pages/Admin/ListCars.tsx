import FeatherIcon from "feather-icons-react";
import React from "react";
import { Breadcrumb } from "react-bootstrap";
import CardCars from "../../components/admin/CardCars";
import { Link } from "react-router-dom";

const ListCars = () => {
  return (
    <>
      <div className="list-car">
        <Breadcrumb>
          <Breadcrumb.Item href="/list-cars">Cars</Breadcrumb.Item>
          <Breadcrumb.Item active>List Car</Breadcrumb.Item>
        </Breadcrumb>
        <div className="header d-flex justify-content-between">
          <h1>List Car</h1>
          <Link
            to="/add-cars"
            className="add-new text-decoration-none d-flex justify-content-center align-items-center"
          >
            <span>
              <FeatherIcon icon="plus" />
            </span>
            Add New Car
          </Link>
        </div>
        <div className=" d-flex gap-3 mb-4">
          <button className="filter">All</button>
          <button className="filter">Small</button>
          <button className="filter">Medium</button>
          <button className="filter">Large</button>
        </div>
        <CardCars />
      </div>
    </>
  );
};

export default ListCars;
