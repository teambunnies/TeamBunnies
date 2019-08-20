import React, { Component } from 'react';
import Foods from "./Foods"
import fooddata from "../../food.json"

import './foods.css';



class Food extends Component {
  state = {
    fooddata
  }

  render() {
    
    return (

        <section className="section">
          
        <Foods 
        //onclick method that originates from binding of props to the item Id in ItemImage
        
        //This is how we allow state to traverse into other components with props
        fooddata={this.state.fooddata}/>
      
    </section>
     
    );
  }


}

export default Food;
