import React, { useState } from 'react'
import logo from "../../assets/calendar_icon.png"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FaRegCalendarAlt, FaListAlt } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidLogOut } from "react-icons/bi";
import { useDispatch } from 'react-redux'; 
import { logout } from '../../redux/slices/authSlice';
import userImg from "../../assets/user.png"
import "./navbar.scss"

const Navbar = () => {

   const [dropDown, setDropDown] = useState(false)
   const dispatch = useDispatch()

   return (
      <nav>
         <div className='nav'>
            <div className='logo'>
               <img src={logo}/>
               <h4>Kalendarz</h4>
               <div>
                  <SlMagnifier className='icon'/>
                  <input type='search' placeholder='Szukaj...'/>
               </div>
            </div>
            <div className='btns'>
               <button className='button-4'>
                  <FaRegCalendarAlt />
                  <span>Kalendarz</span>
               </button>
               <button className='button-4'>
                  <FaListAlt />
                  <span>Lista</span>
               </button>
            </div>
            <div onClick={() => setDropDown(prev => !prev)} className='menu'>
               <img src={userImg}/>
               <p>User</p>
               <span>
                  {dropDown 
                     ? <TiArrowSortedUp />
                     : <TiArrowSortedDown />}
               </span>
               {dropDown && (
                  <div className='dropdown'>
                     <a className='item'>
                        <IoSettingsSharp />
                        <span>Ustawienia</span>
                     </a>
                     <a className='item' onClick={() => dispatch(logout())}>
                        <BiSolidLogOut />
                        <span>Wyloguj</span>
                     </a>
                  </div>
               )}
            </div>
         </div>
      </nav>
   )
}

export default Navbar