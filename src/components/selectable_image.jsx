import React from 'react';

const SelectableImage = (props) => {
  return(
    <div>
      <img src={ props.imageURL } className='selectable-image'></img>
    </div>
  );
};

export default SelectableImage;
