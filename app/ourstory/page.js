import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import clsx from "clsx";

export default function OurStory() {
  const bgStyle = {
    backgroundImage: "url('/bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <Navbar />
      <main className={clsx('flex-1', 'relative', 'bg-cream', 'overflow-x-hidden', 'pt-20')}>
        
        {/* Section 1: We Make Space */}
        <div style={bgStyle} className="w-full">
          <section className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'md:px-10', 'flex', 'flex-col', 'md:flex-row', 'items-center', 'justify-center', 'gap-10', 'md:gap-34', 'pt-4', 'md:pt-8', 'pb-12', 'md:pb-16', 'transform', 'md:-translate-x-10', 'md:-translate-x-20')}>
            <div className={clsx('w-full', 'md:w-auto', 'flex', 'flex-col', 'items-center', 'md:items-start')} data-aos="fade-right" data-aos-duration="1000">
              <h1 className={clsx('font-anton', 'text-5xl', 'md:text-6xl', 'md:text-[4.5rem]', 'uppercase', 'leading-[1.05]', 'tracking-wider', 'text-text-dark', 'text-center', 'md:text-left')}>
                We Make<br/>Space For<br/>Moments<br/>That Stay.
              </h1>
              <div className={clsx('w-10', 'h-1', 'bg-[#d05c45]', 'mt-4', 'mb-5', 'mx-auto', 'md:mx-0')}></div>
              <p className={clsx('font-inter', 'text-[13px]', 'md:text-[14.5px]', 'text-text-dark/85', 'leading-[1.7]', 'md:leading-[1.8]', 'tracking-wide', 'text-center', 'md:text-left')}>
                In a world that moves fast, we believe<br/>
                the best moments deserve more<br/>
                than a screen. Memory Club brings<br/>
                the photobooth to the places people<br/>
                come together—and gives them<br/>
                something real to take home.
              </p>
            </div>
            
            <div className={clsx('w-full', 'md:w-auto', 'relative', 'mt-10', 'md:mt-0')} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              <div className={clsx('relative', 'w-[240px]', 'md:w-[320px]', 'md:w-[360px]', 'mx-auto', 'md:mx-0')}>
                <Image 
                  src="/img1ourstory.png" 
                  alt="Girls hugging" 
                  width={360} 
                  height={450} 
                  className={clsx('w-full', 'h-auto', 'object-cover', 'relative', 'z-10', 'transition-transform', 'duration-300')}
                  style={{ transform: "scale(1) translateX(0px) translateY(-40px) rotate(0deg)" }}
                />
                
                <div className={clsx('absolute', 'z-20', 'transition-transform', 'duration-300', 'w-[80px]', 'md:w-[100px]')}
                     style={{ bottom: "0px", right: "-20px", transform: "scale(1.1) translateX(0px) translateY(-60px) rotate(10deg)" }}>
                  <Image 
                    src="/img2ourstory.png" 
                    alt="Photo strip" 
                    width={100} 
                    height={350} 
                    className={clsx('w-full', 'h-auto')} 
                  />
                </div>

                <div className={clsx('absolute', 'z-30', 'font-satisfy', 'text-lg', 'md:text-xl', 'text-text-dark/90', 'whitespace-nowrap')}
                     style={{ bottom: "50px", right: "-80px", transform: "rotate(-5deg) translateX(100px) translateY(-20px)" }}>
                  <div>good times</div>
                  <div className="ml-6">good people</div>
                  <div className={clsx('text-right', 'mt-1', 'text-base', 'pr-4')}>♡</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={clsx('w-full', 'h-[2px]', 'bg-text-dark/15')}></div>

        {/* Section 2: A Photo Strip */}
        <div style={bgStyle} className="w-full">
          <section className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'md:px-10', 'flex', 'flex-col-reverse', 'md:flex-row', 'items-center', 'justify-center', 'gap-8', 'md:gap-12', 'md:gap-16', 'py-12', 'md:py-16')}>
            <div className={clsx('w-full', 'md:w-auto', 'relative', 'flex', 'justify-center', 'md:justify-end')} data-aos="fade-right" data-aos-duration="1200">
              <div className={clsx('bg-white', 'p-2', 'md:p-3', 'shadow-xl', 'transform', 'rotate-2', 'w-[360px]', 'md:w-[500px]', 'md:w-[550px]')}>
                 <Image 
                   src="/img3ourstory.png" 
                   alt="Hand holding strip" 
                   width={550} 
                   height={480} 
                   className={clsx('w-full', 'h-auto', 'object-cover')} 
                 />
              </div>
            </div>
            
            <div className={clsx('w-full', 'md:w-auto', 'flex', 'flex-col', 'items-center', 'md:items-start')} data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
              <h2 className={clsx('font-anton', 'text-[2.2rem]', 'md:text-[2.8rem]', 'md:text-[2.5rem]', 'uppercase', 'leading-[1.05]', 'tracking-wider', 'text-text-dark', 'text-center', 'md:text-left')}>
                <span className={clsx('block', 'md:whitespace-nowrap')}>A PHOTO STRIP</span>
                <span className={clsx('block', 'md:whitespace-nowrap')}>CAN HOLD A WHOLE NIGHT.</span>
              </h2>
              <div className={clsx('w-12', 'h-[3px]', 'bg-[#d05c45]', 'mt-5', 'mb-6', 'mx-auto', 'md:mx-0')}></div>
              <div className={clsx('font-inter', 'text-[13px]', 'md:text-[14.5px]', 'text-text-dark/85', 'leading-[1.7]', 'md:leading-[1.8]', 'tracking-wide', 'space-y-6', 'text-center', 'md:text-left')}>
                <p>The inside jokes. The dances. The people you came<br/>with—and the ones you just met.</p>
                <p>Nights like these don't last forever.<br/>But a photo strip does.</p>
                <p>It's a small thing. But it holds everything you'll want<br/>to remember.</p>
              </div>
            </div>
          </section>
        </div>

        <div className={clsx('w-full', 'h-[2px]', 'bg-text-dark/15')}></div>

        {/* Section 3: What We Believe */}
        <div style={bgStyle} className="w-full">
          <section className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'md:px-10', 'py-5', 'md:py-10', 'text-center')} data-aos="fade-up" data-aos-duration="1200">
            <h2 className={clsx('font-playfair', 'font-bold', 'text-[2rem]', 'md:text-[2.5rem]', 'tracking-[0.1em]', 'uppercase', 'text-text-dark')}>
              WHAT WE BELIEVE
            </h2>
            <div className={clsx('w-12', 'h-[2px]', 'bg-[#d05c45]', 'mx-auto', 'mt-4', 'mb-12', 'md:mb-20')}></div>
            
            <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-12', 'md:gap-0', 'relative')}>
              {/* Dividers for desktop */}
              <div className={clsx('hidden', 'md:block', 'absolute', 'top-0', 'bottom-0', 'left-1/3', 'w-[1px]', 'bg-text-dark/15')}></div>
              <div className={clsx('hidden', 'md:block', 'absolute', 'top-0', 'bottom-0', 'left-2/3', 'w-[1px]', 'bg-text-dark/15')}></div>

              {/* Column 1 */}
              <div className={clsx('flex', 'flex-col', 'items-center', 'md:items-start', 'text-center', 'md:text-left', 'px-4', 'md:px-8')}>
                <div className={clsx('flex', 'flex-col', 'md:flex-row', 'items-center', 'md:items-start', 'gap-4', 'mb-4')}>
                  <div className={clsx('text-[#d05c45]', 'flex-shrink-0')}>
                    <svg className={clsx('w-12', 'h-12', 'md:w-16', 'md:h-16')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                      <rect x="5" y="4" width="14" height="12" rx="2" strokeLinecap="round" />
                      <circle cx="12" cy="10" r="3" />
                      <circle cx="12" cy="10" r="1" />
                      <path d="M9 4v-1h6v1" strokeLinecap="round" />
                      <path d="M9 16l-2 5 M12 16v5 M15 16l2 5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className={clsx('font-anton', 'text-xl', 'md:text-2xl', 'tracking-wider', 'uppercase', 'leading-snug', 'mt-1', 'md:mt-0')}>
                    ANALOG OVER<br/>ENDLESS SCROLLING
                  </h3>
                </div>
                <p className={clsx('font-inter', 'text-[14px]', 'md:text-[15px]', 'text-text-dark/80', 'leading-relaxed', 'md:pl-[80px]')}>
                  We're here for real moments, not digital noise. Printed photos. Real smiles. No filter needed.
                </p>
              </div>
              
              {/* Column 2 */}
              <div className={clsx('flex', 'flex-col', 'items-center', 'md:items-start', 'text-center', 'md:text-left', 'px-4', 'md:px-8')}>
                <div className={clsx('flex', 'flex-col', 'md:flex-row', 'items-center', 'md:items-start', 'gap-4', 'mb-4')}>
                  <div className={clsx('text-[#d05c45]', 'flex-shrink-0')}>
                    <svg className={clsx('w-12', 'h-12', 'md:w-16', 'md:h-16')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </div>
                  <h3 className={clsx('font-anton', 'text-xl', 'md:text-2xl', 'tracking-wider', 'uppercase', 'leading-snug', 'mt-1', 'md:mt-0')}>
                    REAL PLACES,<br/>REAL PEOPLE
                  </h3>
                </div>
                <p className={clsx('font-inter', 'text-[14px]', 'md:text-[15px]', 'text-text-dark/80', 'leading-relaxed', 'md:pl-[80px]')}>
                  We show up where life happens—bars, hotels, restaurants, and community spaces that bring people together.
                </p>
              </div>
              
              {/* Column 3 */}
              <div className={clsx('flex', 'flex-col', 'items-center', 'md:items-start', 'text-center', 'md:text-left', 'px-4', 'md:px-8')}>
                <div className={clsx('flex', 'flex-col', 'md:flex-row', 'items-center', 'md:items-start', 'gap-4', 'mb-4')}>
                  <div className={clsx('text-[#d05c45]', 'flex-shrink-0')}>
                    <svg className={clsx('w-12', 'h-12', 'md:w-16', 'md:h-16')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <h3 className={clsx('font-anton', 'text-xl', 'md:text-2xl', 'tracking-wider', 'uppercase', 'leading-snug', 'mt-1', 'md:mt-0')}>
                    LITTLE KEEPSAKES,<br/>BIG MEMORIES
                  </h3>
                </div>
                <p className={clsx('font-inter', 'text-[14px]', 'md:text-[15px]', 'text-text-dark/80', 'leading-relaxed', 'md:pl-[80px]')}>
                  A photo strip is more than paper. It's a keepsake from a night you'll never forget.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className={clsx('w-full', 'h-[1px]', 'bg-text-dark/10')}></div>

        {/* Section 4: Come find us */}
        <div style={bgStyle} className="w-full">
          <section className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'md:px-10', 'pt-6', 'pb-12', 'md:pt-10', 'md:pb-14', 'flex', 'flex-col', 'md:flex-row', 'items-center', 'justify-center', 'gap-10', 'md:gap-16', 'md:gap-24')}>
            <div className={clsx('w-full', 'md:w-auto', 'flex', 'flex-col', 'items-start')} data-aos="fade-right" data-aos-duration="1200">
              <h2 className={clsx('font-anton', 'text-[2.2rem]', 'md:text-[2.8rem]', 'md:text-[3.5rem]', 'uppercase', 'leading-[1.05]', 'tracking-wider', 'text-text-dark')}>
                <span className={clsx('block', 'whitespace-nowrap')}>COME FIND US</span>
                <span className={clsx('block', 'whitespace-nowrap')}>IN GOOD PLACES.</span>
              </h2>
              <div className={clsx('w-10', 'h-[3px]', 'bg-[#d05c45]', 'mt-5', 'mb-6')}></div>
              <div className={clsx('font-inter', 'text-[13px]', 'md:text-[14px]', 'text-text-dark/85', 'leading-[1.7]', 'mb-6', 'space-y-4')}>
                <p>We're in bars, hotels, restaurants, and everywhere<br/>in between. Find a booth near you.</p>
              </div>
              <a 
                href="/locations" 
                className={clsx('bg-[#1a1a1a]', 'text-white', 'px-6', 'py-2.5', 'text-[11px]', 'font-inter', 'font-semibold', 'tracking-[0.2em]', 'uppercase', 'hover:bg-black', 'transition-colors', 'flex', 'items-center', 'gap-2')}
              >
                EXPLORE LOCATIONS <span className={clsx('text-base', 'leading-none', 'mt-[-1px]')}>→</span>
              </a>
            </div>
            
            <div className={clsx('w-full', 'md:w-auto', 'relative', 'flex', 'justify-center', 'mt-10', 'md:mt-0')} data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
              <div className={clsx('relative', 'w-[320px]', 'md:w-[400px]', 'md:w-[450px]', 'transform', '-rotate-3')}>
                 <Image 
                   src="/image_3.png" 
                   alt="Paper note" 
                   width={450} 
                   height={360} 
                   className={clsx('w-full', 'h-auto', 'drop-shadow-md')} 
                 />
                 <div className={clsx('absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'pt-2', 'md:pt-4', 'pl-4', 'md:pl-6')}>
                    <p className={clsx('font-courier-prime', 'font-bold', 'text-[22px]', 'md:text-[28px]', 'md:text-[32px]', 'text-text-dark/80', 'text-left', 'leading-snug', 'w-fit')}>
                      Collect<br/>the moments.<br/>Keep them.
                    </p>
                 </div>
                 <div className={clsx('absolute', '-bottom-6', 'md:-bottom-8', '-right-4', 'md:-right-8', 'w-[100px]', 'md:w-[130px]', 'md:w-[160px]', 'z-20', 'transform', '-rotate-[8deg]')}>
                   <Image 
                     src="/stamp2.png" 
                     alt="MC Stamp" 
                     width={160} 
                     height={160} 
                     className={clsx('w-full', 'h-auto', 'opacity-90', 'mix-blend-multiply')} 
                   />
                 </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
