import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const { onRegister } = props;

  const [formRegisterValue, setFormRegisterValue] = React.useState({
    email: "",
    password: "",
  });

  function handleChangeRegister(e) {
    const { name, value } = e.target;
    setFormRegisterValue({
      ...formRegisterValue,
      [name]: value,
    });
  }

  function handleSubmitRegister(e) {
    e.preventDefault();
    onRegister(formRegisterValue.email, formRegisterValue.password);
    setFormRegisterValue({});
  }

  return (
    <div className="login">
      <p className="login__title">Регистрация</p>
      <form onSubmit={handleSubmitRegister} className="login__form">
        <input
          type="email"
          className="login__input login__input_type_email"
          placeholder="Email"
          name="LoginEmail"
          id="LoginEmail"
          minLength="2"
          required
          onChange={handleChangeRegister}
          value={formRegisterValue.email}
          autocomplete="off"
        />
        <input
          type="password"
          className="login__input login__input_type_email"
          placeholder="Пароль"
          name="LoginPassword"
          id="LoginPassword"
          minLength="2"
          required
          onChange={handleChangeRegister}
          value={formRegisterValue.password}
          autocomplete="off"
        />
        <button type="submit" className="login__button-submit">
          Зарегистрироваться
        </button>
        <div className="">
          <Link to="/sign-in" className="">
            Уже зарегистрированы? Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
