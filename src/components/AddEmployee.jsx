import React, { useState } from 'react'

export const AddEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState(0);
    

    const addEmployee = () => {
        const payload = {
            firstName,
            lastName,
            email,
            department,
            salary,
        }

        fetch("https://weary-jewelry-duck.cyclic.app/employees/addemployee", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(err => console.log(err))
    }
  return (
    <div>
        <h1>Register From Here</h1>
        <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Department </label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)} >
            <option value="">Select department</option>
            <option value="tech">Tech</option>
            <option value="marketing">Marketing</option>
            <option value="operations">Operations</option>
        </select>
        <br />
        <input type='number' placeholder='Salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
        <br />
        <button onClick={addEmployee}>Add Employee</button>
    </div>
  )
}
