import Image from 'next/image';
import clsx from 'clsx';

export default function VenuesStory() {
  return (
    <section
      id="venues-story"
      className={clsx('relative', 'w-full', 'overflow-hidden')}
      style={{
        backgroundImage: "url('/bg3.png')",
        backgroundSize: "100% 115%",
        backgroundPosition: "bottom",
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
      <div className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'lg:px-10', 'pt-2', 'lg:pt-4', 'pb-8', 'lg:pb-12')}>
        
        <div className={clsx('flex', 'flex-col', '-mt-2', 'lg:-mt-4', 'relative', 'z-10')}>
          
          <div className={clsx('flex', 'flex-col', 'md:flex-row', 'md:items-start', 'justify-between', 'gap-3', 'w-full', 'mb-3', 'mt-3', 'md:mt-6')}>
            <div className={clsx('flex', 'items-end', 'gap-3', 'md:gap-4')}>
              <h2 className={clsx('font-anton', 'text-base', 'md:text-lg', 'uppercase', 'tracking-wide', 'text-[#EAE0D5]', 'leading-none', 'border-b', 'border-[#EAE0D5]', 'pb-0.5')}>
                FOUND IN GOOD PLACES
              </h2>
              <p className={clsx('font-playfair', 'italic', 'text-[9px]', 'md:text-[10px]', 'text-[#EAE0D5]/60', 'tracking-wide', 'pb-0')}>
                Real people. Real moments. Real venues.
              </p>
            </div>

            <div className={clsx('flex', 'flex-col', 'items-end', 'gap-1')}>
              <div className={clsx('flex', 'items-center', 'gap-3')}>
                <span className={clsx('font-inter', 'text-[8px]', 'md:text-[9px]', 'uppercase', 'tracking-[0.15em]', 'text-[#EAE0D5]/60')}>
                  FOLLOW ALONG
                </span>
                <span className={clsx('font-inter', 'text-[10px]', 'md:text-xs', 'tracking-widest', 'uppercase', 'text-[#EAE0D5]')}>
                  @MEMORYCLUB.CO
                </span>
              </div>
              
              <div className={clsx('flex', 'gap-4', 'text-[#EAE0D5]', 'mt-1')}>
                {/* To update the social media redirect links, modify the 'href' attribute for each anchor tag below. */}
                <a href="#" aria-label="Instagram" className={clsx('hover:text-white', 'transition-colors')}>
                  <svg className={clsx('w-5', 'h-5', 'md:w-6', 'md:h-6')} fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
                <a href="#" aria-label="TikTok" className={clsx('hover:text-white', 'transition-colors')}>
                  <svg className={clsx('w-5', 'h-5', 'md:w-6', 'md:h-6')} fill="currentColor" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                </a>
                <a href="#" aria-label="Pinterest" className={clsx('hover:text-white', 'transition-colors')}>
                  <svg className={clsx('w-5', 'h-5', 'md:w-6', 'md:h-6')} fill="currentColor" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 62.8-33.9 108.4-80.6 108.4-25.8 0-44.9-21.4-38.8-47.5 7.3-31.5 22-65.7 22-88.6 0-20.5-11-37.6-33.9-37.6-27.1 0-48.9 28.1-48.9 65.7 0 24 8.1 40.5 8.1 40.5s-27.1 115-32.1 136.2c-5.8 24.6-2.3 58.7-1.4 69.1C55.6 470 0 370 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className={clsx('w-full', 'relative', 'flex', 'flex-wrap', 'md:flex-nowrap', 'items-center', 'justify-center', 'gap-4', 'md:gap-0', 'mb-4', 'md:mb-2')} data-aos="zoom-in" data-aos-duration="1200">
            <div className={clsx('relative', 'shrink-0', 'z-10', 'rotate-[-8deg]', 'translate-x-[10px]', 'md:translate-x-[-300px]', 'translate-y-0', 'scale-110', 'md:scale-130', 'hover:z-50')}>
              {/* To change the first photo, update the 'src' attribute below. */}
              <img src="/img1section4.png" alt="Photo 1" className={clsx('w-[50px]', 'md:w-[120px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-10', '-ml-3', 'md:-ml-8', 'mt-3', 'rotate-[2deg]', 'translate-x-[-30px]', 'md:translate-x-[-160px]', 'translate-y-16', 'md:translate-y-0', 'scale-150', 'hover:z-50')}>
              <div className={clsx('absolute', '-top-2', 'left-1/2', '-translate-x-1/2', 'w-6', 'md:w-12', 'h-2', 'md:h-4', 'bg-tape', 'rotate-[2deg]', 'z-20')} />
              {/* To change the second photo, update the 'src' attribute below. */}
              <img src="/img2section4.png" alt="Photo 2" className={clsx('w-[50px]', 'md:w-[120px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-20', '-ml-3', 'md:-ml-8', 'rotate-[-5deg]', 'translate-x-[-30px]', 'md:translate-x-[-50px]', 'translate-y-0', 'scale-100', 'hover:z-50')}>
              {/* To change the third photo, update the 'src' attribute below. */}
              <img src="/img3section4.png" alt="Photo 3" className={clsx('w-[50px]', 'md:w-[120px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-30', '-ml-3', 'md:-ml-8', 'mt-2', 'rotate-[-5deg]', 'translate-x-[-2px]', 'md:translate-x-[-5px]', 'translate-y-[-10px]', 'md:translate-y-[-15px]', 'scale-130', 'hover:z-50')}>
              <div className={clsx('absolute', '-top-1.5', 'left-1/2', '-translate-x-1/2', 'w-5', 'md:w-10', 'h-2', 'md:h-4', 'bg-tape', 'rotate-[3deg]', 'z-20')} />
              {/* To change the fourth photo, update the 'src' attribute below. */}
              <img src="/img4section4.png" alt="Photo 4" className={clsx('w-[40px]', 'md:w-[90px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-10', '-ml-3', 'md:-ml-8', 'rotate-[-4deg]', 'translate-x-8', 'md:translate-x-20', 'translate-y-0', 'scale-150', 'hover:z-50')}>
              {/* To change the fifth photo, update the 'src' attribute below. */}
              <img src="/img5section4.png" alt="Photo 5" className={clsx('w-[50px]', 'md:w-[120px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-20', '-ml-3', 'md:-ml-8', 'mt-2', 'md:mt-4', 'rotate-[10deg]', 'translate-x-20', 'md:translate-x-50', 'translate-y-0', 'scale-180', 'hover:z-50')}>
              {/* To change the sixth photo, update the 'src' attribute below. */}
              <img src="/img6section4.png" alt="Photo 6" className={clsx('w-[40px]', 'md:w-[90px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
            
            <div className={clsx('relative', 'shrink-0', 'z-5', '-ml-3', 'md:-ml-6', 'mt-1', 'rotate-[13deg]', 'translate-x-28', 'md:translate-x-70', 'translate-y-10', 'md:translate-y-15', 'scale-130', 'hover:z-50')}>
              {/* To change the seventh photo, update the 'src' attribute below. */}
              <img src="/img7section4.png" alt="Photo 7" className={clsx('w-[50px]', 'md:w-[120px]', 'h-auto', 'rounded-sm', 'shadow-md', 'transition-transform', 'duration-300', 'hover:scale-110', 'cursor-pointer')} />
            </div>
          </div>

          <div className={clsx('flex', 'flex-wrap', 'items-center', 'justify-center', 'md:justify-between', 'gap-x-4', 'md:gap-x-3', 'gap-y-6', 'md:gap-y-2', 'pt-4', 'md:pt-10', 'mt-4', 'md:mt-2', 'pb-2')} data-aos="fade-up" data-aos-duration="1000">
            <span className={clsx('font-inter', 'text-[10px]', 'md:text-xs', 'uppercase', 'tracking-[0.15em]', 'text-[#EAE0D5]/50', 'w-full', 'md:w-auto', 'text-center', 'md:text-left')}>
              YOU CAN FIND US AT
            </span>
            <span className={clsx('font-playfair', 'text-xs', 'md:text-sm', 'uppercase', 'tracking-wider', 'text-[#EAE0D5]', 'text-center', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer')}>
              THE DRAKE<br/>HOTEL
            </span>
            <span className={clsx('text-xs', 'md:text-sm', 'uppercase', 'tracking-wider', 'text-[#EAE0D5]', 'text-center', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer')} style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              SOHO<br/>HOUSE
            </span>
            
            <div className={clsx('flex', 'flex-col', 'items-center', 'justify-center', 'gap-0', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer')}>
              <span className={clsx('font-playfair', 'text-4xl', 'md:text-6xl', 'text-[#EAE0D5]', 'leading-none', 'font-black')}>1</span>
              <span className={clsx('font-inter', 'text-[5px]', 'md:text-[6px]', 'tracking-[0.25em]', 'uppercase', 'text-[#EAE0D5]', 'leading-none', '-mt-0.5')}>HOTEL</span>
            </div>

            <span className={clsx('font-anton', 'text-sm', 'md:text-base', 'tracking-widest', 'text-[#EAE0D5]', 'font-light', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer')} style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300 }}>
              ACE HOTEL
            </span>
            <span className={clsx('font-playfair', 'text-xs', 'md:text-sm', 'uppercase', 'tracking-[0.25em]', 'text-[#EAE0D5]', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer')}>
              THE WELL
            </span>
            <span className={clsx('text-xs', 'md:text-sm', 'uppercase', 'tracking-wider', 'text-[#EAE0D5]', 'text-center', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer')} style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              LOVERSLAND<br/>FESTIVAL
            </span>
            <span className={clsx('text-xs', 'md:text-sm', 'uppercase', 'tracking-wider', 'text-[#EAE0D5]', 'transition-all', 'duration-300', 'hover:text-white', 'hover:scale-110', 'cursor-pointer')} style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              &amp; MORE
            </span>
          </div>
        </div>

        <div className={clsx('mt-8', 'md:mt-12', 'mb-12', 'md:mb-20', 'flex', 'flex-col', 'lg:grid', 'lg:grid-cols-12', 'gap-10', 'lg:gap-12', 'items-center')} data-aos="fade-up" data-aos-duration="1200">
          
          <div className={clsx('lg:col-span-4', 'flex', 'justify-center', 'lg:justify-start')}>
            <div className={clsx('relative', 'rotate-[-4deg]')}>
              <div className={clsx('absolute', '-top-4', 'left-1/2', '-translate-x-1/2', 'w-24', 'md:w-32', 'h-6', 'md:h-8', 'bg-tape', 'rotate-[-2deg]', 'z-10')} />
              <div className={clsx('w-[240px]', 'md:w-[320px]')}>
                {/* To change the 'Our Story' polaroid image, update the 'src' attribute below. */}
                <Image
                  src="/img1section5.png"
                  alt="Our Story"
                  width={320}
                  height={400}
                  className={clsx('w-full', 'h-auto', 'rounded-sm')}
                />
              </div>
            </div>
          </div>

          <div className={clsx('lg:col-span-6', 'flex', 'flex-col', 'gap-6', 'text-[#131111]')}>
            <h2 
              className={clsx('font-playfair', 'text-xl', 'md:text-2xl', 'uppercase', 'tracking-wide', 'border-b', 'border-[#131111]/30', 'pb-1', 'inline-block', 'self-start')}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              OUR STORY
            </h2>
            <h3 
              className={clsx('font-playfair', 'text-2xl', 'md:text-3xl', 'font-bold', 'uppercase', 'tracking-wide', 'leading-snug')}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              THE WORLD NEEDS MORE REMEMBERED MEMORIES.
            </h3>
            <div className={clsx('flex', 'flex-col', 'gap-4', 'font-inter', 'text-sm', 'md:text-base', 'text-[#131111]/80', 'leading-relaxed')}>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                Life moves fast. Hold onto what matters.
              </p>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450">
                Not every night changes your life. But some do stay with you.
                <br />
                We make space for those moments so they don't disappear as quickly as they arrive.
              </p>
            </div>
          </div>

          <div className={clsx('lg:col-span-2', 'flex', 'justify-center', 'lg:justify-end')}>
            <div className={clsx('w-24', 'md:w-32')}>
              {/* To change the memory club stamp image, update the 'src' attribute below. */}
              <Image
                src="/mc.png"
                alt="Memory Club Stamp"
                width={150}
                height={150}
                className={clsx('w-full', 'h-auto', 'opacity-80')}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
