const SearchBar = () => {
  return (
    <section id="search-car" className="search-car">
      <div className="container-md">
        <div className="search-bar flex flex-row">
          <div className="form-search w-100">
            <div className="driver w-100">
              <label htmlFor="">Tipe Driver</label>
              <select id="driver-checkbox">
                <option value="" disabled selected hidden>
                  Pilih Tipe Driver
                </option>
                <option value="true">Dengan Sopir</option>
                <option value="false">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>
            <div className="date w-100">
              <label htmlFor="">Tanggal</label>
              <input id="rent-date-input" className="w-100" type="date" />
            </div>
            <div className="time w-100">
              <label htmlFor="">Waktu Jemput/Ambil</label>
              <select className="w-100" id="rent-time-input">
                <option value="" disabled selected hidden>
                  Pilih Waktu
                </option>
                <option value="00:00">00:00 WIB</option>
                <option value="01:00">01:00 WIB</option>
                <option value="02:00">02:00 WIB</option>
                <option value="03:00">03:00 WIB</option>
                <option value="04:00">04:00 WIB</option>
                <option value="05:00">05:00 WIB</option>
                <option value="06:00">06:00 WIB</option>
                <option value="07:00">07:00 WIB</option>
                <option value="08:00">08:00 WIB</option>
                <option value="09:00">09:00 WIB</option>
                <option value="10:00">10:00 WIB</option>
                <option value="11:00">11:00 WIB</option>
                <option value="12:00">12:00 WIB</option>
              </select>
            </div>
            <div className="names w-100">
              <label htmlFor="">Jumlah Penumpang (optional)</label>
              <input
                id="passenger-input"
                className="input-field w-100"
                type="text"
                placeholder="Jumlah Penumpang"
              />
              <div className="input-icon">
                <i className="user" data-feather="users"></i>
              </div>
            </div>
            <div className="button">
              <button id="filter-btn">Cari mobil</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
