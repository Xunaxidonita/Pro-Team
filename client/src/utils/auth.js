<<<<<<< HEAD
import decode from 'jwt-decode';
=======
// import decode from "jwt-decode";

const decode = () => {};
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
<<<<<<< HEAD
    return localStorage.getItem('id_token');
=======
    return localStorage.getItem("id_token");
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
  }

  login(idToken) {
    // Saves user token to localStorage
<<<<<<< HEAD
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
=======
    localStorage.setItem("id_token", idToken);
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
  }

  logout() {
    // Clear user token and profile data from localStorage
<<<<<<< HEAD
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
=======
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
  }
}

export default new AuthService();
