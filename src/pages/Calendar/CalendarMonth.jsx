import React from 'react'
import "./calendarMonth.scss"
import {
   weekDays,
   months,
   getDaysInMonth,
   getDaysNextMonth,
   getDaysPrevMonth,
 } from "./data"

const CalendarMonth = ({ date, setDate }) => {

   const daysPrevMonth = getDaysPrevMonth(date.year, date.month);
   const daysMonth = getDaysInMonth(date.year, date.month);
   const daysNextMonth = getDaysNextMonth(date.year, date.month);

   const getCurrentDay = (day) => {
      const currentDay = new Date();
      if (
        currentDay.getFullYear() === date.year &&
        currentDay.getMonth() + 1 === date.month &&
        currentDay.getDate() === day
      )
        return true;
      return false;
   }

   return (
      <div className='calendar-month'>
         <div className='week-days'>
            {weekDays.map((el, index) => (
               <div key={index} className='day'>
                  {el.shortLabel}
               </div>
            ))}
         </div>
         <div className='calendar-days'>
            {daysPrevMonth.map((el, index) => (
               <div key={index} className='prev-day'>
                  <div className='nr'>{el}</div>          
               </div>
            ))}
            {daysMonth.map((el, index) => (
               <div key={index} className='day'>
                  <div className={getCurrentDay(el) ? "nr-current" : "nr"}>{el}</div>          
               </div>
            ))}
            {daysNextMonth.map((el, index) => (
               <div key={index} className='next-day'>
                  <div className='nr'>{el}</div>          
               </div>
            ))}
         </div>
      </div>
   )
}

export default CalendarMonth