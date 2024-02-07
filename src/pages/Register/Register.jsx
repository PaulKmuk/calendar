import React from 'react'
import logo from "../../assets/calendar_icon.png"
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import "./register.scss"

const Register = () => {
   return (
      <div className='register'>
         <div className='frame'>
            <div className='logo'>
               <img src={logo}/>
               <h1>Kalendarz</h1>
            </div>
            <div className='form'>
               <div className='header'>
                  <h4>Zarejestruj się</h4>
                  <a><span>Masz konto?</span> Zaloguj się</a>
               </div>
               <input placeholder='Użytkownik'/>
               <input placeholder='Email'/>
               <div className='password'>
                  <input placeholder='Hasło'/>
                  <input placeholder='Powtórz hasło'/>
               </div>
               <div className='checkbox'>
                  <input type='checkbox'/>
                  <label>Zaakceptuj regulamin</label>
               </div>
               <button>Zaloguj się</button>
               <div className='line'>
                  <p>zarejestruj przez</p>
                  <hr/>
               </div>
               <div className='btn_box'>
                  <button className='google'>
                     <FaGoogle />
                     Google
                  </button>
                  <button className='fb'>
                     <FaFacebookSquare />
                     Facebook
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Register