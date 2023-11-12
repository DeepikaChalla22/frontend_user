






// import React, { useState, useEffect } from 'react';
// import Calender from './Calender';
// import './styles3.css';

// const CalendarWithStats = ({ otp, updateCounts, presentDays, absentDays,setPresentDays, setAbsentDays }) => {
//   const [totalWorkingDays, setTotalWorkingDays] = useState(0);
//   const [onLeaveDays, setOnLeaveDays] = useState(0);

//   const isWeekend = (date) => {
//     const day = date.getDay();
//     return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
//   };

//   const calculateStats = (view) => {
//     if (view && view.start && view.end) {
//       const daysInMonth = new Date(view.end.getFullYear(), view.end.getMonth() + 1, 0).getDate();
  
//       let weekendCount = 0;
//       let onLeaveCount = 0;
//       let presentCount = 0;
//       let absentCount = 0;
  
//       for (let day = 1; day <= daysInMonth; day++) {
//         const date = new Date(view.start);
//         date.setDate(day);
  
//         if (isWeekend(date)) {
//           weekendCount++;
//         } else {
//           if (day % 5 === 0) {
//             onLeaveCount++;
//           }
  
//           // Check if employee is present based on OTP conditions
//           if (otp.length === 6 && parseInt(otp.charAt(5)) % 2 === 0) {
//             presentCount++;
//           } else {
//             absentCount++; // Increment absent count if not present
//           }
//         }
//       }
  
//       const workingDays = daysInMonth - weekendCount;
  
//       // Reset presentDays and absentDays for the other months
//       setPresentDays(0);
//       setAbsentDays(0);
  
//       setTotalWorkingDays(workingDays);
//       setOnLeaveDays(onLeaveCount);
  
//       // Update counts using callback function
//       if (updateCounts) {
//         updateCounts({ presentCount, absentCount: workingDays - presentCount - onLeaveCount });
//       }
//     }
//   };
  
//   useEffect(() => {
//     calculateStats({});
//   }, [otp]); // Include otp in the dependency array

//   const handleDateChange = (view) => {
//     console.log('Date changed:', view);
//     calculateStats(view);
//   };

//   return (
//     <div className='container'>
//       <div className="row">
//         <div className='col col3'>
//           <h4>Total Working Days</h4>
//           <p>{totalWorkingDays}</p>
//         </div>
//         <div className='col col3'>
//           <h4>Present Days</h4>
//           <p>{presentDays}</p>
//         </div>
//         <div className='col col3'>
//           <h4>Absent Days</h4>
//           <p>{absentDays}</p>
//         </div>
//         <div className='col col3'>
//           <h4>On Leave Days</h4>
//           <p>{onLeaveDays}</p>
//         </div>
//       </div>
//       <Calender onDateChange={handleDateChange} />
//     </div>
//   );
// };

// export default CalendarWithStats;










import React, { useState, useEffect } from 'react';
import Calender from './Calender';
import './styles3.css';

const CalendarWithStats = ({ otp, updateCounts }) => {
  const [totalWorkingDays, setTotalWorkingDays] = useState(0);
  const [onLeaveDays, setOnLeaveDays] = useState(0);
  const [presentDays, setPresentDays] = useState(0);
  const [absentDays, setAbsentDays] = useState(0);

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  const calculateStats = (view) => {
    if (view && view.start && view.end) {
      const daysInMonth = new Date(view.end.getFullYear(), view.end.getMonth() + 1, 0).getDate();

      let weekendCount = 0;
      let onLeaveCount = 0;
      // let presentCount = 0;
      // let absentCount = 0;

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(view.start);
        date.setDate(day);

        if (isWeekend(date)) {
          weekendCount++;
        } else {
          if (day % 5 === 0) {
            onLeaveCount++;
          }

          // // Check if employee is present based on OTP conditions
          // if (otp.length === 6 && parseInt(otp.charAt(5)) % 2 === 0) {
          //   presentCount++;
          // } else {
          //   absentCount++; // Increment absent count if not present
          // }
        }
      }

      const workingDays = daysInMonth - weekendCount;

      setTotalWorkingDays(workingDays);
      setOnLeaveDays(onLeaveCount);
      // setPresentDays(presentCount);
      // setAbsentDays(absentCount);

      // Update counts using callback function
      // if (updateCounts) {
      //   updateCounts({ presentCount, absentCount: workingDays - presentCount - onLeaveCount });
      // }
    }
  };

  useEffect(() => {
    calculateStats({});
  }, [otp]);

  const handleDateChange = (view) => {
    console.log('Date changed:', view);
    calculateStats(view);
  };

  return (
    <div className='container'>
      <div className="row">
        <div className='col col3'>
          <h4>Total Working Days</h4>
          <p>{totalWorkingDays}</p>
        </div>
        {/* <div className='col col3'>
          <h4>Present Days</h4>
          <p>{presentDays}</p>
        </div> */}
        {/* <div className='col col3'>
          <h4>Absent Days</h4>
          <p>{absentDays}</p>
        </div> */}
        <div className='col col3'>
          <h4>On Leave Days</h4>
          <p>{onLeaveDays}</p>
        </div>
      </div>
      <Calender onDateChange={handleDateChange} />
    </div>
  );
};

export default CalendarWithStats;
