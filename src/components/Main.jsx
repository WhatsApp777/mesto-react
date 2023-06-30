import React from 'react';
import Card from './Card.jsx';
import { api } from '../utils/api.js';

function Main(props){
    const { onEditAvatar, onEditProfile, onAddPlace} = props;

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription ] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);
  
    React.useEffect(() => {
      api.getUserInfo() 
      .then((json) => {
        setUserName(json[0].name)
        setUserDescription(json[0].about)
        setUserAvatar(json[0].avatar)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
    }, [])

    React.useEffect(() => {
      api.getInitialCards()
      .then((card) => {
        setCards([...card[1]]);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
    }, [])

    return(
        <main className="content">
        <section className="profile">
          <div className="profile__profile-info">
            <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
              <img src={userAvatar} style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar" alt="фото" />
            </button>
            <div className="profile__table">
              <div className="profile__info">
                <h1 className="profile__title">{userName}</h1>
                <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
          </div>
            <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
        </section>
        <section className="places">
          <div className="place">
            {
              cards.map((card) => {
                <Card 
                  key={card._id}
                  {...card}
                />
              })
            }
          </div>
        </section>
      </main>
    )
}

export default Main;