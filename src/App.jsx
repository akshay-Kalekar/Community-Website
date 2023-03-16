import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './Components/Hero/Hero'
import Feature from './Components/Feature/Feature'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {<Navbar/>}
    <div className='flex flex-col justify-center items-center' >
    {<Hero/>}
    {<Feature/>}
    </div>
    </>
  )
}

export default App
