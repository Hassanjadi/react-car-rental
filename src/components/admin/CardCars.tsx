import React from "react";
import FeatherIcon from "feather-icons-react";
import "../../style/listCars.css";
import { Link } from "react-router-dom";

const CardCars = () => {
  return (
    <>
      <div className="cars">
        <div className="row d-flex justify-content-between row-cols-lg-3">
          <div className="card col-4">
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
                <p>2 Orang</p>
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
            <div className="d-flex gap-2 w-100">
              <button className="delete d-flex justify-content-center align-items-center gap-2">
                <span>
                  <FeatherIcon icon="trash" size="18" />
                </span>
                Delete
              </button>
              <Link
                to="/edit-cars"
                className="edit d-flex justify-content-center align-items-center gap-2"
              >
                <FeatherIcon icon="edit" size="18" />
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCars;
