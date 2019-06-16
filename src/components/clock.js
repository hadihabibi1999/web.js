import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props){
    super(props);
    this.state={
      time: new Date()
  }
}
  currentTime(){
    this.setState({
     time: new Date()
    })
  } 
 componentWillMount(){
   setInterval(()=>this.currentTime(),1000)
  } 

  render() {
    return (
      <div className="App">
      <div className='background-image rounded' style ={ { backgroundImage: "url('https://wallpapercave.com/wp/oePE9lU.jpg')"} }>
        <h3 style={{color:"#2874A6  ",fontSize:50}}>{this.state.time.toLocaleTimeString()}</h3>
      </div>
      </div>
    );
  }
}

