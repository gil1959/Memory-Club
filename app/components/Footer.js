import clsx from 'clsx';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className={clsx('w-full', 'flex', 'flex-col', 'relative', 'z-30')}>
      <style>{`
        @media (max-width: 1023px) {
          #footer-bg-container {
            background-size: 100% 300% !important;
            background-position: top center !important;
          }
        }
      `}</style>
      <div 
        id="footer-bg-container"
        className={clsx('w-full', 'pt-6', 'lg:pt-8', 'pb-2', 'lg:pb-2', 'text-[#EAE0D5]', 'flex', 'flex-col')}
        style={{
          backgroundImage: "url('/bgfooter.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={clsx('max-w-[1400px]', '2xl:max-w-[1700px]', 'mx-auto', 'px-6', 'lg:px-12', 'w-full', 'flex-1', 'flex', 'flex-col', 'justify-center')}>
          <div className={clsx('flex', 'flex-row', 'items-start', 'justify-center', 'gap-4', 'md:gap-8', 'lg:gap-20', 'xl:gap-28', 'mb-2', 'lg:mb-8', 'w-full')}>
            
            {/* Left Column: Logo & Tagline */}
            <div className={clsx('flex', 'flex-col', 'gap-1', 'lg:gap-2', 'w-auto', 'lg:max-w-[260px]', 'shrink-0')}>
              <div className={clsx('flex', 'flex-col', 'leading-none', 'items-start', 'w-fit')}>
                <span className={clsx('text-[6px]', 'lg:text-[9px]', 'tracking-[0.2em]', 'font-inter', 'font-medium', 'text-[#EAE0D5]/70', 'uppercase', 'text-center', 'w-full', 'whitespace-nowrap')}>
                  — EST 2018 —
                </span>
                <span className={clsx('font-playfair', 'text-[15px]', 'md:text-lg', 'lg:text-3xl', 'font-bold', 'tracking-wide', 'uppercase', 'text-[#EAE0D5]', 'whitespace-nowrap')}>
                  Memory{" "}
                  <span className={clsx('font-dancing', 'text-[15px]', 'md:text-lg', 'lg:text-3xl', 'font-semibold', 'normal-case', 'italic', 'text-[#EAE0D5]')}>Club</span>
                </span>
                <span className={clsx('text-[5px]', 'lg:text-[9px]', 'tracking-[0.3em]', 'font-inter', 'uppercase', 'mt-0.5', 'text-[#EAE0D5]/70', 'text-center', 'w-full', 'whitespace-nowrap')}>
                  Photobooth Co.
                </span>
              </div>
              <p className={clsx('font-inter', 'text-[7px]', 'md:text-[8px]', 'lg:text-xs', 'text-[#EAE0D5]/70', 'leading-relaxed', 'mt-1.5', 'lg:mt-3', 'uppercase', 'whitespace-nowrap')}>
                Photos that stay with you,
                <br />
                nights that live forever.
              </p>
            </div>

            {/* Right Columns Wrapper */}
            <div className={clsx('flex', 'flex-row', 'justify-between', 'w-auto', 'gap-5', 'lg:gap-12', 'xl:gap-20')}>
              {/* Explore Column */}
              <div className={clsx('flex', 'flex-col', 'items-start', 'text-left', 'gap-1.5', 'lg:gap-3', 'lg:mt-2')}>
                <h4 className={clsx('font-inter', 'text-[7px]', 'md:text-[8px]', 'lg:text-[11px]', 'font-semibold', 'uppercase', 'tracking-widest', 'text-[#EAE0D5]', 'mb-0.5', 'lg:mb-1', 'whitespace-nowrap')}>
                  Explore
                </h4>
                <div className={clsx('flex', 'flex-col', 'gap-1', 'lg:gap-2')}>
                  <a href="/locations" className={clsx('font-inter', 'text-[6px]', 'md:text-[7px]', 'lg:text-[11px]', 'text-[#EAE0D5]/70', 'hover:text-[#EAE0D5]', 'transition-colors', 'uppercase', 'tracking-widest', 'whitespace-nowrap')}>
                    Locations
                  </a>
                  <a href="/ourstory" className={clsx('font-inter', 'text-[6px]', 'md:text-[7px]', 'lg:text-[11px]', 'text-[#EAE0D5]/70', 'hover:text-[#EAE0D5]', 'transition-colors', 'uppercase', 'tracking-widest', 'whitespace-nowrap')}>
                    Our Story
                  </a>
                </div>
              </div>

              {/* Support Column */}
              <div className={clsx('flex', 'flex-col', 'items-start', 'text-left', 'gap-1.5', 'lg:gap-3', 'lg:mt-2')}>
                <h4 className={clsx('font-inter', 'text-[7px]', 'md:text-[8px]', 'lg:text-[11px]', 'font-semibold', 'uppercase', 'tracking-widest', 'text-[#EAE0D5]', 'mb-0.5', 'lg:mb-1')}>
                  Support
                </h4>
                <div className={clsx('flex', 'flex-col', 'gap-1', 'lg:gap-2')}>
                  <a href="/contact" className={clsx('font-inter', 'text-[6px]', 'md:text-[7px]', 'lg:text-[11px]', 'text-[#EAE0D5]/70', 'hover:text-[#EAE0D5]', 'transition-colors', 'uppercase', 'tracking-widest', 'whitespace-nowrap')}>
                    Contact Us
                  </a>
                  <a href="#" className={clsx('font-inter', 'text-[6px]', 'md:text-[7px]', 'lg:text-[11px]', 'text-[#EAE0D5]/70', 'hover:text-[#EAE0D5]', 'transition-colors', 'uppercase', 'tracking-widest', 'whitespace-nowrap')}>
                    Terms & Privacy
                  </a>
                </div>
              </div>

              {/* Follow Column */}
              <div className={clsx('flex', 'flex-col', 'items-start', 'text-left', 'gap-1.5', 'lg:gap-3', 'lg:mt-2')}>
                <h4 className={clsx('font-inter', 'text-[7px]', 'md:text-[8px]', 'lg:text-[11px]', 'font-semibold', 'uppercase', 'tracking-widest', 'text-[#EAE0D5]', 'mb-0.5', 'lg:mb-1')}>
                  Follow
                </h4>
                <p className={clsx('font-inter', 'text-[6px]', 'md:text-[7px]', 'lg:text-[11px]', 'text-[#EAE0D5]/70', 'uppercase', 'tracking-widest', 'whitespace-nowrap')}>
                  @MEMORYCLUB.CO
                </p>
                <div className={clsx('flex', 'gap-1.5', 'md:gap-2.5', 'lg:gap-4', 'mt-0.5', 'lg:mt-1', 'justify-start')}>
                  <a href="https://instagram.com/yourmemoryclub" target="_blank" rel="noopener noreferrer" className={clsx('text-[#EAE0D5]/90', 'hover:text-[#EAE0D5]', 'transition-colors')} aria-label="Instagram">
                    <svg className={clsx('w-2.5', 'h-2.5', 'md:w-3', 'md:h-3', 'lg:w-5', 'lg:h-5')} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className={clsx('text-[#EAE0D5]/90', 'hover:text-[#EAE0D5]', 'transition-colors')} aria-label="TikTok">
                    <svg className={clsx('w-2.5', 'h-2.5', 'md:w-3', 'md:h-3', 'lg:w-5', 'lg:h-5')} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                  </a>
                  <a href="#" className={clsx('text-[#EAE0D5]/90', 'hover:text-[#EAE0D5]', 'transition-colors')} aria-label="Pinterest">
                    <svg className={clsx('w-2.5', 'h-2.5', 'md:w-3', 'md:h-3', 'lg:w-5', 'lg:h-5')} fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.622 0 12.017 0z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={clsx('hidden', 'lg:flex', 'justify-center', 'lg:justify-end', 'self-center', 'shrink-0')}>
              <div 
                className={clsx('w-20', 'lg:w-28', 'opacity-80')}
                style={{ filter: "brightness(0) invert(1)" }}
              >
                {/* To change the memory club stamp image, update the 'src' attribute below. */}
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

      {/* Black copyright section */}
      <div className={clsx('w-full', 'bg-[#151515]', 'py-6', 'lg:py-8', 'text-center', 'flex', 'flex-col', 'items-center', 'gap-6')}>
        <p className={clsx('font-inter', 'text-[10px]', 'lg:text-[11px]', 'font-medium', 'text-[#EAE0D5]/70', 'tracking-widest')}>
          © 2018 Memory Club. Made to be remembered.
        </p>
      </div>
    </footer>
  );
}
