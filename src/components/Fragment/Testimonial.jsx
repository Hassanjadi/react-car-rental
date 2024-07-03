import "swiper/bundle";
import React from "react";
import "swiper/swiper-bundle.css";
import FeatherIcon from "feather-icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import star from "../../assets/images/home/Star.png";
import imgPhoto from "../../assets/images/home/img_photo.png";
import imgPhotoo from "../../assets/images/home/img_photoo.png";

export const Testimonial = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust this threshold as needed
  });

  return (
    <section id="testimonial" className="testimonial" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami.</p>
        </div>
      </div>

      {/* Card Testimonial */}
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
      >
        <SwiperSlide>
          <motion.div
            className="card-testimonial"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="images-testi d-flex justify-content-center">
              <img src={imgPhoto} alt="img-photo" />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className="card-testimonial"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="images-testi d-flex justify-content-center">
              <img src={imgPhotoo} alt="img-photoo" />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className="card-testimonial"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="images-testi d-flex justify-content-center">
              <img src={imgPhotoo} alt="img-photoo" />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className="card-testimonial"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="images-testi d-flex justify-content-center">
              <img src={imgPhotoo} alt="img-photoo" />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </motion.div>
        </SwiperSlide>
      </Swiper>

      {/* Pagination */}
      <div className="pagination">
        <button className="prev">
          <FeatherIcon icon="chevron-left" />
        </button>
        <div className="next">
          <FeatherIcon icon="chevron-right" />
        </div>
      </div>
    </section>
  );
};
