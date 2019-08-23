import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Experiences from "./Experiences"
import experiencesdata from "../../experiences.json"

import './experiences.css';



class Experience extends Component {
  state = {
    experiencesdata
  }

  render() {
    
    return (

        <section class="section">

          <h1> Best Experiences in Chicago!</h1>
          <hr />
          <Link to="/restaurant" className="btn btn-outline-danger">Best Restaurants</Link>
          <br />
               
        <Experiences
        //onclick method that originates from binding of props to the item Id in ItemImage
        
        //This is how we allow state to traverse into other components with props
        experiencesdata={this.state.experiencesdata}/>
        
    </section>
     
    );
  }


}

export default Experience;
