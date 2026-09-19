import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import clsx from 'clsx';

export const metadata = {
  title: 'Memory Club | Contact',
  description: 'Get in touch with Memory Club.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'mike@memoryclub.co',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      )
    },
    {
      label: 'Phone',
      value: '(647) 555-0138',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.439-4.14-7.036-7.038l1.292-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      )
    },
    {
      label: 'Instagram',
      value: '@yourmemoryclub',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="16" height="16" x="4" y="4" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" x2="16.5" y1="7.5" y2="7.5" />
        </svg>
      )
    },
    {
      label: 'TikTok',
      value: '@yourmemoryclub',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      )
    },
    {
      label: 'Pinterest',
      value: '@yourmemoryclub',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 20l4-9" />
          <path d="M10.7 14c.437 1.263 1.43 2 2.55 2 2.071 0 3.75-1.552 3.75-4a5 5 0 1 0-9.7 1.7" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="flex-1 relative flex flex-col items-center justify-start pt-20 pb-10 md:pt-28 md:pb-12 px-6" style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center", minHeight: '100vh' }}>
        
        {/* Title Area */}
        <div className="flex flex-col items-center justify-center text-center mt-2 md:mt-4 mb-6 md:mb-8">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A1A] mb-4">
            CONTACT
          </h1>
          <svg className="w-6 h-6 md:w-8 md:h-8 text-[#A84A3B] mb-6 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <p className="font-inter text-xs md:text-sm font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
            WE'D LOVE TO HEAR FROM YOU.
          </p>
        </div>

        {/* Contact List */}
        <div className="w-full max-w-[500px] flex flex-col gap-3 md:gap-4 z-10 mb-10 md:mb-12">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className="w-full flex items-center bg-transparent border border-[#1A1A1A]/20 rounded-xl px-6 py-4 md:py-5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="text-[#A84A3B] shrink-0 mr-5">
                {item.icon}
              </div>
              <div className="w-px h-6 bg-[#1A1A1A]/20 shrink-0 mr-6"></div>
              <div className="font-playfair text-lg md:text-xl font-bold text-[#1A1A1A] w-[100px] md:w-[120px] shrink-0">
                {item.label}
              </div>
              <div className="font-inter text-sm md:text-base text-[#1A1A1A]/80 font-medium truncate">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Send Email Button */}
        <div className="relative z-10">
          <a href="mailto:mike@memoryclub.co" className="inline-block bg-[#1A1A1A] text-white px-10 py-4 rounded-md font-inter text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#2C2520] transition-colors relative">
            SEND AN EMAIL
          </a>
          
          {/* Sparkles SVG */}
          <svg className="absolute -top-7 -right-7 w-12 h-12 text-[#A84A3B] pointer-events-none" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M14 20 L13 10 M22 22 L30 14 M26 30 L35 28" />
          </svg>
        </div>

      </main>

      <Footer />
    </>
  );
}
