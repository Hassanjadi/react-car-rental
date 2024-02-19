import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Car {
  id: string;
  manufacture: string;
  image: string;
  type: string;
  rentPerDay: number;
  description: string;
  capacity: number;
  transmission: string;
  year: number;
}

const CardCars = () => {
  const [data, setData] = useState<Car[] | null>(null);

  //indikator
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    axios
      .get<Car[], any>("http://localhost:3000/api/v1/cars")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});
  }, []);

  console.log(data);

  const handleDelete = (event: any) => {
    let idData = event.target.value;

    axios.delete(`http://localhost:3000/api/v1/cars/${idData}`).then((res) => {
      setFetchStatus(true);
    });
  };

  return (
    <>
      {data !== null &&
        data.map((res) => {
          return (
            <div className="card col w-100">
              <div className="card-images d-flex justify-content-center align-items-center w-100">
                <img src={res.image} alt="Images car" className="images-car" />
              </div>
              <div className="card-descriptions">
                <p className="name">
                  {res.manufacture}/{res.type}
                </p>
                <p className="price">Rp. {res.rentPerDay}/ Hari</p>
                <p className="desc h-50">{res.description}</p>
              </div>
              <div className="card-info d-flex flex-column gap-2">
                <div className="d-flex gap-3 justify-content-start">
                  <span>
                    <FeatherIcon icon="users" />
                  </span>
                  <p>{res.capacity} Orang</p>
                </div>
                <div className="d-flex gap-3 justify-content-start">
                  <span>
                    <FeatherIcon icon="settings" />
                  </span>
                  <p>{res.transmission}</p>
                </div>
                <div className="d-flex gap-3 justify-content-start">
                  <span>
                    <FeatherIcon icon="calendar" />
                  </span>
                  <p>Tahun {res.year}</p>
                </div>
              </div>
              <div className="d-flex gap-2 w-100">
                <button
                  onClick={handleDelete}
                  value={res.id}
                  className="delete d-flex justify-content-center align-items-center gap-2"
                >
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
          );
        })}
    </>
  );
};

export default CardCars;
