import React from 'react'
import '../CSS/Navbar.css'
import Logo from "../Image/Banner/Logo.png"

const Menu = [
  {
    id: 1, 
    name: "Home", 
    link: "/#",
  },
  {
    id: 2, 
    name: "Catalog",
    link: "/#",
  }, 
  {
    id: 3,
    name: "About us", 
    link: "/#",
  },
  {
    id: 4, 
    name: "Contacts", 
    link: "/#",
  }
];

const Navbar = () => {
  return (
    <div>
        <div className='container'>
          <div className='navbar'>
            
              <a href="#" className='Logo'>
                <img src={Logo} alt="" className='logo'/>
              </a>
              
              <div className='section-menu'>
                <ul className='menu'>
                  {Menu.map((menu) => (
                    <li className=''>
                      <a href={menu.link} className='menu-option'>
                        {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            
          </div>
        </div>
    </div>
  )
}

export default Navbar
