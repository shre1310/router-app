import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Link to={'/invoices'}>Invoices</Link> <br/>
      <Link to={'/expenses'}>Expenses</Link>
    </div>
  )
}

export default Home