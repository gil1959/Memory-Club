"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminPage() {
  const [selectedModel, setSelectedModel] = useState('arch-mini');
  const [selectedTheme, setSelectedTheme] = useState('bar');

  return (
    <main 
      className={clsx('min-h-screen', 'w-full', 'flex', 'flex-col', 'relative', 'text-[#1A1A1A]', 'overflow-x-hidden')}
      style={{ 
        backgroundImage: "url('/bgadmin.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Top Bar (Compressed for 1-screen fit) */}
      <header className={clsx('w-full', 'px-4', 'py-2', 'xl:px-6', 'xl:py-3', 'flex', 'flex-col', 'md:flex-row', 'items-start', 'md:items-center', 'justify-between', 'gap-3', 'border-b', 'border-[#1A1A1A]/10', 'shrink-0')}>
        <div className={clsx('flex', 'items-center', 'gap-3', 'xl:gap-5')}>
          <Link href="/" className={clsx('flex', 'flex-col', 'items-center', 'leading-none')}>
            <span className={clsx('text-[5px]', 'tracking-[0.2em]', 'font-inter', 'font-medium', 'uppercase', 'text-center', 'w-full')}>
              — EST 2018 —
            </span>
            <span className={clsx('font-playfair', 'text-sm', 'xl:text-base', 'font-bold', 'tracking-wide', 'uppercase')}>
              Memory <span className={clsx('font-dancing', 'text-base', 'xl:text-lg', 'font-semibold', 'normal-case', 'italic')}>Club</span>
            </span>
            <span className={clsx('text-[4.5px]', 'tracking-[0.25em]', 'font-inter', 'font-medium', 'uppercase', 'text-center', 'w-full')}>
              Photobooth Co.
            </span>
          </Link>
          <span className={clsx('text-[#1A1A1A]/30', 'text-xl', 'font-light', 'hidden', 'md:block')}>/</span>
          <div className={clsx('flex', 'flex-col', 'hidden', 'md:flex')}>
            <span className={clsx('font-inter', 'text-[9px]', 'xl:text-[10px]', 'font-bold', 'tracking-wider', 'uppercase')}>Partner Configurator</span>
            <span className={clsx('font-inter', 'text-[8px]', 'text-[#1A1A1A]/60', 'tracking-wider', 'uppercase')}>Design. Preview. Place.</span>
          </div>
        </div>

        <div className={clsx('flex', 'items-center', 'gap-4', 'w-full', 'md:w-auto', 'justify-between', 'md:justify-end')}>
          <div className={clsx('flex', 'flex-col', 'text-right', 'hidden', 'md:flex')}>
            <span className={clsx('font-inter', 'text-[8px]', 'text-[#1A1A1A]/60', 'tracking-wider', 'uppercase')}>Good Places</span>
            <span className={clsx('font-inter', 'text-[8px]', 'font-bold', 'tracking-wider', 'uppercase')}>Better Memories.</span>
          </div>
          <span className={clsx('text-[#1A1A1A]/30', 'text-xl', 'font-light', 'hidden', 'md:block')}>/</span>
          
          <div className={clsx('flex', 'items-center', 'gap-2')}>
            <button className={clsx('px-3', 'xl:px-4', 'py-1.5', 'border', 'border-[#1A1A1A]/20', 'rounded', 'text-[9px]', 'xl:text-[10px]', 'font-bold', 'tracking-wider', 'uppercase', 'hover:bg-[#1A1A1A]/5', 'transition-colors')}>
              Save Setup
            </button>
            <button className={clsx('px-3', 'xl:px-4', 'py-1.5', 'bg-[#1A1A1A]', 'text-[#EAE0D5]', 'rounded', 'text-[9px]', 'xl:text-[10px]', 'font-bold', 'tracking-wider', 'uppercase', 'flex', 'items-center', 'gap-1.5', 'hover:bg-[#2C2520]', 'transition-colors')}>
              Share
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content: 3 Columns, flexible height to fit 1 screen */}
      <div className={clsx('flex-1', 'w-full', 'max-w-[1600px]', 'mx-auto', 'p-3', 'xl:p-4', 'grid', 'grid-cols-1', 'md:grid-cols-12', 'gap-4', 'xl:gap-6', 'min-h-0')}>
        
        {/* LEFT COLUMN: Controls */}
        <div className={clsx('md:col-span-3', 'flex', 'flex-col', 'gap-3', 'xl:gap-4', 'order-2', 'md:order-1', 'h-full')}>
          
          {/* Models */}
          <div className={clsx('flex', 'flex-col', 'gap-2')}>
            <h2 className={clsx('font-inter', 'text-[10px]', 'xl:text-[11px]', 'font-bold', 'tracking-wider', 'uppercase')}>1. Choose Model</h2>
            <div className={clsx('grid', 'grid-cols-2', 'gap-2', 'xl:gap-3')}>
              {/* Model 1 */}
              <div 
                onClick={() => setSelectedModel('signature')}
                className={clsx(
                  "cursor-pointer border rounded-md p-2 flex flex-col items-center gap-1.5 relative transition-all duration-300",
                  selectedModel === 'signature' ? "border-[#4A2017] scale-[1.05] shadow-md z-10 bg-[#FAF7F2]" : "border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 active:scale-95 bg-transparent"
                )}
              >
                <div className={clsx(
                  "absolute top-2.5 right-2.5 w-4 h-4 rounded-full flex items-center justify-center transition-colors shadow-sm",
                  selectedModel === 'signature' ? "bg-[#4A2017]" : "border border-[#1A1A1A]/60 bg-transparent"
                )}>
                  {selectedModel === 'signature' && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                  )}
                </div>
                
                <div className={clsx('w-full', 'h-24', 'xl:h-28', 'mt-1', 'relative')}>
                  <Image src="/model1.png" alt="Signature Model" fill className="object-contain" sizes="(max-width: 768px) 30vw, 15vw" />
                </div>
                <div className={clsx('text-center', 'w-full', 'mt-1')}>
                  <div className={clsx('font-inter', 'text-[9px]', 'xl:text-[10px]', 'font-bold', 'uppercase', 'tracking-wider')}>Signature</div>
                  <div className={clsx('font-inter', 'text-[7px]', 'xl:text-[8px]', 'text-[#1A1A1A]/60', 'tracking-wider', 'mt-0.5')}>73" H × 53" W × 30" D</div>
                </div>
              </div>
              
              {/* Model 2 */}
              <div 
                onClick={() => setSelectedModel('arch-mini')}
                className={clsx(
                  "cursor-pointer border rounded-md p-2 flex flex-col items-center gap-1.5 relative transition-all duration-300",
                  selectedModel === 'arch-mini' ? "border-[#4A2017] scale-[1.05] shadow-md z-10 bg-[#FAF7F2]" : "border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 active:scale-95 bg-transparent"
                )}
              >
                <div className={clsx(
                  "absolute top-2.5 right-2.5 w-4 h-4 rounded-full flex items-center justify-center transition-colors shadow-sm",
                  selectedModel === 'arch-mini' ? "bg-[#4A2017]" : "border border-[#1A1A1A]/60 bg-transparent"
                )}>
                  {selectedModel === 'arch-mini' && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                  )}
                </div>
                
                <div className={clsx('w-full', 'h-24', 'xl:h-28', 'mt-1', 'relative')}>
                  <Image src="/model2.png" alt="The Arch Mini" fill className="object-contain" sizes="(max-width: 768px) 30vw, 15vw" />
                </div>
                <div className={clsx('text-center', 'w-full', 'mt-1')}>
                  <div className={clsx('font-inter', 'text-[9px]', 'xl:text-[10px]', 'font-bold', 'uppercase', 'tracking-wider')}>The Arch Mini</div>
                  <div className={clsx('font-inter', 'text-[7px]', 'xl:text-[8px]', 'text-[#1A1A1A]/60', 'tracking-wider', 'mt-0.5')}>73" H × 48" W × 23" D</div>
                </div>
              </div>
            </div>
          </div>

          {/* Themes */}
          <div className={clsx('flex', 'flex-col', 'gap-2')}>
            <h2 className={clsx('font-inter', 'text-[10px]', 'xl:text-[11px]', 'font-bold', 'tracking-wider', 'uppercase')}>2. Choose Theme</h2>
            <div className={clsx('grid', 'grid-cols-3', 'gap-2')}>
              {[
                { id: 'bar', label: 'Bar / Restaurant', img: '/themebar.png' },
                { id: 'classic', label: 'Classic', img: '/themeclasic.jpg' },
                { id: 'sexy', label: 'Sexy', img: '/themesexy.jpg' },
                { id: 'retro', label: 'Retro', img: '/themeretro.jpg' },
                { id: 'lgbtq', label: 'LGBTQ+', img: '/themeLGBTQ+.png' },
                { id: 'halloween', label: 'Halloween', img: '/themehalloween.png' }
              ].map((theme) => (
                <div key={theme.id} onClick={() => setSelectedTheme(theme.id)} className={clsx('flex', 'flex-col', 'gap-1', 'cursor-pointer', 'group')}>
                  <div className={clsx(
                    "w-full aspect-[4/3] rounded border relative transition-all duration-300 overflow-hidden",
                    selectedTheme === theme.id ? "border-[#A84A3B] scale-[1.05] shadow-sm z-10" : "border-[#1A1A1A]/10 group-hover:border-[#1A1A1A]/30 group-active:scale-95"
                  )}>
                    <Image src={theme.img} alt={theme.label} fill className="object-cover" sizes="(max-width: 768px) 25vw, 10vw" />
                    {selectedTheme === theme.id && (
                      <div className={clsx('absolute', '-top-1', '-right-1', 'w-3', 'h-3', 'rounded-full', 'bg-[#A84A3B]', 'text-white', 'flex', 'items-center', 'justify-center', 'shadow-sm', 'z-20')}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                      </div>
                    )}
                  </div>
                  <div className={clsx('font-inter', 'text-[6.5px]', 'xl:text-[7.5px]', 'font-bold', 'uppercase', 'tracking-wider', 'text-center')}>{theme.label}</div>
                </div>
              ))}
              
              {/* Custom */}
              <div onClick={() => setSelectedTheme('custom')} className="flex flex-col gap-1 cursor-pointer group">
                <div className={clsx(
                  "w-full aspect-[4/3] rounded border relative flex items-center justify-center transition-all duration-300",
                  selectedTheme === 'custom' ? "border-[#A84A3B] scale-[1.05] shadow-sm z-10" : "border-[#1A1A1A]/20 bg-transparent group-hover:border-[#1A1A1A]/40 group-active:scale-95"
                )}>
                  <span className={clsx("font-caveat text-sm xl:text-base transition-colors", selectedTheme === 'custom' ? "text-[#A84A3B]" : "text-[#1A1A1A]/60")}>Custom</span>
                  {selectedTheme === 'custom' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#A84A3B] text-white flex items-center justify-center shadow-sm z-20">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                  )}
                </div>
                <div className="font-inter text-[6.5px] xl:text-[7.5px] font-bold uppercase tracking-wider text-center">Custom</div>
              </div>
              
              {/* View More */}
              <div className={clsx('flex', 'flex-col', 'gap-1', 'cursor-pointer', 'group')}>
                <div className={clsx('w-full', 'aspect-[4/3]', 'rounded', 'border', 'border-dashed', 'border-[#1A1A1A]/30', 'bg-transparent', 'flex', 'items-center', 'justify-center', 'group-hover:border-[#1A1A1A]/50', 'transition-all')}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#1A1A1A]/50"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                </div>
                <div className={clsx('font-inter', 'text-[6.5px]', 'xl:text-[7.5px]', 'font-bold', 'uppercase', 'tracking-wider', 'text-center')}>View More</div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Main Image (Flexible Height to fit) */}
        <div className={clsx('md:col-span-6', 'flex', 'flex-col', 'items-center', 'justify-center', 'order-1', 'md:order-2', 'h-full', 'min-h-0')}>
          <div className={clsx('w-full', 'flex-1', 'relative', 'flex', 'flex-col', 'items-center', 'justify-center', 'min-h-[300px]', 'md:min-h-[400px]', 'lg:min-h-0')}>
            <Image 
              src={selectedModel === 'signature' ? '/frontmodel1.png' : '/frontmodel2.png'} 
              alt={selectedModel === 'signature' ? 'Signature Booth' : 'The Arch Mini'} 
              fill 
              className={clsx('object-contain', 'transition-all', 'duration-500', 'ease-in-out', 'drop-shadow-xl')} 
              sizes="(max-width: 1024px) 80vw, 40vw"
              priority
            />
          </div>
          
          <div className={clsx('flex', 'flex-col', 'items-center', 'text-center', 'gap-1', 'mt-2', 'shrink-0')}>
            <div className={clsx('w-6', 'h-px', 'bg-[#1A1A1A]/30')}></div>
            <h1 className={clsx('font-playfair', 'text-3xl', 'xl:text-4xl', 'font-bold', 'text-[#4A2017]', 'leading-none')}>
              {selectedModel === 'signature' ? '01' : '04'}
            </h1>
            <h2 className={clsx('font-inter', 'text-lg', 'xl:text-xl', 'font-bold', 'tracking-[0.15em]', 'uppercase', 'text-[#1A1A1A]', 'mt-0.5')}>
              {selectedModel === 'signature' ? 'Signature' : 'The Arch Mini'}
            </h2>
            <p className={clsx('font-playfair', 'text-xs', 'xl:text-sm', 'text-[#1A1A1A]/80', 'italic')}>
              {selectedModel === 'signature' ? 'A bold statement for larger spaces.' : 'A softer silhouette for standout venues.'}
            </p>
            <div className={clsx('w-6', 'h-px', 'bg-[#1A1A1A]/30', 'mt-1')}></div>
          </div>
        </div>

        {/* RIGHT COLUMN: Specs & Details */}
        <div className={clsx('md:col-span-3', 'flex', 'flex-col', 'gap-3', 'xl:gap-4', 'order-3', 'h-full')}>
          
          {/* SECTION 3: Photo Strips (Now separate bordered box) */}
          <div className={clsx('p-3', 'xl:p-4', 'border', 'border-[#1A1A1A]/15', 'rounded-lg', 'flex', 'flex-col', 'gap-2', 'xl:gap-3')}>
            <h2 className={clsx('font-inter', 'text-[10px]', 'xl:text-[11px]', 'font-bold', 'tracking-wider', 'uppercase')}>3. Photo Strips & Branding</h2>
            
            {/* Strips */}
            <div className={clsx('flex', 'justify-center', 'gap-4', 'py-1')}>
              <div className={clsx('w-[50px]', 'xl:w-[60px]', 'aspect-[1/3]', 'relative', 'overflow-hidden', 'drop-shadow-sm')}>
                <Image src="/strips1.png" alt="Photo Strip 1" fill className="object-cover" sizes="80px" />
              </div>
              <div className={clsx('w-[50px]', 'xl:w-[60px]', 'aspect-[1/3]', 'relative', 'overflow-hidden', 'drop-shadow-sm')}>
                <Image src="/strips2.png" alt="Photo Strip 2" fill className="object-cover" sizes="80px" />
              </div>
            </div>
            
            {/* Checkmarks / Edit Options */}
            <div className={clsx('flex', 'flex-col', 'w-full')}>
              <div className={clsx('flex', 'items-center', 'gap-2', 'py-1.5', 'border-b', 'border-[#1A1A1A]/10')}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#1A1A1A]/80"><path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"></path><path d="M8 18h1"></path><path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z"></path></svg>
                <span className={clsx('font-inter', 'text-[9px]', 'xl:text-[10px]', 'text-[#1A1A1A]/90')}>Logo can be adjusted</span>
              </div>
              <div className={clsx('flex', 'items-center', 'gap-2', 'py-1.5', 'border-b', 'border-[#1A1A1A]/10')}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#1A1A1A]/80"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                <span className={clsx('font-inter', 'text-[9px]', 'xl:text-[10px]', 'text-[#1A1A1A]/90')}>Layout can be adjusted</span>
              </div>
              <div className={clsx('flex', 'items-center', 'gap-2', 'py-1.5')}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#1A1A1A]/80"><path d="M4 7V4h16v3"></path><path d="M9 20h6"></path><path d="M12 4v16"></path></svg>
                <span className={clsx('font-inter', 'text-[9px]', 'xl:text-[10px]', 'text-[#1A1A1A]/90')}>Custom text can be adjusted</span>
              </div>
            </div>
          </div>

          {/* SECTION 4: Venue Setup (Separate bordered box) */}
          <div className={clsx('p-3', 'xl:p-4', 'border', 'border-[#1A1A1A]/15', 'rounded-lg', 'flex', 'flex-col', 'gap-2', 'xl:gap-3', 'bg-[#1A1A1A]/[0.02]')}>
            <h2 className={clsx('font-inter', 'text-[10px]', 'xl:text-[11px]', 'font-bold', 'tracking-wider', 'uppercase')}>4. Venue Setup</h2>
            
            <div className={clsx('flex', 'flex-col')}>
              {[
                { icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />, label: 'POWER', value: 'Standard wall outlet' },
                { icon: <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />, label: 'WI-FI', value: 'Not required' },
                { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, label: 'STAFF', value: 'No staff involvement' },
                { icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>, label: 'INSTALLATION', value: 'Handled by MemoryClub' },
                { icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>, label: 'MAINTENANCE', value: 'Fully managed by MemoryClub' },
                { icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></>, label: 'UPFRONT COST', value: '$0' },
              ].map((item, i) => (
                <div key={i} className={clsx('flex', 'items-center', 'gap-2', 'py-1', 'xl:py-1.5', 'border-b', 'border-[#1A1A1A]/10', 'last:border-0')}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={clsx('text-[#1A1A1A]/80', 'w-3', 'shrink-0')}>
                    {item.icon}
                  </svg>
                  <span className={clsx('font-inter', 'text-[8px]', 'xl:text-[9px]', 'font-bold', 'tracking-widest', 'uppercase', 'w-16', 'xl:w-20', 'shrink-0')}>{item.label}</span>
                  <span className={clsx('font-inter', 'text-[8px]', 'xl:text-[9px]', 'text-[#1A1A1A]/80')}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* AR Button */}
            <button className={clsx('w-full', 'flex', 'items-center', 'justify-between', 'p-2', 'xl:p-3', 'border', 'border-[#1A1A1A]/20', 'bg-[#1A1A1A]/[0.02]', 'rounded-md', 'group', 'hover:bg-[#1A1A1A]/5', 'transition-colors')}>
              <div className={clsx('flex', 'items-center', 'gap-2', 'xl:gap-3')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
                <div className={clsx('flex', 'flex-col', 'text-left')}>
                  <span className={clsx('font-inter', 'text-[9px]', 'xl:text-[10px]', 'font-bold', 'tracking-wider', 'uppercase')}>View in your space</span>
                  <span className={clsx('font-inter', 'text-[7px]', 'xl:text-[8px]', 'text-[#1A1A1A]/60', 'tracking-wider', 'uppercase')}>AR / 3D Model</span>
                </div>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={clsx('group-hover:translate-x-1', 'group-hover:-translate-y-1', 'transition-transform')}><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer (Compressed) */}
      <footer className={clsx('w-full', 'px-4', 'py-2', 'xl:px-6', 'xl:py-3', 'flex', 'flex-col', 'md:flex-row', 'items-center', 'justify-between', 'gap-3', 'border-t', 'border-[#1A1A1A]/10', 'shrink-0', 'mt-auto')}>
        <div className={clsx('flex', 'items-center', 'gap-4', 'xl:gap-6')}>
          <span className={clsx('font-playfair', 'font-bold', 'text-lg', 'xl:text-xl', 'tracking-widest')}>MC</span>
          <div className={clsx('w-px', 'h-5', 'bg-[#1A1A1A]/20')}></div>
          <span className={clsx('font-inter', 'text-[8px]', 'xl:text-[9px]', 'font-bold', 'tracking-[0.2em]', 'uppercase', 'text-[#1A1A1A]/60')}>For Partners Only</span>
          <div className={clsx('w-px', 'h-5', 'bg-[#1A1A1A]/20', 'hidden', 'md:block')}></div>
          <span className={clsx('font-inter', 'text-[8px]', 'xl:text-[9px]', 'font-bold', 'tracking-[0.2em]', 'uppercase', 'text-[#1A1A1A]/60', 'hidden', 'md:block')}>Places that make the night</span>
        </div>
        
        <div className={clsx('flex', 'items-center', 'gap-2', 'group', 'cursor-pointer')}>
          <span className={clsx('font-inter', 'text-[8px]', 'xl:text-[9px]', 'font-bold', 'tracking-[0.2em]', 'uppercase', 'text-[#1A1A1A]/60')}>Need help?</span>
          <span className={clsx('font-inter', 'text-[8px]', 'xl:text-[9px]', 'font-bold', 'tracking-[0.2em]', 'uppercase', 'border-b', 'border-[#1A1A1A]/30', 'group-hover:border-[#1A1A1A]', 'transition-colors', 'pb-0.5')}>Get in touch</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={clsx('ml-1', 'group-hover:translate-x-1', 'transition-transform')}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </div>
      </footer>
    </main>
  );
}
