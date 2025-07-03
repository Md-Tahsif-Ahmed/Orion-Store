"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { GlobeIcon } from "@phosphor-icons/react";
import React from "react";
import LanguageCurrency from "./LanguageCurrency";
import SocialIcon from "./SocialIcon";
 

export default function MobileSocialMenu({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger>
          <GlobeIcon size="32" className="text-white" />
        </SheetTrigger>
        <SheetContent side="bottom" className="rounded-t-3xl">
          <SheetHeader className="space-y-2 flex flex-col items-center">
            <SheetTitle>Social/Language/Currency</SheetTitle>
            <SheetDescription>
              <LanguageCurrency className="text-black bg-white border-0 w-[100px]" />
              <SocialIcon />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
