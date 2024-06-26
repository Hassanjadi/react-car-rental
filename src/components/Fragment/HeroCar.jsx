import React from "react";
import img_car from "../../assets/images/home/img_car.png";

export const HeroCar = () => {
  return (
    <section id="hero" className="hero">
      <div className="container-md">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-desc d-lg-flex flex-lg-column justify-content-lg-center align-items-lg-start">
              <h1>Sewa & Rental Mobil Terbaik di kawasan Ponorogo</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </div>
          </div>
          <div className="col-md-6 hero-img">
            <div className="img-car position-absolute bottom-0">
              <img src={img_car} alt="image car" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
