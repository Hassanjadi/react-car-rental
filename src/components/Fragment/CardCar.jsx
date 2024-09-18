import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

export const CardCar = (props) => {
  const { children } = props;
  return (
    <div className="card d-flex flex-column justify-content-between h-100 w-100">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="card-images d-flex justify-content-center align-items-center w-100">
      <img src={image} alt="Images car" className="images-car" />
    </div>
  );
};

const Body = (props) => {
  const { name, type, price, description, capacity, transmission, year } =
    props;
  return (
    <div className="d-flex flex-column gap-3 my-3">
      <div className="card-descriptions">
        <p className="name">
          {name}/{type}
        </p>
        <p className="price">{price} / hari</p>
        <p className="desc h-50">{description}</p>
      </div>
      <div className="card-info d-flex flex-column gap-2">
        <div className="d-flex gap-3 justify-content-start">
          <span>
            <FeatherIcon icon="users" />
          </span>
          <p>{capacity} Orang</p>
        </div>
        <div className="d-flex gap-3 justify-content-start">
          <span>
            <FeatherIcon icon="settings" />
          </span>
          <p>{transmission}</p>
        </div>
        <div className="d-flex gap-3 justify-content-start">
          <span>
            <FeatherIcon icon="calendar" />
          </span>
          <p>Tahun {year}</p>
        </div>
      </div>
    </div>
  );
};

const Footer = (props) => {
  const { id } = props;
  return (
    <Link to={`/cars/${id}`} className="button">
      Pilih Mobil
    </Link>
  );
};

CardCar.Header = Header;
CardCar.Body = Body;
CardCar.Footer = Footer;
