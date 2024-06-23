import React from "react";
import iconHour from "../../assets/images/home/icon_24hrs.png";
import iconPrice from "../../assets/images/home/icon_price.png";
import iconComplete from "../../assets/images/home/icon_complete.png";
import iconProfesional from "../../assets/images/home/icon_professional.png";

export const WhyUs = () => {
  return (
    <div id="whyus" className="why-us">
      <div className="container">
        <div className="section-title">
          <h2 className="text-lg-start">Why Choose Us?</h2>
          <p className="text-lg-start">Mengapa Harus Memilih Kami?</p>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="whyus-card">
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
            </div>
          </div>
          <div className="col-lg-3">
            <div className="whyus-card">
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
            </div>
          </div>
          <div className="col-lg-3">
            <div className="whyus-card">
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
            </div>
          </div>
          <div className="col-lg-3">
            <div className="whyus-card">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
