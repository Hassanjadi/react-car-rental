import axios from "axios";
import { useState } from "react";

const FormAddCars = () => {
  const [input, setInput] = useState({
    name: "",
    price: "",
    description: "",
    capacity: "",
    transmisi: "",
    year: "",
  });

  //indikator
  const [] = useState(true);

  //handling input
  const handleInput = (event: { target: { name: any; value: any } }) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    }
    if (name === "price") {
      setInput({ ...input, price: value });
    }
    if (name === "description") {
      setInput({ ...input, description: value });
    }
    if (name === "capacity") {
      setInput({ ...input, capacity: value });
    }
    if (name === "transmisi") {
      setInput({ ...input, transmisi: value });
    }
    if (name === "year") {
      setInput({ ...input, year: value });
    }
  };

  //handling submit
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let { name, price, description, capacity, transmisi, year } = input;

    //create data
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
      });

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
      <div className="form-car">
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
              type="text"
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
              type="text"
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
              type="text"
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
            <button className="cancel">Cancel</button>
            <button type={"submit"} className="save">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormAddCars;
