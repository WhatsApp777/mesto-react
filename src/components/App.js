import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
//import Card from './Card.jsx';
import { api } from '../utils/api.js';
import { config } from '../utils/api.js';
import {
  buttonAddCard,
  buttonEditProfile,
  formProfile,
  formCards,
  formAvatarChange,
  nameInput,
  jobInput,
  buttonEditAvatar
} from '../utils/api.js';

import ImagePopup from './ImagePopup.jsx';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }

  return (
    <div className="page">
        <Header />

        <Main
         onEditAvatar={handleEditAvatarClick}
         onEditProfile={handleEditProfileClick}
         onAddPlace={handleAddPlaceClick}
        />

        <Footer />

        <PopupWithForm 
          isOpen={isEditProfilePopupOpen}
          title="Редактировать профиль"
          name="profile"
          buttonText="Сохранить"
          children={
            <>
              <input type="text" placeholder="Ваше имя" className="form__input form__input_type_name" name="profileName" id="profileName" minLength="2" maxLength="40" required autoComplete="off" />
              <span id="error-profileName" className="form__error"></span>
              <input type="text" placeholder="Ваша профессия" className="form__input form__input_type_job" name="profileJob" id="profileJob" minLength="2" maxLength="200" required autoComplete="off" />
              <span id="error-profileJob" className="form__error"></span>
            </>
          }
          onClose={closeAllPopups}
        />

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          title="Новое место"
          name="cards"
          buttonText="Создать"
          children={
            <>
              <input type="text" placeholder="Название" className="form__input form__input_type_title" name="profileTitle" id="profileTitle" minLength="2" maxLength="30" required autoComplete="off" />
              <span id="error-profileTitle" className="form__error"></span>
              <input type="URL" placeholder="Ссылка на картинку" className="form__input form__input_type_link" name="profileLink" id="profileLink" minLength="2" required />
              <span id="error-profileLink" className="form__error"></span>
            </>
          }
          onClose={closeAllPopups}
        />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          title="Обновить аватар"
          name="update-avatar"
          buttonText="Создать"
          children={
            <>
              <input type="URL" placeholder="Ссылка на картинку" className="form__input form__input_type_update-avatar" name="AvatarLink" id="AvatarLink" minLength="2" required />
              <span id="error-AvatarLink" className="form__error"></span>
            </>
          }
          onClose={closeAllPopups}
        />

        <PopupWithForm
          title="Вы уверены?"
          name="delete-card"
          buttonText="Да"
          onClose={closeAllPopups}
        />
    </div>
  );
}

export default App;



/*         <div className="popup popup_type_profile">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_type_profile" type="button"></button>
            <form className="form form_type_profile" name="editProfile" novalidate>
              <h2 className="form__title form__title_type_profile">Редактировать профиль</h2>
              <input type="text" placeholder="Ваше имя" className="form__input form__input_type_name" name="profileName" id="profileName" minlength="2" maxlength="40" required autocomplete="off" />
              <span id="error-profileName" className="form__error">hhgfg</span>
              <input type="text" placeholder="Ваша профессия" className="form__input form__input_type_job" name="profileJob" id="profileJob" minlength="2" maxlength="200" required autocomplete="off" />
              <span id="error-profileJob" className="form__error"></span>
              <button type="submit" className="form__submit form__submit_type_profile">Сохранить</button>
            </form>
          </div>
        </div>
                <div className="popup popup_type_cards">
          <div className="popup__cards-container">
            <button className="popup__close-button popup__close-button_type_card" type="button"></button>
            <form className="form form_type_cards" name="addCards" novalidate>
              <h2 className="form__title form__title_type_cards">Новое место</h2>
              <input type="text" placeholder="Название" className="form__input form__input_type_title" name="profileTitle" id="profileTitle" minlength="2" maxlength="30" required autocomplete="off" />
              <span id="error-profileTitle" className="form__error"></span>
              <input type="URL" placeholder="Ссылка на картинку" className="form__input form__input_type_link" name="profileLink" id="profileLink" minlength="2" required />
              <span id="error-profileLink" className="form__error"></span>
              <button type="submit" className="form__submit form__submit_type_cards">Создать</button>
            </form>
          </div>
        </div>
                <div className="popup popup_type_update-avatar">
          <div className="popup__update-avatar-container">
            <button className="popup__close-button popup__close-button_type_update-avatar" typy="button"></button>
            <form className="form form_type_update-avatar" name="addCards" novalidate>
              <h2 className="form__title form__title_type_update-avatar">Обновить аватар</h2>
              <input type="URL" placeholder="Ссылка на картинку" className="form__input form__input_type_update-avatar" name="AvatarLink" id="AvatarLink" minlength="2" required />
              <span id="error-AvatarLink" className="form__error"></span>
              <button type="submit" className="form__submit form__submit_type_update-avatar">Сохранить</button>
            </form>
          </div>
        </div>
                <div className="popup popup_type_delete-card">
          <div className="popup__delete-card-container">
            <button className="popup__close-button popup__close-button_type_delete-card" typy="button"></button>
            <form className="form form_type_delete-card">
              <h2 className="form__title form__title_type_delete">Вы уверены?</h2>
              <button type="submit" className="form__submit form__submit_type_delete-card">Да</button>
            </form>
          </div>
        </div>
                <div className="popup popup_type_image">
          <div className="popup__image-container">
            <button className="popup__close-button popup__close-button_type_image" type="button"></button>
            <img className="popup__image-card" />
            <h2 className="popup__image-title">Домбай</h2>
          </div>
        </div>

        /*   function handleEditAvatarClick(){
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
    const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
    .then((res) => {
        const cardsFromApi = res.results.map((item) => ({
            id: item.id,
            src: item.urls.regular,
            alt: item.alt_description,
            title: item.description,
            subtitle: item.user.name,
        }));
  
        setCards(cardsFromApi);
    });
  }, []);
  
  */
      