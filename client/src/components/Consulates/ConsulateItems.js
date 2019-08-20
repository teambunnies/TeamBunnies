import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ConsulateItems extends Component {
    
    render() {
        
        
        const{Country, Name, Address} = this.props.consulate;
        return (
            
            <section className={Name}>
            <h4>{Country}</h4>
            <p className="address">{Address}</p>
        </section>
   
            
        )
    }
}

// ConsulateItems.propTypes = {
//     consulatedata: PropTypes.object.isRequired
// }

 

export default ConsulateItems






