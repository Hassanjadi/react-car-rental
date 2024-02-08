import React from "react";
import { Table } from "react-bootstrap";

const ListOrder = () => {
  return (
    <>
      <div className="list d-flex gap-2 items-center">
        <div className="line"></div>
        List Order
      </div>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>User Email</th>
            <th>Car</th>
            <th>Start Rent</th>
            <th>Finish Rent</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ListOrder;
