import { CardCar } from "./CardCar";
import data from "../../assets/data/data.json";
import React, { useEffect, useState } from "react";
import { useCarFilter } from "../../context/CarsFilterContext";

export const AllCar = () => {
  const { passengerFilter, filterTrigger, resetFilterTrigger } = useCarFilter();
  const [filteredCars, setFilteredCars] = useState(data);

  const handleRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    if (filterTrigger) {
      const filtered = data.filter((car) => {
        if (passengerFilter === "") return true;
        return car.capacity >= parseInt(passengerFilter, 10);
      });
      setFilteredCars(filtered);
      resetFilterTrigger();
    }
  }, [filterTrigger, passengerFilter, resetFilterTrigger]);

  return (
    <section id="all-cars" className="all-cars">
      <div className="container-md">
        <div className="cars">
          {filteredCars.map((item) => (
            <CardCar key={item.id}>
              <CardCar.Header image={item.image} />
              <CardCar.Body
                name={item.manufacture}
                type={item.type}
                price={handleRupiah(item.rentPerDay)}
                description={item.description}
                capacity={item.capacity}
                transmission={item.transmission}
                year={item.year}
              />
              <CardCar.Footer />
            </CardCar>
          ))}
        </div>
      </div>
    </section>
  );
};
