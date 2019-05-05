
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col} from 'reactstrap';

import  redux from '../images/redux.png'
import  object from '../images/braces.png';
//import  arrowFunction from '../images/arrow-function.png';

class Cards extends Component {
  state = {
     array:[
      {name:'object',title:'Object',photo:object},
      {name:'redux',title:'Redux',photo:redux},
    //  {name :'arrow function',title:'Arrow Functions',photo:arrowFunction}
    ]
  }
  titles = this.state.array.map((element)=>(<h5 class="card-title">{element.title}</h5>));
  names = this.state.array.map((element) => (<p class="card-text">Some quick example code about {element.name} in JavaScript</p>));
  //photos = this.state.array.map((element)=>(<img src={require(element.photo)} style={{width:100,height:50,marginLeft:20}}  class="card-img-top" />));


   
  render() { 
    return ( 
      <div>
  
  <Container>
      <Row>
        <Col className="item-list card-deck bg-light rounded" style={{width:200,margin:40,paddingTop:12}}>
              <img src={require('../images/braces.png')} style={{width:50,height:45,marginLeft:20}}  class="card-img-top" />
            <div class="card-body">
               <h5 class="card-title">{this.titles}</h5>
                <p class="card-text">Some quick example code about {this.names} in JavaScript</p>
                  <a href="#" class="btn btn-dark">begin</a>
            </div>
       </Col>
      </Row>
    </Container>
      </div>
     );
  }
}
 
export default Cards;