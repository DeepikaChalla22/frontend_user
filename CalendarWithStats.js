






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










// import React, { useState, useEffect } from 'react';
// import Calender from './Calender';
// import EmployeeDetails from './EmployeeDetails';
// import './styles3.css';

// const CalendarWithStats = ({ otp, updateCounts }) => {
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
      

//       for (let day = 1; day <= daysInMonth; day++) {
//         const date = new Date(view.start);
//         date.setDate(day);

//         if (isWeekend(date)) {
//           weekendCount++;
//         } else {
//           if (day % 5 === 0) {
//             onLeaveCount++;
//           }

        
//         }
//       }

//       const workingDays = daysInMonth - weekendCount;

//       setTotalWorkingDays(workingDays);
//       setOnLeaveDays(onLeaveCount);
     
//     }
//   };

//   useEffect(() => {
//     calculateStats({});
//   }, [otp]);

//   const handleDateChange = (view) => {
//     console.log('Date changed:', view);
//     calculateStats(view);
//   };
//   console.log('Total Working Days:', totalWorkingDays);
//   console.log('Total Working Days before passing to EmployeeDetails:', totalWorkingDays);

//   return (
//     <div className='container'>
//       <div className="row">
//         <div className='col col3'>
//           <h4>Total Working Days</h4>
//           <p>{totalWorkingDays}</p>
//         </div>
//         {/* <div className='col col3'>
//           <h4>Present Days</h4>
//           <p>{presentDays}</p>
//         </div> */}
//         {/* <div className='col col3'>
//           <h4>Absent Days</h4>
//           <p>{absentDays}</p>
//         </div> */}
//         <div className='col col3'>
//           <h4>On Leave Days</h4>
//           <p>{onLeaveDays}</p>
//         </div>
//       </div>
//       <Calender onDateChange={handleDateChange} />
//       <EmployeeDetails totalWorkingDays={totalWorkingDays}  />
//     </div>
//   );
// };

// export default CalendarWithStats;













// import React, { useState, useEffect } from 'react';
// import Calender from './Calender';
// import EmployeeDetails from './EmployeeDetails';
// import './styles3.css';

// const CalendarWithStats = ({ otp, updateCounts }) => {
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
      

//       for (let day = 1; day <= daysInMonth; day++) {
//         const date = new Date(view.start);
//         date.setDate(day);

//         if (isWeekend(date)) {
//           weekendCount++;
//         } else {
//           if (day % 10 === 0) {
//             onLeaveCount++;
//           }

        
//         }
//       }

//       const workingDays = daysInMonth - weekendCount;

//       setTotalWorkingDays(workingDays);
//       setOnLeaveDays(onLeaveCount);
     
//     }
//   };

//   useEffect(() => {
//     calculateStats({});
//   }, [otp]);

//   useEffect(() => {
//     console.log('Total Working Days in CalendarWithStats:', totalWorkingDays);
//   }, [totalWorkingDays]);
  

//   const handleDateChange = (view) => {
//     console.log('Date changed:', view);
//     calculateStats(view);
//   };
  
//   console.log('Total Working Days before passing to EmployeeDetails:', totalWorkingDays);

//   return (
//     <div className='container'>
//       <div className="row">
//         <div className='col col3'>
//           <h4>Total Working Days</h4>
//           <p>{totalWorkingDays}</p>
//         </div>
//         {/* <div className='col col3'>
//           <h4>Present Days</h4>
//           <p>{presentDays}</p>
//         </div> */}
//         {/* <div className='col col3'>
//           <h4>Absent Days</h4>
//           <p>{absentDays}</p>
//         </div> */}
//         <div className='col col3'>
//           <h4>On Leave Days</h4>
//           <p>{onLeaveDays}</p>
//         </div>
//       </div>
//       <Calender onDateChange={handleDateChange} />
//       {/* <EmployeeDetails totalWorkingDays={totalWorkingDays}  /> */}
//     </div>
//   );
// };

// export default CalendarWithStats;













import React, { useState, useEffect } from 'react';
import Calender from './Calender';
import EmployeeDetails from './EmployeeDetails';
import './styles3.css';

const CalendarWithStats = ({ otp, updateCounts }) => {
  const [employeeData, setEmployeeData] = useState({});
  const [totalWorkingDays, setTotalWorkingDays] = useState(0);
  const [onLeaveDays, setOnLeaveDays] = useState(0);
  useEffect(() => {
    fetchEmployeeData();
  }, []);
  const fetchEmployeeData = async () => {
    try {
      const response = await fetch('http://localhost:4000/employeeRoute'); // Update the URL
      const data = await response.json();
      setEmployeeData(data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };
  console.log('Employee Data:', employeeData);

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  const calculateStats = (view) => {
    if (view && view.start && view.end) {
      const daysInMonth = new Date(view.end.getFullYear(), view.end.getMonth() + 1, 0).getDate();

      let weekendCount = 0;
      let onLeaveCount = 0;
      

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(view.start);
        date.setDate(day);

        if (isWeekend(date)) {
          weekendCount++;
        } else {
          if (day % 10 === 0) {
            onLeaveCount++;
          }

        
        }
      }

      const workingDays = daysInMonth - weekendCount;

      setTotalWorkingDays(workingDays);
      setOnLeaveDays(onLeaveCount);
     
    }
  };

  useEffect(() => {
    calculateStats({});
  }, [otp]);

  useEffect(() => {
    console.log('Total Working Days in CalendarWithStats:', totalWorkingDays);
  }, [totalWorkingDays]);
  

  const handleDateChange = (view) => {
    console.log('Date changed:', view);
    calculateStats(view);
  };
  
  console.log('Total Working Days before passing to EmployeeDetails:', totalWorkingDays);

  return (
    <div className='container'>
       <EmployeeDetails
        name={employeeData.name}
        employeeID={employeeData.employeeID}
        attendancePercent={employeeData.attendancePercent}
        presentDays={employeeData.presentDays}
        absentDays={employeeData.absentDays}
      />
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
      {/* <EmployeeDetails totalWorkingDays={totalWorkingDays}  /> */}

    </div>
  );
};

export default CalendarWithStats;
