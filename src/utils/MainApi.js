import { apiOptions, checkError } from "./utils";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  register(user) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(user),
    }).then(checkError);
  }

  login(user) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(user),
    }).then(checkError);
  }

  logout() {
    return fetch(`${this._baseUrl}/logout`, {
      headers: this._headers,
      credentials: "include",
    }).then(checkError);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: "include",
    }).then(checkError);
  }

  getSavedArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      headers: this._headers,
      credentials: "include",
    }).then(checkError);
  }

  saveArticle(article) {
    return fetch(`${this._baseUrl}/articles`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(article),
    }).then(checkError);
  }

  deleteArticle(id) {
    return fetch(`${this._baseUrl}/articles/${id}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
    }).then(checkError);
  }
}

export const api = new Api(apiOptions);
