import React from 'react';
import Navbar from "./navbar";
import routing from './navbar';

 export default class App extends React.Component {
  render() { 
    return ( 
      <div>
       {routing}
      </div>
     );
  }
}
