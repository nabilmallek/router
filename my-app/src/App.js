import React from 'react'
import Home from './Home'
import Descriptions from './Descriptions'
import Vedio from './Vedio'
import {BrowserRouter ,NavLink,Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
     <nav>
     <h1>the best movies</h1>
      <NavLink to="/" exact>Home</NavLink> 
      <NavLink to="/Descriptions" >Descriptions</NavLink> 
      <NavLink to="/Vedio" >Vedio</NavLink> 
       
       
       
       </nav> 
    
    
    
    
    <Route path="/" exact component={Home}/>
    <Route path="/Descriptions" component={Descriptions}/>
    <Route path="/Vedio" component={Vedio}/>
    </div>
    </BrowserRouter>
    )
}
export default App
