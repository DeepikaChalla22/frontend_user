


// import React, { useState, useEffect } from 'react';
// import EmployeeDetails from './EmployeeDetails';
// import OTPInput from './OTPInput';
// import Calender from './Calender';
// import './styles3.css';
// import CalendarWithStats from './CalendarWithStats';

// const FinalAttendance = ({ onTimerExpire }) => {
//   const [employeeName, setEmployeeName] = useState('John Doe');
//   const [employeeID, setEmployeeID] = useState('12345');
//   const [attendancePercent, setAttendancePercent] = useState(70);
//   const [otp, setOTP] = useState('');
//   const [attendanceStatus, setAttendanceStatus] = useState('');
//   const [presentDays, setPresentDays] = useState(0);
//   const [absentDays, setAbsentDays] = useState(0);


 

//   const updateCounts = ({ presentCount, absentCount }) => {
//     if (attendanceStatus === 'Present') {
//       setPresentDays((prev) => {
//         const newCount = prev + presentCount;
//         localStorage.setItem('presentDays', newCount);
//         return newCount;
//       });
//     } else if (attendanceStatus === 'Absent') {
//       setAbsentDays((prev) => {
//         const prevNumber = isNaN(prev) ? 0: parseFloat(prev);
//         console.log("Prev Number",prevNumber)
//         const newCount = prevNumber + absentCount;
//         localStorage.setItem('absentDays', newCount);
//         return newCount;
//       });
//     }
//   };
  
  
//   useEffect(() => {
//     console.log('updateCounts called:', { attendanceStatus, presentDays, absentDays });
//   }, [attendanceStatus, presentDays, absentDays]);
  
  
//   // useEffect(() => {
//   //   // Get initial counts from localStorage
//   //   const storedPresentDays = localStorage.getItem('presentDays') || 0;
//   //   const storedAbsentDays = localStorage.getItem('absentDays') || 0;

//   //   setPresentDays(parseInt(storedPresentDays, 10));
//   //   setAbsentDays(parseInt(storedAbsentDays, 10));
//   // }, []);
//   useEffect(() => {
//     // Get initial counts from localStorage
//     const storedPresentDays = localStorage.getItem('presentDays') || 0;
//     const storedAbsentDays = localStorage.getItem('absentDays') || 0;
  
//     setPresentDays(parseInt(storedPresentDays, 10));
//     setAbsentDays(parseInt(storedAbsentDays, 10));
  
//     // Reset absentDays to 0 if the employee is marked as absent
//     if (attendanceStatus === 'Absent') {
//       setAbsentDays(0);
//       localStorage.setItem('absentDays', 0);
//     } else {
//       setAbsentDays(parseInt(storedAbsentDays, 10));
//     }
  
//     // Reset presentDays and absentDays for the other months
//     setPresentDays(0);
//     setAbsentDays(0);
//   }, [attendanceStatus]);
  
  


//   const handleOTPSubmit = (submittedOTP) => {
//     setOTP(submittedOTP);

//     // Check if the OTP is correct
//     const isCorrectOTP = submittedOTP.length === 6 && parseInt(submittedOTP.charAt(5)) % 2 === 0;

//     // Update attendance status based on OTP correctness
//     const newAttendanceStatus = isCorrectOTP ? 'Present' : 'Absent';
//     setAttendanceStatus(newAttendanceStatus);

   
//   };

//   // const handleTimerExpire = () => {
//   //   console.log('Timer expired. Handle logic here.');
//   // };


//   // const handleTimerExpire = () => {
//   //   setAttendanceStatus('Absent');
//   //   setAbsentDays((prev) => {
//   //     const newCount = prev + 1;
//   //     localStorage.setItem('absentDays', newCount);
//   //     return newCount;
//   //   });
//   // };



//   const handleTimerExpire = () => {
//     // Check if the employee is already marked as absent
//     if (attendanceStatus !== 'Absent') {
//       setAttendanceStatus('Absent');
  
//       setAbsentDays((prev) => {
//         const newCount = prev + 1;
//         localStorage.setItem('absentDays', newCount);
//         return newCount;
//       });
//     }
  
//     // Call the onTimerExpire callback
//     if (onTimerExpire) {
//       onTimerExpire();
//     }
//   };
  

  

//   return (
//     <div className='container'>
//       <div className="flex3">
//         <div className="Employee-details">
//           <EmployeeDetails
//             name={employeeName}
//             employeeID={employeeID}
//             attendancePercent={attendancePercent}
//             status={attendanceStatus}
//             presentDays={presentDays}
//             absentDays={absentDays}
//           />
//         </div>
//         <OTPInput onOTPSubmit={handleOTPSubmit} onTimerExpire={handleTimerExpire} />
//       </div>
//       <CalendarWithStats otp={otp} updateCounts={updateCounts}  presentDays={presentDays} absentDays={absentDays} setPresentDays={setPresentDays} 
//         setAbsentDays={setAbsentDays}     />
//     </div>
//   );
// };

