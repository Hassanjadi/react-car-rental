import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

interface Car {
  manufacture: string;
  type: string;
  transmission: string;
  year: number;
  created_at: number;
  updated_at: number;
}

const ListCar = () => {
  const [data, setData] = useState<Car[] | null>(null);

  useEffect(() => {
    axios
      .get<Car[], any>("http://localhost:3000/api/v1/cars")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});
  }, []);

  console.log(data);

  return (
    <>
      <div className="list d-flex gap-2 items-center">
        <div className="line"></div>
        List Car
      </div>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Manufacture</th>
            <th>Transmission</th>
            <th>year</th>
            <th>Created at</th>
            <th>Updated at</th>
          </tr>
        </thead>
        {data !== null &&
          data.map((res, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{res.manufacture}</td>
                  <td>{res.type}</td>
                  <td>{res.transmission}</td>
                  <td>{res.year}</td>
                  <td>{res.created_at}</td>
                  <td>{res.updated_at}</td>
                </tr>
              </tbody>
            );
          })}
      </Table>
    </>
  );
};

export default ListCar;
