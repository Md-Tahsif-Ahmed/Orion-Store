'use client';

import React from 'react';
import SearchInput from './SearchInput';
import Logo from '@/components/custom/Logo';
import Container from '@/components/custom/Container';
import IconGroup from './IconGroup';
import SidebarMenu from './SidebarMenu';
import MobileSocialMenu from './MobileSocialMenu';
export default function MainMenu(){
    return (
         <nav className='bg-secondary-700 h-[88px] border-t-[1px] border-white border-opacity-20'>
            <Container>
                <div className="flex items-center justify-between h-full">
                    {/* mobile sidebar menu */}
                    <SidebarMenu/>
                    {/* logo */}
                    <Logo className='hidden lg:block'/>
                    {/* search input */}
                    <SearchInput className='lg:flex items-center gap-4 flex-1 max-w-[646px] h-[48px] bg-white hidden'/>
                    {/* icon groups */}
                    <IconGroup className='lg:flex items-center gap-4'/>
                    <MobileSocialMenu className='lg:hidden'/>
                </div>
            </Container>
         </nav>
    );
};