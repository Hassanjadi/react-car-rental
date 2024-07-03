import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CtaBanner = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <motion.section
      id="cta"
      className="cta"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      ref={ref}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner text-center">
              <div className="banner-desc">
                <h2>Sewa Mobil di Ponorogo Sekarang</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <Link to="/cars" className="mulai-sewa-mobil">
                Mulai Sewa Mobil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
