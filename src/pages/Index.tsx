import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import NewLaunches from "@/components/NewLaunches";
import PromoBanner from "@/components/PromoBanner";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import ShopBy from "@/components/ShopBy";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ShopBy />
        <BestSellers />
        <NewLaunches />
        <PromoBanner />
        <TrustSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
