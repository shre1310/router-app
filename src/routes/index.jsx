import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
  import Expenses from "../components/Expenses";
import Invoices from "../components/Invoices";
import Home from "../components/Home";
const index = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/invoices" element={<Invoices />} />
    </Routes>
  )
}

export default index