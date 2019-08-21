import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class RestaurantItem extends Component {
    
    render() {
        //
        const{Name, Title, Img, Price, Description} = this.props.restaurant;
        return (
            
            <section className={Name}>
            <h4>{Title}</h4>
            <img src={Img} alt={Name}height="350" width="450"></img>
            <h5>{Price}</h5>
            <p className="description">{Description}</p>
        </section>
   
            
        )
    }
}

// FoodItem.propTypes = {
//     fooddata: PropTypes.object.isRequired
// }

 

export default RestaurantItem
