import React from 'react'

export const NavDropDown = ({item}) => {
  return (
    <div className='nav-dropdown-item'>
        <p>{item}</p>
        <i class="fa-solid fa-angle-down"></i>
    </div>
  )
}
