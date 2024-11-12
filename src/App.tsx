import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import VideoServices from './pages/video-services';
import VideoServiceDetail from './pages/video-services/[id]';
import AudioServices from './pages/audio-services';
import AudioServiceDetail from './pages/audio-services/[id]';
import ImageServices from './pages/image-services';
import ImageServiceDetail from './pages/image-services/[id]';
import AutomationServices from './pages/automation-services';
import AutomationServiceDetail from './pages/automation-services/[id]';
import ContentServices from './pages/content-services';
import ContentServiceDetail from './pages/content-services/[id]';
import AnalyticsServices from './pages/analytics-services';
import AnalyticsServiceDetail from './pages/analytics-services/[id]';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/video-services" element={<VideoServices />} />
              <Route path="/video-services/:id" element={<VideoServiceDetail />} />
              <Route path="/audio-services" element={<AudioServices />} />
              <Route path="/audio-services/:id" element={<AudioServiceDetail />} />
              <Route path="/image-services" element={<ImageServices />} />
              <Route path="/image-services/:id" element={<ImageServiceDetail />} />
              <Route path="/automation-services" element={<AutomationServices />} />
              <Route path="/automation-services/:id" element={<AutomationServiceDetail />} />
              <Route path="/content-services" element={<ContentServices />} />
              <Route path="/content-services/:id" element={<ContentServiceDetail />} />
              <Route path="/analytics-services" element={<AnalyticsServices />} />
              <Route path="/analytics-services/:id" element={<AnalyticsServiceDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;