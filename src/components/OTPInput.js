





// OTPInput.js

import React, { useState, useEffect } from 'react';

const OTPInput = ({ onOTPSubmit, onTimerExpire }) => {
  const [otp, setOTP] = useState('');
  const [timer, setTimer] = useState(120); // 2 minutes in seconds

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = () => {
    // Check if the OTP is correct
    const isCorrectOTP = otp.length === 6 && parseInt(otp.charAt(5)) % 2 === 0;

    // Update counts in localStorage when OTP is submitted successfully
    if (isCorrectOTP) {
      const storedPresentDays = localStorage.getItem('presentDays') || 0;
      localStorage.setItem('presentDays', parseInt(storedPresentDays, 10) + 1);
    } else {
      const storedAbsentDays = localStorage.getItem('absentDays') || 0;
      localStorage.setItem('absentDays', parseInt(storedAbsentDays, 10) + 1);
    }

    // Call the onOTPSubmit callback with the OTP and correctness status
    onOTPSubmit(otp, isCorrectOTP);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Clear interval and call onTimerExpire on timeout
    if (timer === 0) {
      clearInterval(interval);
      onTimerExpire();
    }

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [timer, onTimerExpire]);

  return (
    <div className="otp-input">
      <h2>OTP for Attendance</h2>
      <input type="text" value={otp} onChange={handleOTPChange} />
      <button className='btn btn-success' onClick={handleSubmit} disabled={timer === 0}>Submit</button>
      {timer > 0 && <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60}</p>}
      {timer === 0 && <p>Time expired. Please try again.</p>}
    </div>
  );
};

export default OTPInput;
