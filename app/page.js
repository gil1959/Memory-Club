import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperiencesPlaces from "./components/ExperiencesPlaces";
import VenuesStory from "./components/VenuesStory";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-20">
        <Hero />
        <ExperiencesPlaces />
        <VenuesStory />
      </main>
      <Footer />
    </>
  );
}
