import React from 'react';
import avatar from '../images/avatar1.jpg';

function Main(){

    return(
        <main className="content">
        <section className="profile">
          <div className="profile__profile-info">
            <button type="button" className="profile__avatar-button">
              <img src={avatar} className="profile__avatar" alt="фото" />
            </button>
            <div className="profile__table">
              <div className="profile__info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button type="button" className="profile__edit-button"></button>
              </div>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
          </div>
            <button type="button" className="profile__add-button"></button>
        </section>
        <section className="places">
        </section>
      </main>
    )
}

export default Main;