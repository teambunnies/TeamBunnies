import React, { Fragment } from "react";
import PropTypes from "prop-types";
import DashboardActions from "./DashboardActions"
import { connect } from "react-redux";


const Dashboard = ({  auth: { user }, chicagoname: {chicagoname, loading} }) => {
  
  return loading && chicagoname === null ? (
    <div>..loading</div>
  ) : (
   
    
    
 
      <Fragment>
    
    
      <section className="section auth-background">
      <h2> Welcome,</h2>
        <h2 className=""> {' '}{chicagoname && chicagoname.firstname} {chicagoname && chicagoname.lastname}</h2>
        <h2> <hr />Where to? <hr /></h2>
        <DashboardActions />
      </section>
      <section class="section section-dark">
        
      </section>
           
      
   
      {chicagoname !=null ?(
          <Fragment>
             
           
             <section class="section section-dark">
        <h2> Favorites <hr /></h2>
      </section>
       
          
         
      </Fragment>
     
      ) : (
        <Fragment>
          <p>You Have not been assigned a chicagoname</p>
         
           
        </Fragment>
      )}
      
      </Fragment>
   
  )
};

Dashboard.propTypes = {
  getChicagoName: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  chicagoname: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  chicagoname: state.chicagoname
  
});

export default connect(
  mapStateToProps
 
)(Dashboard);

