import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col} from 'reactstrap';



class Docs extends Component {

    render() { 
        return ( 
            <div>
             <Container>
            <Row>
              <Col className="item-list card-deck bg-light rounded" style={{width:200,margin:40,paddingTop:12}}>
                 <img src={require('../images/braces.png')} style={{width:50,height:45,marginLeft:20}}  class="card-img-top" />
                     <div class="card-body">
                          <h5 class="card-title" >object</h5>
                          <p class="card-text">Some quick example code about objects in JavaScript</p>
                          <a href="#" class="btn btn-dark">begin</a>
                     </div>
              </Col>
              <Col className="item-list card-deck bg-light rounded" style={{width:200,margin:40,paddingTop:12}}>
                 <img src={require('../images/redux.png')} style={{width:60,height:60,marginLeft:20}}  class="card-img-top" />
                     <div class="card-body">
                          <h5 class="card-title">redux</h5>
                          <p class="card-text">Some quick example code about redux in JavaScript</p>
                          <a href="#" class="btn btn-primary" >begin</a>
                     </div>
                </Col>
                <Col className="item-list card-deck bg-light rounded" style={{width:200,margin:40,paddingTop:12}}>
                 <img src={require('../images/arrow-function.png')} style={{width:100,height:50,marginLeft:20}}  class="card-img-top" />
                     <div class="card-body">
                          <h5 class="card-title">arrow function</h5>
                          <p class="card-text">Some quick example code about arrow function in JavaScript</p>
                          <a href="#" class="btn btn-warning">begin</a>
                     </div>
                </Col>
            </Row>
          </Container> 
             </div>
         );
    }
}
 
export default Docs;