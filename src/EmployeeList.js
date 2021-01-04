import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employees, setEmployees] = useState([
    {
      name: "Yazeen Jasim",
      email: "test@mail.com",
      phone: "0700000000",
      skills: "React, Javascript, C++, Java, Python, GCP",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Geralt Of Rivia",
      email: "test@mail.com",
      phone: "0700000000",
      skills: "Angular, CSS, HTML, Javascript",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
    {
      name: "Yennefer Of Vengerberg",
      email: "test@mail.com",
      phone: "0700000000",
      skills: "Go, Python, Nodejs",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },]);

  useEffect(function () {
    let data = JSON.parse(localStorage.getItem("EmployeesData"));
    if (data) {
      setEmployees(data);
    }
  }, []);

  useEffect(function () {
    localStorage.setItem("EmployeesData", JSON.stringify(employees));
  },
    [employees]
  );

  function removeLocal() {
    localStorage.clear();
  }

  function handleAddEmployee() {
    setEmployees((prevState) => {
      return [...prevState, {
        name: "Triss Merigold",
        email: "yazeenj@outlook.com",
        phone: "0700000000",
        skills: "Vue, firebase, git, c#",
        avatar: "https://i.imgur.com/TUhCrsY.png",
      },
      ];
    });
  }

  return (
    <>
      <h2>EmployeeList</h2>
      <button className = 'button' onClick={handleAddEmployee}>Add Employee</button>
      <button className = 'button' onClick={removeLocal}>Remove</button>
      {employees.map((employee)=> (
        <Employee EmployeeData={employee} />
      ))}
    </>
  );
}

export default EmployeeList;