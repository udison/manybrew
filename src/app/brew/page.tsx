"use client";

import { drawRadialProgress } from "@/helpers/canvas";
import { formatToFullMinute } from "@/helpers/time";
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react";

type BrewWatchStates = "stopped" | "running";

export default function BrewPage() {
  return (
    <>
      <div className="flex flex-col">
        <BrewStopwatch />
      </div>
    </>
  )
}

function BrewStopwatch() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [watchState, setWatchState] = useState<BrewWatchStates>("stopped");
  const [progress, setProgress] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>(null);
  const brewTargetTime = 3 * 60; // seconds

  useEffect(() => drawRadialProgress(canvasRef.current!, progress), [canvasRef, progress]);

  function onStopwatchClick() {
    switch (watchState) {

      case "stopped":
        startBrewWatch();
        break;

      case "running":
        stopBrewWatch();
        break;
    }
  }

  function startBrewWatch() {
    const frameTime = 10;
    const delta = 0.01;

    setWatchState("running");

    intervalRef.current = setInterval(() => {
      setProgress((p) => p + (100 / brewTargetTime * delta))
      setTimeElapsed((time) => time + delta);
    }, frameTime);
  }

  function stopBrewWatch() {
    setWatchState("stopped");
    clearInterval(intervalRef.current!);
  }

  return (
    <>
      <header className="relative flex justify-center items-center py-4">
        <Link href={"/"} className="absolute left-[16px]" >
          <ArrowLeftIcon />
        </Link>

        <h1 className="text-2xl">Brewing</h1>
      </header>

      <button onClick={onStopwatchClick} className="relative flex items-center justify-center">
        <canvas width={270} height={270} ref={canvasRef} className="drop-shadow-(0 0 5px #ffffff88)]"></canvas>
        <span className="absolute font-mono">{formatToFullMinute(timeElapsed)}</span>
      </button>
    </>
  )
}
