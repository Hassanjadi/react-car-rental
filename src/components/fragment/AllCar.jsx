import React from "react";
import { CardCar } from "./CardCar";

export const AllCar = () => {
  return (
    <main>
      <section id="all-cars" className="all-cars">
        <div className="container-md">
          <div className="row d-flex justify-content-center">
            <div className="cars">
              <CardCar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
