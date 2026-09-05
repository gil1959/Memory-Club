export default function Venues() {
  const venues = [
    "The Drake Hotel",
    "Soho House",
    "1 Hotel",
    "Ace Hotel",
    "The Well",
    "Loversland Festival",
  ];

  return (
    <section id="venues" className="bg-cream-dark py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <div className="flex items-center gap-4">
            <h2 className="font-playfair text-2xl md:text-3xl font-black uppercase tracking-wide">
              Found In Good Places
            </h2>
            <p className="font-inter text-xs md:text-sm text-text-dark/50 tracking-wide hidden md:block">
              Real people. Real moments. Real venues.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-playfair text-xs uppercase tracking-[0.15em] text-text-dark/50">
              Follow Along
            </span>
            <span className="font-playfair text-sm font-semibold uppercase tracking-wide">
              @memoryclub.co
            </span>
            {/* Social icons */}
            <div className="flex gap-3 ml-2">
              <a href="#" className="w-8 h-8 rounded-full bg-text-dark/10 flex items-center justify-center hover:bg-text-dark/20 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-text-dark/10 flex items-center justify-center hover:bg-text-dark/20 transition-colors" aria-label="TikTok">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V12.6a8.28 8.28 0 005.58 2.17V11.3a4.85 4.85 0 01-3.77-1.85V6.69h3.77z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-text-dark/10 flex items-center justify-center hover:bg-text-dark/20 transition-colors" aria-label="Pinterest">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 00-4.373 23.178c-.07-.633-.133-1.605.028-2.297.145-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .687-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.423 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 01.056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12 12 0 1012 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Photo gallery row */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 w-[140px] md:w-[160px] polaroid hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ "--rotate": `${(i % 2 === 0 ? 1 : -1) * (1 + (i % 3))}deg` }}
            >
              <div className="placeholder-img aspect-[3/4] rounded-sm">
                <span className="z-10 text-white/50 text-xs font-caveat">Moment {i + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Venue partners */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10 justify-center border-t border-text-dark/10 pt-8">
          <span className="font-inter text-xs uppercase tracking-[0.2em] text-text-dark/40">
            You can find us at
          </span>
          {venues.map((venue) => (
            <span
              key={venue}
              className="font-playfair text-sm md:text-base font-bold uppercase tracking-wider text-text-dark/60 hover:text-text-dark transition-colors cursor-pointer"
            >
              {venue}
            </span>
          ))}
          <span className="font-playfair text-sm font-semibold uppercase tracking-wider text-text-dark/40">
            & More
          </span>
        </div>
      </div>
    </section>
  );
}
