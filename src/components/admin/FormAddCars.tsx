import React from "react";

const FormAddCars = () => {
  return (
    <>
      <div className="header d-flex justify-content-between">
        <h1>Add New Car</h1>
      </div>
      <div className="form-car">
        <form className="d-flex flex-column gap-3 w-50">
          <div className="form-name d-flex">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Ferari" />
          </div>
          <div className="form-price d-flex">
            <label>Price</label>
            <input type="text" className="form-control" placeholder="200000" />
          </div>
          <div className="form-desc d-flex">
            <label>Description</label>
            <textarea className="form-control" />
          </div>
          <div className="form-capacity d-flex">
            <label>Capacity</label>
            <input type="text" className="form-control" placeholder="200000" />
          </div>
          <div className="form-transmisi d-flex">
            <label>Transmisi</label>
            <input type="text" className="form-control" placeholder="200000" />
          </div>
          <div className="form-year d-flex">
            <label>Year</label>
            <input type="text" className="form-control" placeholder="200000" />
          </div>
          <div className="form-img d-flex">
            <label>Images</label>
            <input
              type="file"
              className="form-control-file"
              placeholder="200000"
            />
          </div>
          <div className="d-flex gap-4 mt-5 w-50">
            <button className="cancel">Cancel</button>
            <button className="save">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormAddCars;
