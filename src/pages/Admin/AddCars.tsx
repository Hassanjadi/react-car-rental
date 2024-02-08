import React from "react";
import { Breadcrumb } from "react-bootstrap";
import FormAddCars from "../../components/admin/FormAddCars";

const AddCars = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/list-cars">Cars</Breadcrumb.Item>
        <Breadcrumb.Item href="/list-cars">List Car</Breadcrumb.Item>
        <Breadcrumb.Item active>Add New Car</Breadcrumb.Item>
      </Breadcrumb>

      <FormAddCars />
    </>
  );
};

export default AddCars;
