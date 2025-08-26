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
import { createClient } from "@/utils/supabase/client";

export default function BlockIDAndName() {
  const [info, setInfo] = useState({ id: "", name: "" });
  // const [blockMode, setBlockMode] = useState("m0");

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
              { label: "Default", value: "m0" },
              { label: "ID", value: "m1" },
              { label: "Name", value: "m2" },
              { label: "ID & Name", value: "m3" },
            ].map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
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

export function Test() {
  // const supabase = createClient();
  // const { data } = supabase.from("id and name").select();
}
