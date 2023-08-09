import React from "react";

function Login(props) {
  const { onLogin } = props;

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmitLogin(e) {
    e.preventDefault();
    onLogin(username, password);
  }

  return (
    <div className="login">
      <p className="login__title">Вход</p>
      <form onSubmit={handleSubmitLogin} className="login__form">
        <input
          type="email"
          className="login__input login__input_type_email"
          placeholder="Email"
          name="username"
          id="LoginEmail"
          minLength="2"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          autoComplete="off"
        />
        <input
          type="password"
          className="login__input login__input_type_email"
          placeholder="Пароль"
          name="password"
          id="LoginPassword"
          minLength="2"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
