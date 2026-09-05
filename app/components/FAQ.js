"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How many photos and prints do I get?",
    answer:
      "Each session captures four photos and prints two matching strips.",
  },
  {
    question: "Are the photos only black and white?",
    answer:
      "Yes. High-contrast black and white is the MemoryClub signature.",
  },
  {
    question: "Do I get a digital copy?",
    answer:
      "No. We keep it analog. Your photos are printed once, so the moment remains exactly as it happened.",
  },
  {
    question: "What does a session cost?",
    answer:
      "Pricing can vary by location. The price is always shown clearly at the booth before you begin.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative w-full py-20 lg:py-28 border-t border-[#131111]/10"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12" data-aos="fade-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-black uppercase tracking-wide">
            Questions?
          </h2>
          <span className="font-inter text-sm md:text-base text-text-dark/50 uppercase tracking-wider">
            We've got answers.
          </span>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#EAE0D5]/40 rounded-md border border-[#131111]/10 p-6 hover:border-[#131111]/20 transition-all duration-300 cursor-pointer group"
              onClick={() => toggle(index)}
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-playfair text-sm md:text-base font-bold uppercase tracking-wide flex-1">
                  {faq.question}
                </h3>
                <button
                  className={`shrink-0 w-8 h-8 flex items-center justify-center text-[#B87050] transition-all duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  aria-label={openIndex === index ? "Close" : "Open"}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-inter text-sm text-text-dark/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
