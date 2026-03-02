import React, { useState, useEffect } from 'react'
import '../../CSS/Catalog/CatalogNavbar.css'
import Logo from "../../Image/Banner/Logo.png"

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

const CatalogNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`catalog-navbar-wrapper ${scrolled ? 'catalog-navbar-scrolled' : ''}`}>
      <div className='catalog-navbar-container'>
        <div className='catalog-container'>
          <div className='catalog-navbar'>
            <a href="#" className='catalog-Logo'>
              <img src={Logo} alt="Studio Ghibli Logo" className='catalog-logo'/>
            </a>
            
            <div className='catalog-section-menu'>
              <ul className='catalog-menu'>
                {Menu.map((menu) => (
                  <li key={menu.id} className='catalog-menu-item'>
                    <a href={menu.link} className='catalog-menu-option'>
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogNavbar