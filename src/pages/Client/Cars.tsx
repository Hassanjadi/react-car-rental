import AllCars from "../../components/client/AllCars";
import HeroCars from "../../components/client/HeroCars";
import SearchBar from "../../components/client/SearchBar";
import "../../style/cars.css";

const Cars = () => {
  return (
    <>
      <HeroCars />
      <SearchBar />
      <AllCars />
    </>
  );
};

export default Cars;
