import "./App.css";
import Form from "./Components/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./Components/EmployeeTable";
import EmployeeTable from "./Components/EmployeeTable";
function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3001/employees")
      .then((response) => {
        // console.log(response);
        setUserData([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <div id="form-container">
        <Form refresh={getData} />
      </div>
      <div id="employee-list-container">
        <h3>Employee List</h3>
        <EmployeeTable data={userData}/>
  
      </div>
    </div>
  );
}

export default App;
