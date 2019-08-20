import React from 'react';

import PhotoList from './PhotoList.js';
import '../../App.css';
const API_KEY = '5bac03afeecf3029d75320d54df0ab3c081196f2e6531dccccf2d8c2aea2c0a6';

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
          <h1>Photo gallery</h1> 
        <PhotoList photos={this.state.photos} />
        </div>
      </div>
    )
  }
}

export default ImageGallery;