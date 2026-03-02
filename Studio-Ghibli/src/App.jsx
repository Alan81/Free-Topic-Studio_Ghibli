import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Pages/Home/Home'
import CatalogSection from './components/Pages/Catalog/CatalogSection'
import ScrollToTop from './components/Pages/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<CatalogSection/>}/>
      </Routes>
      

      <ScrollToTop/>
      
    </BrowserRouter>
  )
}

export default App
