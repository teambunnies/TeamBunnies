import React, { Component } from 'react'
import FoodItem from './FoodItem'
import PropTypes from 'prop-types';

class Foods extends Component {
   
    render() {
        //Map the items as configured in ItemImage Component...
        return this.props.fooddata.map((food) => (

            //...for each of the items
            <FoodItem 

            //in React you must provide a key for list items, we using thename of the item
            key={food.Name} 

            food={food} 
            />
            //on render, sort the items randomly
        ))
    }
}
//Proptypes ensure the data being recieved through props is valid(best practices)
Foods.propTypes = {
    fooddata: PropTypes.array.isRequired
}
export default Foods




