"use client";

import { createContext, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

import { ChevronsUpDown } from "lucide-react";

import useSessionStorage from "@/hooks/useSessionStorage";

import BlockSexs from "./block-sexs";
import CopyLink from "./copy-link";
import DeleteUser from "./delete-user";
import PauseWhenNotBlock from "./pause-when-not-block";

type sexsChecked = Record<"male" | "female" | "unknown", boolean>;

export const SexsCheckedContext = createContext<
  | {
      sexsChecked: sexsChecked;
      setSexsChecked: React.Dispatch<React.SetStateAction<sexsChecked>>;
    }
  | undefined
>(undefined);

export default function Secondary() {
  const [userMode] = useSessionStorage("userMode"); // const [userMode] = useState("userMode"); // D

  const [sexsChecked, setSexsChecked] = useState<sexsChecked>({
    male: userMode !== "origin",
    female: !["default", "origin"].includes(userMode),
    unknown: userMode !== "origin",
  });

  useEffect(() => {
    window.parent.postMessage(
      {
        type: "sexsChecked",
        data: sexsChecked,
      },
      "*"
    );
  }, [sexsChecked]); // U

  const [isOpen, setIsOpen] = useState(false);
  return (
    <SexsCheckedContext.Provider value={{ sexsChecked, setSexsChecked }}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
        {/* ......space-x-4 px-4             px-2*/}
        <div className="flex items-center justify-between">
          {/* ...... */}
          <h4 className="text-sm font-semibold">Some functions</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="border rounded-md p-1 space-y-1">
            <PauseWhenNotBlock />
            <Separator />
            <BlockSexs />
            <Separator />
            <div className="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
              <CopyLink />
              <DeleteUser />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <div className="flex justify-between">
        <div className="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
          <CopyLink />
          <DeleteUser />
        </div>
      </div>
    </SexsCheckedContext.Provider>
  );
}
