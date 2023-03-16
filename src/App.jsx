import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './Components/Hero/Hero'
import './App.css'
import Feature from './Components/Feature/Feature'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*<Hero/>*/}
  {<Feature/>}
    </>
  )
}

export default App
