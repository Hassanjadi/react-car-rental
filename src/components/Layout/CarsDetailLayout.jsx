import { Footer } from "../Fragment/Footer";
import { HeroCar } from "../Fragment/HeroCar";
import { DetailCar } from "../Fragment/DetailCar";
import { SearchBar } from "../Fragment/SearchBar";
import { NavigationBar } from "../Fragment/NavigationBar";

export const CarsDetailLayout = () => {
  return (
    <>
      <NavigationBar />
      <HeroCar />
      <SearchBar />
      <DetailCar />
      <Footer />
    </>
  );
};
