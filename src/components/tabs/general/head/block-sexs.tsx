import { useContext } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { SexsCheckedContext } from "./secondary";

export default function BlockSexs({}) {
  const sexs = [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
    { id: "unknown", label: "Unknown" },
  ] as const;

  const { sexsChecked, setSexsChecked } = useContext(SexsCheckedContext)!;

  return (
    <div className="flex flex-col gap-2 p-2">
      <p>Block sexs</p>
      <div className="flex justify-between">
        {sexs.map(({ id, label }) => (
          <div key={id} className="flex items-center space-x-2">
            <Checkbox
              id={id}
              checked={sexsChecked[id]}
              onCheckedChange={() =>
                setSexsChecked((prev) => ({ ...prev, [id]: !prev[id] }))
              }
            />
            <Label htmlFor={id}>{label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}
