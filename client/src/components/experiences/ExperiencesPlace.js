import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ExperiencesPlace extends Component {
    
    render() {
        //
        const{Name, Title, Img, Address, Admission, Description} = this.props.experience;
        return (
            
            <section className={Name}>
            <h4>{Title}</h4>
            <img src={Img} alt={Name} height="300" width="400"></img>
            <h5>{Address}</h5>
            <h5>{Admission}</h5>
            <p className="description">{Description}</p>
        </section>
   
            
        )
    }
}

// ExperiencesPlace.propTypes = {
//     experiencesdata: PropTypes.object.isRequired
// }

 

export default ExperiencesPlace;