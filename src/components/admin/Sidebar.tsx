import FeatherIcon from "feather-icons-react";

const Sidebar = () => {
  return (
    <>
      <div className="brand">
        <div className="logo">
          <img src="" alt="" />
        </div>
        Binar Car Rental
      </div>
      <ul className="nav flex-column">
        {/* Dashboard menu item */}
        <li className="nav-item">
          <a className="nav-link sidebar-link" href="/dashboard">
            <FeatherIcon icon="home" size="20" />
            Dashboard
          </a>
        </li>
        {/* Car menu item */}
        <li className="nav-item">
          <a className="nav-link sidebar-link" href="/list-cars">
            <FeatherIcon icon="truck" size="20" />
            List Cars
          </a>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
