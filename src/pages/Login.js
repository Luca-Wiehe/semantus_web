import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css';
import '../styles/pages/Login.css';
import 'animate.css';

import Button from '../components/Button';

import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

const Login = () => {
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
                     <AiFillApple size={36} />
                  </span>
                  <span className="social-login-text">Login mit Apple</span>
               </div>
               <div className="social-login-btn animate__animated animate__fadeInUp delay-2">
                  <span className="social-login-icon">
                     <FcGoogle size={36} />
                  </span>
                  <span className="social-login-text">Login mit Google</span>
               </div>
               <div className="social-login-btn animate__animated animate__fadeInUp delay-3">
                  <span className="social-login-icon">
                     <AiFillFacebook size={36} color="#4267B2" />
                  </span>
                  <span className="social-login-text">Login mit Facebook</span>
               </div>
            </div>
         </div>
         <div className="semantus-login">
            <form className="semantus-login-form animate__animated animate__fadeInUp delay-4">
               <span className="semantus-login-header">Login mit Semantus</span>
               <div className="semantus-login-input-wrapper">
                  <label className="semantus-login-label">Username</label>
                  <input className="semantus-login-input" type="text" maxLength="20"/>
               </div>
               <div className="semantus-login-input-wrapper">
                  <label className="semantus-login-label">Passwort</label>
                  <input className="semantus-login-input" type="password" />
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
