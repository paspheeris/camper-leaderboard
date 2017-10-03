
const endpoint = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'

class fccApi {
  static getCampers() {
    return fetch(endpoint)
            .then(response => {
              return response.json();
            });
  }
}

export default fccApi;