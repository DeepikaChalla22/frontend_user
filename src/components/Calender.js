import React from 'react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import './styles3.css';

function Calender({ onDateChange }) {
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  const handleDatesSet = (view) => {
    if (onDateChange) {
      onDateChange(view);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        dayCellClassNames={(arg) => {
          if (isWeekend(arg.date)) {
            return "weekend-cell";
          }
        }}
        datesSet={handleDatesSet} // Invoke onDateChange when the dates are set
      />
    </div>
  );
}

export default Calender;



