"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export default function CantFindCity() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [venueType, setVenueType] = useState('');
  
  const venueOptions = ['Bar', 'Hotel', 'Restaurant', 'Event Space', 'Other'];

  return (
    <section className={clsx('w-full', 'bg-cream', 'py-0', 'md:py-0', 'relative', 'overflow-hidden', 'border-t', 'border-[#1A1A1A]/20')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={clsx('max-w-[1200px]', 'mx-auto', 'px-6', 'lg:px-12', 'flex', 'flex-col', 'md:flex-row', 'items-center', 'gap-12', 'md:gap-20')}>
        
        {/* Left: Map Piece */}
        <div className={clsx('w-full', 'md:w-[45%]', 'relative', 'flex', 'justify-center', 'items-center', '-my-10', 'md:-my-20', 'lg:-my-15')}>
           <div className={clsx('relative', 'w-full', 'h-[300px]', 'md:h-[450px]', 'scale-125', 'translate-x-0', 'translate-y-0')}>
              <Image 
                src="/maps2locations.png" 
                alt="Map Background" 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
           </div>
        </div>

        {/* Right: Text Content */}
        <div className={clsx('w-full', 'md:w-[55%]', 'flex', 'flex-col', 'gap-3')}>
          <h2 className={clsx('font-anton', 'text-4xl', 'md:text-5xl', 'uppercase', 'text-[#1A1A1A]', 'leading-none', 'tracking-wide')}>
            CAN'T FIND YOUR CITY?
          </h2>
          
          <div className={clsx('flex', 'flex-col', 'w-fit')}>
            <p className={clsx('font-caveat', 'text-3xl', 'md:text-4xl', 'text-[#3D3530]', 'mb-1', 'pl-1')}>
              More locations are coming.
            </p>
            <div className={clsx('relative', 'w-48', 'h-3', '-mt-1', 'ml-2')}>
              <Image src="/line2.png" alt="line" fill className={clsx('object-contain', 'object-left')} />
            </div>
          </div>
          
          <p className={clsx('font-inter', 'text-sm', 'text-[#1A1A1A]/80', 'leading-relaxed', 'max-w-[450px]', 'mt-4', 'mb-2')}>
            We're always growing and would love your input.<br/>Suggest a city or venue and help us bring the<br/>Memory Club experience to more places.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className={clsx('w-fit', 'bg-[#1A1A1A]', 'text-[#EAE0D5]', 'px-8', 'py-3.5', 'mt-2', 'rounded-md', 'font-inter', 'text-xs', 'font-bold', 'tracking-widest', 'uppercase', 'hover:bg-[#2C2520]', 'transition-colors')}
          >
            SUGGEST A LOCATION
          </button>
        </div>

      </div>

      {/* Suggest Location Modal */}
      {isModalOpen && (
        <div className={clsx('fixed', 'inset-0', 'z-[9999]', 'flex', 'justify-center', 'bg-black/60', 'backdrop-blur-sm', 'p-4', 'items-start', 'pt-20', 'md:pt-28')}>
          <div className={clsx('relative', 'w-full', 'max-w-[450px]', 'rounded-xl', 'shadow-2xl', 'p-5', 'md:p-6', 'flex', 'flex-col', 'max-h-[90vh]', 'overflow-y-auto')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className={clsx('absolute', 'top-5', 'right-5', 'text-gray-500', 'hover:text-black', 'transition-colors')}
            >
              <svg className={clsx('w-5', 'h-5')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Header */}
            <div className={clsx('w-full', 'text-center', 'mb-1', 'mt-2')}>
              <h3 className={clsx('font-anton', 'text-2xl', 'md:text-[28px]', 'uppercase', 'tracking-wide', 'text-[#1A1A1A]')}>SUGGEST A LOCATION</h3>
              <p className={clsx('font-inter', 'text-xs', 'text-[#1A1A1A]/70', 'mt-1')}>Know a good place? Tell us where we should go next.</p>
            </div>

            {/* Divider with heart */}
            <div className={clsx('flex', 'items-center', 'justify-center', 'gap-3', 'my-5')}>
              <div className={clsx('w-8', 'h-px', 'bg-[#D27B5E]')}></div>
              <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <div className={clsx('w-8', 'h-px', 'bg-[#D27B5E]')}></div>
            </div>

            {/* Form */}
            <form className={clsx('flex', 'flex-col', 'gap-2.5')} onSubmit={(e) => e.preventDefault()}>
              
              {/* City Input */}
              <div className={clsx('flex', 'items-center', 'gap-3', 'px-4', 'py-2.5', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <input type="text" placeholder="City" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40')} />
              </div>

              {/* Venue Name Input */}
              <div className={clsx('flex', 'items-center', 'gap-3', 'px-4', 'py-2.5', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                <input type="text" placeholder="Venue Name" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40')} />
              </div>

              {/* Venue Type Dropdown */}
              <div 
                className={clsx('flex', 'items-center', 'gap-3', 'px-4', 'py-2.5', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors', 'relative', 'cursor-pointer', 'select-none')}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                
                <div className={clsx('w-full', 'font-inter', 'text-sm', venueType ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40')}>
                  {venueType || 'Venue Type'}
                </div>
                
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/40', 'transition-transform', isDropdownOpen ? 'rotate-180' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

                {/* Custom Dropdown Menu */}
                {isDropdownOpen && (
                  <div className={clsx('absolute', 'top-full', 'left-0', 'w-full', 'mt-1', 'bg-[#F2EAE0]', 'border', 'border-[#1A1A1A]/10', 'rounded-lg', 'shadow-xl', 'z-50', 'overflow-hidden')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    {venueOptions.map((option) => (
                      <div 
                        key={option}
                        onClick={(e) => {
                          e.stopPropagation();
                          setVenueType(option);
                          setIsDropdownOpen(false);
                        }}
                        className={clsx('px-4', 'py-3', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'hover:bg-[#1A1A1A]/10', 'transition-colors')}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Venue Type Input (Conditionally Rendered) */}
              {venueType === 'Other' && (
                <div className={clsx('flex', 'items-center', 'gap-3', 'px-4', 'py-2.5', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                  <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  <input type="text" placeholder="Please specify venue type" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40')} />
                </div>
              )}

              {/* Why this spot Textarea */}
              <div className={clsx('flex', 'gap-3', 'px-4', 'py-2.5', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50', 'mt-0.5', 'shrink-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                <textarea rows={2} placeholder="Why this spot?" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40', 'resize-none')}></textarea>
              </div>

              {/* Email Input */}
              <div className={clsx('flex', 'items-center', 'gap-3', 'px-4', 'py-2.5', 'bg-transparent', 'border', 'border-[#1A1A1A]/20', 'rounded-lg', 'focus-within:border-[#1A1A1A]/50', 'transition-colors')}>
                <svg className={clsx('w-4', 'h-4', 'text-[#1A1A1A]/50')} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <input type="email" placeholder="Email (optional)" className={clsx('w-full', 'bg-transparent', 'outline-none', 'font-inter', 'text-sm', 'text-[#1A1A1A]', 'placeholder:text-[#1A1A1A]/40')} />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                onClick={() => setIsModalOpen(false)}
                className={clsx('w-full', 'bg-[#1A1A1A]', 'text-white', 'py-4', 'mt-2', 'rounded-lg', 'font-inter', 'text-xs', 'font-bold', 'tracking-widest', 'uppercase', 'hover:bg-black', 'transition-colors')}
              >
                SEND SUGGESTION
              </button>

              {/* Cancel Link */}
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className={clsx('w-full', 'text-center', 'mt-2', 'font-inter', 'text-xs', 'font-semibold', 'underline', 'text-[#1A1A1A]/60', 'hover:text-black', 'transition-colors')}
              >
                Cancel
              </button>

            </form>

          </div>
        </div>
      )}
    </section>
  );
}
