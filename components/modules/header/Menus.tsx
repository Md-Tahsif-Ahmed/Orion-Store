// 'use client';

import Container from "@/components/custom/Container";
import { RectangleButton } from "@/components/custom/RectangleButton";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, PhoneIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryList from "./CategoryList";
import {
  TypeCategoryModel,
  TypePageModel,
  TypeProductModel,
  TypeSlideModel,
} from "@/types/models";

export default function Menus({
  className,
  categories,
  products,
  campaigns,
  pages,
}: {
  className?: string;
  categories: TypeCategoryModel[];
  products: TypeProductModel[];
  campaigns: TypeSlideModel[];
  pages: TypePageModel[];
}) {
  return (
    <div className={cn("h-[80px] bg-white", className)}>
      <Container>
        <div className="flex items-center justify-between h-full">
          {/* let side  */}
          {/* <div className="flex items-center gap-[24px]"></div> */}
          <div className="relative">
            <RectangleButton
              className="capitalize h-[48px] w-[240px] bg-primary-500 text-white"
              icon="none"
            >
              all categories
              <ArrowDownIcon />
              {/* <Image src="/icons/CaretDown.svg" alt='logo' width="16" height="16" /> */}
            </RectangleButton>
            <CategoryList
              categories={categories}
              products={products}
              campaigns={campaigns}
            />
          </div>
          <div className="flex items-center gap-[24px]">
            {pages.map((item, idx) => (
              <Link
                key={idx}
                href={`/${item.slug}`}
                className="flex items-center gap-[6px]"
              >
                <Image src={item.image} alt="logo" width={24} height={24} />
                <span className="text-body-sm-400 text-gray-600">
                  {item.name}
                </span>
              </Link>
            ))}

            {/* <Link href="/" className='flex gap-[6px] items-center'>
                         <Image src="/icons/Vector.svg" alt='logo' width="24" height="24" />
                         <span className='text-body-sm-400 text-gray-600'>Track Order</span>
                        </Link>
                          <Link href="/" className='flex gap-[6px] items-center'>
                         <Image src="/icons/ArrowsCounterClockwise.svg" alt='logo' width="24" height="24" />
                         <span className='text-body-sm-400 text-gray-600'>Compare</span>
                        </Link>
                          <Link href="/" className='flex gap-[6px] items-center'>
                         <Image src="/icons/Headphones.svg" alt='logo' width="24" height="24" />
                         <span className='text-body-sm-400 text-gray-600'>Customer Support</span>
                        </Link>
                          <Link href="/" className='flex gap-[6px] items-center'>
                         <Image src="/icons/Info.svg" alt='logo' width="24" height="24" />
                         <span className='text-body-sm-400 text-gray-600'>Need Help</span>
                        </Link> */}
          </div>
          {/* riht side  */}
          <div className="flex items-center gap-2">
            <PhoneIcon size={28} weight="regular" />
            <p className="text-body-l-400">+1-202-555-0104</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
