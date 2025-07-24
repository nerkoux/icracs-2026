import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutPIET from "@/components/sections/about-piet";
import AboutICRACS from "@/components/sections/about-icracs";
import PublicationTechnicalPartners from "@/components/sections/publication-technical-partners";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <section id="about">
          <AboutPIET />
          <AboutICRACS />
        </section>
        <PublicationTechnicalPartners />
        <section id="contact">
          {/* Contact section will be added here */}
        </section>
      </main>
      <Footer />
    </>
  );
}
