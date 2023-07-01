import React from 'react';
import { api } from '../utils/api.js';
import Card from './Card.jsx';

export default function Main(props){
    const { onEditAvatar, onEditProfile, onAddPlace} = props;

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription ] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    
  React.useEffect(() => {
    fetch(`https://mesto.nomoreparties.co/v1/cohort-68/users/me`, {
      method: 'GET',
      headers: {
        authorization: 'dc5ffe71-d4a2-4ae4-8d8f-113b04708a8c',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((json) => {
      setUserName(json.name)
      setUserDescription(json.about)
      setUserAvatar(json.avatar)
    })
    }, [])
 
  React.useEffect(() => {
    fetch(`https://mesto.nomoreparties.co/v1/cohort-68/cards`, {
      method: 'GET',
      headers: {
        authorization: 'dc5ffe71-d4a2-4ae4-8d8f-113b04708a8c',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((json) => setCards(json))
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
            {cards.map((card) => {
                <Card key={card._id} card={card} />
            })}
        </section>
      </main>
    )
}





/* React.useEffect(() => {
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

    React.useEffect(() => {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((res, card) => {
        setUserName(res[0].name)
        setUserDescription(res[0].about)
        setUserAvatar(res[0].avatar)
        setCards([...card[1]])
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
    }, [])
*/