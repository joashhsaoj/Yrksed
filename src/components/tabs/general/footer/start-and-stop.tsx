"use client";

import { useEffect, useState } from "react";

import { CirclePlay, CirclePause } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StartAndStop() {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    window.parent.postMessage({ type: "state", data: isStarted }, "*");
  }, [isStarted]);

  return (
    <Button
      className="w-full"
      onClick={() => setIsStarted(!isStarted)}
      variant={isStarted ? "destructive" : "default"}
    >
      {isStarted ? (
        <>
          <CirclePause /> Stop
        </>
      ) : (
        <>
          <CirclePlay /> Start
        </>
      )}
    </Button>
  );
}
