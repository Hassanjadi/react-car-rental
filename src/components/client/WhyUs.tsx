import React from "react";

const WhyUs = () => {
  return (
    <div id="why-us" className="why-us">
      <div className="container">
        <div className="section-title">
          <h2 className="text-lg-start">Why Choose Us?</h2>
          <p className="text-lg-start">Mengapa Harus Memilih Kami?</p>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="whyus-card">
              <div className="whyus-images">
                <img
                  src="https://i.ibb.co/TYHgk13/icon-complete.png"
                  alt="Icon"
                />
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
                <img src="https://i.ibb.co/7gq8hWM/icon-price.png" alt="Icon" />
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
                <img src="https://i.ibb.co/d2jVbVn/icon-24hrs.png" alt="Icon" />
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
                <img
                  src="https://i.ibb.co/q0LYsn2/icon-professional.png"
                  alt="Icon"
                />
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

export default WhyUs;
