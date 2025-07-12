// 'use client';

import Container from '@/components/custom/Container';
import React from 'react';
import SocialIcon from './SocialIcon';
import LangaugeCurrency from './LanguageCurrency';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function SocialMenu({className}: {className?: string}){
    return (
        <div className={cn('bg-secondary-700 h-[52px]', className)}>
             <Container>
                <div className="flex justify-between items-center h-full">
                    {/* left content */}
                    <div className="">
                        <p className="text-white">Welcome to Orion online eCommerce store.</p>
                    </div>
                    {/* right content */}
                    <div className="flex items-center space-x-6">
                        <SocialIcon className='text-white'/>
                        <Separator orientation='vertical' className='bg-white/20 h-[20px]'/>
                        <LangaugeCurrency className='text-white bg-secondary-700 border-0 w-[100px]'/>

                    </div>                    
                </div>                
            </Container>
        </div>
    );
};