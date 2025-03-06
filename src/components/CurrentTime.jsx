import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    // Update time every second
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Clean up interval on component unmount
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array means this effect runs once on mount
  
  // Format options for time display
  const timeString = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  
  return (
    <div className="">
      {/* <div className="text-xl font-medium text-black">Current Time</div> */}
      <div className="text-lg font-bold font-montserrat text-white">{timeString}</div>
    </div>
  );
};

export default CurrentTime;