import React, { useState } from 'react'
import logo from "../../assets/calendar_icon.png"
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { register } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import NewUser from '../../utils/NewUser';
import RegisterComplite from './RegisterComplite';
import "./register.scss"

const Register = () => {

   const [inputs, setInputs] = useState({
      username: '',
      password_1: '',
      password_2: '',
      email: ''
   })
   const [registerComplited, setRegisterComplited] = useState(false)
   const [error, setError] = useState(null)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleChangeInputs = (e) => {
      setInputs(prev => ({
         ...prev,
         [e.target.name]: e.target.value
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if(inputs.password_1 !== inputs.password_2) {
         setError("Podane hasła muszą być takie!")
         return
      } else {
         const newUser = new NewUser(inputs.username, inputs.password_1, inputs.email).getUser()
         dispatch(register(newUser))
         setError(null)
         setInputs({
            username: '',
            password_1: '',
            password_2: '',
            email: ''
         })
         setRegisterComplited(true)
      }
   }


   return (
      <div className='register'>
         <div className='frame'>
            <div className='logo'>
               <img src={logo}/>
               <h1>Kalendarz</h1>
            </div>
            {registerComplited 
               ? ( <RegisterComplite setRegisterComplited={setRegisterComplited}/> )
               : (
                  <form className='form' onSubmit={handleSubmit}>
                     <div className='header'>
                        <h4>Zarejestruj się</h4>
                        <a onClick={() => navigate("/login")}><span>Masz konto?</span> Zaloguj się</a>
                     </div>
                     <input required onChange={handleChangeInputs} value={inputs.username} name='username' placeholder='Użytkownik'/>
                     <input required onChange={handleChangeInputs} value={inputs.email} name='email' placeholder='Email'/>
                     <div className='password'>
                        <input type='password' required onChange={handleChangeInputs} value={inputs.password_1} name='password_1' placeholder='Hasło'/>
                        <input type='password' required onChange={handleChangeInputs} value={inputs.password_2} name='password_2' placeholder='Powtórz hasło'/>
                     </div>
                     {error && <p className='error'>{error}</p>}
                     <div className='checkbox'>
                        <input required type='checkbox'/>
                        <label>Zaakceptuj regulamin</label>
                     </div>
                     <button type='submit'>Zarejestruj</button>
                     <div className='line'>
                        <p>zarejestruj przez</p>
                        <hr/>
                     </div>
                     <div className='btn_box'>
                        <button type='button' className='google'>
                           <FaGoogle />
                           Google
                        </button>
                        <button type='button' className='fb'>
                           <FaFacebookSquare />
                           Facebook
                        </button>
                     </div>
                  </form>
               )}
            
         </div>
      </div>
   )
}

export default Register