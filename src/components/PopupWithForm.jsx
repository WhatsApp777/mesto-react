import React from "react";

function PopupWithForm(props){
    return(
        <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <button className="popup__close-button popup__close-button_type_profile" type="button"></button>
          <form className={`form form_type_${props.name}`} name="editProfile" novalidate>
            <h2 className="form__title form__title_type_profile">Редактировать профиль</h2>
            <input type="text" placeholder="Ваше имя" className="form__input form__input_type_name" name="profileName" id="profileName" minlength="2" maxlength="40" required autocomplete="off" />
            <span id="error-profileName" className="form__error">hhgfg</span>
            <input type="text" placeholder="Ваша профессия" className="form__input form__input_type_job" name="profileJob" id="profileJob" minlength="2" maxlength="200" required autocomplete="off" />
            <span id="error-profileJob" className="form__error"></span>
            <button type="submit" className="form__submit form__submit_type_profile">Сохранить</button>
          </form>
        </div>
      </div>
    )
}

export default PopupWithForm;