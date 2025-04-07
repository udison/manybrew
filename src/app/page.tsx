'use client';

import { CoffeeIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12 bg-background dark:bg-background-dark text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">
        Welcome to
        <span className="font-mono font-medium text-brand inline-flex items-center gap-1 ml-2 relative">
          <CoffeeIcon style={{ position: "absolute", right: "-24px", top: "5.5px" }} />
          ManyBrew
        </span>
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        Let&apos;s get brewing!
      </p>
    </main>
  );
}
