import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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

          <h1>Most Popular Foods in Chicago!</h1>
          <hr />
          <Link to="/restaurant" className="btn btn-outline-danger">Best Restaurants</Link>
          <br />
          
          
        <Foods 
        //onclick method that originates from binding of props to the item Id in ItemImage
        
        //This is how we allow state to traverse into other components with props
        fooddata={this.state.fooddata}/>
      
    </section>
     
    );
  }


}

export default Food;
