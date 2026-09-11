import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LocationsHero from '../components/locations/LocationsHero';
import OurLocations from '../components/locations/OurLocations';
import CantFindCity from '../components/locations/CantFindCity';

export const metadata = {
  title: 'Memory Club | Locations',
  description: 'Find a Memory Club photobooth near you.',
};

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-20">
        <LocationsHero />
        <OurLocations />
        <CantFindCity />
      </main>
      <Footer />
    </>
  );
}
