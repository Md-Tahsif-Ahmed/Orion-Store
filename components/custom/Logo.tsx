'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo({ className }: { className?: string}){
    return (
        <Link href="/" className={cn(className)}>
            <Image src="/images/logo_light.svg"
            alt='logo_light'
            width={160}
            height={48}
            />
        </Link>
    );
};