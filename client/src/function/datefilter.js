// import './App.css';
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Table from "react-bootstrap/esm/Table";
import "../styles/datefilter.css";

function App() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    axios.get("http://localhost:3001/data").then((response) => {
      setData(response.data);
      setAllProducts(response.data);
    });
  }, []);

  const handleSelect = (date) => {
    let filtered = allProducts.filter((product) => {
      let productDate = new Date(product["d"]);
      return (
        productDate >= date.selection.startDate &&
        productDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setProducts(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  // --------------------select filter----------------------
  const [countryValue, setCountryValue] = useState("")
  const options = products.map((option) => {
      return <option 
                  key={option.id} 
                  value={option.id} 
                  selected={option.id === countryValue}>{option.cpk_lost}
             </option>
  })
console.log(options);
  return (
    <div>
      <div className="Date">
        <ul className="date-from">
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </ul>
        <div className="select-Lot">
        

          
          <Form.Group  className="select" controlId="exampleForm.ControlInput1">
            <Form.Label >Lot</Form.Label>
            <Form.Select aria-label="Default select example"  onChange={(e) => setCountryValue(e.target.value)}>
            <option>Open this select menu</option>
            {data.map((val) => {
          return(
              <option>{val.cpk_lost}</option>
              )
        })}
            </Form.Select>
          </Form.Group>
          <Form.Group  className="select" controlId="exampleForm.ControlInput1">
            <Form.Label>PartName</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              {data.map((val) => {
          return(
              <option>{val.partname}</option>
              )
        })}
            </Form.Select>
          </Form.Group>
         
        </div>
      </div>

      <div className="teble-data">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Lot</th>
              <th>Partname</th>
              <th>Time</th>
              <th>Front_pos</th>
              <th>Front_Width</th>
              <th>Back_Pos</th>
              <th>Back_Width</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              let date = new Date(product["d"]);
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{product["cpk_lost"]}</td>
                  <td>{product["partname"]}</td>
                  <td>{date.toLocaleDateString()}</td>
                  <td>{product["cpk_front_pos"]}</td>
                  <td>{product["cpk_front_width"]}</td>
                  <td>{product["cpk_back_pos"]}</td>
                  <td>{product["cpk_back_width"]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
