"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import useLocalStorage from "@/hooks/useLocalStorage";

export default function UserMode() {
  const [userMode, setUserMode] = useLocalStorage("userMode");

  useEffect(() => {
    window.parent.postMessage({ type: "userMode", data: userMode }, "*");
  }, [userMode]);

  return (
    <div className="flex items-center justify-between">
      <RadioGroup
        value={userMode}
        onValueChange={(newValue: string) => {
          setUserMode(newValue);
        }}
        className="grid grid-cols-3 gap-2"
      >
        {[
          { value: "default", label: "Default" },
          { value: "zhegou", label: "ZheGou" },
          { value: "maren", label: "MaRen" },
          { value: "wangtu", label: "WangTu" },
          { value: "other", label: "Other" },
          { value: "origin", label: "Origin" },
        ].map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button>Refresh All</Button>
    </div>
  );
}
