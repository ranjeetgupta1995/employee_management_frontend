import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { Employee } from './Employee'
import { AddEmployee } from './AddEmployee'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/addemployee" element={<AddEmployee />} />
        </Routes>
    </div>
  )
}
