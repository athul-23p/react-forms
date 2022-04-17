import './employeeTable.css';
function EmployeeTable({data}){

    return (
      <>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Marital Status</th>
            </tr>
            {data.map((el) => {
              return (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.age}</td>
                  <td>{el.address}</td>
                  <td>{el.department}</td>
                  <td>{el.salary}</td>
                  <td>{el.marital_status ? "Married":"Single"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
}
export default EmployeeTable;