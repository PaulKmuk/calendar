import React from 'react'
import logo from "../../assets/calendar_icon.png"
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import "./login.scss"

const Login = () => {
   return (
      <div className='login'>
         <div className='frame'>
            <div className='logo'>
               <img src={logo}/>
               <h1>Kalendarz</h1>
            </div>
            <div className='form'>
               <div className='header'>
                  <h4>Zaloguj się</h4>
                  <a>Zarejestruj się</a>
               </div>
               <input placeholder='Użytkownik'/>
               <input placeholder='Hasło'/>
               <div className='checkbox'>
                  <input type='checkbox'/>
                  <label>Zapamiętaj mnie</label>
               </div>
               <button>Zaloguj się</button>
               <div className='line'>
                  <p>zaloguj przez</p>
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

export default Login