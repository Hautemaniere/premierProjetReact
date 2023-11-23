
import logo from './edou.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        <div class="login-box">
  <h2>Se Connecter</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Nom d'Utilisateur : </label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Mot de passe : </label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Connexion
    </a>
  </form>
</div>
      </header>
    </div>
  );
}

export default App;