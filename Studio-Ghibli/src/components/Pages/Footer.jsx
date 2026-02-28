import React from 'react'
import '../CSS/Footer.css'
import Img1 from '../Image/Pattern/Bottom Pattern Light.png'
import littel_Star from '../Image/Pattern/Star Pattern.png'

const Footer = () => {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer id="contacts" className='footer-section'> {/* Добавлен id */}
      <div className='exContainer'>
        <div className='exMainRow'>
          <div className='exSectionLinks'>
            <ul className='UselfulLinks'>
              <li className='name-links'>Useful Links</li>
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className='exTextLinks'>Home</a>
              </li>
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="#catalog" onClick={(e) => handleLinkClick(e, 'catalog')} className='exTextLinks'>Catalog</a>
              </li>
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className='exTextLinks'>About Us</a>
              </li>
            </ul>
             
            <ul className='developer'>
              <li className='name-links'>Developer</li>
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="/">Alan</a>
              </li>
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="mailto:I_6464664@gmail.com">I_6464664@gmail.com</a>
              </li>
            </ul>

            <ul className='Contacts'>
              <li className='name-links'>Contacts</li>
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="https://t.me/L_6464646" target="_blank" rel="noopener noreferrer">Telegram: @L_6464646</a>
              </li>
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="https://github.com/Alan" target="_blank" rel="noopener noreferrer">Git Hub: Alan</a>
              </li>
            </ul>
          </div>

          <div className='exSectionPattern'>
            <img src={Img1} alt="" className='bg-footer-pattern'/>
          </div>

          <div className='autor-logo'>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className='autorname'>@Alan81</a>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className='logofooter'>Studio Ghibli</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer