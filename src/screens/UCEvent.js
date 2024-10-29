import React, { useState, useEffect } from 'react';
import imagePath from '../constants/imagePath';

const UCEvent = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const targetDate = new Date('2025-01-01T20:00:00').getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="ucevent" style={{background:`url(${imagePath.ic_upcomingevt})`}}>
      <div className="column1">
        <h2>Upcoming Event :</h2>
        <h3>New Year Music Night</h3>
        <p>By: MLI music legacy International</p>
        <p>1st Jan 2025 | 8PM</p>
      </div>
      <div className="column2">
        <h2>Countdown : </h2>
        {countdown && (
          <div className="countdown-matrix">
            <div className="timer-unit">
              <div className="timer-display">{countdown.days}</div>
              <div className="timer-label">Days</div>
            </div>
            <div className="timer-unit">
              <div className="timer-display">{countdown.hours}</div>
              <div className="timer-label">Hours</div>
            </div>
            <div className="timer-unit">
              <div className="timer-display">{countdown.minutes}</div>
              <div className="timer-label">Minutes</div>
            </div>
            <div className="timer-unit">
              <div className="timer-display">{countdown.seconds}</div>
              <div className="timer-label">Seconds</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UCEvent;