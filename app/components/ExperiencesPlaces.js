import clsx from "clsx";
import Image from "next/image";

function IconCamera({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
      <path d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
    </svg>
  );
}

function IconRuler({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125V4.875Z" />
      <path d="M3.75 8.25h2.25M3.75 12h3.75M3.75 15.75h2.25" />
    </svg>
  );
}

function IconCircleHalf({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function IconFilm({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function IconPalette({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
    </svg>
  );
}

function IconStar({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}

function IconMartini({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22h8" />
      <path d="M12 15v7" />
      <path d="M21 4L12 15 3 4Z" />
      <path d="M15 3l-3 4" />
      <circle cx="16" cy="2" r="1.5" />
    </svg>
  );
}

function IconKey({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="7.5" r="4.5" />
      <path d="M10.5 10.5L20 20" />
      <path d="M19 19l-3 3" />
      <path d="M16 16l-3 3" />
    </svg>
  );
}

function IconForkKnife({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}

function IconGlobe({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="22" />
      <ellipse cx="32" cy="32" rx="10" ry="22" />
      <path d="M10 32h44" />
      <path d="M14 18h36" />
      <path d="M14 46h36" />
    </svg>
  );
}

export default function ExperiencesPlaces() {
  const categories = [
    { icon: <IconMartini className={clsx('w-8', 'h-8', 'md:w-12', 'md:h-12')} />, label: "Bars", image: "/bars.png" },
    { icon: <IconKey className={clsx('w-8', 'h-8', 'md:w-12', 'md:h-12')} />, label: "Hotels", image: "/hotels.png" },
    { icon: <IconForkKnife className={clsx('w-8', 'h-8', 'md:w-12', 'md:h-12')} />, label: "Restaurants", image: "/restaourant.png" },
    { icon: <IconGlobe className={clsx('w-8', 'h-8', 'md:w-12', 'md:h-12')} />, label: "Clubs", image: "/clubs.png" },
  ];

  return (
    <section
      id="experiences"
      className={clsx('relative', 'w-full')}
      style={{
        backgroundImage: "url('/bg2.png')",
        backgroundSize: "100% 125%",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={clsx('absolute', '-top-6', 'md:top-10', 'right-18', 'md:right-10', 'z-20', 'hidden', 'md:block')}>
        <Image src="/clip.png" alt="Paper Clip" width={100} height={140} className={clsx('w-12', 'md:w-10', 'h-auto', 'opacity-90')} />
      </div>

      <div className={clsx('w-full', 'border-t', 'border-text-dark/20')} />

      <div className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'md:px-10', 'pt-2', 'md:pt-4', 'pb-32', 'md:pb-4', 'relative')}>

        <div className={clsx('relative', 'w-full', 'md:-left-[30px]')}>
          
          <div className={clsx('flex', 'items-center', 'justify-center', 'md:justify-start', 'gap-4', 'md:gap-6', 'mb-6', 'md:mb-8', 'ml-0', 'md:ml-[120px]')}>
            <h2 
              className={clsx('font-semibold', 'text-base', 'md:text-lg', 'md:text-xl', 'uppercase', 'tracking-[0.05em]', 'text-text-dark', 'shrink-0', 'border-b-2', 'border-text-dark/50', 'pb-1')}
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              Our Experiences
            </h2>

            <div className={clsx('flex-grow', 'max-w-[400px]', 'border-t', 'border-text-dark/20')} />

            <p className={clsx('font-inter', 'text-[10px]', 'md:text-xs', 'uppercase', 'tracking-[0.18em]', 'text-text-dark/50', 'shrink-0', 'hidden', 'md:block')}>
              Timeless Moments. Real Connection.
            </p>
          </div>

          <div className={clsx('grid', 'grid-cols-1', 'min-[878px]:grid-cols-[1fr_auto_1fr]', 'gap-8', 'min-[878px]:gap-0')}>

          <div className={clsx('flex', 'flex-col', 'min-[878px]:flex-row', 'gap-6', 'items-center', 'min-[878px]:items-start')} data-aos="fade-up" data-aos-duration="1000">
            <div className={clsx('relative', 'shrink-0', 'w-[180px]', 'min-[878px]:w-[300px]', 'mt-4', 'min-[878px]:-mt-10', 'ml-0', 'min-[878px]:ml-4')}>
              {/* To change the classic strip photo, update the 'src' attribute below. */}
              <Image
                src="/img1section2.png"
                alt="Classic strip photo booth"
                width={640}
                height={800}
                className={clsx('w-full', 'h-auto', 'min-[878px]:-translate-x-3')}
              />
            </div>

            <div className={clsx('flex', 'flex-col', 'items-center', 'min-[878px]:items-start', 'text-center', 'min-[878px]:text-left', 'gap-2', 'pt-2', 'max-w-[240px]', 'min-[878px]:-ml-8')}>
              <h3 className={clsx('font-anton', 'text-xl', 'min-[878px]:text-2xl', 'uppercase', 'tracking-wide', 'text-text-dark')}>
                Classic Strip
              </h3>
              <p className={clsx('font-inter', 'text-xs', 'text-text-dark/70', 'leading-relaxed')}>
                Timeless black &amp; white photo strips. Iconic. Unfiltered. Always in style.
              </p>
              <ul className={clsx('flex', 'flex-col', 'items-center', 'min-[878px]:items-start', 'gap-3', 'mt-2')}>
                <li className={clsx('flex', 'items-center', 'gap-3', 'text-xs', 'md:text-[13px]', 'font-inter', 'font-semibold', 'uppercase', 'tracking-wider', 'text-text-dark/80')}>
                  <IconCamera className={clsx('w-5', 'h-5', 'text-text-dark')} />
                  4 Poses
                </li>
                <li className={clsx('flex', 'items-center', 'gap-3', 'text-xs', 'md:text-[13px]', 'font-inter', 'font-semibold', 'uppercase', 'tracking-wider', 'text-text-dark/80')}>
                  <IconRuler className={clsx('w-5', 'h-5', 'text-text-dark')} />
                  2x6&quot; Strip Prints
                </li>
                <li className={clsx('flex', 'items-center', 'gap-3', 'text-xs', 'md:text-[13px]', 'font-inter', 'font-semibold', 'uppercase', 'tracking-wider', 'text-text-dark/80')}>
                  <IconCircleHalf className={clsx('w-5', 'h-5', 'text-text-dark')} />
                  Black &amp; White
                </li>
              </ul>
            </div>
          </div>

          <div className={clsx('hidden', 'min-[878px]:flex', 'items-center', 'justify-center', 'px-4', 'min-[878px]:-ml-20')}>
            <div className={clsx('w-px', 'h-full', 'bg-text-dark/15')} />
          </div>

          <div className={clsx('flex', 'flex-col', 'min-[878px]:flex-row', 'gap-2', 'items-center', 'min-[878px]:items-start', 'min-[878px]:-ml-10')} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className={clsx('relative', 'shrink-0', 'w-[180px]', 'min-[878px]:w-[340px]', 'mt-4', 'min-[878px]:-mt-10', 'ml-0', 'min-[878px]:ml-0')}>
              {/* To change the polaroid experience photo, update the 'src' attribute below. */}
              <Image
                src="/img2section2.png"
                alt="Polaroid experience film"
                width={640}
                height={800}
                className={clsx('w-full', 'h-auto')}
              />
            </div>

            <div className={clsx('flex', 'flex-col', 'items-center', 'min-[878px]:items-start', 'text-center', 'min-[878px]:text-left', 'gap-2', 'pt-2', 'max-w-[240px]', 'min-[878px]:ml-4')}>
              <h3 className={clsx('font-anton', 'text-xl', 'min-[878px]:text-2xl', 'uppercase', 'tracking-wide', 'text-text-dark')}>
                Polaroid Experience
              </h3>
              <p className={clsx('font-inter', 'text-xs', 'text-text-dark/70', 'leading-relaxed')}>
                Classic instant prints. Warm tones. Real moments you can hold.
              </p>
              <ul className={clsx('flex', 'flex-col', 'items-center', 'min-[878px]:items-start', 'gap-3', 'mt-2')}>
                <li className={clsx('flex', 'items-center', 'gap-3', 'text-xs', 'md:text-[13px]', 'font-inter', 'font-semibold', 'uppercase', 'tracking-wider', 'text-text-dark/80')}>
                  <IconFilm className={clsx('w-5', 'h-5', 'text-text-dark')} />
                  Polaroid i-Type Film
                </li>
                <li className={clsx('flex', 'items-center', 'gap-3', 'text-xs', 'md:text-[13px]', 'font-inter', 'font-semibold', 'uppercase', 'tracking-wider', 'text-text-dark/80')}>
                  <IconPalette className={clsx('w-5', 'h-5', 'text-text-dark')} />
                  Vibrant Color Tones
                </li>
                <li className={clsx('flex', 'items-center', 'gap-3', 'text-xs', 'md:text-[13px]', 'font-inter', 'font-semibold', 'uppercase', 'tracking-wider', 'text-text-dark/80')}>
                  <IconStar className={clsx('w-5', 'h-5', 'text-text-dark')} />
                  Collectible Prints
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div> 
      </div>

      <div id="places" className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'md:px-10', 'pt-8', 'md:pt-4', 'pb-8', 'md:pb-12')}>
        <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-5', 'gap-8', 'md:gap-10', 'items-center', 'pt-5', 'md:pt-8', 'md:pt-12')}>

          <div className={clsx('md:col-span-1', 'flex', 'flex-col', 'items-center', 'md:items-start', 'gap-4')}>
            <h2 className={clsx('font-anton', 'text-3xl', 'md:text-4xl', 'uppercase', 'tracking-wide', 'text-cream', 'leading-tight', 'text-center', 'md:text-left')}>
              Places That
              <br />
              Make The
              <br />
              Night
            </h2>

            <div className={clsx('mt-3', 'mb-2', 'w-32', 'md:w-40', 'mx-auto', 'md:ml-0')}>
              <Image src="/line.png" alt="Wavy line" width={160} height={20} className={clsx('w-full', 'h-auto')} />
            </div>

            <p className={clsx('font-inter', 'text-sm', 'text-cream/60', 'leading-relaxed', 'text-center', 'md:text-left')}>
              You&apos;ll find Memory Club booths in the places where good nights happen.
            </p>
            {/* To update the redirect links for this button, modify the 'href' attribute. */}
            <a
              href="#venues"
              className={clsx('inline-flex', 'items-center', 'self-center', 'md:self-start', 'px-6', 'py-2.5', 'border-2', 'border-cream', 'text-cream', 'text-xs', 'font-inter', 'font-semibold', 'tracking-wider', 'uppercase', 'hover:bg-cream', 'hover:text-brown-dark', 'transition-all', 'duration-300', 'mt-2')}
            >
              Explore Locations
            </a>
          </div>

          <div className={clsx('md:col-span-4', 'grid', 'grid-cols-2', 'md:grid-cols-4', 'gap-3', 'md:gap-4')}>
            {categories.map((cat, index) => (
              <div
                key={cat.label}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 150}
                className={clsx(
                  'group', 'relative', 'flex', 'flex-col', 'items-center', 'justify-end',
                  'aspect-[4/5]', 'md:aspect-[3/4]', 'rounded-md', 'overflow-hidden',
                  'border-2', 'border-[#EAE0D5]/80',
                  'cursor-pointer', 'transition-all', 'duration-300'
                )}
              >
                {/* To modify the category background image, update the 'image' property in the 'categories' array above. */}
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className={clsx('object-cover', 'group-hover:scale-105', 'transition-transform', 'duration-500')}
                />
                
                <div className={clsx('absolute', 'inset-0', 'bg-black/40', 'group-hover:bg-black/20', 'transition-colors', 'duration-300')} />

                <div className={clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'gap-2', 'pb-5', 'md:pb-8')}>
                  <div className={clsx('text-[#EAE0D5]', 'group-hover:text-white', 'transition-colors', 'duration-300')}>
                    {cat.icon}
                  </div>
                  <span className={clsx('font-anton', 'text-sm', 'md:text-lg', 'uppercase', 'tracking-wider', 'text-[#EAE0D5]', 'group-hover:text-white', 'transition-colors')}>
                    {cat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
