import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <section id="cta" className="cta">
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
    </section>
  );
};

export default CtaBanner;
