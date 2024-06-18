import React from "react";
import imageService from "../../assets/images/home/img_service.png";
import checklist from "../../assets/images/home/checklist.png";

export const Service = () => {
  return (
    <section id="service" className="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-lg-5 d-flex justify-content-center">
            <img
              src={imageService}
              alt="image our service"
              className="service-images img-fluid p-3"
            />
          </div>
          <div className="col-lg-6 p-lg-5">
            <h2>Best Car Rental for any kind of trip in Ponorogo!</h2>
            <p>
              Sewa mobil di Reog World bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="d-flex gap-3">
              <div className="service-desc">
                <img src={checklist} alt="checklist" />
              </div>
              <p>Sewa Mobil Dengan Supir di Ponorogo 12 Jam</p>
            </div>
            <div className="d-flex gap-3">
              <div className="service-desc">
                <img src={checklist} alt="checklist" />
              </div>
              <p>Sewa Mobil Lepas Kunci di Ponorogo 24 Jam</p>
            </div>
            <div className="d-flex gap-3">
              <div className="service-desc">
                <img src={checklist} alt="checklist" />
              </div>
              <p>Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="d-flex gap-3">
              <div className="service-desc">
                <img src={checklist} alt="checklist" />
              </div>
              <p>Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div className="d-flex gap-3">
              <div className="service-desc">
                <img src={checklist} alt="checklist" />
              </div>
              <p>Layanan Airport Transfer / Drop In Out</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
