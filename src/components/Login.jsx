import React from "react";

function Login(props) {
  const { onLogin } = props;

  const [formLoginValue, setFormLoginValue] = React.useState({
    username: "",
    password: "",
  });

  function handleChangeLogin(e) {
    const { name, value } = e.target;
    setFormLoginValue({
      ...formLoginValue,
      [name]: value,
    });
  }

  function handleSubmitLogin(e) {
    e.preventDefault();

    onLogin(formLoginValue.username, formLoginValue.password);
    setFormLoginValue({});
  }

  return (
    <div className="login">
      <p className="login__title">Вход</p>
      <form onSubmit={handleSubmitLogin} className="login__form">
        <input
          onChange={handleChangeLogin}
          type="email"
          className="login__input login__input_type_email"
          placeholder="Email"
          name="LoginEmail"
          id="LoginEmail"
          minLength="2"
          required
          //value={formLoginValue.username}
          autoComplete="off"
        />
        <input
          onChange={handleChangeLogin}
          type="password"
          className="login__input login__input_type_email"
          placeholder="Пароль"
          name="LoginPassword"
          id="LoginPassword"
          minLength="2"
          required
          //value={formLoginValue.password}
          autoComplete="off"
        />
        <button
          onClick={handleSubmitLogin}
          type="submit"
          className="login__button-submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
