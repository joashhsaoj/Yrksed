"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";

import { ChevronsUpDown } from "lucide-react";

export default function SelectGenders() {
  const genders = [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
    { id: "unknown", label: "Unknown" },
  ] as const;

  type GendersChecked = Record<"male" | "female" | "unknown", boolean>;
  const [gendersChecked, setGendersChecked] = React.useState<GendersChecked>({
    male: true,
    female: false,
    unknown: true,
  });

  React.useEffect(() => {
    window.parent.postMessage(
      {
        genders: gendersChecked,
      },
      "*"
    );
  }, [gendersChecked]);

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      {/* ......space-x-4 px-4 */}
      <div className="flex items-center justify-between px-2">
        {/* ...... */}
        <h4 className="text-sm font-semibold">Select Genders to Block</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        {/* ...... */}
        <div className="flex p-2 justify-between">
          {/* ...... */}
          {genders.map(({ id, label }) => (
            // ......
            <div key={id} className="flex items-center space-x-2">
              {/* ...... */}
              <Checkbox
                checked={gendersChecked[id]}
                id={id}
                onCheckedChange={() =>
                  setGendersChecked((prev) => ({ ...prev, [id]: !prev[id] }))
                }
              />
              <Label htmlFor={id}>{label}</Label>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
