"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import clsx from 'clsx';

export default function PartnerWithUsPage() {
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
          
          <button className="bg-[#A84A3B] text-white px-8 py-4 rounded font-inter text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#8e3f32] transition-colors flex items-center gap-4 shrink-0 group">
            PARTNER WITH US
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
