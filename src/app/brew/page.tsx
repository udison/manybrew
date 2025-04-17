"use client";

import TransitionalLink from "@/components/TransitionalLink";
import { ThemeContext } from "@/contexts/ThemeContext";
import { drawRadialProgress } from "@/helpers/canvas";
import { formatToFullMinute } from "@/helpers/time";
import { ArrowLeftIcon, RotateCwIcon } from "lucide-react"
import { useContext, useEffect, useRef, useState } from "react";

import styles from "./brew.module.css";
import { jamesHoffmannSmallV60, Recipe, Step } from "@/models/recipe";

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
  const { theme } = useContext(ThemeContext)!;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [watchState, setWatchState] = useState<BrewWatchStates>("stopped");
  const [progress, setProgress] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>(null);
  const brewTargetTime = 3 * 60; // seconds
  const [recipe] = useState<Recipe>(jamesHoffmannSmallV60);

  useEffect(() => drawRadialProgress(canvasRef.current!, progress, theme), [canvasRef, progress, theme]);

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
        <TransitionalLink href={"/"} className="absolute left-[16px]" >
          <ArrowLeftIcon />
        </TransitionalLink>

        <h1 className="text-2xl">Brewing <span className="hidden sm:inline">{recipe.name}</span></h1>
      </header >

      <button onClick={onStopwatchClick} className="relative flex items-center justify-center self-center cursor-pointer mt-10 transition-transform active:scale-[.98]">

        <canvas width={270} height={270} ref={canvasRef} className="drop-shadow-(0 0 5px #ffffff88)]"></canvas>
        <span className="absolute font-mono">{timeElapsed ? formatToFullMinute(timeElapsed) : "Tap to start"}</span>

        {/*<span className="absolute top-0 flex flex-col items-center pb-1 origin-bottom -translate-y-full">
          <p>+50g</p>
          {watchState === "stopped" ? <PlayIcon size={16} /> : <PauseIcon size={16} />}
        </span>*/}

        {recipe.steps.map((step) => <ActionMarker key={step.time} step={step} targetBrewTime={recipe.targetBrewTime} timeElapsed={timeElapsed} />)}



      </button>
    </>
  )
}

function ActionMarker({ step, targetBrewTime, timeElapsed }: { step: Step, targetBrewTime: number, timeElapsed: number }) {
  if (step.action === "wait") return;

  const angle = ((step.time / targetBrewTime) * 360);

  return (
    <span className={`${styles.actionContainer} ${timeElapsed >= step.time ? styles.reached : ""}`} style={{ transform: `translate(0, -50%) rotate(${angle}deg)` }}>
      <span className={styles.marker}></span>
      <div className={styles.content} style={{ transform: `translate(0, -36px) rotate(-${angle}deg)` }}>
        {step.action === "pour" && <p>+{step.value}g</p>}
        {step.action === "swirl" && <RotateCwIcon size={16} />}
      </div>
    </span>
  )
}
