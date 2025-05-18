import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
  }

  loggedIn(): boolean {
    
      const token = localStorage.getItem('id_token');
      return !!token;
  }
  
  isTokenExpired(token: string) {
    try {
      const decoded: JwtPayload = jwtDecode(token);
      if (decoded.exp) {
        return decoded.exp * 1000 < Date.now();
      }
      return true; // If no expiration, consider it expired
    } catch (e) {
      return true; // If decoding fails, consider it expired
    }
  }

  getToken(): string {
    // Retrieve the token from localStorage
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    // Set the token to localStorage
    localStorage.setItem('id_token', idToken);

    // Redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
  }
}

export default new AuthService();
