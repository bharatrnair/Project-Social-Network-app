import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mainContainer">

      <div className="loginContainer">
        <div className="loginSection">
        <input type="text" placeholder='username' id='username' />
        <input type="text" placeholder='password'  id='password' />
      
      <div className="loginButton">
        <button id='login'>Log in</button>
      </div>
        <p id='one'>"connect people around"</p>
        </div>
        </div>
      
      <div className= "signUpContainer">
        <div className="signUpSection">
        <p id='two'>Sign Up</p>
        <div className="signUpInput">
        <input type="text" placeholder='First Name' id='firstName' />
        <input type="text" placeholder='Last Name' id='lastName' />
        </div>
        <div className="email">
          <p>E-mail</p>
        <input type="text" />
        </div>
        <div className="dob">
          <p>Date of Birth</p>
        <input type="date" />
        </div>
        <div className="phoneNumber">
          <p>Phone Number</p>
        <input type="text" />
        </div>
        <div className="state">
          <p>State</p>
        <input type="text" />
        </div>
        <div className="city">
          <p>City</p>
        <input type="text" />
        </div>
        

        </div>

      </div>

     
    </div>
  );
}

export default App;
