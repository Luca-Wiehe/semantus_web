import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css';
import '../styles/pages/Signup.css';
import 'animate.css';

import Button from '../components/Button';

import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

const Signup = () => {
   return (
      <div className="signup-page-container">
         <div className="social-signup-slogan">
            <h1>Registrierung</h1>
         </div>
         <div className="social-signup-container">
            <div className="social-signup-btn-wrapper">
               <div className="social-signup-btn animate__animated animate__fadeInUp delay-1">
                  <span className="social-signup-icon">
                     <AiFillApple size={36} />
                  </span>
                  <span className="social-signup-text">Registrieren mit Apple</span>
               </div>
               <div className="social-signup-btn animate__animated animate__fadeInUp delay-2">
                  <span className="social-signup-icon">
                     <FcGoogle size={36} />
                  </span>
                  <span className="social-signup-text">Registrieren mit Google</span>
               </div>
               <div className="social-signup-btn animate__animated animate__fadeInUp delay-3">
                  <span className="social-signup-icon">
                     <AiFillFacebook size={36} color="#4267B2" />
                  </span>
                  <span className="social-signup-text">Registrieren mit Facebook</span>
               </div>
            </div>
         </div>
         <div className="semantus-signup">
            <form className="semantus-signup-form animate__animated animate__fadeInUp delay-4">
               <span className="semantus-signup-header">Registrieren mit Semantus</span>
               <div className="semantus-signup-input-wrapper">
                  <label className="semantus-signup-label">Username</label>
                  <input className="semantus-signup-input" type="text" maxLength="20"/>
               </div>
               <div className="semantus-signup-input-wrapper">
                  <label className="semantus-signup-label">E-Mail</label>
                  <input className="semantus-signup-input" type="text" />
               </div>
               <div className="semantus-signup-input-wrapper">
                  <label className="semantus-signup-label">Passwort</label>
                  <input className="semantus-signup-input" type="password" />
               </div>
               <div className="semantus-signup-input-wrapper">
                  <label className="semantus-signup-label">Passwort wiederholen</label>
                  <input className="semantus-signup-input" type="password" />
               </div>
               <div className="semantus-signup-btn">
                  <Button appearance="primary" width="150px" height="30px" type="submit">Registrieren</Button>
               </div>
            </form>
         </div>
         <span className="login-info animate__animated animate__fadeInUp delay-4">Haben Sie bereits ein Konto? Klicken Sie&nbsp;<Link className="link login-link" to="/login/">hier</Link>, um sich einzuloggen.</span>
      </div>
   );
}

export default Signup;
