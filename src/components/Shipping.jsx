import { useState,useEffect } from 'react'
import '../App.css'
import Shippinginfo from './Shippinginfo';
import { BrowserRouter } from "react-router-dom";
import Navbar from './navbar';


function Shipping() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('http://api.jbrepair.xyz:8000/api/login',
    {
        credentials: 'include'
    }).then(res => res.json())
    .then(data => {
        if(data.username){
            console.log("Logged in")
        }
        else{
            location.href = "/"
        }
    }
    )
}, [])
  

  return (
    <div className="App">
      <Navbar/>
    <div className='container'>

      <Shippinginfo/>
    </div>
    </div>
  )
}

export default Shipping
