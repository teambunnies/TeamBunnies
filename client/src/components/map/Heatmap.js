import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import CHICAGO_CENTER from './chicago_center';
import Select from 'react-select';

class Heatmap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      census: [],
      languages: [],
      selectedOption: null,
      
    };
  }

  componentDidMount() {
    fetch('/api/areas')
      .then(response => response.json())
      .then(data => this.setState({ places: data }));
      fetch('https://data.cityofchicago.org/resource/a2fk-ec6q.json')
      .then(response => response.json())
      .then(data => this.setState({ census: data }));
      fetch('languages.json')
      .then(response => response.json())
      .then(data => this.setState({ languages:data }));
      
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);

  };

  render() {
    const { places, census, languages, selectedOption, mergedandfiltered } = this.state;
    console.log(this.state)
    const options = languages.map(lang =>({
      value: lang,
      label: lang,
   
    }))
    const citydata = census.map(cen =>({
      comm_area: cen.community_area,
      // I need to bring the .spanish(The Chosen Language in from from selectionOption.value)
      weight: Math.abs(cen.spanish * .01),
   
    }))
    let weightMap = new Map(citydata.map(({comm_area, weight}) => [comm_area, weight]));

          let res = places.map(
            ({db_area, lat, lng}) => ({lat, lng, weight: weightMap.get(db_area)})
          );
          
            console.log(res)
    
    const heatmapData = {
      positions: res,
      options: {
        radius: 20,
        opacity: 2,
      },
    };
    // console.log(heatmapData)

    return (
      <Fragment>
        
        
        <div className="section" style={{ height: '100vh', width: '100%' }}>
        <Fragment>
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}

      />
      </Fragment>
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
