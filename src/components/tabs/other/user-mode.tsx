"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import useSessionStorage from "@/hooks/useSessionStorage";

export default function UserMode() {
  const [userMode, setUserMode] = useSessionStorage("userMode");

  return (
    <div className="flex items-center justify-between">
      <RadioGroup
        value={userMode}
        onValueChange={(newValue: string) => {
          setUserMode(newValue);
          window.parent.postMessage({ type: "userMode", data: userMode }, "*");
        }}
        className="grid grid-cols-3 gap-2"
      >
        {[
          { label: "Default", value: "default" },
          { label: "Zhegou", value: "zhegou" },
          { label: "Maren", value: "maren" },
          { label: "Wangtu", value: "wangtu" },
          { label: "Other", value: "other" },
          { label: "Origin", value: "origin" },
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
