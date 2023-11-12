

import React from 'react';
import CircularPercentageChart from './CircularPercentageChart';

const EmployeeDetails = ({ name, employeeID, attendancePercent, status, presentDays, absentDays }) => {
  return (
    <div className="employee-details">
      <h2>Employee Details</h2>
      <p>Name: {name}</p>
      <p>Employee ID: {employeeID}</p>
      <p>Attendance Percent: 
        <div className="attendance-chart">
          <CircularPercentageChart percent={attendancePercent} />
        </div>
      </p>
      <p>Status: {status}</p>
      <p>Present Days: {presentDays}</p>
      <p>Absent Days: {absentDays}</p>

     
    </div>
  );
};

export default EmployeeDetails;
