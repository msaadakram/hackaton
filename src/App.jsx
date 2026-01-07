import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedSection from './components/TrustedSection';
import MasterLibrary from './components/MasterLibrary';
import FeaturesGrid from './components/FeaturesGrid';
import UseCasesSection from './components/UseCasesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CustomProductSection from './components/CustomProductSection';
import BenefitsGrid from './components/BenefitsGrid';
import StatsSection from './components/StatsSection';
import ReviewsSection from './components/ReviewsSection';
import FreeResourcesSection from './components/FreeResourcesSection';
import DiscoverSection from './components/DiscoverSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Banner />
      <Header />
      <Hero />
      <TrustedSection />
      <MasterLibrary />
      <FeaturesGrid />
      <UseCasesSection />
      <TestimonialsSection />
      <CustomProductSection />
      <BenefitsGrid />
      <StatsSection />
      <ReviewsSection />
      <FreeResourcesSection />
      <DiscoverSection />
      <Footer />
    </div>
  );
}

export default App;
