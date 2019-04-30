
import React from 'react'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Docs from './components/docs'
import Description from './components/description'
import Js from './components/javascript'

const routing = (
  <Router>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link class="navbar-brand" to='/javascript'><img src={require('./images/js.png')} style={{width:35,height:35}}/><span style={{padding:10}}>JavaScript</span></Link>
      <ul className='navbar-nav'>
        <li className='nav-item active'>
          <Link className='nav-link' to="/description">Description</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/docs">Docs</Link>
        </li> 
        </ul>
        <div style={{marginLeft:770}}>
        <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
     </nav>
      <Route path="/docs" component={Docs} />
      <Route path="/description" component={Description} />
      <Route path="/javascript" component={Js} />
    </div>
  </Router>
);
export default routing;