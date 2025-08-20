"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { ChevronsUpDown } from "lucide-react";

export default function BlockIDAndName() {
  const [info, setInfo] = useState({ id: "", name: "" });

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data.type === "currentUser") {
        setInfo(event.data.data);
      }
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">Block ID and Name {info.name}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="flex items-center justify-between">
          <RadioGroup defaultValue="m0" className="grid grid-cols-2 gap-2">
            {[
              { blockMode: "m0", label: "Default" },
              { blockMode: "m1", label: "ID" },
              { blockMode: "m2", label: "Name" },
              { blockMode: "m3", label: "ID + Name" },
            ].map((option) => (
              <div
                key={option.blockMode}
                className="flex items-center space-x-2"
              >
                <RadioGroupItem
                  value={option.blockMode}
                  id={option.blockMode}
                />
                <Label htmlFor={option.blockMode}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
          <Button
            onClick={() => {
              window.parent.postMessage(
                { type: "manualBlock", data: { info } },
                "*"
              );
              console.log("Block ID and Name:", info);
            }}
          >
            Block
          </Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
