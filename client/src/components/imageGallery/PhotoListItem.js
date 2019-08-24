import React from 'react';
import "./image.css";

const PhotoListItem = (props) => {
  return (
    <>
      <img style={styles}src={props.url} alt={props.alt} className="photos"></img>
    </>
  )
}
const styles = {
    //change the cursor to pointer for UI
    height: 200,
    width: 300,
    cursor: 'pointer',
    padding: "5px",
   
}

export default PhotoListItem;