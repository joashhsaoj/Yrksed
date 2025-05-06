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

export default function Block() {
  const [isOpen, setIsOpen] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    gender: "",
    age: null,
    location: "",
  });

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data.type === "F") {
        setInfo(event.data.data);
      }
    });
  }, []);

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
          <RadioGroup defaultValue="default" className="grid grid-cols-2 gap-2">
            {[
              { value: "default", id: "no", label: "Default" },
              { value: "id", id: "m1", label: "ID" },
              { value: "name", id: "m2", label: "Name" },
              { value: "id + name", id: "m3", label: "ID + Name" },
            ].map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.id} />
                <Label htmlFor={option.id}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
          <Button>Block</Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
