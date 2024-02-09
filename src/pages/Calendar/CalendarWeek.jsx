import React from 'react'
import "./calendarWeek.scss"
import {
   weekDays,
   months,
   getDaysInMonth,
   getDaysNextMonth,
   getDaysPrevMonth,
   hoursIndDay
 } from "./data"

const CalendarWeek = ({ date, setDate }) => {

   console.log(date);
   return (
      <div className='calendar-week'>

         <div className='week-days'>
            {weekDays.map((el, index) => (
               <div key={index} className='day'>
                  {el.shortLabel}
               </div>
            ))}
         </div>

         <div className='days'>
            
            {weekDays.map((el, index) => (
               <div key={index} className='day'>
                  {hoursIndDay.map((el, index) => (
                     <div key={index} className='hour'>
                        <p>{el}:00</p>
                     </div>
                  ))}
               </div>
            ))}

         </div>

      </div>
   )
}

export default CalendarWeek