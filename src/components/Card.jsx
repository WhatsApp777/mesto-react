import React from 'react';

function Card(props){

  const { title } = props;

    return(
        <div className="place">
          <div className="place__images">
            <img className="place__img" />
            <img src="./images/trash.svg" className="place__trash" alt="удалить" />
          </div>
          <div className="place__content">
            <h2 className="place__title">{title}</h2>
            <div className="place__like">
              <button type="button" className="place__like_type_button"></button>
              <div className="place__like_type_number">1</div>
            </div>
          </div>
        </div>
    )
}

export default Card;