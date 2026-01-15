import "./App.css";
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import LiveMapSection from "@/components/landing/LiveMapSection";
import LivePerformance from "@/components/landing/LivePerformance";
import Partners from "@/components/landing/Partners";
import Footer from "@/components/landing/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9] overflow-x-hidden relative">
      {/* Noise texture overlay for depth */}
      <div className="noise-overlay" />

      {/* Main content */}
      <Navigation />
      <Hero />
      <Features />
      <LiveMapSection />
      <LivePerformance />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
