import React, { Component } from 'react';
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
               
        <Experiences
        //onclick method that originates from binding of props to the item Id in ItemImage
        
        //This is how we allow state to traverse into other components with props
        experiencesdata={this.state.experiencesdata}/>
        
    </section>
     
    );
  }


}

export default Experience;
