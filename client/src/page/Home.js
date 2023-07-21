import Master from "../Master";
import { useState, useEffect } from "react";
import LineChart from "../function/chart";
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import '../styles/home.css'
function Home() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUse();
  }, []);

  // GET TO DATA TEBLE
  const getUse = () => {
    axios.get("http://localhost:3001/data").then((response) => {
      setUser(response.data);
      // window.location.reload(true);
    });
  };


  return (
    <>
      <Master />
      <div>
        <h2>Chart CPK</h2>
          <div className="LineChart"><LineChart/></div>
        <h2>Data Teble CPK</h2>
        <div className="teble-data">
        <Table striped bordered hover>
      <thead>
        <tr >
          <th>ID</th>
          <th>Date Time</th>
          <th>CPK_Lost</th>
          <th>Pant Name</th>
          <th>Font Pos</th>
          <th>Font Width</th>
          <th>Back Pos</th>
          <th>Back Width</th>
        </tr>
      </thead>
      {user.map((val,index) => {
        return(
          <tbody>
          <tr>
            <td>{index +1}</td>
            <td>{val.times}</td>
            <td>{val.cpk_lost}</td>
            <td>{val.partname}</td>
            <td>{val.cpk_front_pos}</td>
            <td>{val.cpk_front_width}</td>
            <td>{val.cpk_back_pos}</td>
            <td>{val.cpk_back_width}</td>
          </tr>
        </tbody>
        )
      })}
      
    </Table>
        </div>
      </div>
    </>
  );
}
export default Home;
