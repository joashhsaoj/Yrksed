"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import useLocalStorage from "@/hooks/useLocalStorage";

export default function Mode() {
  const [mode, setMode] = useLocalStorage("mode");

  useEffect(() => {
    window.parent.postMessage({ mode: mode }, "*");
  }, [mode]);

  return (
    <div className="flex items-center justify-between">
      <RadioGroup
        value={mode}
        onValueChange={(newValue: string) => {
          setMode(newValue);
        }}
        className="grid grid-cols-3 gap-2"
      >
        {[
          { value: "default", id: "m1", label: "Default" },
          { value: "zhegou", id: "m2", label: "ZheGou" },
          { value: "maren", id: "m3", label: "MaRen" },
          { value: "wangtu", id: "m4", label: "WangTu" },
          { value: "other", id: "m5", label: "Other" },
          { value: "origin", id: "m0", label: "Origin" },
        ].map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.id} />
            <Label htmlFor={option.id}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button>Refresh All</Button>
    </div>
  );
}