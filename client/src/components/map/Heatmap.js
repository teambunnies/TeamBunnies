import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import CHICAGO_CENTER from './chicago_center';

class Heatmap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    fetch('places.json')
      .then(response => response.json())
      .then(data => this.setState({ places: data }));
  }

  render() {
    const { places } = this.state;
    // console.log(this.state)
    const data = places.map(place => ({
      lat: place.lat,
      lng: place.lng,
      weight: place.weight,
    }));
    const heatmapData = {
      positions: data,
      options: {
        radius: 20,
        opacity: 2,
      },
    };
    // console.log(heatmapData)

    return (
      <Fragment>
        
        <div className="section" style={{ height: '100vh', width: '100%' }}>
        <h1>Spanish Speakers</h1>
          <GoogleMapReact
            defaultZoom={10}
            defaultCenter={CHICAGO_CENTER}
            heatmap={heatmapData}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_MAP_KEY,
              libraries: ['visualization'],
            }}
          />
       </div>
      </Fragment>
    );
  }
}

export default Heatmap;
