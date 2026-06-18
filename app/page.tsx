import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Perspectives from './components/Perspectives';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Solutions />
      <Perspectives />
      <Footer />
    </div>
  );
}
