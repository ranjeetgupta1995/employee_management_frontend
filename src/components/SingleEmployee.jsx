import React from 'react';

export const SingleEmployee = ({first_name, last_name, email, salary, date}) => {
    return (
        <table>
            <thead style={{border: "1px solid black"}}>
                <tc>No.</tc>
                <tc>First Name</tc>
                <tc>Last Name</tc>
                <tc>Email</tc>
                <tc>Salary</tc>
                <tc>Date</tc>
                <tc>Actions</tc>
            </thead>
            <tbody>
                <tc>{}</tc>
                <tc>{first_name}</tc>
                <tc>{last_name}</tc>
                <tc>{email}</tc>
                <tc>{salary}</tc>
                <tc>{date}</tc>
            </tbody>
        </table>
    )
}