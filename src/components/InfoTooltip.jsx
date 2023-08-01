import React from "react";

function InfoTooltip(props) {
  const { name, title, isOpen, onClose, children } = props;
  const popupOpenProps = `popup popup_type_${name} popup_opened`;
  const popupCloseProps = `popup popup_type_${name}`;

  return (
    <div className={isOpen ? popupOpenProps : popupCloseProps}>
      <div className="popup__container">
        <button
          className={`popup__close-button popup__close-button_type_${name}`}
          onClick={onClose}
          type="button"
        />
        <img className="" />
        <h2 className={`form__title form__title_type_${name}`}>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default InfoTooltip;
