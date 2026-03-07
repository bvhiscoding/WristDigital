import { useState, useEffect } from "react";

/**
 * Countdown timer hook.
 * @param {number} initialSeconds - Starting value in seconds
 * @returns {string} Formatted time string "HH:MM:SS"
 */
const useCountdown = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

export default useCountdown;
