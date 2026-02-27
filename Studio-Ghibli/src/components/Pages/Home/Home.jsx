import React from 'react'
import '../../CSS/Home/Home.css'
import Vector from '../../Image/Banner/Banner.png'
import pattern from '../../Image/Pattern/Home Banner Pattern.png'
import Cloud from '../../Image/Pattern/Cloud Pattern_2.png'
import Cloud_2 from '../../Image/Pattern/Cloud Pattern.png'
import BgPattern from '../../Image/Pattern/Background.png'
import Navbar from '../Navbar'
import Hero from './Hero'
// import Favorite from './Favorite'
// import Catalog from './Catalog'
// import About from './About'
// import Footer from '../Footer'

const Home = () => {

   const bgImage = {
        backgroundImage: `url(${pattern}), url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }
    
    const bgPattern ={
      backgroundImage: `url(${BgPattern})`,
      backgroundPosition: "center",
      backgroundRepeat: " no-repeat",
      backgroundSize: "cover",
      width: "100%",
      minHeight: "100vh", 
    }
    

  return (
    <div>
      <div style={bgImage} >
        <div  className=''>
          <Navbar/> 
          <Hero/>
          <div className='cloud-group'>
            <img src={Cloud_2} alt="" className='img-cloud-l'/>
            <img src={Cloud} alt="" className='img-cloud-r'/>  
          </div>
        </div>
        
      </div>
      

      {/* <div style={bgPattern}>
        <Favorite/>
        <Catalog/>
        <About/>
        <Footer/>
      </div> */}
      
    </div>
  )
}

export default Home
