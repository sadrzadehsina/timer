import { Timer } from "@/types";
import { useRef, useState } from "react";

export function useTimer(): Timer {
  const [time, setTime] = useState("30:00");

  const intervalId = useRef<NodeJS.Timeout | undefined>(undefined);

  function start() {
    intervalId.current = setInterval(() => {
      setTime((prevTime) => {
        const [minutes, seconds] = prevTime.split(":").map(Number);

        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalId.current);
          return "00:00";
        }

        if (seconds === 0) {
          return `${minutes - 1 < 10 ? "0" : ""}${minutes - 1}:59`;
        }

        return `${minutes < 10 ? "0" : ""}${minutes}:${
          seconds - 1 < 10 ? "0" : ""
        }${seconds - 1}`;
      });
    }, 1000);
  }

  function stop() {
    clearInterval(intervalId.current);
  }

  return {
    start,
    stop,
    time,
  };
}
