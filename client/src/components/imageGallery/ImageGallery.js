import React from 'react';

import PhotoList from './PhotoList.js';
import "./image.css";
// import '../../App.css';
const API_KEY = process.env.REACT_APP_UNSPLASH_API;

class ImageGallery extends React.Component {
  constructor(props){
    super(props)

    this.state={
      photos: [],
      term: ''
    }
  }

  componentDidMount() {
    if (this.state.term !== "") {
      this.fetchPhotos(this.state.term)
    } else {
      this.fetchPhotos('chicago')
    }
  }

  fetchPhotos = (term) => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${API_KEY}`)
      .then(resp => { return resp.json() })
      .then(data => {
        this.setState({
          photos: data.results
        })
      })
  }


  render() {
    return (
      <div>
       
        <div className="section">
          <h1>Photo Gallery</h1> 
        <PhotoList photos={this.state.photos} />
        </div>
      </div>
    )
  }
}

export default ImageGallery;