

import React,{Component} from 'react';
class Cards extends Component {
  state = {
     array:[
      {name:'object',title:'Object',photo:'../images/braces.png'},
      {name:'redux',title:'Redux',photo:'../images/redux.png'},
      {name :'arrow function',title:'Arrow Functions',photo:'../images/arrow-function.png'}
    ]
  }
  titles = this.state.array.map((element)=>(<h5 class="card-title">{element.title}</h5>));
  names = this.state.array.map((element) => (<p class="card-text">Some quick example code about {element.name} in JavaScript</p>));
  photos = this.state.array.map((element)=>(<img src={require(element.photo)} style={{width:100,height:50,marginLeft:20}}  class="card-img-top" />));

  render() { 
    return ( 
      <div>
         {this.titles}
      </div>
     );
  }
}
 
export default Cards;