import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import iconHour from "../../assets/images/home/icon_24hrs.png";
import iconPrice from "../../assets/images/home/icon_price.png";
import iconComplete from "../../assets/images/home/icon_complete.png";
import iconProfesional from "../../assets/images/home/icon_professional.png";

export const WhyUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust this threshold as needed
  });

  return (
    <motion.div
      id="whyus"
      className="why-us"
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="section-title">
          <h2 className="text-lg-start">Why Choose Us?</h2>
          <p className="text-lg-start">Mengapa Harus Memilih Kami?</p>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <motion.div
              className="whyus-card"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="whyus-images">
                <img src={iconComplete} alt="Icon" />
              </div>
              <div className="desc">
                <h3 className="fw-bold">Mobil Lengkap</h3>
                <p>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan
                  terawat.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-3">
            <motion.div
              className="whyus-card"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="whyus-images">
                <img src={iconPrice} alt="Icon" />
              </div>
              <div className="desc">
                <h3 className="fw-bold">Harga Murah</h3>
                <p>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-3">
            <motion.div
              className="whyus-card"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="whyus-images">
                <img src={iconHour} alt="Icon" />
              </div>
              <div className="desc">
                <h3 className="fw-bold">Layanan 24 Jam</h3>
                <p>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-3">
            <motion.div
              className="whyus-card"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="whyus-images">
                <img src={iconProfesional} alt="Icon" />
              </div>
              <div className="desc">
                <h3 className="fw-bold">Sopir Profesional</h3>
                <p>
                  Sopir yang profesional, berpengalaman, jujur, ramah, dan
                  selalu tepat waktu.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
