
import React from 'react'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Docs from './components/docs'
import Description from './components/description'

const routing = (
  <Router>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img src={require('./images/js.png')} style={{width:35,height:35}}/><span style={{padding:10}}>JavaScript</span></a>
      <ul className='navbar-nav'>
        <li className='nav-item active'>
          <Link className='nav-link' to="/description">Description</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/docs">Docs</Link>
        </li> 
        </ul>
     </nav>
      <Route path="/docs" component={Docs} />
      <Route path="/description" component={Description} />
    </div>
  </Router>
)
export default routing;