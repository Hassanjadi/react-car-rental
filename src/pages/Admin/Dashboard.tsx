import ListCar from "../../components/admin/ListCar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
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
      <ListCar />
    </>
  );
};

export default Dashboard;
