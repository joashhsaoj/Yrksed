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
          { userMode: "m1", label: "Default" },
          { userMode: "m2", label: "ZheGou" },
          { userMode: "m3", label: "MaRen" },
          { userMode: "m4", label: "WangTu" },
          { userMode: "m5", label: "Other" },
          { userMode: "m0", label: "Origin" },
        ].map((option) => (
          <div key={option.userMode} className="flex items-center space-x-2">
            <RadioGroupItem value={option.userMode} id={option.userMode} />
            <Label htmlFor={option.userMode}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button>Refresh All</Button>
    </div>
  );
}
