import React from 'react';
import { api } from '../utils/api';

function Main(props){
    const { onEditAvatar, onEditProfile, onAddPlace} = props;

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription ] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
  
    React.useEffect(() => {
      api.getAppInfo() 
      .then((json) => {
        setUserName(json[0].name)
        setUserDescription(json[0].about)
        setUserAvatar(json[0].avatar)
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
        </section>
      </main>
    )
}

export default Main;

/*         <section className="places">
        <div className="place">
          <div className="place__images">
            <img className="place__img" />
            <img src="./images/trash.svg" className="place__trash" alt="удалить" />
          </div>
          <div className="place__content">
            <h2 className="place__title">{title}</h2>
            <div className="place__like">
              <button type="button" className="place__like_type_button" onClick={onLikeClick}></button>
              <div className="place__like_type_number">{likes}</div>
            </div>
          </div>
        </div>
        </section> 
        
        /*     React.useEffect(() => {
      api.getInitialCards()
        .then((json) => {
          setCard(json)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        })
      }, [])
      
      
                {cards.map((card, id) => {
            <Card>
              key={}
            </Card> 
          })}
      */
    