import React, { useState } from 'react'
import CalendarMonth from './CalendarMonth'
import CalendarWeek from './CalendarWeek';
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
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

   const [calendarView, setCalendarView] = useState("Miesiąc")
   const [dropdown, setDropdown] = useState(false)
   const [date, setDate] = useState({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
   })

   const handleChangeMonth = (x) => {
      if (x === -1) {
        if (date.month >= 2)
          setDate((prev) => ({ ...prev, month: prev.month - 1 }));
        if (date.month === 1)
          setDate((prev) => ({ ...prev, month: 12, year: prev.year - 1 }));
      }
      if (x === 1) {
        if (date.month <= 11)
          setDate((prev) => ({ ...prev, month: prev.month + 1 }));
        if (date.month === 12)
          setDate((prev) => ({ ...prev, month: 1, year: prev.year + 1 }));
      }
   }

   const changeViewCalendar = (data) => {
      setCalendarView(data)
      setDropdown(false)
   }

   return (
      <div className='calendar'>
         <div className='wrapper'>
            <div className='header'>
               <button className='add'>
                  <FaPlus />
                  <span>Dodaj zadanie</span>
               </button>
               <button onClick={() => handleChangeMonth(-1)} className='arrow'>
                  <FaArrowLeft />
               </button>
               <button onClick={() => handleChangeMonth(1)} className='arrow'>
                  <FaArrowRight />
               </button>
               {calendarView === "Miesiąc" && (
                  <p>
                     {months[date.month - 1]} {date.year}
                  </p>
               )}
               <div className='menu'>
                  <button onClick={() => setDropdown(prev => !prev)}>
                     <span>Miesiąc</span>
                     <PiCaretUpDownFill />
                  </button>
                  {dropdown && (
                     <div className='dropdown'>
                        <div onClick={() => changeViewCalendar("Miesiąc")}>Miesiąc <FaCheck /></div>
                        <div onClick={() => changeViewCalendar("Tydzień")}>Tydzień <FaCheck /></div>
                        <div onClick={() => changeViewCalendar("Dzień")}>Dzień <FaCheck /></div>
                     </div>
                  )}
               </div>
            </div>
            {calendarView === "Miesiąc" && (
               <CalendarMonth 
                  date={date}
                  setDate={setDate}/>
            )}
            {calendarView === "Tydzień" && (
               <CalendarWeek 
                  date={date}
                  setDate={setDate}/>
            )}
         </div>
      </div>
   )
}

export default Calendar