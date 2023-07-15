import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.jsx";
import { api } from "../utils/api.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])

      .then(([user, card]) => {
        setCurrentUser(user);
        setCards(card);
      })
      .catch(console.error);
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const updatedCards = cards.slice().filter((c) => c !== card);
        setCards(updatedCards);
      })
      .catch(console.error);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleUpdateUser({ name, about }) {
    api
      .editProfile({ name, about })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          title="Новое место"
          name="cards"
          buttonText="Создать"
          children={
            <>
              <input
                type="text"
                placeholder="Название"
                className="form__input form__input_type_title"
                name="profileTitle"
                id="profileTitle"
                minLength="2"
                maxLength="30"
                required
                autoComplete="off"
              />
              <span id="error-profileTitle" className="form__error"></span>
              <input
                type="URL"
                placeholder="Ссылка на картинку"
                className="form__input form__input_type_link"
                name="profileLink"
                id="profileLink"
                minLength="2"
                required
              />
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
              <input
                type="URL"
                placeholder="Ссылка на картинку"
                className="form__input form__input_type_update-avatar"
                name="AvatarLink"
                id="AvatarLink"
                minLength="2"
                required
              />
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
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
