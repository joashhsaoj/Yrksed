"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

import { ChevronsUpDown } from "lucide-react";

import PauseWhenNotBlock from "./PauseWhenNotBlock";
import BlockGenders from "./BlockGenders";
import DeleteUser from "./DeleteUser";

export default function Secondary() {
  const [isOpen, setIsOpen] = React.useState(false);

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
          <BlockGenders />
          <Separator />
          <DeleteUser />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
