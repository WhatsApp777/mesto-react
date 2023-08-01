import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import logo from "../images/logo.svg";

function Header(props) {
  const { loggedIn, email } = props;

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
      <div className="header__authorization">
        {loggedIn && <p className="">{email}</p>}
        <Routes>
          <Route path="/sign-up">
            <Link to="/sign-in" className="">
              Войти
            </Link>
          </Route>
          <Route path="/sign-in">
            <Link to="sign-up" className="">
              Регистрация
            </Link>
          </Route>
          <Route path="/">
            <Link to="sign-in" className="">
              Выйти
            </Link>
          </Route>
        </Routes>
      </div>
    </header>
  );
}

export default Header;
