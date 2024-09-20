import { Footer } from "../Fragment/Footer";
import { SearchBar } from "../Fragment/SearchBar";
import { NavigationBar } from "../Fragment/NavigationBar";
import { CardDetailCar } from "../Fragment/CardDetailCar ";
import { HeroCar } from "../Fragment/HeroCar";

export const CarsDetailLayout = () => {
  return (
    <>
      <NavigationBar />
      <HeroCar />
      <SearchBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-4">Tentang Paket</h5>
                <h6 className="card-subtitle mb-3">Include</h6>
                <ul className="text-muted">
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>

                <h6 className="card-subtitle mb-3">Exclude</h6>
                <ul className="text-muted">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>

                <h5 className="card-title fw-bold mb-4">
                  Refund, Reschedule, Overtime
                </h5>
                <ul className="text-muted">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <CardDetailCar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};