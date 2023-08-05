import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import logo from "../images/logo.svg";
import ProtectedRoute from "./ProtectedRoute";

function Header(props) {
  const { loggedIn, email, handleLogOut } = props;

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
      <div className="header__authorization">
        <Routes>
          <Route
            path="/sign-in"
            element={
              <Link to="/sign-up" className="">
                Регистрация
              </Link>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Link to="/sign-in" className="">
                Войти
              </Link>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <div className="">
                  {loggedIn && <p className="">{email}</p>}
                  <Link to="sign-in" className="" onClick={handleLogOut}>
                    Выйти
                  </Link>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
