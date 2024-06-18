import React from "react";
import { Footer } from "../Fragment/Footer";
import { AllCar } from "../Fragment/AllCar";
import { HeroCar } from "../Fragment/HeroCar";
import { SearchBar } from "../Fragment/SearchBar";
import { NavigationBar } from "../Fragment/NavigationBar";

export const CarsLayout = () => {
  return (
    <>
      <NavigationBar />
      <HeroCar />
      <SearchBar />
      <AllCar />
      <Footer />
    </>
  );
};
