import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WebProjects from '@/components/WebProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WebProjects />
      <Contact />
      <Footer />
    </main>
  );
}