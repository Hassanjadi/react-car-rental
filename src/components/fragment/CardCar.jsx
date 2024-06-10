import React from "react";
import FeatherIcon from "feather-icons-react";
import cars from "../../assets/data/cars.json";

export const CardCar = () => {
  return (
    <div className="col cars-container">
      {cars.map((item) => (
        <div className="card col w-100" key={item.id}>
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="card-images d-flex justify-content-center align-items-center w-100">
              <img src={item.image} alt="Images car" className="images-car" />
            </div>
            <div className="d-flex flex-column gap-2 my-4">
              <div className="card-descriptions">
                <p className="name">
                  {item.manufacture}/{item.type}
                </p>
                <p className="price">Rp. {item.rentPerDay}/ Hari</p>
                <p className="desc h-50">{item.description}</p>
              </div>
              <div className="card-info d-flex flex-column gap-2">
                <div className="d-flex gap-3 justify-content-start">
                  <span>
                    <FeatherIcon icon="users" />
                  </span>
                  <p>{item.capacity} Orang</p>
                </div>
                <div className="d-flex gap-3 justify-content-start">
                  <span>
                    <FeatherIcon icon="settings" />
                  </span>
                  <p>{item.transmission}</p>
                </div>
                <div className="d-flex gap-3 justify-content-start">
                  <span>
                    <FeatherIcon icon="calendar" />
                  </span>
                  <p>Tahun {item.year}</p>
                </div>
              </div>
            </div>
            <button>Pilih Mobil</button>
          </div>
        </div>
      ))}
    </div>
  );
};
