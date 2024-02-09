import React, { useEffect, useState } from 'react'
import logo from "../../assets/calendar_icon.png"
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import "./login.scss"
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

   const [inputs, setInputs] = useState({
      username: '',
      password: ''
   })
   const [error, setError] = useState(null)
   const users = useSelector((state) => state.auth.users)
   const errorMsg = useSelector((state) => state.auth.errorMsg)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      setError(errorMsg)
   },[errorMsg])

   const handleChangeInputs = (e) => {
      setInputs(prev => ({
         ...prev,
         [e.target.name]: e.target.value
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if(inputs.password === '' || inputs.username === '') {
         setError("Uzupełnij wszystkie pola!")
         return
      } else {
         dispatch(login(inputs))
         setInputs({
            username: '',
            password: ''
         })
         setError(null)
         if(errorMsg) setError(errorMsg)
         navigate("/")
      }
   }


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
                  <a onClick={() => navigate("/register")}>Zarejestruj się</a>
               </div>
               <input value={inputs.username} required type='text' onChange={handleChangeInputs} name='username' placeholder='Użytkownik'/>
               <input value={inputs.password} required type='password' onChange={handleChangeInputs} name='password' placeholder='Hasło'/>
               <div className='checkbox'>
                  <input required type='checkbox'/>
                  <label>Zapamiętaj mnie</label>
               </div>
               {error && (
                  <p className='error'>{error}</p>
               )}
               <button 
                  onClick={handleSubmit}
               >
                     Zaloguj się
                  </button>
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