import React from "react";
import { motion } from "framer-motion";
import img_car from "../../assets/images/home/img_car.png";

export const HeroCar = () => {
  return (
    <section id="hero" className="hero">
      <div className="container-md">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              className="hero-desc d-lg-flex flex-lg-column justify-content-lg-center align-items-lg-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Sewa & Rental Mobil Terbaik di kawasan Ponorogo</h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </motion.p>
            </motion.div>
          </div>
          <div className="col-md-6 hero-img">
            <motion.div
              className="img-car position-absolute bottom-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={img_car} alt="image car" className="img-fluid" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
