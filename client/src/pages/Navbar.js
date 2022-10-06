import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="">
      <ul className="navbar__links">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/create'}>
          <li>Create</li>
        </Link>
        <Link to={'/edit'}>
          <li>Edit</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
