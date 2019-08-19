import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const generateHeatmap = (instance, { positions }) =>
new instance.visualization.HeatmapLayer({
  data: positions.reduce(
    (acc, { lat, lng, weight = 1 }) => {
      acc.push({
        location: new instance.LatLng(lat, lng),
        weight,
      });
      return acc;
    },
    []
  ),
});

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 41.905,    lng: -87.72
    },
    zoom: 11,

  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: 'auto', width: 'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD6HvdsQQHEXQ2HFTwKQGK8UVDZ_Ce22_g"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <generateHeatmap
           
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;

