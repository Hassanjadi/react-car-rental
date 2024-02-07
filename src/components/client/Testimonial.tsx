import Swiper from "swiper";
import "../../style/landingPage.css";
import { useEffect, useRef } from "react";

const Testimonial = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });
    }
  }, []);

  return (
    <section id="testimonial" className="testimonial">
      <div className="container">
        <div className="section-title">
          <h2>Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami.</p>
        </div>
      </div>

      {/* Swiper */}
      <div ref={swiperRef} className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            {/* card */}
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
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <span>John Dee, Bromo</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
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
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <span>John Dee, Bromo</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
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
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <span>John Dee, Bromo</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
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
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <span>John Dee, Bromo</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
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
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <span>John Dee, Bromo</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
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
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <span>John Dee, Bromo</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
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
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <span>John Dee, Bromo</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
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
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <span>John Dee, Bromo</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
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
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <span>John Dee, Bromo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination">
        <div className="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div className="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
