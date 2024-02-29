import { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import axios from "axios";

interface Car {
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

  useEffect(() => {
    axios
      .get<Car[], any>("http://localhost:3000/api/v1/cars")
      .then((res) => {
        setData([...res.data]);
      })
      .catch(() => {});
  }, []);

  console.log(data);

  return (
    <div className="col cars-container">
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
              <button>Pilih Mobil</button>
            </div>
          );
        })}
    </div>
  );
};

export default CardCars;
