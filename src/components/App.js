import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
/* import { api } from '../utils/api.js'; */
import PopupWithForm from './PopupWithForm.jsx';


function App() {

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

  return (
    <div className="App">
      <body className="page">
        <Header />
        <Main
         onEditAvatar = {handleEditAvatarClick}
         onEditProfile = {handleEditProfileClick}
         onAddPlace = {handleAddPlaceClick}
        />
        <Footer />
        <PopupWithForm 
          title = {'Редактировать профиль'}
          name = {'profile'}
          buttonText = {'Сохранить'}
        />
        <PopupWithForm
          title = {'Новое место'}
          name = {'cards'}
          buttonText = {'Создать'}
        />
        <PopupWithForm
          title = {'Обновить аватар'}
          name = {'update-avatar'}
          buttonText = {'Создать'}
        />
        <PopupWithForm
          title = {'Вы уверены?'}
          name = {'delete-card'}
          buttonText = {'Да'}
        />


        <div className="popup popup_type_image">
          <div className="popup__image-container">
            <button className="popup__close-button popup__close-button_type_image" type="button"></button>
            <img className="popup__image-card" />
            <h2 className="popup__image-title">Домбай</h2>
          </div>
        </div>

        <template id="template__elements">
          <div className="place">
            <div className="place__images">
              <img className="place__img" />
              <img src="<%=require('./images/trash.svg')%>" className="place__trash" alt="удалить" />
            </div>
            <div className="place__content">
              <h2 className="place__title"></h2>
              <div className="place__like">
                <button type="button" class="place__like_type_button"></button>
                <div className="place__like_type_number">1</div>
              </div>
            </div>
          </div>
        </template>
      </body>
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
        */