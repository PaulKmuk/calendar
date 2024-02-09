import React from 'react'
import "./registerComplite.scss"
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const RegisterComplite = ({ setRegisterComplited }) => {

   const navigate = useNavigate()

   return (
      <div className='register-complite'>
         <div className='icon'>
            <BsCheckCircleFill />
         </div>
         <div className='info'>
            <p>Gratulacje, Twoje konto zostało pomyślnie utworzone!</p>
            <button 
               onClick={() => {
                  setRegisterComplited(false)
                  navigate("/login")
               }}
            >
               Zaloguj
            </button>
         </div>
      </div>
   )
}

export default RegisterComplite