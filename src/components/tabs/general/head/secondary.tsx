"use client";

import { useEffect, useState } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

import { ChevronsUpDown } from "lucide-react";
import PauseWhenNotBlock from "./pause-when-not-block";
import BlockGenders from "./block-genders";
import DeleteUser from "./delete-user";
import CopyLink from "./copy-link";

type GendersChecked = Record<"male" | "female" | "unknown", boolean>;

export default function Secondary() {
  const [mode] = useLocalStorage("mode");

  const [isOpen, setIsOpen] = useState(false);

  const [gendersChecked, setGendersChecked] = useState<GendersChecked>({
    male: mode !== "origin",
    female: !["default", "origin"].includes(mode),
    unknown: mode !== "origin",
  });

  useEffect(() => {
    window.parent.postMessage(
      {
        genders: gendersChecked,
      },
      "*"
    );
  }, [gendersChecked]);

  return (
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
          <BlockGenders
            gendersChecked={gendersChecked}
            setGendersChecked={setGendersChecked}
          />
          <Separator />
          <div className="flex justify-between">
            <div className="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
              <CopyLink />
              <DeleteUser />
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
