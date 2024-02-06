import React from "react";

const AllCars = () => {
  return (
    <section id="all-cars" className="all-cars">
      <div className="container-md">
        <div className="row d-flex justify-content-center">
          <div className="cars">
            <div id="cars-container" className="row row-cols-lg-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCars;
