import { moviesPath } from './constants';

class MoviesApi {
  constructor({ baseUrl}) {
    this._baseUrl = baseUrl;
  }

  async _handleResponse(data) {
    const res = await data.json();
    return data.ok ? res : Promise.reject(data);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => this._handleResponse(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: moviesPath,
});

export default moviesApi;