import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Productmyntra from './common/Productmyntra'

function App() {
  const [count, setCount] = useState(0)
  let [categorydata,Setcategorydata]=useState([])
  let categorydatakey={categorydata,Setcategorydata}

  console.log(categorydata)



  

  return (
    <>
      <Home />
    </>
  )
}

export default App
