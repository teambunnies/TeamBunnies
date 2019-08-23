import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class FoodItem extends Component {
    
    render() {
        //
        const{Name, Title, Img, Description} = this.props.food;
        return (
            
            <section className={Name}>
            <h2>{Title}</h2>
            <img src={Img} alt={Name}height="350" width="450"></img>
            <p className="description">{Description}</p>
        </section>
   
            
        )
    }
}

// FoodItem.propTypes = {
//     fooddata: PropTypes.object.isRequired
// }

 

export default FoodItem






