import React from "react";
import { CardCar } from "./CardCar";
import cars from "../../assets/data/cars.json";

export const AllCar = () => {
  const handleRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <section id="all-cars" className="all-cars">
      <div className="container-md">
        <div className="cars">
          {cars.map((item) => (
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
