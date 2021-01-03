import React, { useEffect, useState } from 'react';

function EmployeeList() {
  function Employee({ name, email, phone, skills, avatar }) {
    return (
      <div className="EmployeeDiv" style={{display: 'flex', boxSizing: 'border-box', width: '75%', border: '2px solid black', margin: '1rem', padding: '1rem', backgroundColor: '#DEDEDE', }}>
        <img className="avatar" alt="Bild" src={avatar} style={{width: '200px', height: '200px', marginRight: '2rem', }} />
        <ul>
          <h2>{name}</h2>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Phone: </strong>
            {phone}
          </p>
          <p>
            <strong>Skills: </strong>
            {skills}
          </p>
        </ul>
      </div>
    );
}
  const [Employees, setEmployees] = useState([
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
    localStorage.setItem("EmployeesData", JSON.stringify(Employees));
  },
    [Employees +1]
  );

  function removeLocal() {
    localStorage.clear();
  }

  function handleAddEmployee() {
    setEmployees(function (prevState) {
      return [...prevState, {
        name: "Triss Merigold",
        email: "yazeenj@outlook.com",
        phone: "0700000000",
        skills: "Vue, firebase, git, c#",
        avatar: "https://i.imgur.com/TUhCrsY.png",
      },];
    });
  }
  return (
    <>
      <h2>Employee List</h2>
      <button onClick={handleAddEmployee} style={{ backgroundColor: '#4CAF50', border: '2px solid black', color: 'white', padding: '1rem', fontSize: '1rem', cursor: 'pointer', }}>Add Employee</button>
      <button onClick={removeLocal} style={{ backgroundColor: '#4CAF50', border: '2px solid black', color: 'white', padding: '1rem', fontSize: '1rem', cursor: 'pointer', }}>Remove</button>
      {Employees.map(function ({ name, email, phone, skills, avatar }) {
        return (<Employee
            name={name}
            email={email}
            phone={phone}
            skills={skills}
            avatar={avatar}
          />
      )})}
    </>
  );
}

export default EmployeeList;