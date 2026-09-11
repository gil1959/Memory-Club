import clsx from 'clsx';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="w-full flex flex-col">
      <div 
        className="w-full pt-8 lg:pt-10 pb-3 text-[#EAE0D5] flex flex-col"
        style={{
          backgroundImage: "url('/bgfooter.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-8 mb-8">
            
            <div className="flex flex-col gap-2 lg:w-1/4">
              <div className="flex flex-col leading-none items-center lg:items-start w-fit mx-auto lg:mx-0">
                <span className="font-playfair text-3xl font-bold tracking-wide uppercase">
                  Memory <span className="font-playfair italic font-normal normal-case">Club</span>
                </span>
                <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-inter uppercase mt-1 text-[#EAE0D5] text-center w-full">
                  Photobooth Co.
                </span>
              </div>
              <p className="font-inter text-xs text-[#EAE0D5]/70 leading-relaxed mt-3 uppercase max-w-[220px]">
                Photos that stay with you,
                <br />
                nights that live forever.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-inter text-[11px] font-medium uppercase tracking-widest text-[#EAE0D5]">
                Explore
              </h4>
              <div className="flex flex-col gap-2">
                <a href="#locations" className="font-inter text-[11px] text-[#EAE0D5]/70 hover:text-[#EAE0D5] transition-colors uppercase tracking-widest">
                  Locations
                </a>
                <a href="#story" className="font-inter text-[11px] text-[#EAE0D5]/70 hover:text-[#EAE0D5] hover:scale-105 origin-left transition-all duration-300 uppercase tracking-widest">
                  Our Story
                </a>
                <a href="#venues" className="font-inter text-[11px] text-[#EAE0D5]/70 hover:text-[#EAE0D5] transition-colors uppercase tracking-widest">
                  Gallery
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-inter text-[11px] font-medium uppercase tracking-widest text-[#EAE0D5]">
                Support
              </h4>
              <div className="flex flex-col gap-2">
                <a href="#contact" className="font-inter text-[11px] text-[#EAE0D5]/70 hover:text-[#EAE0D5] transition-colors uppercase tracking-widest">
                  Contact Us
                </a>
                <a href="#" className="font-inter text-[11px] text-[#EAE0D5]/70 hover:text-[#EAE0D5] transition-colors uppercase tracking-widest">
                  Terms & Privacy
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-inter text-[11px] font-medium uppercase tracking-widest text-[#EAE0D5]">
                Follow Along
              </h4>
              <p className="font-inter text-[11px] text-[#EAE0D5]/70 uppercase tracking-widest">
                @memoryclub.co
              </p>
              <div className="flex gap-4 mt-1 justify-center lg:justify-start">
                {/* To update the social media redirect links, modify the 'href' attribute for each anchor tag below. */}
                <a href="#" className="text-[#EAE0D5]/90 hover:text-[#EAE0D5] transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="text-[#EAE0D5]/90 hover:text-[#EAE0D5] transition-colors" aria-label="TikTok">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
                <a href="#" className="text-[#EAE0D5]/90 hover:text-[#EAE0D5] transition-colors" aria-label="Pinterest">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.622 0 12.017 0z"/></svg>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end lg:pl-10">
              <div 
                className="w-24 md:w-32 opacity-80"
                style={{ filter: "brightness(0) invert(1)" }}
              >
                {/* To change the memory club stamp image, update the 'src' attribute below. */}
                <Image
                  src="/mc.png"
                  alt="Memory Club Stamp"
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="w-full text-center mt-10 lg:mt-14">
          <p className="font-inter text-[11px] font-medium text-[#EAE0D5]/80 tracking-widest">
            © 2018 Memory Club. Made to be remembered.
          </p>
        </div>
      </div>
    </footer>
  );
}
