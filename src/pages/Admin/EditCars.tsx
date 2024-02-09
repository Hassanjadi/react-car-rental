import React from "react";
import { Breadcrumb } from "react-bootstrap";
import FormEditCars from "../../components/admin/FormEditCars";
import "../../style/dashboard.css";

const EditCars = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/list-cars">Cars</Breadcrumb.Item>
        <Breadcrumb.Item href="/list-cars">List Car</Breadcrumb.Item>
        <Breadcrumb.Item active>Edit Car</Breadcrumb.Item>
      </Breadcrumb>
      <FormEditCars />
    </>
  );
};

export default EditCars;
