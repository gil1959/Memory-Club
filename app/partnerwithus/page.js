"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import clsx from 'clsx';

export default function PartnerWithUsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [venueType, setVenueType] = useState('');
  const [isLocDropdownOpen, setIsLocDropdownOpen] = useState(false);
  const [numLocations, setNumLocations] = useState('');

  const venueOptions = ['Bar', 'Restaurant', 'Hotel', 'Club', 'Event Space', 'Cultural Space', 'Other'];
  const locationOptions = ['1', '2-5', '6-10', '10+'];

  const faqs = [
    {
      num: '01',
      title: "WHAT'S THE BUSINESS MODEL?",
      content: "Memory Club covers the full investment.\nNo upfront cost, no lease, no debt, no install fee."
    },
    {
      num: '02',
      title: "WILL IT BRING PEOPLE IN?",
      content: "Yes. You earn 20-25% monthly revenue share\nand create an experience guests love to post\nand tag."
    },
    {
      num: '03',
      title: "WHAT DO YOU NEED FROM US?",
      content: "Just a standard outlet.\nNo Wi-Fi or network access. No staff training."
    },
    {
      num: '04',
      title: "WHAT IF SOMETHING BREAKS?",
      content: "We handle everything. All monitoring,\nrestocking, paper/ribbon, and repairs—fast."
    },
    {
      num: '05',
      title: "WHAT ARE THE DIMENSIONS\nAND INSTALLATION DETAILS?",
      content: "Weather-resistant booth.\nIndoor / outdoor capable.\n73H x 53W x 30D inches.\n3D booth models available."
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="w-full flex flex-col pt-32 pb-24 px-6 md:px-12 lg:px-16 items-center" style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center", minHeight: '100vh' }}>
        
        {/* Top Section: Split Layout */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-12 lg:mb-16">
          
          {/* Left Column: FAQ */}
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#A84A3B]"></div>
              <h2 className="font-inter text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#A84A3B]">
                PARTNER FAQ
              </h2>
              <div className="w-12 h-px bg-[#1A1A1A]/30"></div>
            </div>
            
            <h1 className="font-anton text-[34px] sm:text-[40px] md:text-[46px] lg:text-[40px] xl:text-[48px] leading-[0.95] text-[#1A1A1A] uppercase mb-12 tracking-wide xl:whitespace-nowrap text-center">
              EVERYTHING YOU NEED TO KNOW.
            </h1>

            <div className="flex flex-col w-full border-t border-[#1A1A1A]/20">
              {faqs.map((faq, index) => {
                return (
                  <div key={index} className="flex gap-6 py-8 border-b border-[#1A1A1A]/20 items-start">
                    {/* Number */}
                    <div className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#A84A3B] shrink-0 border-r border-[#1A1A1A]/20 pr-6 mr-2 font-medium">
                      {faq.num}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col pt-1">
                      <h3 className="font-anton text-xl md:text-[22px] leading-tight uppercase text-[#1A1A1A] tracking-wide whitespace-pre-line">
                        {faq.title}
                      </h3>
                      
                      {/* Body */}
                      <div className="mt-3">
                        <p className="font-inter text-sm leading-relaxed text-[#1A1A1A]/80 whitespace-pre-line font-medium">
                          {faq.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Specs */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[500px] border border-[#1A1A1A]/10 rounded-sm bg-transparent flex flex-col items-center pt-10 pb-8 px-6 md:px-10">
              
              <h2 className="font-playfair text-2xl md:text-3xl font-bold uppercase text-[#1A1A1A] tracking-wider mb-2">
                TECHNICAL SPECS
              </h2>
              <div className="w-12 h-[1.5px] bg-[#A84A3B] mb-10"></div>
              
              {/* Image */}
              <div className="relative w-full max-w-[280px] h-[340px] mb-12 flex justify-center">
                <Image 
                  src="/imgpartner.png" 
                  alt="Memory Club Photobooth Sketch" 
                  fill 
                  className="object-contain drop-shadow-sm"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                />
              </div>

              {/* Specs Box */}
              <div className="w-full border border-[#1A1A1A]/15 rounded-md flex flex-col relative" style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="flex items-center gap-5 px-6 py-4 md:py-5 border-b border-[#1A1A1A]/10">
                  <svg className="w-6 h-6 text-[#1A1A1A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                  <p className="font-inter text-[13px] md:text-sm font-medium text-[#1A1A1A]">
                    73H x 53W x 30D inches<br/>(including marquee)
                  </p>
                </div>
                
                <div className="flex items-center gap-5 px-6 py-4 md:py-5 border-b border-[#1A1A1A]/10">
                  <svg className="w-6 h-6 text-[#1A1A1A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  <p className="font-inter text-[13px] md:text-sm font-medium text-[#1A1A1A]">
                    Weather-resistant
                  </p>
                </div>
                
                <div className="flex items-center gap-5 px-6 py-4 md:py-5 border-b border-[#1A1A1A]/10">
                  <svg className="w-6 h-6 text-[#1A1A1A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  <p className="font-inter text-[13px] md:text-sm font-medium text-[#1A1A1A]">
                    Indoor / Outdoor capable
                  </p>
                </div>
                
                <div className="flex items-center gap-5 px-6 py-4 md:py-5">
                  <svg className="w-6 h-6 text-[#1A1A1A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18 M9 21V9" />
                  </svg>
                  <p className="font-inter text-[13px] md:text-sm font-medium text-[#1A1A1A]">
                    3D booth models available
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Middle Section: Venues */}
        <div className="w-full max-w-[1000px] flex flex-col items-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-14 w-full">
            <div className="h-px bg-[#1A1A1A]/20 flex-1"></div>
            <h2 className="font-inter text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase text-[#A84A3B]">
              GREAT FOR VENUES LIKE YOURS
            </h2>
            <div className="h-px bg-[#1A1A1A]/20 flex-1"></div>
          </div>
          
          <div className="flex flex-wrap md:flex-nowrap justify-center w-full max-w-full items-end gap-x-8 gap-y-12 md:gap-x-0">
            {/* BARS */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <svg className="w-12 h-12 text-[#1A1A1A] stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16l-8 9-8-9z M12 15v6 M9 21h6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 4l-3 5" />
              </svg>
              <span className="font-inter text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#1A1A1A] uppercase">BARS</span>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-[#1A1A1A]/20 self-center"></div>

            {/* RESTAURANTS */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <svg className="w-12 h-12 text-[#1A1A1A] stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 2v20" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
              </svg>
              <span className="font-inter text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#1A1A1A] uppercase">RESTAURANTS</span>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-[#1A1A1A]/20 self-center"></div>

            {/* HOTELS */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <svg className="w-12 h-12 text-[#1A1A1A] stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16h16M5 16a7 7 0 0 1 14 0" />
                <circle cx="12" cy="7" r="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18" />
              </svg>
              <span className="font-inter text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#1A1A1A] uppercase">HOTELS</span>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-[#1A1A1A]/20 self-center"></div>

            {/* CLUBS */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <svg className="w-12 h-12 text-[#1A1A1A] stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="13" r="8" />
                <path d="M12 5v16" />
                <path d="M8.5 6a12 12 0 0 0 0 14" />
                <path d="M15.5 6a12 12 0 0 1 0 14" />
                <path d="M4.5 10h15" />
                <path d="M4 13h16" />
                <path d="M4.5 16h15" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3" />
              </svg>
              <span className="font-inter text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#1A1A1A] uppercase">CLUBS</span>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-[#1A1A1A]/20 self-center"></div>

            {/* CULTURAL SPACES */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <svg className="w-12 h-12 text-[#1A1A1A] stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="4" width="18" height="16" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="6" y="7" width="12" height="10" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13c2-2 3-2 4 0s3 2 4 0 3-2 4 0" />
              </svg>
              <span className="font-inter text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#1A1A1A] uppercase text-center">CULTURAL SPACES</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Banner */}
        <div className="w-full max-w-[1100px] border border-[#1A1A1A]/20 rounded-md py-10 px-6 md:py-12 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 mb-10 bg-transparent">
          <h2 className="font-anton text-3xl md:text-4xl lg:text-[46px] text-[#1A1A1A] uppercase tracking-wide m-0 text-center md:text-left leading-none lg:whitespace-nowrap">
            INTERESTED IN A BOOTH? LET'S TALK.
          </h2>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#A84A3B] text-white px-8 py-4 rounded font-inter text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#8e3f32] transition-colors flex items-center gap-4 shrink-0 group"
          >
            PARTNER WITH US
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </main>

      {/* Partner With Us Modal */}
      {isModalOpen && (
        <div className={clsx('fixed', 'inset-0', 'z-[9999]', 'flex', 'justify-center', 'items-center', 'bg-black/60', 'backdrop-blur-sm', 'p-4')}>
          <div className={clsx('relative', 'w-full', 'max-w-[450px]', 'rounded-xl', 'shadow-2xl', 'p-5', 'md:p-6', 'flex', 'flex-col', 'overflow-visible')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className={clsx('absolute', 'top-5', 'right-5', 'text-gray-500', 'hover:text-black', 'transition-colors')}
            >
              <svg className={clsx('w-5', 'h-5')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Header */}
            <div className={clsx('w-full', 'text-center', 'mb-1', 'mt-2')}>
              <h3 className={clsx('font-anton', 'text-2xl', 'md:text-[28px]', 'uppercase', 'tracking-wide', 'text-[#1A1A1A]')}>PARTNER WITH US</h3>
              <p className={clsx('font-inter', 'text-xs', 'text-[#1A1A1A]/70', 'mt-1')}>Tell us about your venue and we'll be in touch.</p>
            </div>

            {/* Divider with heart */}
            <div className={clsx('flex', 'items-center', 'justify-center', 'gap-3', 'my-3')}>
              <div className={clsx('w-8', 'h-px', 'bg-[#D27B5E]')}></div>
              <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <div className={clsx('w-8', 'h-px', 'bg-[#D27B5E]')}></div>
            </div>

            {/* Form */}
            <form className={clsx('flex', 'flex-col', 'gap-2')} onSubmit={(e) => e.preventDefault()}>
              
              {/* Venue / Brand Name */}
              <div className={clsx('flex', 'items-center', 'gap-3', 'px-3', 'py-2', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                <input type="text" placeholder="Venue / Brand Name *" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40')} />
              </div>

              {/* Contact Name */}
              <div className={clsx('flex', 'items-center', 'gap-3', 'px-3', 'py-2', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <input type="text" placeholder="Contact Name *" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40')} />
              </div>

              {/* Email */}
              <div className={clsx('flex', 'items-center', 'gap-3', 'px-3', 'py-2', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <input type="email" placeholder="Email *" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40')} />
              </div>

              {/* Phone */}
              <div className={clsx('flex', 'items-center', 'gap-3', 'px-3', 'py-2', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <input type="tel" placeholder="Phone *" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40')} />
              </div>

              {/* City + Venue Type (side by side) */}
              <div className={clsx('grid', 'grid-cols-2', 'gap-2')}>
                {/* City */}
                <div className={clsx('flex', 'items-center', 'gap-3', 'px-3', 'py-2', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                  <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <input type="text" placeholder="City *" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40')} />
                </div>

                {/* Venue Type Dropdown */}
                <div 
                  className={clsx('flex', 'items-center', 'gap-2', 'px-3', 'py-2', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'relative', 'cursor-pointer', 'select-none')}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                  <div className={clsx('flex-1', 'font-inter', 'text-sm', 'truncate', venueType ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40')}>
                    {venueType || 'Venue Type *'}
                  </div>
                  <svg className={clsx('w-3.5', 'h-3.5', 'text-[#1A1A1A]/40', 'transition-transform', 'shrink-0', isDropdownOpen ? 'rotate-180' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  
                  {isDropdownOpen && (
                    <div className={clsx('absolute', 'top-full', 'left-0', 'w-full', 'mt-1', 'bg-[#F2EAE0]', 'border', 'border-[#1A1A1A]/10', 'rounded-lg', 'shadow-xl', 'z-50', 'overflow-hidden')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                      {venueOptions.map((option) => (
                        <div 
                          key={option}
                          onClick={(e) => { e.stopPropagation(); setVenueType(option); setIsDropdownOpen(false); }}
                          className={clsx('px-4', 'py-2', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'hover:bg-[#1A1A1A]/10', 'transition-colors')}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Website/Instagram + Number of Locations (side by side) */}
              <div className={clsx('grid', 'grid-cols-2', 'gap-2')}>
                {/* Website or Instagram */}
                <div className={clsx('flex', 'items-center', 'gap-3', 'px-3', 'py-2', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                  <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  <input type="text" placeholder="Website or Instagram" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40')} />
                </div>

                {/* Number of Locations Dropdown */}
                <div 
                  className={clsx('flex', 'items-center', 'gap-2', 'px-3', 'py-2', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'relative', 'cursor-pointer', 'select-none')}
                  onClick={() => setIsLocDropdownOpen(!isLocDropdownOpen)}
                >
                  <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  <div className={clsx('flex-1', 'font-inter', 'text-sm', 'truncate', numLocations ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40')}>
                    {numLocations || 'Number of Locations'}
                  </div>
                  <svg className={clsx('w-3.5', 'h-3.5', 'text-[#1A1A1A]/40', 'transition-transform', 'shrink-0', isLocDropdownOpen ? 'rotate-180' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  
                  {isLocDropdownOpen && (
                    <div className={clsx('absolute', 'top-full', 'left-0', 'w-full', 'mt-1', 'bg-[#F2EAE0]', 'border', 'border-[#1A1A1A]/10', 'rounded-lg', 'shadow-xl', 'z-50', 'overflow-hidden')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                      {locationOptions.map((option) => (
                        <div 
                          key={option}
                          onClick={(e) => { e.stopPropagation(); setNumLocations(option); setIsLocDropdownOpen(false); }}
                          className={clsx('px-4', 'py-2', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'hover:bg-[#1A1A1A]/10', 'transition-colors')}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Why are you interested? Textarea */}
              <div className={clsx('flex', 'gap-3', 'px-3', 'py-2', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'mt-0.5', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                <textarea rows={2} placeholder="Why are you interested? *" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40', 'resize-none')}></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                onClick={() => setIsModalOpen(false)}
                className={clsx('w-full', 'bg-[#1A1A1A]', 'text-white', 'py-3', 'mt-1', 'rounded-lg', 'font-inter', 'text-xs', 'font-bold', 'tracking-widest', 'uppercase', 'hover:bg-black', 'transition-colors')}
              >
                SEND INQUIRY
              </button>

              {/* Cancel Link */}
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className={clsx('w-full', 'text-center', 'mt-1', 'mb-1', 'font-inter', 'text-xs', 'font-semibold', 'underline', 'text-[#1A1A1A]/60', 'hover:text-black', 'transition-colors')}
              >
                Cancel
              </button>

            </form>

          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
