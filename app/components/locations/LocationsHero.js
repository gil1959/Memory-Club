import clsx from "clsx";
import Image from "next/image";

export default function LocationsHero() {
  return (
    <section className={clsx('relative', 'w-full', 'bg-cream-dark', 'overflow-hidden', 'pt-24', 'md:pt-20', 'pb-0', 'md:pb-0')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      
      <div className={clsx('w-full', 'flex', 'flex-col', 'lg:flex-row', 'items-center', 'lg:items-stretch', 'gap-10', 'lg:gap-0')}>
        
        {/* Left Content */}
        <div className={clsx('w-full', 'lg:w-[45%]', 'flex', 'flex-col', 'gap-4', 'lg:gap-6', 'relative', 'z-10', 'px-6', 'lg:pl-[max(2rem,calc((100vw-1400px)/2+3rem))]', 'lg:pr-8', 'lg:py-16')}>
          <div className={clsx('font-caveat', 'text-2xl', 'md:text-3xl', 'text-[#3D3530]', '-rotate-6', 'flex', 'flex-col', 'gap-1', 'mb-2', '-translate-y-6')}>
            <span className="leading-tight">Great moments are</span>
            <span className={clsx('leading-tight', 'flex', 'items-center', 'gap-2', '-rotate-3', '-translate-x-2')}>
              closer than you think.
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </span>
          </div>

          <h1 className={clsx('font-anton', 'text-6xl', 'md:text-7xl', 'lg:text-[5.5rem]', 'uppercase', 'leading-none', 'tracking-wider', 'text-[#1A1A1A]', 'whitespace-nowrap')}>
            GOOD TIMES,<br />PINNED.
          </h1>

          <p className={clsx('font-inter', 'text-sm', 'md:text-base', 'text-[#1A1A1A]/80', 'leading-relaxed', 'max-w-[400px]')}>
            Memory Club booths are in the places you love—bars, hotels, restaurants, and events across North America. Find a location near you.
          </p>

          <a href="#locations" className={clsx('w-fit', 'mt-2', 'bg-[#1A1A1A]', 'text-[#EAE0D5]', 'px-8', 'py-3.5', 'rounded-sm', 'font-inter', 'text-xs', 'font-bold', 'tracking-[0.2em]', 'uppercase', 'hover:bg-[#2C2520]', 'transition-colors')}>
            BROWSE CITIES
          </a>
        </div>

        {/* Right Content - Vintage Map flush to right edge */}
        <div className={clsx('w-full', 'lg:w-[50%]', 'h-[350px]', 'md:h-[500px]', 'lg:h-[650px]', 'relative', 'lg:ml-auto')}>
           <Image 
             src="/mapslocationpagehero.png" 
             alt="Memory Club Locations Map" 
             fill 
             className={clsx('object-contain', 'object-right')}
             sizes="(max-width: 1024px) 100vw, 50vw"
           />
        </div>

      </div>
    </section>
  );
}
