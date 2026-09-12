import clsx from "clsx";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={clsx('relative', 'min-h-[100svh]', 'md:h-screen', 'bg-cream', 'overflow-x-clip', 'pt-28', 'md:pt-20', 'pb-16', 'md:pb-0')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'lg:px-10', 'h-full', 'flex', 'md:items-center')}>
        <div className={clsx('w-full', 'relative', 'mt-10', 'md:mt-0')}>

          <div className={clsx('flex', 'flex-col', 'gap-4', 'z-10', 'relative', 'lg:max-w-[500px]', 'pl-6', 'md:pl-8', 'lg:pl-16')} data-aos="fade-right" data-aos-duration="1000">
            <h1 className={clsx('font-anton', 'text-5xl', 'md:text-6xl', 'lg:text-[5.5rem]', 'uppercase', 'leading-[1.1]', 'tracking-wider', 'text-text-dark')}>
              Memories
              <br />
              Made Real.
            </h1>
            <p className={clsx('font-inter', 'text-[14px]', 'md:text-[15px]', 'text-text-dark/80', 'max-w-[380px]', 'leading-relaxed', 'mt-1')}>
              Memory Club places handcrafted photo booths in selected bars,
              restaurants, hotels, clubs, and similar venues. Each booth
              captures the real, unfiltered moments that make nights out
              unforgettable.
            </p>
            <div className={clsx('flex', 'flex-wrap', 'gap-4', 'mt-3', 'items-center')}>
              {/* To update the redirect links for these buttons, modify the 'href' attribute. */}
              <a
                href="/locations"
                className="btn-find-locations"
                style={{ padding: "12px 24px", fontSize: "0.8rem" }}
              >
                Find Locations
              </a>
              <a
                href="/ourstory"
                className={clsx('our-story-btn', 'inline-flex', 'items-center', 'gap-3', 'px-4', 'py-2.5', 'text-[13px]', 'font-inter', 'font-semibold', 'tracking-wider', 'uppercase', 'text-text-dark', 'hover:gap-5', 'transition-all', 'duration-300')}
              >
                <span className="our-story-text">Our Story</span>
                <span className="our-story-arrow">→</span>
              </a>
            </div>
          </div>

          <div className={clsx('relative', 'md:absolute', 'z-[51]', 'mt-12', 'md:mt-0', 'md:top-[-130px]', 'md:left-[47%]', 'w-fit', 'md:mx-0')} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div className="relative" style={{ transform: "scale(var(--hero-scale, 1))", transformOrigin: "left top", marginLeft: "var(--hero-ml, 0)" }}>
              <style>{`
                @media (max-width: 767px) {
                  .relative[style*="--hero-scale"] {
                    --hero-scale: 0.65;
                    --hero-ml: 5%;
                  }
                }
              `}</style>

              <div className={clsx('relative', 'w-[340px]',  'md:w-[400px]', 'lg:w-[470px]')}>
                <div 
                  className={clsx('absolute', '-left-8', 'top-[30%]', 'w-[250%]', 'h-[80%]', 'z-[-1]', 'opacity-[0.12]')}
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                />
                {/* To change the main photobooth image, update the 'src' attribute below. */}
                <Image
                  src="/image_1.png"
                  alt="Photoautomat photo booth"
                  width={600}
                  height={750}
                  className={clsx('w-full', 'h-auto', 'relative', 'z-[1]')}
                  priority
                />
              </div>

              <div 
                className={clsx('absolute', 'top-10', 'md:top-14', 'right-[-80px]', 'md:right-[-110px]', 'font-satisfy', 'font-normal', 'text-lg', 'md:text-xl', 'text-text-dark/70', '-rotate-12', 'z-20')}
                style={{ wordSpacing: "8px" }}
              >
                good times
                <br />
                <span className="ml-4">good people</span>
                <span className={clsx('block', 'text-right', 'text-xl')}>
                  <svg className={clsx('w-4', 'h-4', 'inline-block')} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </span>
              </div>

              <div
                className={clsx('absolute', 'top-[120px]', 'md:top-[120px]', 'right-[-70px]', 'md:right-[-90px]', 'lg:right-[-100px]', 'w-[110px]', 'md:w-[130px]', 'lg:w-[140px]', 'z-10')}
                style={{ transform: "rotate(4deg)" }}
              >
                {/* To change the polaroid image, update the 'src' attribute below. */}
                <Image
                  src="/image_2.png"
                  alt="Photo strip polaroid"
                  width={300}
                  height={750}
                  className={clsx('w-full', 'h-auto', 'drop-shadow-lg')}
                />
              </div>

              <div 
                className={clsx('absolute', 'bottom-[20px]', 'md:bottom-[30px]', 'right-[-30px]', 'md:right-[-40px]', 'z-10', 'w-[150px]', 'md:w-[180px]')}
                style={{ transform: "rotate(-6deg)" }}
              >
                <div className="relative">
                  {/* To change the paper note image, update the 'src' attribute below. */}
                  <Image
                    src="/image_3.png"
                    alt="Paper note"
                    width={400}
                    height={320}
                    className={clsx('w-full', 'h-auto')}
                  />
                  <div className={clsx('absolute', 'inset-0', 'flex', 'items-center', 'justify-center')}>
                    <p className={clsx('font-courier-prime', 'font-bold', 'text-base', 'md:text-[18px]', 'text-text-dark/80', 'text-left', 'leading-snug', 'w-fit', 'px-1')}>
                      Collect
                      <br />
                      the moments.
                      <br />
                      Keep them.
                    </p>
                  </div>
                </div>
              </div>

              <div className={clsx('absolute', 'bottom-[60px]', 'md:bottom-[80px]', 'right-[-130px]', 'md:right-[-160px]', 'z-20', 'w-[100px]', 'md:w-[130px]')}>
                {/* To change the stamp image, update the 'src' attribute below. */}
                <Image
                  src="/mc.png"
                  alt="Memory Club Stamp"
                  width={150}
                  height={150}
                  className={clsx('w-full', 'h-auto')}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
