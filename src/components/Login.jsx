import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const { handleLogin, handleSubmit, handleChange } = props;

  return (
    <div className="login">
      <p className="login__title">Вход</p>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="email"
          className="login__input login__input_type_email"
          placeholder="Email"
          name="LoginEmail"
          id="LoginEmail"
          minLength="2"
          required
        />
        <input
          onChange={handleChange}
          type="password"
          className="login__input login__input_type_email"
          placeholder="Пароль"
          name="LoginPassword"
          id="LoginPassword"
          minLength="2"
          required
        />
        <button type="button" className="login__button-submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
