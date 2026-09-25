import Image from 'next/image';
import clsx from 'clsx';

const cities = [
  {
    id: "toronto",
    name: "TORONTO",
    region: "CANADA",
    accentColor: "#2C5E7A",
    image: "/canada.png",
    href: "#places",
    objectPosition: "center 30%",
  },
  {
    id: "miami",
    name: "MIAMI",
    region: "FLORIDA",
    accentColor: "#B84E34",
    image: "/florida.png",
    href: "#places",
    objectPosition: "center 30%",
  },
  {
    id: "montreal",
    name: "MONTREAL",
    region: "QUÉBEC",
    accentColor: "#1F5257",
    image: "/montreal.png",
    href: "#places",
    objectPosition: "center 30%",
  },
  {
    id: "new-york",
    name: "NEW YORK",
    region: "NEW YORK",
    accentColor: "#A2412B",
    image: "/newyork.png",
    href: "#places",
    objectPosition: "center 30%",
  },
];

export default function VenuesStory() {
  return (
    <section
      id="venues-story"
      className={clsx('relative', 'w-full', 'z-20')}
      style={{
        backgroundColor: "#EDE4D3",
      }}
    >
      <style>{`
        @media (max-width: 1049px) {
          #bg-dark-container {
            background-size: 100% 250% !important;
            background-position: top center !important;
          }
        }
      `}</style>
      <div 
        id="bg-dark-container"
        className={clsx('relative', 'w-full', 'h-[100svh]', 'min-[1050px]:h-auto', 'min-[1050px]:pb-90')}
        style={{
          backgroundImage: "url('/bg3.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={clsx('absolute', 'top-0', 'left-0', 'w-full', 'overflow-hidden', 'pointer-events-none')} style={{ height: '8px' }}>
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 8">
            <path d="M0,4 Q50,2 100,4 T200,4 T300,5 T400,3 T500,4 T600,4 T700,5 T800,3 T900,4 T1000,4" fill="none" stroke="#EAE0D5" strokeWidth="1" strokeOpacity="0.2" vectorEffect="non-scaling-stroke" />
            <path d="M0,5 Q75,5 150,3 T300,4 T450,6 T600,3 T750,5 T900,3 T1000,5" fill="none" stroke="#EAE0D5" strokeWidth="1" strokeOpacity="0.2" vectorEffect="non-scaling-stroke" />
            <path d="M0,3 Q100,5 200,3 T400,5 T600,4 T800,5 T1000,3" fill="none" stroke="#EAE0D5" strokeWidth="0.8" strokeOpacity="0.2" vectorEffect="non-scaling-stroke" />
            <path d="M0,4 L20,3 L50,5 L80,4 L120,5 L150,3 L200,4 L250,5 L280,3 L320,4 L400,5 L450,3 L500,4 L550,5 L600,3 L650,4 L700,5 L750,3 L800,4 L850,5 L900,3 L950,4 L1000,4" fill="none" stroke="#EAE0D5" strokeWidth="0.5" strokeOpacity="0.3" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className={clsx('flex', 'flex-col', 'h-full', 'max-w-7xl', 'mx-auto', 'px-6', 'pt-2', 'min-[1050px]:hidden')}>
          <div className={clsx('flex', 'flex-col', 'mt-4', 'relative', 'z-10')}>
            <div className={clsx('flex', 'flex-col', 'justify-between', 'gap-2', 'w-full', 'mb-2', 'mt-2')}>
              <div className={clsx('flex', 'flex-col', 'items-center', 'gap-1', 'text-center')}>
                <h2 className={clsx('font-anton', 'text-[1.4rem]', 'uppercase', 'tracking-wide', 'text-[#EAE0D5]', 'leading-[0.9]', 'pb-0.5')}>
                  FOUND IN GOOD PLACES
                </h2>
                <p className={clsx('font-playfair', 'italic', 'text-[14px]', 'font-semibold', 'text-[#EAE0D5]/60', 'tracking-wide', 'pb-0', 'mt-0.5')}>
                  Real people. Real moments. Real venues.
                </p>
              </div>
            </div>
          </div>
          
          <div className={clsx('w-full', 'relative', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-y-1', 'flex-1', 'mt-1', 'px-2', 'min-h-0')} data-aos="zoom-in" data-aos-duration="1200">
            <div className="flex w-full justify-center gap-2 items-center flex-1 min-h-0">
              <div className="h-full relative rotate-[-2deg] z-10"><img src="/img1section4.png" alt="Photo 1" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
              <div className="h-full relative rotate-[3deg] z-10 mt-1"><img src="/img2section4.png" alt="Photo 2" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
            </div>
            <div className="flex w-full justify-center gap-2 items-center flex-1 min-h-0">
              <div className="h-full relative rotate-[-4deg] z-20"><img src="/img3section4.png" alt="Photo 3" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
              <div className="h-full relative rotate-[2deg] z-10 mt-1"><img src="/img4section4.png" alt="Photo 4" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
            </div>
            <div className="flex w-full justify-center gap-1 items-center flex-1 min-h-0">
              <div className="h-full relative rotate-[5deg] z-10 mt-1"><img src="/img5section4.png" alt="Photo 5" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
              <div className="h-full relative rotate-[-3deg] z-20"><img src="/img6section4.png" alt="Photo 6" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
              <div className="h-full relative rotate-[2deg] z-10 mt-0.5"><img src="/img7section4.png" alt="Photo 7" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
            </div>
          </div>

          <div className={clsx('w-full', 'flex', 'flex-col', 'mt-auto', 'pb-4', 'px-2')} data-aos="fade-up" data-aos-duration="1000">
            <div className={clsx('flex', 'items-center', 'justify-center', 'gap-3', 'w-full', 'mb-3')}>
              <div className={clsx('h-[1px]', 'bg-[#EAE0D5]/30', 'flex-1', 'max-w-[80px]')}></div>
              <span className={clsx('font-inter', 'text-[8px]', 'uppercase', 'tracking-[0.15em]', 'text-[#EAE0D5]/50')}>
                FOR THE NIGHTS YOU'D SAVE
              </span>
              <div className={clsx('h-[1px]', 'bg-[#EAE0D5]/30', 'flex-1', 'max-w-[80px]')}></div>
            </div>
            <div className={clsx('flex', 'flex-wrap', 'items-center', 'justify-center', 'gap-x-3', 'gap-y-3', 'text-center', 'mb-2')}>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-[0.1em]', 'text-[#EAE0D5]', 'transition-all', 'duration-300')}>
                LAST-MINUTE PLANS
              </span>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-[0.1em]', 'text-[#EAE0D5]', 'transition-all', 'duration-300')}>
                GOOD OUTFITS
              </span>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-[0.1em]', 'text-[#EAE0D5]', 'transition-all', 'duration-300')}>
                AFTER DINNER
              </span>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-[0.1em]', 'text-[#EAE0D5]', 'transition-all', 'duration-300')}>
                THE IN-BETWEEN
              </span>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-[0.1em]', 'text-[#EAE0D5]', 'w-full', 'transition-all', 'duration-300')}>
                THINGS YOU DON'T WANT TO FORGET
              </span>
            </div>
            <div className={clsx('w-full', 'text-center')}>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-[0.1em]', 'text-white')}>&amp; MORE</span>
            </div>
          </div>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden min-[1050px]:block">
          {/* --- MOBILE VIEW --- */}
        <div className={clsx('flex', 'flex-col', 'justify-center', 'max-w-7xl', 'mx-auto', 'px-6', 'min-[1050px]:hidden')}>
          <div className={clsx('flex', 'flex-col', '-mt-2', 'relative', 'z-10')}>
            <div className={clsx('flex', 'flex-col', 'justify-between', 'gap-2', 'w-full', 'mb-2', 'mt-2')}>
              <div className={clsx('flex', 'flex-col', 'items-center', 'gap-1', 'text-center')}>
                <h2 className={clsx('font-anton', 'text-[1.7rem]', 'uppercase', 'tracking-wide', 'text-[#EAE0D5]', 'leading-[0.9]', 'pb-0.5')}>
                  FOUND IN GOOD PLACES
                </h2>
                <p className={clsx('font-playfair', 'italic', 'text-[14px]', 'font-semibold', 'text-[#EAE0D5]/60', 'tracking-wide', 'pb-0', 'mt-0.5')}>
                  Real people. Real moments. Real venues.
                </p>
              </div>
            </div>
          </div>
          
          <div className={clsx('w-full', 'relative', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-y-3', 'mt-4', 'mb-6', 'px-2')} data-aos="zoom-in" data-aos-duration="1200">
            <div className="flex w-full justify-center gap-3 items-center h-[15vh]">
              <div className="h-full relative rotate-[-2deg] z-10"><img src="/img1section4.png" alt="Photo 1" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
              <div className="h-full relative rotate-[3deg] z-10 mt-1"><img src="/img2section4.png" alt="Photo 2" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
            </div>
            <div className="flex w-full justify-center gap-3 items-center h-[15vh]">
              <div className="h-full relative rotate-[-4deg] z-20"><img src="/img3section4.png" alt="Photo 3" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
              <div className="h-full relative rotate-[2deg] z-10 mt-1"><img src="/img4section4.png" alt="Photo 4" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
            </div>
            <div className="flex w-full justify-center gap-2 items-center h-[13vh]">
              <div className="h-full relative rotate-[5deg] z-10 mt-1"><img src="/img5section4.png" alt="Photo 5" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
              <div className="h-full relative rotate-[-3deg] z-20"><img src="/img6section4.png" alt="Photo 6" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
              <div className="h-full relative rotate-[2deg] z-10 mt-0.5"><img src="/img7section4.png" alt="Photo 7" className="h-full w-auto object-contain drop-shadow-md cursor-pointer hover:scale-105 transition-transform" /></div>
            </div>
          </div>

          <div className={clsx('w-full', 'flex', 'flex-col', 'pb-4')} data-aos="fade-up" data-aos-duration="1000">
            <div className={clsx('flex', 'items-center', 'justify-center', 'gap-3', 'w-full', 'mb-3')}>
              <div className={clsx('h-[1px]', 'bg-[#EAE0D5]/30', 'flex-1', 'max-w-[80px]')}></div>
              <span className={clsx('font-inter', 'text-[8px]', 'uppercase', 'tracking-[0.15em]', 'text-[#EAE0D5]/50')}>
                YOU CAN FIND US AT
              </span>
              <div className={clsx('h-[1px]', 'bg-[#EAE0D5]/30', 'flex-1', 'max-w-[80px]')}></div>
            </div>
            <div className={clsx('grid', 'grid-cols-3', 'gap-y-4', 'gap-x-1', 'text-center', 'mb-3')}>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-widest', 'text-[#EAE0D5]', 'flex', 'items-center', 'justify-center', 'leading-relaxed')}>THE DRAKE<br/>HOTEL</span>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-widest', 'text-[#EAE0D5]', 'flex', 'items-center', 'justify-center', 'leading-relaxed')}>SOHO<br/>HOUSE</span>
              <span className={clsx('font-playfair', 'text-[20px]', 'uppercase', 'tracking-widest', 'text-[#EAE0D5]', 'flex', 'flex-col', 'items-center', 'justify-center', 'leading-none', 'font-normal')}>1<br/><span className={clsx('text-[6px]', 'tracking-[0.2em]', 'mt-1', 'text-[#EAE0D5]/80')}>HOTEL</span></span>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-widest', 'text-[#EAE0D5]', 'flex', 'items-center', 'justify-center', 'leading-relaxed')}>ACE HOTEL</span>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-widest', 'text-[#EAE0D5]', 'flex', 'items-center', 'justify-center', 'leading-relaxed')}>THE WELL</span>
              <span className={clsx('font-playfair', 'text-[8px]', 'uppercase', 'tracking-widest', 'text-[#EAE0D5]', 'flex', 'items-center', 'justify-center', 'leading-relaxed')}>LOVERSLAND<br/>FESTIVAL</span>
            </div>
            <div className={clsx('w-full', 'text-center')}>
              <span className={clsx('font-playfair', 'text-[9px]', 'uppercase', 'tracking-widest', 'text-[#EAE0D5]/70')}>&amp; MORE</span>
            </div>
          </div>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden min-[1050px]:block">
          <div className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'min-[1050px]:px-10', 'pt-2', 'min-[1050px]:pt-4')}>
        
        <div className={clsx('flex', 'flex-col', '-mt-2', 'min-[1050px]:-mt-4', 'relative', 'z-10')}>
          
          <div className={clsx('flex', 'flex-col', 'min-[1050px]:flex-row', 'min-[1050px]:items-start', 'justify-between', 'gap-3', 'w-full', 'mb-3', 'mt-3', 'min-[1050px]:mt-6')}>
            <div className={clsx('flex', 'items-end', 'gap-3', 'min-[1050px]:gap-4')}>
              <h2 className={clsx('font-anton', 'text-base', 'min-[1050px]:text-lg', 'uppercase', 'tracking-wide', 'text-[#EAE0D5]', 'leading-none', 'border-b', 'border-[#EAE0D5]', 'pb-0.5')}>
                FOUND IN GOOD PLACES
              </h2>
              <p className={clsx('font-playfair', 'italic', 'text-[16px]', 'min-[1050px]:text-[17px]', 'font-semibold', 'text-[#EAE0D5]/60', 'tracking-wide', 'pb-0')}>
                Real people. Real moments. Real venues.
              </p>
            </div>

            <div className={clsx('flex', 'flex-col', 'items-end', 'gap-1')}>
              <div className={clsx('flex', 'items-center', 'gap-3')}>
                <span className={clsx('font-inter', 'text-[8px]', 'min-[1050px]:text-[9px]', 'uppercase', 'tracking-[0.15em]', 'text-[#EAE0D5]/60')}>
                  FOLLOW ALONG
                </span>
                <span className={clsx('font-inter', 'text-[10px]', 'min-[1050px]:text-xs', 'tracking-widest', 'uppercase', 'text-[#EAE0D5]')}>
                  @YOURMEMORYCLUB
                </span>
              </div>
              
              <div className={clsx('flex', 'gap-4', 'text-[#EAE0D5]', 'mt-1')}>
                {/* To update the social media redirect links, modify the 'href' attribute for each anchor tag below. */}
                <a href="https://instagram.com/yourmemoryclub" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={clsx('hover:text-white', 'transition-colors')}>
                  <svg className={clsx('w-5', 'h-5', 'min-[1050px]:w-6', 'min-[1050px]:h-6')} fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
                <a href="#" aria-label="TikTok" className={clsx('hover:text-white', 'transition-colors')}>
                  <svg className={clsx('w-5', 'h-5', 'min-[1050px]:w-6', 'min-[1050px]:h-6')} fill="currentColor" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                </a>
                <a href="#" aria-label="Pinterest" className={clsx('hover:text-white', 'transition-colors')}>
                  <svg className={clsx('w-5', 'h-5', 'min-[1050px]:w-6', 'min-[1050px]:h-6')} fill="currentColor" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 62.8-33.9 108.4-80.6 108.4-25.8 0-44.9-21.4-38.8-47.5 7.3-31.5 22-65.7 22-88.6 0-20.5-11-37.6-33.9-37.6-27.1 0-48.9 28.1-48.9 65.7 0 24 8.1 40.5 8.1 40.5s-27.1 115-32.1 136.2c-5.8 24.6-2.3 58.7-1.4 69.1C55.6 470 0 370 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className={clsx('w-full', 'relative', 'flex', 'flex-wrap', 'min-[1050px]:flex-nowrap', 'items-center', 'justify-center', 'gap-2', 'min-[1050px]:gap-0', 'mb-4', 'min-[1050px]:mb-2', 'px-4', 'min-[1050px]:px-0')} data-aos="zoom-in" data-aos-duration="1200">
            <div className={clsx('relative', 'shrink-0', 'z-10', 'min-[1050px]:rotate-[-8deg]', 'min-[1050px]:translate-x-[-280px]', 'min-[1050px]:scale-130', 'hover:z-50', 'w-[22%]', 'min-[1050px]:w-auto')}>
              {/* To change the first photo, update the 'src' attribute below. */}
              <img src="/img1section4.png" alt="Photo 1" className={clsx('w-full', 'min-[1050px]:w-[120px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-10', 'min-[1050px]:-ml-8', 'min-[1050px]:mt-3', 'min-[1050px]:rotate-[2deg]', 'min-[1050px]:translate-x-[-160px]', 'min-[1050px]:scale-150', 'hover:z-50', 'w-[22%]', 'min-[1050px]:w-auto')}>
              {/* To change the second photo, update the 'src' attribute below. */}
              <img src="/img2section4.png" alt="Photo 2" className={clsx('w-full', 'min-[1050px]:w-[120px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-20', 'min-[1050px]:-ml-8', 'min-[1050px]:rotate-[-5deg]', 'min-[1050px]:translate-x-[-50px]', 'hover:z-50', 'w-[22%]', 'min-[1050px]:w-auto')}>
              {/* To change the third photo, update the 'src' attribute below. */}
              <img src="/img3section4.png" alt="Photo 3" className={clsx('w-full', 'min-[1050px]:w-[160px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-30', 'min-[1050px]:-ml-8', 'min-[1050px]:mt-2', 'min-[1050px]:rotate-[-5deg]', 'min-[1050px]:translate-x-[-5px]', 'min-[1050px]:translate-y-[-15px]', 'min-[1050px]:scale-130', 'hover:z-50', 'w-[22%]', 'min-[1050px]:w-auto')}>
              {/* To change the fourth photo, update the 'src' attribute below. */}
              <img src="/img4section4.png" alt="Photo 4" className={clsx('w-full', 'min-[1050px]:w-[120px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-10', 'min-[1050px]:-ml-8', 'min-[1050px]:rotate-[-4deg]', 'min-[1050px]:translate-x-20', 'min-[1050px]:scale-150', 'hover:z-50', 'w-[22%]', 'min-[1050px]:w-auto')}>
              {/* To change the fifth photo, update the 'src' attribute below. */}
              <img src="/img5section4.png" alt="Photo 5" className={clsx('w-full', 'min-[1050px]:w-[100px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-20', 'min-[1050px]:-ml-8', 'min-[1050px]:mt-4', 'min-[1050px]:rotate-[10deg]', 'min-[1050px]:translate-x-50', 'min-[1050px]:scale-180', 'hover:z-50', 'w-[22%]', 'min-[1050px]:w-auto')}>
              {/* To change the sixth photo, update the 'src' attribute below. */}
              <img src="/img6section4.png" alt="Photo 6" className={clsx('w-full', 'min-[1050px]:w-[80px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-5', '-mt-6', 'min-[1050px]:-mt-6', 'min-[1050px]:-ml-6', 'min-[1050px]:rotate-[13deg]', 'min-[1050px]:translate-x-70', 'min-[1050px]:translate-y-5', 'min-[1050px]:scale-130', 'hover:z-50', 'w-[22%]', 'min-[1050px]:w-auto')}>
              {/* To change the seventh photo, update the 'src' attribute below. */}
              <img src="/img7section4.png" alt="Photo 7" className={clsx('w-full', 'min-[1050px]:w-[110px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
          </div>

          <div className={clsx('flex', 'flex-wrap', 'min-[1050px]:flex-nowrap', 'items-center', 'justify-center', 'min-[1050px]:justify-between', 'gap-x-4', 'min-[1050px]:gap-x-2', 'gap-y-6', 'min-[1050px]:gap-y-2', 'pt-4', 'min-[1050px]:pt-10', 'mt-4', 'min-[1050px]:mt-2', 'pb-2', 'w-full')} data-aos="fade-up" data-aos-duration="1000">
            <span className={clsx('font-inter', 'text-[10px]', 'min-[1050px]:text-[11px]', 'uppercase', 'tracking-[0.15em]', 'text-[#EAE0D5]/50', 'w-full', 'min-[1050px]:w-auto', 'text-center', 'min-[1050px]:text-left', 'whitespace-nowrap')}>
              FOR THE NIGHTS YOU'D SAVE
            </span>
            <span className={clsx('font-playfair', 'text-[10px]', 'min-[1050px]:text-[11px]', 'uppercase', 'tracking-[0.1em]', 'text-[#EAE0D5]', 'text-center', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer', 'whitespace-nowrap')}>
              LAST-MINUTE PLANS
            </span>
            <span className={clsx('font-playfair', 'text-[10px]', 'min-[1050px]:text-[11px]', 'uppercase', 'tracking-[0.1em]', 'text-[#EAE0D5]', 'text-center', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer', 'whitespace-nowrap')}>
              GOOD OUTFITS
            </span>
            <span className={clsx('font-playfair', 'text-[10px]', 'min-[1050px]:text-[11px]', 'uppercase', 'tracking-[0.1em]', 'text-[#EAE0D5]', 'text-center', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer', 'whitespace-nowrap')}>
              AFTER DINNER
            </span>
            <span className={clsx('font-playfair', 'text-[10px]', 'min-[1050px]:text-[11px]', 'uppercase', 'tracking-[0.1em]', 'text-[#EAE0D5]', 'text-center', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer', 'whitespace-nowrap')}>
              THE IN-BETWEEN
            </span>
            <span className={clsx('font-playfair', 'text-[10px]', 'min-[1050px]:text-[11px]', 'uppercase', 'tracking-[0.1em]', 'text-[#EAE0D5]', 'text-center', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer', 'whitespace-nowrap')}>
              THINGS YOU DON'T WANT TO FORGET
            </span>
            <span className={clsx('font-playfair', 'text-[10px]', 'min-[1050px]:text-[11px]', 'uppercase', 'tracking-[0.1em]', 'text-white', 'text-center', 'transition-all', 'duration-300', 'hover:scale-110', 'cursor-pointer', 'whitespace-nowrap')}>
              &amp; MORE
            </span>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div className={clsx('max-w-7xl', 'mx-auto', 'px-0', 'md:px-3', 'min-[1050px]:px-10', 'relative', 'z-20', 'mt-4', 'min-[1050px]:-mt-87')}>

        {/* FIND A MEMORY CLUB NEAR YOU - 4 City Cards */}
        <div id="locations" className={clsx('mb-8', 'min-[1050px]:mb-14', 'scroll-mt-24')}>
          
          {/* Section Header with Horizontal Rule */}
          <div className={clsx('flex', 'flex-col', 'md:flex-row', 'md:items-center', 'justify-between', 'gap-1', 'md:gap-3', 'mb-4', 'lg:mb-8', 'px-4', 'md:px-0')} data-aos="fade-up" data-aos-duration="1000">
            <div className={clsx('flex', 'flex-col', 'md:flex-row', 'items-center', 'gap-2', 'md:gap-4', 'flex-1')}>
              <h2
                className={clsx('font-playfair', 'text-[22px]', 'sm:text-xl', 'lg:text-2xl', 'font-bold', 'uppercase', 'tracking-tight', 'text-[#1A1A1A]', 'underline', 'underline-offset-4', 'text-center', 'md:text-left')}
              >
                Find a Memory Club Near You
              </h2>
              <div className={clsx('hidden', 'md:block', 'flex-grow', 'border-t', 'border-[#1A1A1A]/30')} />
            </div>
            <span className={clsx('font-inter', 'text-[12px]', 'lg:text-xs', 'uppercase', 'tracking-[0.2em]', 'text-[#1A1A1A]/60', 'font-semibold', 'shrink-0', 'text-center', 'lg:text-left', 'w-full', 'lg:w-auto')}>
              More Cities Coming Soon.
            </span>
          </div>

          {/* 4 Vintage Postcard Cards Grid */}
          <div className={clsx('grid', 'grid-cols-2', 'lg:grid-cols-4', 'gap-1', 'md:gap-2', 'lg:gap-5', 'px-1', 'md:px-0')}>
            {cities.map((city, index) => (
              <div
                key={city.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 120}
                className={clsx('group', 'relative', 'w-full', 'aspect-[4/3]', 'cursor-pointer', 'overflow-hidden', 'transition-transform', 'duration-300', 'hover:-translate-y-1.5')}
              >
                {/* 1. Photo (Behind the border) */}
                <Image
                  src={city.image}
                  alt={`${city.name} ${city.region}`}
                  fill
                  className={clsx('object-cover', 'group-hover:scale-105', 'transition-transform', 'duration-500')}
                  style={{ 
                    objectPosition: city.objectPosition || 'center',
                  }}
                />
                
                {/* 2. Border overlay (The frame) */}
                <img 
                  src="/borderimg.png" 
                  alt="frame" 
                  className={clsx('absolute', 'inset-0', 'w-full', 'h-full', 'object-fill', 'pointer-events-none', 'z-10', 'group-hover:scale-105', 'transition-transform', 'duration-500')} 
                />

                {/* 3. City Name & Region text overlay */}
                <div className={clsx('absolute', 'inset-0', 'z-15', 'flex', 'flex-col', 'items-center', 'justify-center', '-translate-y-4', 'md:-translate-y-15', 'pointer-events-none')}>
                  <h3 
                    className={clsx('font-anton', 'text-2xl', 'sm:text-4xl', 'lg:text-3xl', 'xl:text-4xl', 'uppercase', 'tracking-wider', 'leading-none', 'text-center', 'drop-shadow-lg')}
                    style={{ color: city.accentColor, textShadow: '0 1px 3px rgba(255,255,255,0.4)' }}
                  >
                    {city.name}
                  </h3>
                  <span 
                    className={clsx('font-inter', 'text-[11px]', 'sm:text-sm', 'lg:text-xs', 'xl:text-sm', 'uppercase', 'tracking-[0.2em]', 'mt-1', 'text-center', 'drop-shadow-md')}
                    style={{ color: city.accentColor, textShadow: '0 1px 2px rgba(255,255,255,0.4)' }}
                  >
                    {city.region}
                  </span>
                </div>

                {/* 4. Stamp (Using mc.png) */}
                <img
                  src="/mc.png"
                  alt="MC Stamp"
                  className={clsx('absolute', 'top-2', 'right-2', 'md:top-4', 'md:right-4', 'w-[38px]', 'h-[38px]', 'md:w-11', 'md:h-11', 'lg:w-12', 'lg:h-12', 'shrink-0', 'rotate-[15deg]', 'opacity-60', 'group-hover:opacity-90', 'transition-opacity', 'pointer-events-none', 'z-20')}
                />

                {/* 5. View Locations link at bottom */}
                <div className={clsx('absolute', 'bottom-[6%]', 'left-0', 'w-full', 'flex', 'items-center', 'justify-center', 'z-20', 'pointer-events-none')}>
                  <span 
                    className={clsx('text-[9px]', 'sm:text-[12px]', 'lg:text-[13px]', 'tracking-[0.05em]', 'md:tracking-[0.1em]', 'uppercase', 'text-[#2C2520]', 'group-hover:text-black', 'flex', 'items-center', 'gap-1', 'md:gap-1.5', 'transition-colors')} 
                    style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600 }}
                  >
                    VIEW LOCATIONS
                    <span className={clsx('inline-block', 'transition-transform', 'duration-300', 'group-hover:translate-x-2', 'ml-1')}>
                      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6H23M23 6L18 1M23 6L18 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Quote Strip: Some moments are meant to outlive your camera roll */}
      <div
        id="story"
        className={clsx('relative', 'w-full', 'z-20')}
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Graph paper grid pattern on right side */}
        <div
          className={clsx('absolute', 'right-0', 'top-0', 'bottom-0', 'w-1/3', 'pointer-events-none', 'opacity-30')}
          style={{
            backgroundImage:
              "linear-gradient(rgba(44,37,32,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(44,37,32,0.12) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        <div className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'min-[1050px]:px-10', 'pt-6', 'pb-0', 'min-[1050px]:py-1', 'flex', 'flex-col-reverse', 'min-[1050px]:flex-row', 'items-center', 'justify-center', 'relative', 'z-10', 'gap-4', 'sm:gap-8', 'min-[1050px]:gap-20', 'min-[1050px]:gap-32', 'min-[1050px]:min-h-[180px]')}>
          {/* Left: Polaroid photo with tape */}
          <div className={clsx('shrink-0', 'translate-y-2', 'min-[1050px]:translate-y-3', 'relative', 'z-[-1]', '-rotate-3', 'hover:rotate-0', 'transition-transform', 'duration-300')}>
            <div className={clsx('w-24', 'min-[1050px]:w-58', 'drop-shadow-md')}>
              <Image
                src="/img1section5.png"
                alt="Moments"
                width={180}
                height={200}
                className={clsx('w-full', 'h-auto')}
              />
            </div>
          </div>

          {/* Center: Heart icon + Quote with Red Sketched Underline */}
          <div className={clsx('flex', 'flex-col', 'items-center', 'justify-center', 'text-center', 'px-2', 'sm:px-6', 'w-full', 'min-[1050px]:w-auto', 'shrink')}>
            <div className={clsx('mb-1.5', 'text-[#2C2520]')}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={clsx('inline-block', 'opacity-80', '-rotate-3')}
              >
                <path d="M11.5 20.5C5 15 3 11 3 7.5a4.5 4.5 0 0 1 8.5-2.5L12 6l.5-1a4.5 4.5 0 0 1 8.5 2.5c0 3.5-2 7.5-8.5 13" />
              </svg>
            </div>

            <div className={clsx('relative', 'inline-block')}>
              <p className={clsx('font-playfair', 'text-sm', 'min-[1050px]:text-[22px]', 'text-[#2C2520]', 'tracking-wide', 'font-medium')}>
                Some moments are meant to outlive your camera roll.
              </p>
              <svg
                className={clsx('absolute', '-bottom-1.5', 'left-1/2', '-translate-x-1/2', 'w-[75%]', 'min-[1050px]:w-[75%]', 'h-2', 'pointer-events-none')}
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M4,8 Q100,1 196,8"
                  fill="none"
                  stroke="#C14A36"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right: Dummy element for perfect centering */}
          <div className={clsx('hidden', 'min-[1050px]:block', 'w-24', 'min-[1050px]:w-58', 'shrink-0', 'pointer-events-none')} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
