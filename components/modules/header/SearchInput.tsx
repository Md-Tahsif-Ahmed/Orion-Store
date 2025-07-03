'use client';

import { Badge } from '@/components/custom/Badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { m } from 'framer-motion';

export default function SearchInput({ className }: { className?: string }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className={cn('px-2 relative', className)}>
      <Input
        className="border-none focus:ring-white shadow-none"
        placeholder="Search for anything"
        onMouseDown={() => setOpenDropdown(!openDropdown)}
      />

      <Button variant="icon">
        <Search />
      </Button>

      <m.div
        onMouseLeave={() => setOpenDropdown(false)}
        initial={{ y: -15, opacity: 0 }}
        animate={openDropdown ? { y: 0, opacity: 1 } : { y: -15, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'hidden h-[610px] absolute w-full top-12 bg-white border overflow-auto backdrop-filter shadow-gray-700 shadow-md left-0',
          openDropdown && 'flex'
        )}
      >
        <div className="flex flex-col gap-y-6 w-full">
          {[1, 2, 3, 4].map((_, idx) => (
            <Link
              key={idx}
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                width={100}
                height={100}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold">product title</h3>
                <Badge className="bg-primary-700 text-black">10%</Badge>
                <h3 className="text-base font-bold">110$</h3>
              </div>
            </Link>
          ))}
        </div>
      </m.div>
    </div>
  );
}
