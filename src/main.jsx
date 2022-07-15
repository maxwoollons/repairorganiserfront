import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/navbar.jsx'
import {Switch,Link,Route} from "wouter";
import Shipping from './components/Shipping.jsx'
import Addissue from './components/addissue.jsx'
import Archived from './components/archived.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Switch>
    <Route path='/' component={App}/>

      <Route path='/shipping' component={Shipping}/>
      <Route path='/addissue' component={Addissue}/>
      <Route path='/archived' component={Archived}/> 
      <Route>404 not found</Route>
    </Switch>
  </>
)
