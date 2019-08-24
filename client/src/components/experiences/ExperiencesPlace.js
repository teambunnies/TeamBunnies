import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ExperiencesPlace extends Component {
    
    render() {
        
        const{Name, Title, Img, Address, Admission, Description} = this.props.experience;
        return (
            
            <section className={Name}>
            <h3>{Title}</h3>
            <img src={Img} alt={Name} height="400" width="500"></img>
            <h4>{Address}</h4>
            <h4>{Admission}</h4>
            <p className="description">{Description}</p>
        </section>
   
            
        )
    }
}

// ExperiencesPlace.propTypes = {
//     experiencesdata: PropTypes.object.isRequired
// }

 

export default ExperiencesPlace;