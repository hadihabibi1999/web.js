import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Navbar from './navbar'
import Docs from './docs'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/navbar">navbar</Link>
        </li>
        <li>
          <Link to="/docs">docs</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/navbar" component={Navbar} />
      <Route path="/docs" component={Docs} />
    </div>
  </Router>
)
export default routing;