import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Car {
  name: string;
  price: string;
  description: string;
  capacity: string;
  transmisi: string;
  year: string;
}

const EditCars: React.FC = () => {
  const [input, setInput] = useState<Car>({
    name: "",
    price: "",
    description: "",
    capacity: "",
    transmisi: "",
    year: "",
  });

  const [currentId, setCurrentId] = useState<number>(-1);

  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]:
        name === "capacity" || name === "price" || name === "year"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, price, description, capacity, transmisi, year } = input;

    if (currentId === -1) {
      axios
        .post("http://localhost:3000/api/v1/cars", {
          name,
          price,
          description,
          capacity,
          transmisi,
          year,
        })
        .then((res) => {
          console.log(res);
          true;
        })
        .catch((error) => console.error(error));
    } else {
      axios
        .put(`http://localhost:3000/api/v1/cars/${currentId}`, {
          name,
          price,
          description,
          capacity,
          transmisi,
          year,
        })
        .then(() => {
          true;
        })
        .catch((error) => console.error(error));
    }

    setCurrentId(-1);

    setInput({
      name: "",
      price: "",
      description: "",
      capacity: "",
      transmisi: "",
      year: "",
    });
  };

  return (
    <>
      <div className="header d-flex justify-content-between">
        <h1>Add New Car</h1>
      </div>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 w-50">
        <div className="form-name d-flex">
          <label>Name</label>
          <input
            onChange={handleInput}
            value={input.name}
            type="text"
            name="name"
            className="form-control"
          />
        </div>
        <div className="form-price d-flex">
          <label>Price</label>
          <input
            onChange={handleInput}
            value={input.price}
            type="number"
            name="price"
            className="form-control"
          />
        </div>
        <div className="form-desc d-flex">
          <label>Description</label>
          <textarea
            onChange={handleInput}
            value={input.description}
            name="description"
            className="form-control"
          />
        </div>
        <div className="form-capacity d-flex">
          <label>Capacity</label>
          <input
            onChange={handleInput}
            value={input.capacity}
            type="number"
            name="capacity"
            className="form-control"
          />
        </div>
        <div className="form-transmisi d-flex">
          <label>Transmisi</label>
          <input
            onChange={handleInput}
            value={input.transmisi}
            type="text"
            name="transmisi"
            className="form-control"
          />
        </div>
        <div className="form-year d-flex">
          <label>Year</label>
          <input
            onChange={handleInput}
            value={input.year}
            type="number"
            name="year"
            className="form-control"
          />
        </div>
        <div className="form-img d-flex">
          <label>Images</label>
          <input
            type="file"
            className="form-control-file"
            placeholder="200000"
          />
        </div>
        <div className="d-flex gap-4 mt-5 w-50">
          <button type="button" className="cancel">
            Cancel
          </button>
          <button type="submit" className="save">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EditCars;
