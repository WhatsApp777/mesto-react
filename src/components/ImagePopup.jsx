import React from 'react';

function ImagePopup(props){

  const { name } = props;
    return(
      <div className={`popup popup_type_${name}`}>
        <div className="popup__image-container">
          <button className="popup__close-button popup__close-button_type_image" type="button"></button>
          <img className="popup__image-card" />
          <h2 className="popup__image-title">Домбай</h2>
        </div>
      </div>
    )
}

export default ImagePopup;