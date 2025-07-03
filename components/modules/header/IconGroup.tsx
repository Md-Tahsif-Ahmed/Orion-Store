'use client';

import { cn } from '@/lib/utils';
import { HeartIcon, ShoppingCartIcon, UserIcon } from '@phosphor-icons/react';
import React from 'react';

export default function IconGroup({className}: {className?:string}){
    return (
        <div className={cn(className)}>
            <button className='text-white relative'>
                <ShoppingCartIcon weight='regular' size={32}/>
                <span className='rounded-full bg-white grid place-content-center text-gray-700 h-6 w-6 font-bold absolute -top-2 left-5'>0</span>

            </button>{""}
               <button className='text-white relative'>
                <HeartIcon weight='regular' size={32}/>
                 
            </button>{""}
            
               <button className='text-white relative'>
                <UserIcon weight='regular' size={32}/>
                 
            </button>


            
        </div>
    );
};