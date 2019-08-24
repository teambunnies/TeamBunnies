import React, { Component } from 'react';
import Restaurants from "./Restaurants"
import restaurantdata from "../../restaurants.json"
import './restaurants.css';



class Restaurant extends Component {
  state = {
    restaurantdata
  }

  render() {
    
    return (

        <section className="section">
          <h1>Best Restaurants in Chicago!</h1>
          <hr />
          
        <Restaurants 
        //onclick method that originates from binding of props to the item Id in ItemImage
        
        //This is how we allow state to traverse into other components with props
        restaurantdata={this.state.restaurantdata}/>
      
    </section>
     
    );
  }


}

export default Restaurant;
