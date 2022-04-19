import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mainContainer">

      <div className="loginContainer">
        <div className="loginSection">
        <input type="text" placeholder='username' id='username' />
        <input type="text" placeholder='password'  id='password' />
        </div>
      
      <div className="loginButton">
        <button id='login'>Log in</button>
      </div>
        <p id='one'>"connect people around"</p>
        </div>
      
      <div className="signUpContainer">
        <div className="signUpSection">
        <p id='two'>Sign Up</p>
        </div>

      </div>

     
    </div>
  );
}

export default App;
