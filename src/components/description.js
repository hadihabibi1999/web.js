
import React, { Component } from 'react';



class Description extends Component {
    render() { 
        return ( 
            <div style={{textAlign:'center',marginTop:30}}>
              <span style={{fontSize:20,color:"#D5D8DC"}}> 
                    object oriented programming is a programming paradigm or style of programming (is not programming language or tool);<br></br> oop is supported by : c#,java,Ruby,python & JavaScript ... oop has 4 concepts : 1- Encapsulation 2- Abstraction 3- Inheritence 4-polymorphism

         <br></br>1)Encapsulation: befor oop ,we had produced of programming that invided the program into a set of functions so we have data stored in bunch of variables and functions that operate on the data. there is so much interdepency between all these functions,it becomes problematic, oop came to solve this problem. in oop we combine a group of related variables and functions in a unit , we call that unit an object; variables=>properties ... functions=>methods
         
         <br></br>2)Abstraction: we can hide some of the properties and methods from the outside of an object and this gives us a couple of benefits , first is that we'll be able to make the interface of those object simpler . using and understanding an object with few properties and methods is easier than an object with several properties & methods . 2nd benefit is that helps us reduce the impact of changes;
         
         <br></br>3)Inheritence: is a mechanism that allows us to eliminate redundant code;
         
         <br></br>4)polymorphism:
         polymorphism means "many forms" in oop . polymorphism is a technique that allows us to refactory ugly switch & case statement;
         </span>
         </div>
         );
    }
}
 
export default Description;