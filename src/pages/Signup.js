import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css';
import '../styles/pages/Signup.css';
import 'animate.css';

import Button from '../components/Button';
import { checkUsername } from '../api/api-calls';

import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa';

import { BaseContext } from "../utils/FirebaseContext";
import { useAuth } from '../utils/AuthContext';

const UsernameInput = ({ username, setUsername, setHasUsername }) => {
   const [errorMessage, setErrorMessage] = useState("");

   const handleSubmit = async (event) => {
      event.preventDefault();

      const usernameCheck = (await checkUsername(username)).data.message;

      if(usernameCheck.includes("verfügbar")) {
         setHasUsername(true);
      }else{
         setErrorMessage(usernameCheck);
      }
   }

   const handleUsernameChange = (event) => {
      setUsername(event.target.value);
   }

   return (
      <div className="username-input">
         <h1>Wähle den gewünschten Nutzernamen</h1>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               value={username}
               onChange={handleUsernameChange}
               placeholder="Username"
               maxLength="20"
            />
            <button type="submit"><FaArrowRight color="var(--color_primary)"/></button>
         </form>
         <p>{errorMessage !== "" && errorMessage}</p>
      </div>
   );
}

const SignupConfirmation = ({ username }) => {
   // introduce state variables for email signup
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [repeatPasswordError, setRepeatPasswordError] = useState("");
      
   // introduce firebase actions
   const firebase = useContext(BaseContext);

   // introduce auth context
   const auth = useAuth();

   const signUpPlatform = async (platform) => {
      const success = await firebase.socialSignup(platform, username);

      if(success){
         console.log("Signup successful!");
         auth.login();
      }else{
         console.log("Signup failed!")
      }
   }

   const signUpEmail = async (event) => {
      event.preventDefault();

      if (emailError === "" || passwordError === "" || repeatPasswordError === "") {
         const success = await firebase.emailSignup(email, username, password);

         if(success){
            console.log("Signup successful!");
            auth.login();
         }else{
            console.log("Signup failed!");
         }
      }
   }

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
      
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if(!emailRegex.test(email)){
         setEmailError("Ungültige E-Mail Adresse!");
      }else{
         setEmailError("");
      }
   }

   // methods to handle state changes
   const handlePasswordChange = (event) => {
      setPassword(event.target.value);

      if(event.target.value.length < 8){
         setPasswordError("Passwort muss mindestens 8 Zeichen lang sein");
      }else if(!event.target.value.match(/[A-Z]/)){
         setPasswordError("Passwort muss mindestens einen Großbuchstaben enthalten");
      }else {
         setPasswordError("");
      }
    };
  
    const handleRepeatPasswordChange = (event) => {
      if(event.target.value !== password){
         setRepeatPasswordError("Passwörter stimmen nicht überein");
      }else {
         setRepeatPasswordError("");
      }
    };

   return (
      <div className="signup-confirmation">
         <div className="signup-welcome">
            <h1>Hallo, {username}!</h1>
            <p>Um die Registrierung abzuschließen, wähle wie du dich in Zukunft authentifizieren möchtest. Wenn du bereits ein Konto hast,
               klicke <Link className="link" to="/login/">hier</Link>, um dich einzuloggen. Mit der Registrierung stimmst du 
               unseren <span className="link">Nutzungsbedingungen</span> zu.
            </p>
         </div>
         <div className="signup-method">
            <div className="social-container">
               <FcGoogle onClick={() => signUpPlatform("google")} />
               <AiFillGithub onClick={() => signUpPlatform("github")} />
               <AiOutlineTwitter onClick={() => signUpPlatform("twitter")} />
            </div>
            <h1>oder</h1>
            <div className="form-container">
               <form onSubmit={signUpEmail}>
                  <label>E-Mail</label>
                  <input type="text" onChange={handleEmailChange} />
                  {emailError !== "" && <span>{emailError}</span>}

                  <label>Passwort (mind. 8 Zeichen, inkl. eines Großbuchstaben)</label>
                  <input type="password" onChange={handlePasswordChange} />
                  {passwordError !== "" && <span>{passwordError}</span>}

                  <label>Passwort wiederholen</label>
                  <input type="password" onChange={handleRepeatPasswordChange} />
                  {repeatPasswordError !== "" && <span>{repeatPasswordError}</span>}

                  <div className="button-container">
                     <Button appearance="primary" width="150px" height="30px" type="submit">Registrieren</Button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

const Signup = () => {
   const [hasUsername, setHasUsername] = useState(false);
   const [username, setUsername] = useState("");

   return (
      <>
         {hasUsername ? 
            <SignupConfirmation username={username} />
         : 
            <UsernameInput 
               username={username} 
               setUsername={setUsername} 
               setHasUsername={setHasUsername} 
            />
         }
      </>
   );
}

export default Signup;
