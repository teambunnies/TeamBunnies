import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 41.905,    lng: -87.72
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD6HvdsQQHEXQ2HFTwKQGK8UVDZ_Ce22_g"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.905}
            lng={-87.72}
            text="HERE IS CHICAGO"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;