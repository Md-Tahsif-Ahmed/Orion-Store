"use client";

import { Badge } from '@/components/custom/Badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { m } from 'framer-motion';
import axios from "axios";
import { TypeProductModel } from '@/types/models';

export default function SearchInput({ className }: { className?: string }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [data, setData] = useState<TypeProductModel[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.currentTarget.value;

    if (search.length > 1) {
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/public/products", 
          {
          params: { 
            search: search, 
          }
        }
      )
        .then((response) => {
          setData(response.data.data);
          console.log(response.data);
          console.log("API URL =>", process.env.NEXT_PUBLIC_API_URL);

        })
        .catch((err)=> { console.log(err)})
        .finally(()=> {} );
    }
  };

  return (
    <div className={cn('px-2 relative', className)}>
      <Input
        className="border-none focus:ring-white shadow-none"
        placeholder="Search for anything"
        onMouseDown={() => setOpenDropdown(true)}
        onChange={handleSearch}
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
        <div className="flex flex-col gap-y-6 w-full px-4 py-2">
          {data?.map((item: TypeProductModel, idx) => (
            <Link key={idx} href='/' className="flex items-center gap-4 hover:border-2 border-gray-500">
              <Image
                src={item.images[0]?.url}
                width={100}
                height={0}
                alt="product image"
                // className="object-cover"
                // href={`/product/${item.slug || item.id}`}
              />
              <div className="flex flex-col gap-1">
                <h3 className='text-base'>{item.name}</h3>
                {item.discount > 0 && (
                  <Badge variant="warning" className='bg-primary-600 text-base'>-{item.discount}%</Badge>
                )}
                <h3 className='text-base'>{item.price}$</h3>
              </div>
            </Link>
          ))}
        </div>
      </m.div>
    </div>
  );
}
