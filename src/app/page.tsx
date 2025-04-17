'use client';

import { Button } from "@/components/Button";
import TransitionalLink from "@/components/TransitionalLink";
import { CoffeeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-1 px-6 py-12 bg-background dark:bg-background-dark text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">
        Welcome to
        <span className="font-mono font-medium text-brand inline-flex items-center gap-1 ml-2 relative">
          <CoffeeIcon style={{ position: "absolute", right: "-24px", top: "5.5px" }} />
          ManyBrew
        </span>
      </h1>

      <TransitionalLink href={"brew"}>
        <Button size="lg"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      </TransitionalLink>
    </div>
  );
}
