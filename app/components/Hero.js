import clsx from "clsx";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className={clsx(
        'relative',
        'min-h-[100svh]',
        'flex',
        'flex-col',
        'bg-cream',
        'overflow-hidden'
      )}
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mobile Layout (below 700px) */}
      <div className={clsx(
        'min-[700px]:hidden',
        'flex-1',
        'flex',
        'flex-col',
        'pt-24',
        'pb-6',
        'px-5'
      )}>
        {/* Text content - left aligned */}
        <div className="z-10 relative" data-aos="fade-right" data-aos-duration="1000">
          <h1
            className={clsx(
              'font-anton',
              'text-[3.4rem]',
              'min-[400px]:text-[4.8rem]',
              'min-[500px]:text-[5.5rem]',
              'uppercase',
              'leading-[0.95]',
              'tracking-wider',
              'text-text-dark',
              'text-left'
            )}
          >
            Memories
            <br />
            Made Real.
          </h1>
          <p
            className={clsx(
              'font-inter',
              'text-[11px]',
              'min-[400px]:text-[14px]',
              'text-text-dark/80',
              'max-w-[340px]',
              'leading-relaxed',
              'mt-4',
              'text-left'
            )}
          >
            Memory Club places handcrafted photo booths in selected bars,
            restaurants, hotels, clubs, and similar venues. Each booth
            captures the real, unfiltered moments that make nights out
            unforgettable.
          </p>
          <div className={clsx('flex', 'flex-wrap', 'gap-3', 'mt-4', 'items-center')}>
            {/* To update the redirect links for these buttons, modify the 'href' attribute. */}
            <a
              href="/locations"
              className="btn-find-locations"
              style={{ padding: "10px 20px", fontSize: "0.7rem" }}
            >
              Find Locations
            </a>
            <a
              href="/ourstory"
              className={clsx(
                'our-story-btn',
                'inline-flex',
                'items-center',
                'gap-3',
                'px-3',
                'py-2.5',
                'text-[10px]',
                'font-inter',
                'font-semibold',
                'tracking-wider',
                'uppercase',
                'text-text-dark',
                'hover:gap-5',
                'transition-all',
                'duration-300'
              )}
            >
              <span className="our-story-text">Our Story</span>
              <span className="our-story-arrow">→</span>
            </a>
          </div>
        </div>

          <div
            className={clsx(
              'relative',
              'flex-1',
              'mt-4',
              'flex',
              'items-center',
              'justify-center',
              'overflow-visible'
            )}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className={clsx(
            'relative',
            'w-[65vw]',
            'min-[400px]:w-[75vw]',
            'min-[500px]:w-[65vw]',
            'max-w-[300px]',
            'min-[400px]:max-w-[340px]',
            'mb-4'
          )}>
            {/* Main photobooth image */}
            <div className="relative -left-4 min-[400px]:-left-8">
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

            {/* "good times good people" text */}
            <div
              className={clsx(
                'absolute',
                '-top-6',
                'min-[400px]:-top-12',
                'right-[-60px]',
                'min-[400px]:right-[-50px]',
                'font-satisfy',
                'font-normal',
                'text-base',
                'min-[400px]:text-lg',
                'text-text-dark/70',
                '-rotate-12',
                'z-20'
              )}
              style={{ wordSpacing: "6px" }}
            >
              good times
              <br />
              <span className="ml-3">good people</span>
              <span className={clsx('block', 'text-right', 'text-lg')}>
                <svg className={clsx('w-3.5', 'h-3.5', 'inline-block')} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </span>
            </div>

            {/* Polaroid photo strip */}
            <div
              className={clsx(
                'absolute',
                'top-[40px]',
                'min-[400px]:top-[35px]',
                'right-[-25px]',
                'min-[400px]:right-[-35px]',
                'w-[90px]',
                'min-[400px]:w-[110px]',
                'z-10'
              )}
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

            {/* Paper note - "Collect the moments" */}
            <div
              className={clsx(
                'absolute',
                'bottom-[10px]',
                'min-[400px]:bottom-[15px]',
                'right-[-20px]',
                'min-[400px]:right-[-30px]',
                'z-10',
                'w-[120px]',
                'min-[400px]:w-[140px]'
              )}
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
                  <p className={clsx(
                    'font-courier-prime',
                    'font-bold',
                    'text-sm',
                    'min-[400px]:text-base',
                    'text-text-dark/80',
                    'text-left',
                    'leading-snug',
                    'w-fit',
                    'px-1'
                  )}>
                    Collect
                    <br />
                    the moments.
                    <br />
                    Keep them.
                  </p>
                </div>
              </div>
            </div>

            {/* Stamp */}
            <div className={clsx(
              'absolute',
              'bottom-[40px]',
              'min-[400px]:bottom-[55px]',
              'right-[-65px]',
              'min-[400px]:right-[-85px]',
              'z-20',
              'w-[80px]',
              'min-[400px]:w-[100px]'
            )}>
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

      {/* Desktop Layout (700px and above) */}
      <div className={clsx(
        'hidden',
        'min-[700px]:flex',
        'max-w-7xl',
        'mx-auto',
        'px-6',
        'min-[900px]:px-10',
        'flex-1',
        'w-full',
        'pt-20',
        'items-center'
      )}>
        <div className={clsx('w-full', 'relative')}>

          <div className={clsx('flex', 'flex-col', 'items-start', 'gap-5', 'z-10', 'relative', 'max-w-[560px]')} data-aos="fade-right" data-aos-duration="1000">
            <h1 className={clsx('font-anton', 'text-6xl', 'min-[900px]:text-7xl', 'min-[1050px]:text-[6.5rem]', 'uppercase', 'leading-[1.05]', 'tracking-wider', 'text-text-dark', 'text-left')}>
              Memories
              <br />
              Made Real.
            </h1>
            <p className={clsx('font-inter', 'text-[14px]', 'min-[900px]:text-[16px]', 'text-text-dark/80', 'max-w-[340px]', 'min-[900px]:max-w-[420px]', 'leading-relaxed', 'mt-1', 'text-left')}>
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
                style={{ padding: "10px 22px", fontSize: "0.75rem" }}
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

          <div className={clsx('absolute', 'z-[51]', 'top-[0px]', 'min-[900px]:top-[-50px]', 'min-[1050px]:top-[-100px]', 'left-[45%]', 'min-[900px]:left-[47%]')} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div className={clsx('relative', 'origin-top-left', 'scale-[0.6]', 'min-[850px]:scale-75', 'min-[1050px]:scale-100')}>

              <div className={clsx('relative', 'w-[470px]')}>
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
                className={clsx('absolute', 'top-6', 'right-[-180px]', 'font-satisfy', 'font-normal', 'text-xl', 'text-text-dark/70', '-rotate-12', 'z-20')}
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
                className={clsx('absolute', 'top-[70px]', 'right-[-60px]', 'w-[170px]', 'z-10')}
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
                className={clsx('absolute', 'bottom-[30px]', 'right-[-40px]', 'z-10', 'w-[180px]')}
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
                    <p className={clsx('font-courier-prime', 'font-bold', 'text-[18px]', 'text-text-dark/80', 'text-left', 'leading-snug', 'w-fit', 'px-1')}>
                      Collect
                      <br />
                      the moments.
                      <br />
                      Keep them.
                    </p>
                  </div>
                </div>
              </div>

              <div className={clsx('absolute', 'bottom-[80px]', 'right-[-150px]', 'z-20', 'w-[160px]')}>
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
