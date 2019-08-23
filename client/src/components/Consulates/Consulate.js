import React, { Component } from 'react';
import Consulates from "./Consulates"
import consulatedata from "../../consulate.json"
import './style.css';

class Consulate extends Component {
  state = {
    consulatedata
  }

  render() {
    
    return (

        <section class="section">
          <h1> Consulates in Chicago </h1>
               
        <Consulates 
        //onclick method that originates from binding of props to the item Id in ItemImage
        
        //This is how we allow state to traverse into other components with props
        consulatedata={this.state.consulatedata}/>
       
    </section>
     
    );
  }


}

export default Consulate;
