'use client';
import React, { useState } from 'react';
import { PanelLeftOpen, PanelLeftClose } from 'lucide-react';
import Logo from '../logo';
import { SidebarDataType, SidebarType } from '@/src/types/ui/sidebar';
import { sidebarData } from '@/src/utils/data/sidebarData';
import Link from 'next/link';

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    return setIsOpen((prev) => !prev);
  };
  return (
    <div className={`h-dvh max-h-dvh grid ${isOpen ? 'grid-cols-[250px_3fr]' : 'grid-cols-[60px_3fr]'} gap-5 transition-all duration-300 ease-in-out`}>
      <Sidebar isOpen={isOpen} setIsOpen={toggleSidebar}>
        <ul className={`flex flex-col ${isOpen ? "items-start" : "items-center"} gap-4`}>
          {sidebarData.map((data) => {
            return <SidebarItem item={data} isOpen={isOpen} />;
          })}
        </ul>
      </Sidebar>
      <SidebarTrigger>{children}</SidebarTrigger>
    </div>
  );
}

export function Sidebar({ children, isOpen, setIsOpen }: SidebarType) {
  return (
    <div className={`min-h-full bg-gray-50 shadow-2xl relative p-2  ${isOpen ? 'w-full' : 'w-16'}`}>
      <header className='mb-4'>
        <button className="absolute -right-3 top-2" onClick={setIsOpen}>
          {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </button>
        <Logo height={50} width={50} />
      </header>
      {children}
    </div>
  );
}
export function SidebarTrigger({children}: {children: React.ReactNode}){
  return <main className="bg-gray-50 shadow-2xl">{children}</main>;
}
export function SidebarItem({ item, isOpen }: {item: SidebarDataType, isOpen: boolean}) {
  return (
    <li className='transition-all duration-200 hover:bg-gray-200 px-4 py-2 w-full rounded'>
      <Link href={item.url}>
        {isOpen ? (
          <span className="flex gap-1.5">
            <item.icon /> {item.name}
          </span>
        ) : (
          <item.icon />
        )}
      </Link>
    </li>
  );
}