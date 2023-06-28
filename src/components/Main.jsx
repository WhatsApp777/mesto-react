import React from 'react';
import avatar from '../images/avatar1.jpg';

function Main(){

  function handleEditAvatarClick(){
    const popupWithAvatarChange = document.querySelector('.popup_type_update-avatar');
    popupWithAvatarChange.classList.add('popup_opened')
  }

  function handleEditProfileClick(){
    const popupWithAvatarChange = document.querySelector('.popup_type_profile');
    popupWithAvatarChange.classList.add('popup_opened')
  }

  function handleAddPlaceClick(){
    const popupWithAvatarChange = document.querySelector('.popup_type_cards');
    popupWithAvatarChange.classList.add('popup_opened')
  }

    return(
        <main className="content">
        <section className="profile">
          <div className="profile__profile-info">
            <button type="button" className="profile__avatar-button" onClick={handleEditAvatarClick}>
              <img src={avatar} className="profile__avatar" alt="фото" />
            </button>
            <div className="profile__table">
              <div className="profile__info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
              </div>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
          </div>
            <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="places">
        </section>
      </main>
    )
}

export default Main;