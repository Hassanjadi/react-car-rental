import CardCars from "./CardCars";

const AllCars = () => {
  return (
    <main>
      <section id="all-cars" className="all-cars">
        <div className="container-md">
          <div className="row d-flex justify-content-center">
            <div className="cars">
              <CardCars />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllCars;
