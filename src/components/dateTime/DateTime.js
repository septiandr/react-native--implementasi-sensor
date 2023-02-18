import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';


function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const dateTimeString = now.toLocaleString('en-US', { 
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
      setCurrentDateTime(dateTimeString);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Text>{currentDateTime}</Text>
  );
};

export default DateTime