import React from 'react';

const PhotoListItem = (props) => {
  return (
    <>
      <img style={styles}src={props.url}></img>
    </>
  )
}
const styles = {
    //change the cursor to pointer for UI
    height: 200,
    width: 300,
    cursor: 'pointer',
    padding: "5px"
}

export default PhotoListItem;