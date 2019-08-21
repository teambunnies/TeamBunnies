import React, { Component } from 'react'
import RestaurantItem from './RestaurantItem'
import PropTypes from 'prop-types';

class Restaurants extends Component {
   
    render() {
        //Map the items as configured in ItemImage Component...
        return this.props.restaurantdata.map((restaurant) => (

            //...for each of the items
            <RestaurantItem 

            //in React you must provide a key for list items, we using thename of the item
            key={restaurant.Name} 

            restaurant={restaurant} 
            />
            //on render, sort the items randomly
        ))
    }
}
//Proptypes ensure the data being recieved through props is valid(best practices)
Restaurants.propTypes = {
    restaurantdata: PropTypes.array.isRequired
}
export default Restaurants;