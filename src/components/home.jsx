import Footer from './footer';
import HeroSection from './hero';
import Main from './main';

export default function HomePageComponent() {
  return (
    <div className="font-sans">
      <HeroSection />
      <Main />
      <Footer />
    </div>
  );
}
