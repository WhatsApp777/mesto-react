import React from "react";

function PopupWithForm(props){
    return(
        <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <button className={`popup__close-button popup__close-button_type_${props.namme}`} onClick={props.onClose} type="button"></button>
          <form className={`form form_type_${props.name}`} name="editProfile" novalidate>
            <h2 className={`form__title form__title_type_${props.namme}`}>{props.title}</h2>
            {props.children}
            <button type="submit" className={`form__submit form__submit_type_${props.namme}`}>{props.buttonText}</button>
          </form>
        </div>
      </div>
    )
}

export default PopupWithForm;