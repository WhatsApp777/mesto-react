import React from "react";
import UnionV from "../images/UnionV.svg";
import UnionX from "../images/UnionX.svg";

function InfoTooltip(props) {
  const { name, isOpen, onClose, isRegistrate } = props;
  const popupOpenProps = `popup popup_type_${name} popup_opened`;
  const popupCloseProps = `popup popup_type_${name}`;

  return (
    <section className={isOpen ? popupOpenProps : popupCloseProps}>
      <div className="popup__container">
        <button
          className={`popup__close-button popup__close-button_type_${name}`}
          onClick={onClose}
          type="button"
        />
        <img srs={isRegistrate ? `${UnionV}` : `${UnionX}`} />
        <h2 className={`form__title form__title_type_${name}`}>
          {isRegistrate
            ? "Вы успешно зарегистрировались"
            : "Что-то пошло не так! Попробуйте еще раз."}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
