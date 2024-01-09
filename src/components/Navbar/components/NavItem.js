import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <li className='hover:text-blue-500 duration-300'>
    <Link to={to}>{children}</Link>
  </li>
)

export default NavItem
