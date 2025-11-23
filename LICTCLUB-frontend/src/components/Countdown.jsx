import { useEffect, useState } from 'react';

const Countdown = ({ deadline }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(deadline) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  if (!timeLeft) {
    return (
      <div className="text-center text-red-600 text-xl font-semibold mt-10">
        🚨 Registration Closed
      </div>
    );
  }

  return (
    <div className="themes-container m-auto  max-w-6xl py-16 px-10 rounded-xl text-2xl  bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-cyan-300">
      <h2 className="m-auto grid text-3xl text-white font-bold justify-center ">
         Registration closes in:
      </h2>
      <div className="flex justify-center gap-4 text-3xl font-mono font-semibold text-white-900 mt-4">
        <div>
          <span>{timeLeft.days}</span>
          <span className="text-sm block text-white-500">Days</span>
        </div>
        <div>:</div>
        <div>
          <span>{timeLeft.hours}</span>
          <span className="text-sm block text-white-500">Hours</span>
        </div>
        <div>:</div>
        <div>
          <span>{timeLeft.minutes}</span>
          <span className="text-sm block text-white-500">Minutes</span>
        </div>
        <div>:</div>
        <div>
          <span>{timeLeft.seconds}</span>
          <span className="text-sm block text-white-500">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
