import Breadcrumb from "react-bootstrap/Breadcrumb";
import ListOrder from "../../components/admin/ListOrder";
import ListCar from "../../components/admin/ListCar";
import "../../style/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div className="header">
        <h1>Dashboard</h1>
      </div>
      <ListOrder />
      <ListCar />
    </>
  );
};

export default Dashboard;
