import React from "react";
import FeatherIcon from "feather-icons-react";
import "../../style/searchCar.css";

const CardCars = () => {
  return (
    <>
      <div className="card col">
        <div className="card-images d-flex justify-content-center align-items-center w-100">
          <img src="#" alt="Images car" className="images-car" />
        </div>
        <div className="card-descriptions">
          <p className="name">Automanual/ Sedan</p>
          <p className="price">Rp. 20000/ Hari</p>
          <p className="desc h-50">Deskripsikan</p>
        </div>
        <div className="card-info d-flex flex-column gap-2">
          <div className="d-flex gap-3 justify-content-start">
            <span>
              <FeatherIcon icon="users" />
            </span>
            <p>$2 Orang</p>
          </div>
          <div className="d-flex gap-3 justify-content-start">
            <span>
              <FeatherIcon icon="settings" />
            </span>
            <p>Matic</p>
          </div>
          <div className="d-flex gap-3 justify-content-start">
            <span>
              <FeatherIcon icon="calendar" />
            </span>
            <p>Tahun 2010</p>
          </div>
        </div>
        <button>Pilih Mobil</button>
      </div>
    </>
  );
};

export default CardCars;
