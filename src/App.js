import React from 'react';
import Navbar from "./navbar";
import routing from './navbar';
import Particles from 'react-particles-js'

const particlesOpt = {
  particles:{
    number:{
      value:100,
      destiny:{
        enable:true,
      }
    }
  }
}

 export default class App extends React.Component {
  render() { 
    return ( 
      <div>
           {routing}
         <Particles 
            params={particlesOpt}/>
      
      </div>
     );
  }
}
