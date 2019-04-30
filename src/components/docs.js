import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Docs extends Component {
 
    render() { 
        return ( 
            <div class="card" style={{width:200,margin:40,paddingTop:12}}>
            <img src={require('../images/braces.png')} style={{width:50,height:50,marginLeft:20}}  class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">Object</h5>
          <p class="card-text">Some quick example code about objects in JavaScript</p>
          <a href="#" class="btn btn-dark">begin</a>
        </div>
       </div>
         );
    }
}
 
export default Docs;