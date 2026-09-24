import clsx from "clsx";
import Image from "next/image";

export default function LocationsHero() {
  const cities = [
    {
      id: "toronto",
      name: "TORONTO",
      accentColor: "#2C5E7A",
      image: "/canada.png",
      rotation: "-rotate-2",
    },
    {
      id: "miami",
      name: "MIAMI",
      accentColor: "#B84E34",
      image: "/florida.png",
      rotation: "rotate-2",
      hasStamp: true
    },
    {
      id: "montreal",
      name: "MONTREAL",
      accentColor: "#1F5257",
      image: "/montreal.png",
      rotation: "-rotate-1",
    },
    {
      id: "new-york",
      name: "NEW YORK",
      accentColor: "#A2412B",
      image: "/newyork.png",
      rotation: "rotate-3",
    },
  ];

  return (
    <section className={clsx('relative', 'w-full', 'bg-cream-dark', 'overflow-hidden', 'pt-28', 'lg:pt-20', 'pb-0', 'lg:pb-0')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      
      <div className={clsx('w-full', 'flex', 'flex-col', 'lg:flex-row', 'items-center', 'lg:items-stretch', 'gap-6', 'lg:gap-0')}>
        
        {/* Left Content */}
        <div className={clsx('w-full', 'lg:w-[45%]', 'flex', 'flex-col', 'items-start', 'text-left', 'gap-4', 'lg:gap-6', 'relative', 'z-10', 'px-6', 'lg:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]', 'lg:pr-8', 'lg:py-16')}>
          <div className={clsx('hidden', 'md:flex', 'font-caveat', 'text-xl', 'md:text-3xl', 'text-[#3D3530]', '-rotate-6', 'flex-col', 'items-start', 'gap-1', 'mb-0', 'lg:mb-2', '-translate-y-2', 'lg:-translate-y-6', 'pl-2', 'md:pl-0')}>
            <span className="leading-tight">Great moments are</span>
            <span className={clsx('leading-tight', 'flex', 'items-center', 'gap-2', '-rotate-3', '-translate-x-2')}>
              closer than you think.
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </span>
          </div>

          <h1 className={clsx('font-anton', 'text-[4.2rem]', 'md:text-7xl', 'lg:text-[6rem]', 'uppercase', 'leading-[1.05]', 'tracking-tight', 'text-[#1A1A1A]', 'whitespace-nowrap')}>
            GOOD TIMES,<br />PINNED.
          </h1>

          <p className={clsx('font-inter', 'text-[14px]', 'md:text-[17px]', 'text-[#1A1A1A]/80', 'leading-relaxed', 'max-w-[340px]', 'md:max-w-[420px]')}>
            Memory Club booths are in the places you love—bars, hotels, restaurants, and events across North America. Find a location near you.
          </p>

          <a href="#locations" className={clsx('w-fit', 'mt-1', 'lg:mt-2', 'bg-[#1A1A1A]', 'text-[#EAE0D5]', 'px-6', 'lg:px-8', 'py-2.5', 'lg:py-3.5', 'rounded-sm', 'font-inter', 'text-[10px]', 'lg:text-xs', 'font-bold', 'tracking-[0.2em]', 'uppercase', 'hover:bg-[#2C2520]', 'transition-colors')}>
            BROWSE CITIES
          </a>
        </div>

        {/* Right Content - Vintage Map flush to right edge */}
        <div className={clsx('w-full', 'lg:w-[50%]', 'relative', 'lg:ml-auto')}>
           
           {/* DESKTOP MAP */}
           <div className={clsx('hidden', 'md:block', 'w-full', 'h-[500px]', 'lg:h-[650px]', 'relative')}>
             <Image 
               src="/mapslocationpagehero.png" 
               alt="Memory Club Locations Map" 
               fill 
               className={clsx('object-contain', 'object-right')}
               sizes="(max-width: 1024px) 100vw, 50vw"
             />
           </div>

           {/* MOBILE 2x2 POLAROID GRID */}
           <div className={clsx('md:hidden', 'w-full', 'px-4', 'mt-8', 'mb-12')}>
             <div className={clsx('grid', 'grid-cols-2', 'gap-4', 'relative')}>
               {cities.map((city) => (
                 <div key={city.id} className={clsx('relative', 'w-full', 'aspect-[4/3]', city.rotation, 'shadow-md')}>
                   {/* Tape */}
                   {city.clipClass && (
                     <div className={clsx('absolute', city.clipClass, 'z-30')}>
                       <Image src="/clip.png" alt="tape" width={100} height={100} className="w-full h-auto drop-shadow-sm opacity-90" />
                     </div>
                   )}
                   
                   {/* Stamp for Miami */}
                   {city.hasStamp && (
                     <div className={clsx('absolute', 'top-2', '-right-6', 'w-16', 'z-30', 'rotate-[15deg]')}>
                       <Image src="/mc.png" alt="stamp" width={150} height={150} className="w-full h-auto drop-shadow-md" />
                     </div>
                   )}

                   {/* Photo (Behind the border) */}
                   <Image
                     src={city.image}
                     alt={city.name}
                     fill
                     className={clsx('object-cover', 'z-0')}
                   />
                   
                   {/* Border overlay (The frame) */}
                   <img 
                     src="/borderimg.png" 
                     alt="frame" 
                     className={clsx('absolute', 'inset-0', 'w-full', 'h-full', 'object-fill', 'pointer-events-none', 'z-10')} 
                   />

                   {/* City Name text overlay */}
                   <div className={clsx('absolute', 'inset-0', 'z-20', 'flex', 'flex-col', 'items-center', 'justify-center', '-translate-y-5', 'pointer-events-none')}>
                     <h3 
                       className={clsx('font-anton', 'text-xl', 'uppercase', 'tracking-wider', 'leading-none', 'text-center', 'drop-shadow-sm')}
                       style={{ color: city.accentColor, textShadow: '0 1px 2px rgba(255,255,255,0.6)' }}
                     >
                       {city.name}
                     </h3>
                   </div>
                 </div>
               ))}
             </div>
           </div>

        </div>

      </div>
    </section>
  );
}
