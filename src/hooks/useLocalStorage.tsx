"use client";

import { useState, useEffect } from "react";

export default function useLocalStorage(
  key: string,
  defaultValue: string = "default"
): [string, (value: string | ((prev: string) => string)) => void] {
  const [value, setValue] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
