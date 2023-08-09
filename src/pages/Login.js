import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css';
import '../styles/pages/Login.css';
import 'animate.css';

import Button from '../components/Button';

import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

import { BaseContext } from "../utils/FirebaseContext";

const Login = () => {
   const firebase = useContext(BaseContext);

   const signInSocial = async (platform) => {
      await firebase.socialSignin(platform);
   }

   const signInEmail = async (event, email, password) => {
      event.preventDefault(); 

      await firebase.emailSignin(email, password);
   }

   // introduce state variables for email login 
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   // handle state changes
   const handleUsernameChange = (event) => {
      setUsername(event.target.value);
   }

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   }

   return (
      <div className="login-page-container">
         <div className="social-login-slogan">
            <h1>Loggen Sie sich</h1>
            <h1>ein</h1>
         </div>
         <div className="social-login-container">
            <div className="social-login-btn-wrapper">
               <div className="social-login-btn animate__animated animate__fadeInUp delay-1">
                  <span className="social-login-icon">
                     <FcGoogle size={36} />
                  </span>
                  <span className="social-login-text" onClick={() => {signInSocial("google")}}>Login mit Google</span>
               </div>
               <div className="social-login-btn animate__animated animate__fadeInUp delay-2">
                  <span className="social-login-icon">
                     <AiFillGithub size={36} />
                  </span>
                  <span className="social-login-text" onClick={() => {signInSocial("github")}}>Login mit GitHub</span>
               </div>
               <div className="social-login-btn animate__animated animate__fadeInUp delay-3">
                  <span className="social-login-icon">
                     <AiOutlineTwitter size={36} />
                  </span>
                  <span className="social-login-text" onClick={() => {signInSocial("twitter")}}>Login mit Twitter</span>
               </div>
            </div>
         </div>
         <div className="semantus-login">
            <form className="semantus-login-form animate__animated animate__fadeInUp delay-4" onSubmit={(event) => signInEmail(event, username, password)}>
               <span className="semantus-login-header">Login mit Email</span>
               <div className="semantus-login-input-wrapper">
                  <label className="semantus-login-label">Email</label>
                  <input className="semantus-login-input" type="text" onChange={handleUsernameChange}/>
               </div>
               <div className="semantus-login-input-wrapper">
                  <label className="semantus-login-label">Passwort</label>
                  <input className="semantus-login-input" type="password" onChange={handlePasswordChange} />
               </div>
               <div className="semantus-login-btn">
                  <Button appearance="primary" width="150px" height="30px" type="submit">Login</Button>
               </div>
            </form>
         </div>
         <span className="registration-info animate__animated animate__fadeInUp delay-4">Noch kein Konto? Klicken Sie&nbsp;<Link className="link registration-link" to="/signup/">hier</Link>, um sich zu registrieren.</span>
      </div>
   );
}

export default Login;
