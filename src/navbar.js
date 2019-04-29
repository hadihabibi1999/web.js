import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Docs from './docs'



class Navbar extends React.Component {
   
  render() { 
  
    return ( 
    <div>
           <Router>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">
  <img style={{width:35,height:35,paddingRight:7,paddingBottom:2}}src={require('./images/js.png')}/>  JavaScript</a>
 

  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Description<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
      <Link className='nav-link' to='/docs'>Docs</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</Router>
     </div>
     );
  }
}
 
export default Navbar;
       
