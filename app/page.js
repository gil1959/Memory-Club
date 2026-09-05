import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperiencesPlaces from "./components/ExperiencesPlaces";
import VenuesStory from "./components/VenuesStory";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ExperiencesPlaces />
        <VenuesStory />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
