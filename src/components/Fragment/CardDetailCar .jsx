import React from "react";
import { Link, useParams } from "react-router-dom";
import Cars from "../../assets/data/cars.json";
import FeatherIcon from "feather-icons-react";

export const CardDetailCar = () => {
  const { id } = useParams();
  const car = Cars.find((car) => car.id === id);

  if (!car) {
    return <p>Car not found</p>;
  }

  return (
    <div className="card detail-card">
      <img className="card-img-top" src={car.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title fw-bold">
          {car.manufacture}/{car.type}
        </h5>
        <div className="d-flex gap-3">
          <div className="d-flex gap-2 justify-content-center">
            <span>
              <FeatherIcon icon="users" size={16} />
            </span>
            <p>{car.capacity} Orang</p>
          </div>
          <div className="d-flex gap-2 justify-content-start">
            <span>
              <FeatherIcon icon="settings" size={16} />
            </span>
            <p>{car.transmission}</p>
          </div>
          <div className="d-flex gap-2 justify-content-start">
            <span>
              <FeatherIcon icon="calendar" size={16} />
            </span>
            <p>Tahun {car.year}</p>
          </div>
        </div>

        <div className="mt-5 detail-card-footer">
          <div className="d-flex justify-content-between">
            <p>Total</p>
            <p className="fw-bold">Rp. 450.000</p>
          </div>
          <button type="submit">Lanjutkan Pembayaran</button>
        </div>
      </div>
    </div>
  );
};
