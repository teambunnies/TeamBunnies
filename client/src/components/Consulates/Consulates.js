import React, { Component } from 'react';
import ConsulateItems from './ConsulateItems';
import PropTypes from 'prop-types';
import './consulates.css';


class Consulates extends Component {
   
    render() {
        //Map the items as configured in ItemImage Component...
        return  this.props.consulatedata.map((consulate) => (

            //...for each of the items
            <ConsulateItems

            //in React you must provide a key for list items, we using thename of the item
            key={consulate.Name} 

            consulate={consulate} 
            />
            //on render, sort the items randomly
        ))
    }
}
//Proptypes ensure the data being recieved through props is valid(best practices)
Consulates.propTypes = {
    consulatedata: PropTypes.array.isRequired
}
export default Consulates




