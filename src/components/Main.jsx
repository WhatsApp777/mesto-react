import React from 'react';
//import avatar from '../images/avatar1.jpg';
import { api } from '../utils/api';

function Main(props){
    const { onEditAvatar, onEditProfile, onAddPlace } = props;
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription ] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
      api.getAppInfo() 
      .then((res) => {
        setUserName()
        setUserDescription()
        setUserAvatar()
        console.log(res)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      });
    })

    return(
        <main className="content">
        <section className="profile">
          <div className="profile__profile-info">
            <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
              <img src={userAvatar} className="profile__avatar" alt="фото" />
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