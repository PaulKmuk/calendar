import React from 'react'
import CalendarMonth from './CalendarMonth'
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { PiCaretUpDownFill } from "react-icons/pi";
import "./calendar.scss"
import {
  weekDays,
  months,
  getDaysInMonth,
  getDaysNextMonth,
  getDaysPrevMonth,
} from "./data"

const Calendar = () => {
   return (
      <div className='calendar'>
         <div className='wrapper'>
            <div className='header'>
               <button className='add'>
                  <FaPlus />
                  <span>Dodaj zadanie</span>
               </button>
               <button className='arrow'>
                  <FaArrowLeft />
               </button>
               <button className='arrow'>
                  <FaArrowRight />
               </button>
               <p>
                  Luty 2024
               </p>
               <div className='menu'>
                  <button>
                     <span>Miesiąc</span>
                     <PiCaretUpDownFill />
                  </button>
               </div>
            </div>
            <CalendarMonth />
         </div>
      </div>
   )
}

export default Calendar