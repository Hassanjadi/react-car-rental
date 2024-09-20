import React from "react";
import { CardDetailCar } from "./CardDetailCar ";
import { CardAboutPackage } from "./CardAboutPackage";

export const DetailCar = () => {
  return (
    <div className="container-md mt-5">
      <div className="row">
        <CardAboutPackage />
        <CardDetailCar />
      </div>
    </div>
  );
};
