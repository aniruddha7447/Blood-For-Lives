import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { Table } from "reactstrap";

import Base from "../../components/Base";
import { getAddressByIdHandler } from "../../Features/user/userSlice";

function GetAllAddresses() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.persist.user.id);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getAddressByIdHandler(id))
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  return (
    <Base>
      <div
        style={{
          backgroundColor: "#00bcd4",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ color: "white", fontWeight: "bold" }}>All Addresses</h1>
      </div>
      <div style={{ padding: "20px" }}>
        <Table
          striped
          hover
          style={{
            textAlign: "center",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead style={{ backgroundColor: "#f8f9fa" }}>
            <tr>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Id</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Address</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>City</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>State</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Pincode</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{item.id}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{item.address}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{item.city}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{item.state}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{item.pincode}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Base>
  );
}
export default GetAllAddresses;
