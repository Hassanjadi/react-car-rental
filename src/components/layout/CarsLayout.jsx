import React from "react";
import { Footer } from "../fragment/Footer";
import { AllCar } from "../fragment/AllCar";
import { HeroCar } from "../fragment/HeroCar";
import { SearchBar } from "../fragment/SearchBar";
import { NavigationBar } from "../fragment/NavigationBar";

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
