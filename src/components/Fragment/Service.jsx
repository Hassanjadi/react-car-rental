import React, { useState } from "react";
import { motion } from "framer-motion";
import imageService from "../../assets/images/home/img_service.png";
import checklist from "../../assets/images/home/checklist.png";
import { useInView } from "react-intersection-observer";

export const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust this threshold as needed
  });

  // Update visibility state when inView changes
  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section id="service" className="service" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-lg-5 d-flex justify-content-center">
            <motion.img
              src={imageService}
              alt="image our service"
              className={`service-images img-fluid p-3 ${
                isVisible ? "animate__animated animate__fadeInUp" : ""
              }`}
            />
          </div>
          <div className="col-lg-6 p-lg-5">
            <motion.h2
              className={isVisible ? "animate__animated animate__fadeInUp" : ""}
            >
              Best Car Rental for any kind of trip in Ponorogo!
            </motion.h2>
            <motion.p
              className={isVisible ? "animate__animated animate__fadeInUp" : ""}
            >
              Sewa mobil di Reog World bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </motion.p>
            <div
              className={`d-flex gap-3 ${
                isVisible ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <div className="service-desc">
                <img src={checklist} alt="checklist" />
              </div>
              <p>Sewa Mobil Dengan Supir di Ponorogo 12 Jam</p>
            </div>
            <div
              className={`d-flex gap-3 ${
                isVisible ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <div className="service-desc">
                <img src={checklist} alt="checklist" />
              </div>
              <p>Sewa Mobil Lepas Kunci di Ponorogo 24 Jam</p>
            </div>
            <div
              className={`d-flex gap-3 ${
                isVisible ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <div className="service-desc">
                <img src={checklist} alt="checklist" />
              </div>
              <p>Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div
              className={`d-flex gap-3 ${
                isVisible ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <div className="service-desc">
                <img src={checklist} alt="checklist" />
              </div>
              <p>Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div
              className={`d-flex gap-3 ${
                isVisible ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
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
