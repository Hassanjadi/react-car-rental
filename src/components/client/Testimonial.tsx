import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FeatherIcon from "feather-icons-react";
import "swiper/swiper-bundle.css";
import "swiper/bundle";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial">
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
        onSlideChange={() => "slide change"}
        onSwiper={(swiper) => swiper}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
      >
        <SwiperSlide>
          <div className="card-testimonial">
            <div className="images-testi d-flex justify-content-center">
              <img
                src="https://i.ibb.co/Wy5gkZf/img-photo.png"
                alt="img-photo"
              />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-testimonial">
            <div className="images-testi d-flex justify-content-center">
              <img
                src="https://i.ibb.co/gyQGKvQ/img-photoo.png"
                alt="img-photoo"
              />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-testimonial">
            <div className="images-testi d-flex justify-content-center">
              <img
                src="https://i.ibb.co/Wy5gkZf/img-photo.png"
                alt="img-photo"
              />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-testimonial">
            <div className="images-testi d-flex justify-content-center">
              <img
                src="https://i.ibb.co/gyQGKvQ/img-photoo.png"
                alt="img-photoo"
              />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-testimonial">
            <div className="images-testi d-flex justify-content-center">
              <img
                src="https://i.ibb.co/Wy5gkZf/img-photo.png"
                alt="img-photo"
              />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-testimonial">
            <div className="images-testi d-flex justify-content-center">
              <img
                src="https://i.ibb.co/gyQGKvQ/img-photoo.png"
                alt="img-photoo"
              />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-testimonial">
            <div className="images-testi d-flex justify-content-center">
              <img
                src="https://i.ibb.co/Wy5gkZf/img-photo.png"
                alt="img-photo"
              />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-testimonial">
            <div className="images-testi d-flex justify-content-center">
              <img
                src="https://i.ibb.co/gyQGKvQ/img-photoo.png"
                alt="img-photoo"
              />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-testimonial">
            <div className="images-testi d-flex justify-content-center">
              <img
                src="https://i.ibb.co/Wy5gkZf/img-photo.png"
                alt="img-photo"
              />
            </div>
            <div className="desc-testi">
              <div className="rating d-flex justify-content-center">
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
                <img src="https://i.ibb.co/K03ffxL/Star.png" alt="Star" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <span>John Dee, Bromo</span>
            </div>
          </div>
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

export default Testimonial;
