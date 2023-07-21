import Master from "../Master";
import { useState, useEffect } from "react";
import LineChart from "../function/chart";
import Table from "react-bootstrap/Table";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/home.css";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUse();
  }, []);

  // GET TO DATA TEBLE
  const getUse = () => {
    axios.get("http://localhost:3001/data").then((response) => {
      setData(response.data);
      // window.location.reload(true);
    });
  };

  const [currentPage, setcurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const recirds = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);
  console.log(number);
  return (
    <>
      <Master />
      <div>
        <h2>Chart CPK</h2>
        <div className="LineChart">
          <LineChart />
        </div>
        <h2>Data Table CPK</h2>
        <div className="teble-data">
          <Table striped bordered hover>
            <thead>
              <tr>
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
            {recirds.map((val, index, i) => {
              let date = new Date(val['d']);
              return (
                <tbody>
                  <tr key={i}>
                    <td>{index + 1}</td>
                    <td>{date.toLocaleString()}</td>
                    <td>{val.cpk_lost}</td>
                    <td>{val.partname}</td>
                    <td>{val.cpk_front_pos}</td>
                    <td>{val.cpk_front_width}</td>
                    <td>{val.cpk_back_pos}</td>
                    <td>{val.cpk_back_width}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
        <nav >
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {number.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a href="#" className="page-link" onClick={()=>changeCPage(n)}>{n}</a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nexPage}>
                Nex
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
    </>
  );
 
  function prePage(){
    if(currentPage !== 1){
      setcurrentPage(currentPage - 1)
    }

  }
  function changeCPage(id) {
    setcurrentPage(id);
  }
  function nexPage () {
    if(currentPage !== npage) {
      setcurrentPage(currentPage + 1)
    }
  }

}
export default Home;
