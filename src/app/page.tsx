'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 bg-background dark:bg-background-dark text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">
        Welcome to My Landing Page
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        This is a minimal starting point using Tailwind CSS and Next.js. You can now build from here!
      </p>
      <button
        className="mt-8 px-6 py-2 rounded-xl bg-primary text-white hover:bg-indigo-600 transition"
        onClick={() => setDark(!dark)}
      >
        Toggle {dark ? 'Light' : 'Dark'} Mode
      </button>
    </main>
  );
}
