import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register(props) {
  //const { handleLogin } = props;

  return (
    <div className="login">
      <p className="login__title">Регистрация</p>
      <form className="login__form">
        <input
          type="email"
          className="login__input login__input_type_email"
          placeholder="Email"
          name="LoginEmail"
          id="LoginEmail"
          minLength="2"
          required
        />
        <input
          type="password"
          className="login__input login__input_type_email"
          placeholder="Пароль"
          name="LoginPassword"
          id="LoginPassword"
          minLength="2"
          required
        />
        <button type="button" className="login__button-submit">
          Зарегистрироваться
        </button>
        <div className="">
          <p className="">Уже зарегистрированы</p>
          <button type="button" className="">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
