import "./globals.css";

export const metadata = {
  title: "Memory Club — Photobooth Co. | Memories Made Real",
  description:
    "Memory Club places handcrafted photo booths in selected bars, restaurants, hotels, clubs, and similar venues. Each booth captures the real, unfiltered moments that make nights out unforgettable.",
  keywords: "photo booth, photobooth, memory club, polaroid, photo strip, bars, hotels, restaurants, clubs",
};

import AosInit from "./components/AosInit";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Anton&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Satisfy&family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-inter bg-cream text-text-dark">
        <AosInit />
        {children}
      </body>
    </html>
  );
}
