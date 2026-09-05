# Memory Club - Photobooth Co.

A modern, responsive, and animated landing page for Memory Club, a premium photobooth service. Built with Next.js, Tailwind CSS, and AOS (Animate on Scroll).

## Project Setup

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Customize the Website

This template is designed to be easily customizable. Here is a quick guide on how to change images, social media links, and other content.

### 1. Changing Images

All image assets are stored in the `/public` directory. To change an image:
- Go to the `/public` folder.
- Replace the existing image file with your new image. **Make sure the new image has the exact same filename and extension** (e.g., `image_1.png`).
- Alternatively, you can upload a new image with a different name to the `/public` folder, and then update the `src` attribute in the corresponding React component. 

Here is a quick map of the key images:
- **Hero Section**: `image_1.png` (Main Booth), `image_2.png` (Polaroid), `image_3.png` (Note Paper), `mc.png` (Stamp). (File: `app/components/Hero.js`)
- **Experiences Section**: `img1section2.png` (Classic Strip), `img2section2.png` (Polaroid Experience). (File: `app/components/ExperiencesPlaces.js`)
- **Venues / Collage Section**: `img1section4.png` to `img7section4.png`. (File: `app/components/VenuesStory.js`)
- **Backgrounds**: `bg.png` (Hero), `bg2.png` (Experiences), `bg3.png` (Venues), `bgfooter.png` (Footer).

### 2. Updating Social Media Links

To change the destination of social media links (Instagram, TikTok, Pinterest):

- **In the Venues Section**:
  Open `app/components/VenuesStory.js` and look for the `href="#"` attributes inside the social media SVG anchor tags. Replace `#` with your actual profile URL.
  ```jsx
  {/* Example */}
  <a href="https://instagram.com/yourprofile" aria-label="Instagram">...</a>
  ```
  
- **In the Footer**:
  Open `app/components/Footer.js` and do the same. Look for the `href="#"` attributes inside the social media block.

### 3. Updating Navigation & Action Links

The main action buttons (like "Find Locations", "Our Story") currently use anchor links to scroll to specific sections (e.g., `href="#places"`). If you create new pages in the future, simply update the `href` attribute in `Hero.js`, `Navbar.js`, or `Footer.js` to point to the new route (e.g., `href="/locations"`).

## Technologies Used
- Next.js (App Router)
- Tailwind CSS
- AOS (Animate on Scroll)
