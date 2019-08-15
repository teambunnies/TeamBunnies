import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getChicagoName } from "../../actions/chicagoname";

const Dashboard = ({  auth: { user }, chicagoname: {chicagoname, loading} }) => {
  
  return loading && chicagoname === null ? (
    <div>..loading</div>
  ) : (
      <Fragment>
          <h1 className='large text-primary'>Dashboard</h1>
    
        <h2 className="test"> Welcome,{' '}{chicagoname && chicagoname.firstname} {chicagoname && chicagoname.lastname}</h2>
   
      {chicagoname !=null ?(
          <Fragment>
          <h2>{chicagoname.lastnames}</h2>
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
