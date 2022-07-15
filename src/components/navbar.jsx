import React from 'react'
import "../App.css"



function navbar() {
  var today = new Date(),
      date =  today.getDate()  + ' / ' + (today.getMonth() + 1) + " / " + today.getFullYear()


  return (
    <nav className='navbar'>
    <a href="./"><div className="navitem">Home</div></a>
    <a href="./addissue"><div className="navitem">Add Issue</div></a>
    <div>{date}</div>
    </nav>
  )
}

export default navbar