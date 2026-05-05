/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServicesOverview from './components/ServicesOverview';
import SignatureServices from './components/SignatureServices';
import Process from './components/Process';
import Gallery from './components/Gallery';
import WhyChoose from './components/WhyChoose';
import CeramicFeature from './components/CeramicFeature';
import ServiceSelector from './components/ServiceSelector';
import Reviews from './components/Reviews';
import ServiceArea from './components/ServiceArea';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-red selection:text-white">
      <Loader />
      <Navigation />
      
      <main>
        <Hero />
        <TrustStrip />
        <ServicesOverview />
        <SignatureServices />
        <Process />
        <Gallery />
        <WhyChoose />
        <CeramicFeature />
        <ServiceSelector />
        <Reviews />
        <ServiceArea />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