// export default FinalAttendance;





import React, { useState, useEffect } from 'react';
import EmployeeDetails from './EmployeeDetails';
import OTPInput from './OTPInput';
import Calender from './Calender';
import './styles3.css';
import CalendarWithStats from './CalendarWithStats';

const FinalAttendance = ({ onTimerExpire }) => {
  const [employeeName, setEmployeeName] = useState('John Doe');
  const [employeeID, setEmployeeID] = useState('12345');
  const [attendancePercent, setAttendancePercent] = useState(70);
  const [otp, setOTP] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('');
  const [presentDays, setPresentDays] = useState(0);
  const [absentDays, setAbsentDays] = useState(0);

  // const updateCounts = ({ presentCount, absentCount }) => {
  //   if (attendanceStatus === 'Present') {
  //     setPresentDays((prev) => {
  //       const newCount = prev + presentCount;
  //       localStorage.setItem('presentDays', newCount);
  //       return newCount;
  //     });
  //   } else if (attendanceStatus === 'Absent') {
  //     setAbsentDays((prev) => {
  //       const prevNumber = isNaN(prev) ? 0 : parseFloat(prev);
  //       const newCount = prevNumber + absentCount;
  //       localStorage.setItem('absentDays', newCount);
  //       return newCount;
  //     });
  //   }
  // };

  useEffect(() => {
    console.log('updateCounts called:', { attendanceStatus, presentDays, absentDays });
  }, [attendanceStatus, presentDays, absentDays]);

  // useEffect(() => {
  //   // Get initial counts from localStorage
  //   const storedPresentDays = localStorage.getItem('presentDays') || 0;
  //   const storedAbsentDays = localStorage.getItem('absentDays') || 0;

  //   setPresentDays(parseInt(storedPresentDays, 10));
  //   setAbsentDays(parseInt(storedAbsentDays, 10));

  //   // Reset absentDays to 0 if the employee is marked as absent
  //   if (attendanceStatus === 'Absent') {
  //     setAbsentDays(0);
  //     localStorage.setItem('absentDays', 0);
  //   } else {
  //     setAbsentDays(parseInt(storedAbsentDays, 10));
  //   }
  // }, [attendanceStatus]);
  
  useEffect(() => {
    // Get initial counts from localStorage
    const storedPresentDays = localStorage.getItem('presentDays') || 0;
    const storedAbsentDays = localStorage.getItem('absentDays') || 0;

    setPresentDays(parseInt(storedPresentDays, 10));
    setAbsentDays(parseInt(storedAbsentDays, 10));
  }, []);

  const handleOTPSubmit = (submittedOTP) => {
    setOTP(submittedOTP);

    // Check if the OTP is correct
    const isCorrectOTP = submittedOTP.length === 6 && parseInt(submittedOTP.charAt(5)) % 2 === 0;

    console.log('Is correct OTP:', isCorrectOTP);

    // Update attendance status based on OTP correctness
    const newAttendanceStatus = isCorrectOTP ? 'Present' : 'Absent';
    setAttendanceStatus(newAttendanceStatus);

    // Increment presentDays if the correct OTP is submitted
    if (isCorrectOTP) {
      setPresentDays((prev) => {
        const newCount = prev + 1;
        localStorage.setItem('presentDays', newCount);
        return newCount;
      });
    } else {
      // Increment absentDays if the incorrect OTP is submitted
      setAbsentDays((prev) => {
        const prevNumber = isNaN(prev) ? 0 : parseFloat(prev);
        const newCount = prevNumber + 1;
        localStorage.setItem('absentDays', newCount);
        return newCount;
      });
    }
  };

  const handleTimerExpire = () => {
    // Check if the employee is already marked as absent
    if (attendanceStatus !== 'Absent') {
      setAttendanceStatus('Absent');

      setAbsentDays((prev) => {
        const newCount = prev + 1;
        localStorage.setItem('absentDays', newCount);
        return newCount;
      });
    }

    // Call the onTimerExpire callback
    if (onTimerExpire) {
      onTimerExpire();
    }
  };

  return (
    <div className='container'>
      <div className="flex3">
        <div className="Employee-details">
          <EmployeeDetails
            name={employeeName}
            employeeID={employeeID}
            attendancePercent={attendancePercent}
            status={attendanceStatus}
            presentDays={presentDays}
            absentDays={absentDays}
          />
        </div>
        <OTPInput onOTPSubmit={handleOTPSubmit} onTimerExpire={handleTimerExpire} />
      </div>
      <CalendarWithStats otp={otp}  />
    </div>
  );
};

export default FinalAttendance;
