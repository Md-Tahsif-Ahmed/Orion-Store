'use client';

import { cn } from '@/lib/utils';
import { FacebookLogoIcon, InstagramLogoIcon, PinterestLogoIcon, RedditLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

export default function SocialIcon({className}: {className?:string}){
    return (
        <div className={cn(className, "flex items-center gap-4")}>
             <span>Follow us:</span>
             <div className="flex items-center gap-4">
                <Link href="/" target='_blank'>
                <TwitterLogoIcon weight='fill' size={16}/>
                </Link>
                <Link href="/" target='_blank'>
                <FacebookLogoIcon weight='fill' size={16}/>
                </Link>
                <Link href="/" target='_blank'>
                <PinterestLogoIcon weight='fill' size={16}/>
                </Link>
                <Link href="/" target='_blank'>
                <RedditLogoIcon weight='fill' size={16}/>
                </Link>
                <Link href="/" target='_blank'>
                <YoutubeLogoIcon weight='fill' size={16}/>
                </Link>
                <Link href="/" target='_blank'>
                <InstagramLogoIcon weight='fill' size={16}/>
                </Link>
             </div>

        </div>
    );
};