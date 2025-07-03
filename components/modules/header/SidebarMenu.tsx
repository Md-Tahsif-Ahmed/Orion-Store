'use client';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function SidebarMenu({ className }: { className?: string }) {
    const [show, setShow] = useState(false);
    return (
    <div className={className}>
      <Sheet>
        <SheetTrigger>
          <MenuIcon size="32" className="text-white" />
        </SheetTrigger>

        <SheetContent>
          <Tabs>
            <TabsList>
              <TabsTrigger value="category">Categories</TabsTrigger>
              <TabsTrigger value="pages">Pages</TabsTrigger>
            </TabsList>

            <TabsContent value="category">
              <div className="flex items-center justify-between">
                <span className="capitalize hover:text-primary-500 cursor-pointer">
                  Category name
                </span>
                <ArrowRightIcon 
                className="h5 w-5 cursor-pointer" 
                onClick={() => setShow(!show)}/>
              </div>
            </TabsContent>

            <TabsContent value="pages">
                <div className="flex items-center justify-between">
                <span className="capitalize hover:text-primary-500 cursor-pointer">
                  homepage
                </span>
                <ArrowRightIcon 
                className="h5 w-5"
                onClick={() => setShow(!show)} />
              </div>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      <Sheet open={show}>
        <SheetTrigger>
        </SheetTrigger>

        <SheetContent>
            <SheetHeader>
                <SheetTitle></SheetTitle>
            </SheetHeader>
            
          
              <div className="flex items-center justify-between">
               <Button onClick={()=> setShow(!show)}>
                 <ArrowLeftIcon /> 
               </Button>
               <div className="">
                <Link href="">sub category</Link>
               </div>
              </div>
        
        </SheetContent>
      </Sheet>
    </div>
  );
}
