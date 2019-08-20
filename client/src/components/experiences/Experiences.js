import React, { Component } from 'react'
import ExperiencesPlace from './ExperiencesPlace'
import PropTypes from 'prop-types';

class Experiences extends Component {
   
    render() {
        //Map the items as configured in ItemImage Component...
        return this.props.experiencesdata.map((experience) => (

            //...for each of the items
            <ExperiencesPlace 

            //in React you must provide a key for list items, we using thename of the item
            key={experience.Name} 

            experience={experience} 
            />
            //on render, sort the items randomly
        ))
    }
}
//Proptypes ensure the data being recieved through props is valid(best practices)
Experiences.propTypes = {
    experiencesdata: PropTypes.array.isRequired
}
export default Experiences;