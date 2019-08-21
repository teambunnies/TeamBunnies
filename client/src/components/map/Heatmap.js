import React, { Component, Fragment } from "react";
import GoogleMapReact from "google-map-react";
import CHICAGO_CENTER from "./chicago_center";
import Select from "react-select";
import {
  map,
  pick,
  pullAll,
  merge,
  union,
  tail,
  times,
  uniq,
  unionBy,
  find
} from "lodash";

class Heatmap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      census: [],
      filtered: [],
      languages: [],
      selectedOption: null
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    fetch("/api/areas")
      .then(response => response.json())
      .then(data => this.setState({ places: data }));
    fetch("https://data.cityofchicago.org/resource/a2fk-ec6q.json")
      .then(response => response.json())
      .then(data => this.setState({ census: data }));
    fetch("languages.json")
      .then(response => response.json())
      .then(data => this.setState({ languages: data }));
  };

  handleChange = selectedOption => {
    this.setState({ filtered: [] });
    this.setState({ selectedOption: selectedOption.value });
    // const cens = this.state.census;
    // console.log(`Option selected:`, selectedOption.value);
    //update filtered array in state using selected option value as variable

    //  const filtered =  unionBy(...cens, lang);
    // const lang = map(cens, selectedOption.value);
    // const com = map(cens, "community_area");

    // console.log("find", pick(cens, [selectedOption.value]));
    // this.setState({filtered: fliteredArray })
    // console.log(`filtered: ${lang}`);
  };

  render() {
    let { places, census, languages, selectedOption } = this.state;
   
    const options = languages.map(lang => ({
      value: lang,
      label: lang
    }));
    // console.log("select", selectedOption);
    const citydata = census.map(cen => {
      let newCensus = {
        comm_area: cen.community_area,
        // I need to bring the .spanish(The Chosen Language in from from selectionOption.value)
        weight: Math.abs(
          (selectedOption ? cen[selectedOption] : cen.spanish) * 0.05
        )
      };

      return newCensus;
    });
    // console.log("cityd", citydata);
    let weightMap = new Map(
      citydata.map(({ comm_area, weight }) => [comm_area, weight])
    );
// console.log("wm",weightMap)
// console.log("plc",places)
    let res = places.map(({ db_area, lat, lng }) => ({
      lat,
      lng,
      weight: weightMap.get(db_area)
    }));

    // console.log("res", res);

    const heatmapData = {
      positions: res,
      options: {
        radius: 20,
        opacity: 2
      }
    };
    console.log(heatmapData);

    return (
      <Fragment>
        <div className='section' style={{ height: "100vh", width: "100%" }}>
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
              key: `${process.env.REACT_APP_MAP_KEY}`,
              libraries: ["visualization"]
            }}
          />
        </div>
      </Fragment>
    );
  }
}

export default Heatmap;
