import { useEffect, useState } from "react";
import styles from './Timer.module.scss';
import Button from "../Button/Button";

const Timer = () => {

  const [time, setTime] = useState(0);
  const [displayableTime, setDisplayableTime] = useState('00:00:00.000');
  const [intervalStatus, setIntervalStatus] = useState(null);

  useEffect(() => {
    const miliseconds = ('00' + time).slice(-3);
    const seconds = ('0' + Math.floor((time - (Math.floor(time / 60000) * 60000)) / 1000)).slice(-2);
    const minutes = ('0' + Math.floor((time - (Math.floor(time / 3600000) * 3600000)) / 60000)).slice(-2);
    const hours = ('0' + Math.floor(time / 3600000)).slice(-2);
    setDisplayableTime(`${hours}:${minutes}:${seconds}.${miliseconds}`);
  }, [time]);

  const startCount = () => {
    if (intervalStatus === null) {
      setIntervalStatus(
      setInterval(() => {
      setTime(prevTime => prevTime + 1); 
    }, 1));
    }
  };

  const stopCount = () => {
    if (intervalStatus !== null) {
      clearInterval(intervalStatus);
      setIntervalStatus(null);
    }
  };

  const resetCount = () => {
    if (intervalStatus !== null) {
      clearInterval(intervalStatus);
      setIntervalStatus(null);
    }
    setTime(0);
    setDisplayableTime('00:00:00.000');
  };

  return (
    <div className={styles.timer}>
      <h1 className={styles.title}>a simple counter.</h1>
      <p className={styles.timerText}>{displayableTime}</p>
      <div className={styles.buttonBox}>
      <Button action={startCount}>Start</Button>
      <Button action={stopCount}>Stop</Button>
      <Button action={resetCount}>Reset</Button>
      </div>
    </div>
  )
};

export default Timer;