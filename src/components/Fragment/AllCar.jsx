import { motion } from "framer-motion";
import { useCarFilter } from "../../context/CarsFilterContext";
import { CardCar } from "./CardCar";
import cars from "../../assets/data/cars.json";
import React, { useEffect, useState } from "react";

export const AllCar = () => {
  const { passengerFilter, filterTrigger, resetFilterTrigger } = useCarFilter();
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    if (filterTrigger) {
      const filtered = cars.filter((car) => {
        if (passengerFilter === "") return true;
        return car.capacity >= parseInt(passengerFilter, 10);
      });
      setFilteredCars(filtered);
      resetFilterTrigger();
    }
  }, [filterTrigger, passengerFilter, resetFilterTrigger]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="all-cars" className="all-cars">
      <div className="container-md">
        <motion.div
          className="cars"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCars.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
            >
              <CardCar>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
