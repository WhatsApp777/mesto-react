class Auth {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  authorization(data) {
    return fetch(`${this._url}/signup`, {
      metod: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then(this._handleResponseAuth);
  }

  registration(data) {
    return fetch(`${this._url}/signin`, {
      metod: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then(this._handleResponseAuth);
  }

  getInformation(token) {
    return fetch(`${this._url}/users/me`, {
      metod: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponseAuth);
  }

  _handleResponseAuth(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
}

const auth = new Auth({
  url: "https://auth.nomoreparties.co",
  headers: {
    "Content-type": "application/json",
  },
});

export { auth };

/* function authorization(email, password) {
  fetch(`https://auth.nomoreparties.co/signup`, {
    metod: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((item) => {
      if (item) {
        localStorage.setItem("jwt", item.token);
        return item;
      } else {
        return;
      }
    })
    .catch(console.error);
}

function registration(email, password) {
  fetch(`https://auth.nomoreparties.co/signin`, {
    metod: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .catch(console.error);
}

function getInformation(token) {
  fetch(`https://auth.nomoreparties.co/users/me`, {
    metod: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch(console.error);
}

export { authorization, registration, getInformation };
 */
