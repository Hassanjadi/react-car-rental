import React from "react";
import { motion } from "framer-motion";
import imageCar from "../../assets/images/home/img_car.png";

export const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-md">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-desc d-lg-flex flex-lg-column justify-content-lg-center align-items-lg-start">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Sewa & Rental Mobil Terbaik di kawasan Ponorogo
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </motion.p>
              <motion.a
                href="/cars"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Mulai Sewa Mobil
              </motion.a>
            </div>
          </div>
          <div className="col-md-6 hero-img">
            <motion.div
              className="img-car position-absolute bottom-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img src={imageCar} alt="image car" className="img-fluid" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
