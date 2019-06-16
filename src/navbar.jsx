
import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import Docs from './components/docs'
import Description from './components/description'
import Js from './components/javascript'

import Clock from './components/clock'

const routing = (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#224F7C'}}>
       <Link className="navbar-brand" to='/javascript'><img src={require('./images/js.png')} style={{width:35,height:35}}/><span style={{padding:10}}>JavaScript</span></Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
           <Link className='nav-link' to="/description">Description  <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/docs">Docs</Link>
        </li> 
      </ul>
      <div class="position-relative">
            <Clock/>
      </div>
    </div>
   </nav>
       <Route path="/docs" component={Docs} />
       <Route path="/description" component={Description} />
       <Route path="/javascript" component={Js} />
 </Router>
);
export default routing;
// <span style={{fontSize:20,color:'#E5E8E8'}}> Created by @Hadi-cyb </span>