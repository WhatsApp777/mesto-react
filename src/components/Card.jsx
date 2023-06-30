import React from 'react';
import Main from './Main.jsx';

function Card(props){
  const { _id, link, name, likes } = props;

  return (
  <div className="place" key={_id}>
    <div className="place__images">
      <img className="place__img" src={link} alt={name}/>
      <img src="./images/trash.svg" className="place__trash" alt="удалить" />
    </div>
    <div className="place__content">
      <h2 className="place__title">{name}</h2>
      <div className="place__like">
        <button type="button" className="place__like_type_button"></button>
        <div className="place__like_type_number">{likes.length}</div>
      </div>
    </div>
  </div>
  )
}

export default Card;
