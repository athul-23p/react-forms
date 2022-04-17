import "./form.css";
import axios from "axios";
import { useState } from "react";

function Form({ refresh }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    department: "",
    marital_status: false,
    address: "",
    salary: 0,
  });

  const handleChange = (e) => {
    const { name } = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/employees", formData)
      .then((response) => {
        // console.log(response);
        if(response.statusText === 'Created'){
          refresh();
        }
      })
      .catch((error) => console.log(error));

  };

  return (
    <>
      <h3>Employee Details</h3>
      <form
        id="employee-details"
        action=""
        onChange={(e) => handleChange(e)}
        onSubmit={handleSubmit}
      >
        <input type="text" name="name" id="" placeholder="Enter name" />
        <input type="number" name="age" id="" placeholder="Enter age" />
        <textarea
          name="address"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter address"
        ></textarea>
        <select name="department" id="">
          <option value="">Select Department</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
        </select>
        <input type="number" name="salary" id="" placeholder="Enter salary" />
        <label htmlFor="marital-status">
          <input type="checkbox" name="marital_status" id="" />
          Marital status
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
export default Form;
