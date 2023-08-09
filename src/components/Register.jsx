import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const { onRegister } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmitRegister(e) {
    e.preventDefault();
    onRegister(email, password);
  }

  return (
    <div className="login">
      <p className="login__title">Регистрация</p>
      <form onSubmit={handleSubmitRegister} className="login__form">
        <input
          type="email"
          className="login__input login__input_type_email"
          placeholder="Email"
          id="LoginEmail"
          minLength="2"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="login__input login__input_type_email"
          placeholder="Пароль"
          id="LoginPassword"
          minLength="2"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
