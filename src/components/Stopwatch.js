/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

const Stopwatch = (props) => {
  const { gameOver, setPuzzleTime } = props;
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  function msToTime(duration) {
    const milliseconds = Math.floor((duration % 1000) / 10);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds + "." + milliseconds;
  }

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (gameOver) {
      setRunning(false);
      setPuzzleTime(msToTime(time));
    }
  }, [gameOver]);

  return (
    <div className="stopwatch">
      <div
        className="numbers"
        css={css`
          font-family: Inconsolata;
          font-size: 20px;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 10px;
        `}
      >
        <span
          css={css`
            font-family: Montserrat;
            font-size: 12px;
          `}
        >
          GAME CLOCK:
        </span>
        <span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </span>
      </div>
    </div>
  );
};

export default Stopwatch;
