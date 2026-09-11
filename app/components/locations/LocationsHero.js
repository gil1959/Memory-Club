import clsx from "clsx";
import Image from "next/image";

export default function LocationsHero() {
  return (
    <section className={clsx('relative', 'w-full', 'bg-cream-dark', 'overflow-hidden', 'pt-24', 'md:pt-20', 'pb-0', 'md:pb-0', 'lg:max-h-[1000px]', 'xl:max-h-[1000px]')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      
      <div className={clsx('max-w-[1400px]', 'mx-auto', 'px-6', 'lg:px-12', 'w-full', 'flex', 'flex-col', 'lg:flex-row', 'items-center', 'gap-10', 'lg:gap-8')}>
        
        {/* Left Content */}
        <div className={clsx('w-full', 'lg:w-[50%]', 'flex', 'flex-col', 'gap-4', 'lg:gap-6', 'relative', 'z-10', 'lg:translate-x-4')}>
          <div className={clsx('font-caveat', 'text-2xl', 'md:text-3xl', 'text-[#3D3530]', '-rotate-6', 'flex', 'flex-col', 'gap-1', 'mb-2', '-translate-y-8')}>
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

          {/* Actual Polaroids */}
          <div className={clsx('relative', 'w-full', 'h-[250px]', 'md:h-[350px]', 'mt-8', 'opacity-90')}>
            {/* Polaroid 1 */}
            <div className={clsx('absolute', 'left-0', '-top-6', 'w-40', 'md:w-68', 'drop-shadow-xl', '-rotate-10', 'z-10')}>
              <Image src="/img1locations.png" alt="Memory Club Venue" width={300} height={400} className={clsx('w-full', 'h-auto')} />
            </div>
            {/* Polaroid 2 */}
            <div className={clsx('absolute', 'left-32', 'md:left-60', '-top-10', 'w-32', 'md:w-48', 'drop-shadow-xl', 'rotate-3', 'z-20')}>
              <Image src="/img2locations.png" alt="Memory Club Photobooth Strip" width={250} height={500} className={clsx('w-full', 'h-auto')} />
            </div>
            
            {/* MC Stamp */}
            <div className={clsx('absolute', 'left-56', 'md:left-90', 'top-32', 'md:top-56', 'w-20', 'md:w-28', 'rotate-12', 'z-30', 'opacity-80')}>
               <Image src="/mc.png" alt="Memory Club Stamp" width={150} height={150} className={clsx('w-full', 'h-auto')} />
            </div>
          </div>
        </div>

        {/* Right Content - Vintage Map */}
        <div className={clsx('w-full', 'lg:w-[100%]', 'h-[400px]', 'md:h-[600px]', 'lg:h-[1000px]', 'relative', 'mt-10','translate-x-13', 'lg:mt-0', 'flex', 'justify-center', 'items-center','-translate-y-35', 'drop-shadow-2xl')}>
           <Image 
             src="/mapslocationpagehero.png" 
             alt="Memory Club Locations Map" 
             fill 
             className={clsx('object-contain', 'object-right')}
             sizes="(max-width: 1024px) 100vw, 55vw"
           />
        </div>

      </div>
    </section>
  );
}
