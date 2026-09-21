"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

const cities = [
  {
    id: 'toronto',
    name: 'TORONTO',
    venuesCount: 3,
    status: 'active',
    venues: [
      {
        id: 'drake',
        name: 'THE DRAKE HOTEL',
        address: '1150 Queen St W, Toronto, ON M6J 1J3',
        image: '/img1toronto.png'
      },
      {
        id: 'soho',
        name: 'SOHO HOUSE TORONTO',
        address: '113-123 Portland St, Toronto, ON M5V 2M5',
        image: '/img2toronto.png'
      },
      {
        id: 'ace',
        name: 'ACE HOTEL TORONTO',
        address: '51 Camden St, Toronto, ON M5V 1V2',
        image: '/img3toronto.png'
      }
    ]
  },
  {
    id: 'miami',
    name: 'MIAMI',
    venuesCount: 4,
    status: 'active',
    venues: [
      {
        id: 'miami1',
        name: 'FREEHOLD MIAMI',
        address: '2219 NW 2nd Ave, Miami, FL 33127',
        image: '/img1miami.png'
      },
      {
        id: 'miami2',
        name: 'SOHO BEACH HOUSE',
        address: '4385 Collins Ave, Miami Beach, FL 33140',
        image: '/img2miami.png'
      },
      {
        id: 'miami3',
        name: 'THE STANDARD SPA',
        address: '40 Island Ave, Miami Beach, FL 33139',
        image: '/img3miami.png'
      },
      {
        id: 'miami4',
        name: 'GITANO MIAMI',
        address: '3500 Collins Ave, Miami Beach, FL 33140',
        image: '/img4miami.png'
      }
    ]
  },
  {
    id: 'la',
    name: 'LOS ANGELES',
    status: 'coming_soon',
    venues: []
  },
  {
    id: 'chicago',
    name: 'CHICAGO',
    status: 'coming_soon',
    venues: []
  }
];

export default function OurLocations() {
  const [openCity, setOpenCity] = useState('toronto');

  const toggleCity = (cityId) => {
    setOpenCity(openCity === cityId ? null : cityId);
  };

  return (
    <section id="locations" className={clsx('w-full', 'py-8', 'md:py-10', 'relative', 'z-10', 'bg-cream')} style={{ backgroundImage: "url('/bg2locations.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={clsx('max-w-[1200px]', 'mx-auto', 'px-4', 'lg:px-8', 'flex', 'flex-col', 'items-center')}>
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-4 md:mb-10 w-full">
          <div className="flex items-center w-full justify-center gap-4 md:gap-6 mb-1 md:mb-2">
            <div className="flex-1 h-px bg-[#1A1A1A]/30"></div>
            <h2 className={clsx('font-anton', 'text-3xl', 'md:text-5xl', 'uppercase', 'text-[#1A1A1A]')}>
              OUR LOCATIONS
            </h2>
            <div className="flex-1 h-px bg-[#1A1A1A]/30"></div>
          </div>
          <p className={clsx('font-inter', 'text-[11px]', 'md:text-base', 'text-[#1A1A1A]/80')}>
            Find a Memory Club booth near you.
          </p>
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col gap-2 md:gap-3">
          {cities.map((city) => (
            <div key={city.id} className="w-full flex flex-col border border-[#1A1A1A]/20 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300">
              
              {/* Accordion Header */}
              <button 
                onClick={() => city.status === 'active' && toggleCity(city.id)}
                className={clsx(
                  'w-full flex items-center justify-between py-3 md:py-5 px-4 md:px-6 transition-colors',
                  city.status === 'active' ? 'hover:bg-black/5 cursor-pointer' : 'opacity-70 cursor-default'
                )}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-[#9C382A]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span className={clsx('font-anton', 'text-xl', 'md:text-3xl', 'text-[#1A1A1A]', 'mt-1')}>{city.name}</span>
                </div>
                
                <div className="flex items-center gap-3 text-[#1A1A1A]/80">
                  {city.status === 'active' ? (
                    <span className={clsx('font-inter', 'text-[10px]', 'md:text-xs', 'font-medium', 'uppercase', 'tracking-widest')}>
                      {city.venuesCount} VENUES
                    </span>
                  ) : (
                    <span className={clsx('font-inter', 'text-[10px]', 'md:text-xs', 'font-medium', 'uppercase', 'tracking-widest')}>
                      COMING SOON
                    </span>
                  )}
                  {city.status === 'active' ? (
                    <svg className={clsx("w-5 h-5 transition-transform duration-300", openCity === city.id ? "rotate-180" : "")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                  ) : (
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <div 
                className={clsx(
                  'transition-all duration-500 ease-in-out',
                  openCity === city.id ? 'max-h-[2000px] opacity-100 border-t border-[#1A1A1A]/10' : 'max-h-0 opacity-0 border-transparent'
                )}
              >
                {city.venues.length > 0 && (
                   <div className={clsx(
                     "p-3 md:p-6 gap-3 md:gap-4",
                     city.venues.length === 3 
                       ? "flex flex-col md:flex-row md:flex-wrap md:justify-center" 
                       : "flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                   )}>
                     {city.venues.map((venue) => (
                       <div key={venue.id} className={clsx(
                         "flex flex-row md:flex-col p-3 md:p-4 border border-[#1A1A1A]/20 bg-white/30 rounded shadow-sm hover:shadow-md transition-shadow",
                         city.venues.length === 3 ? "w-full md:flex-1 md:min-w-[280px] md:max-w-[320px]" : "w-full"
                       )}>
                         {/* Image on left for mobile, top for desktop */}
                         <div className="w-24 h-24 md:w-full md:h-auto md:aspect-[16/9] shrink-0 mr-3 md:mr-0 md:mb-4 relative rounded overflow-hidden border border-[#1A1A1A]/20">
                            <Image src={venue.image} alt={venue.name} fill className="object-cover" />
                         </div>
                         
                         {/* Content on right for mobile, bottom for desktop */}
                         <div className="flex flex-col flex-1 justify-center md:justify-start">
                           <h4 className="font-anton text-lg md:text-[22px] leading-tight text-[#1A1A1A] mb-1">{venue.name}</h4>
                           <p className="font-inter text-[10px] md:text-xs text-[#1A1A1A]/80 mb-2 md:mb-5 leading-relaxed flex-1">{venue.address}</p>
                           <a href="#" className="font-inter text-[9px] md:text-[10px] font-bold text-[#1A1A1A] uppercase tracking-[0.2em] border-b border-[#1A1A1A] pb-0.5 w-fit hover:text-[#9C382A] hover:border-[#9C382A] transition-colors mt-auto md:mt-0">
                             VIEW DETAILS &rarr;
                           </a>
                         </div>
                       </div>
                     ))}
                   </div>
                )}
                {city.venues.length === 0 && city.status === 'active' && (
                  <div className="w-full text-center p-8 text-gray-500 font-inter text-sm">More details coming soon.</div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
