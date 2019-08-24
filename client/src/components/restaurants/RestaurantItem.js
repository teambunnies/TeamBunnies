import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class RestaurantItem extends Component {

    render() {  

        const { Name, Title, Img, Price, Description } = this.props.restaurant;
        return (

            <section className={Name}>
                <h2 className="Heading">{Title}</h2>
                <img src={Img} alt={Name} height="400" width="500"></img>
                <h4>{Price}</h4>
                <p className="description">{Description}</p>
            </section>


        )
    }
}

// FoodItem.propTypes = {
//     fooddata: PropTypes.object.isRequired
// }



export default RestaurantItem;