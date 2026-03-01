import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Pages/Home/Home'
import ScrollToTop from '../../Studio-Ghibli/src/components/Pages/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>

      <ScrollToTop/>
    </>
  )
}

export default App
