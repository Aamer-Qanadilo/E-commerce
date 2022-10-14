import React from 'react'
import Logo from './Logo';
import { NavDropDown } from './NavDropDown';
// import styles from './../Navbar.css';

const NavLeft = () => {
  const navDropDownList = ['SHOP', 'FABRIC', "JOURNAL", "ABOUT"];
  return (
    <div className='nav-left'>
        <Logo />
        {navDropDownList.map(dropdownItem => <NavDropDown item={dropdownItem}/>)}
    </div>
  )
}

export default NavLeft;