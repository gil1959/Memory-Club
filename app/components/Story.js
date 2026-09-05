export default function Story() {
  return (
    <section id="story" className="bg-cream paper-texture py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left - Polaroid photo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="polaroid w-[220px] md:w-[280px]" style={{ "--rotate": "-4deg" }}>
                <div className="placeholder-img aspect-[4/5] rounded-sm">
                  <span className="z-10 text-white/60 font-caveat text-lg">Our Story</span>
                </div>
              </div>
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-tape rotate-[-2deg] z-10" />
            </div>
          </div>

          {/* Center - Text */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="font-playfair text-2xl md:text-3xl font-black uppercase tracking-wide">
              Our Story
            </h2>
            <h3 className="font-playfair text-xl md:text-2xl font-bold uppercase tracking-wide leading-snug">
              The World Needs More Remembered Memories.
            </h3>
            <div className="flex flex-col gap-4 font-inter text-sm md:text-base text-text-dark/70 leading-relaxed">
              <p>Life moves fast. Hold onto what matters.</p>
              <p>
                Not every night changes your life. But some do stay with you.
                <br />
                We make space for those moments so they don't disappear as
                quickly as they arrive.
              </p>
            </div>
          </div>

          {/* Right - Stamp Badge */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="stamp-badge w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center">
              <span className="text-[8px] md:text-[9px] font-inter uppercase tracking-[0.15em]">Memory Club</span>
              <span className="text-3xl md:text-4xl font-playfair font-black">MC</span>
              <span className="text-[7px] md:text-[8px] font-inter uppercase tracking-[0.15em]">Est. 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
