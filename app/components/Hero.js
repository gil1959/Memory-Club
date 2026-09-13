import clsx from "clsx";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={clsx('relative', 'min-[1050px]:min-h-[100svh]', 'min-[1050px]:h-screen', 'bg-cream', 'overflow-x-clip', 'pt-28', 'min-[1050px]:pt-20', 'pb-10', 'min-[1050px]:pb-0')} style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'min-[1050px]:px-10', 'h-full', 'flex', 'min-[1050px]:items-center')}>
        <div className={clsx('w-full', 'relative', 'mt-10', 'min-[1050px]:mt-0')}>

          <div className={clsx('flex', 'flex-col', 'items-center', 'min-[1050px]:items-start', 'gap-5', 'z-10', 'relative', 'min-[1050px]:max-w-[560px]', 'pl-0')} data-aos="fade-right" data-aos-duration="1000">
            <h1 className={clsx('font-anton', 'text-5xl', 'min-[1050px]:text-7xl', 'min-[1050px]:text-[6.5rem]', 'uppercase', 'leading-[1.05]', 'tracking-wider', 'text-text-dark', 'text-center', 'min-[1050px]:text-left')}>
              Memories
              <br />
              Made Real.
            </h1>
            <p className={clsx('font-inter', 'text-[15px]', 'min-[1050px]:text-[16px]', 'text-text-dark/80', 'max-w-[420px]', 'leading-relaxed', 'mt-1', 'text-center', 'min-[1050px]:text-left')}>
              Memory Club places handcrafted photo booths in selected bars,
              restaurants, hotels, clubs, and similar venues. Each booth
              captures the real, unfiltered moments that make nights out
              unforgettable.
            </p>
            <div className={clsx('flex', 'flex-wrap', 'gap-4', 'mt-3', 'items-center', 'justify-center', 'min-[1050px]:justify-start')}>
              {/* To update the redirect links for these buttons, modify the 'href' attribute. */}
              <a
                href="/locations"
                className="btn-find-locations"
                style={{ padding: "14px 28px", fontSize: "0.85rem" }}
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

          <div className={clsx('relative', 'min-[1050px]:absolute', 'z-[51]', 'mt-4', 'min-[1050px]:mt-0', 'min-[1050px]:top-[-100px]', 'min-[1050px]:left-[47%]', 'w-fit', 'mx-auto', 'min-[1050px]:mx-0')} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div className="relative" style={{ transform: "scale(var(--hero-scale, 1))", transformOrigin: "left top", marginLeft: "var(--hero-ml, 0)", marginBottom: "var(--hero-mb, 0)" }}>
              <style>{`
                @media (max-width: 767px) {
                  .relative[style*="--hero-scale"] {
                    --hero-scale: 0.55;
                    --hero-ml: 0%;
                    --hero-mb: -230px;
                  }
                }
              `}</style>

              <div className={clsx('relative', 'w-[340px]',  'min-[1050px]:w-[400px]', 'min-[1050px]:w-[470px]')}>
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
                className={clsx('absolute', 'top-10', 'min-[1050px]:top-14', 'right-[-100px]', 'min-[1050px]:right-[-110px]', 'font-satisfy', 'font-normal', 'text-lg', 'min-[1050px]:text-xl', 'text-text-dark/70', '-rotate-12', 'z-20')}
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
                className={clsx('absolute', 'top-[120px]', 'min-[1050px]:top-[120px]', 'right-[-70px]', 'min-[1050px]:right-[-90px]', 'min-[1050px]:right-[-100px]', 'w-[110px]', 'min-[1050px]:w-[130px]', 'min-[1050px]:w-[140px]', 'z-10')}
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
                className={clsx('absolute', 'bottom-[20px]', 'min-[1050px]:bottom-[30px]', 'right-[-30px]', 'min-[1050px]:right-[-40px]', 'z-10', 'w-[150px]', 'min-[1050px]:w-[180px]')}
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
                    <p className={clsx('font-courier-prime', 'font-bold', 'text-base', 'min-[1050px]:text-[18px]', 'text-text-dark/80', 'text-left', 'leading-snug', 'w-fit', 'px-1')}>
                      Collect
                      <br />
                      the moments.
                      <br />
                      Keep them.
                    </p>
                  </div>
                </div>
              </div>

              <div className={clsx('absolute', 'bottom-[60px]', 'min-[1050px]:bottom-[80px]', 'right-[-130px]', 'min-[1050px]:right-[-160px]', 'z-20', 'w-[100px]', 'min-[1050px]:w-[130px]')}>
                {/* To change the stamp image, update the 'src' attribute below. */}
                <Image
                  src="/stamp1.png"
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
