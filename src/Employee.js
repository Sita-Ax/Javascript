function Employee({ EmployeeData }) {
    return (
        <div className="EmployeeDiv" >
            <img className="avatar" alt="Bild" src={EmployeeData.avatar} />
            <div>
                <h2>{EmployeeData.name}</h2>
                <p>
                    <strong>Email: </strong>
                    {EmployeeData.email}
                </p>
                <p>
                    <strong>Phone: </strong>
                    {EmployeeData.phone}
                </p>
                <p>
                    <strong>Skills: </strong>
                    {EmployeeData.skills}
                </p>
            </div>
        </div>
    );
}

export default Employee;
