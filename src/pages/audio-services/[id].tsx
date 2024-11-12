import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { audioServices } from '../../data/audioServices';
import ServiceBackground from '../../components/ServiceBackground';
import ServiceFeatureCard from '../../components/ServiceFeatureCard';
import ProcessTimeline from '../../components/ProcessTimeline';

const AudioServiceDetail = () => {
  const { id } = useParams();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const service = audioServices.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/audio-services" className="text-purple-400 hover:text-purple-300">
            Return to Audio Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  const getEnhancedDescription = (service: any) => {
    switch (service.id) {
      case 'voice-synthesis':
        return `Transform your audio content with our state-of-the-art AI voice synthesis technology, delivering natural and engaging vocal performances that captivate your audience. Our advanced neural networks create incredibly lifelike voices with precise emotional control and perfect pronunciation in multiple languages. Whether you need professional voiceovers for commercials, audiobooks, or corporate training, our AI voices provide consistent quality and unlimited scalability. Save time and resources while maintaining high production standards across all your audio content. Experience the future of voice production with our cutting-edge AI technology.`;
      case 'ivr-systems':
        return `Revolutionize your customer service with our AI-powered Interactive Voice Response systems, providing seamless, natural conversations that enhance user experience and streamline operations. Our advanced natural language processing ensures your customers are understood and served efficiently, 24/7. Reduce wait times and improve satisfaction while maintaining consistent service quality across all interactions. Scale your customer support capabilities without compromising on personal touch or effectiveness. Create a modern, professional first impression that sets your business apart.`;
      case 'podcast-production':
        return `Elevate your podcast production with our comprehensive AI-powered audio solutions, delivering professional-quality content with unprecedented efficiency. Our advanced AI technology handles everything from audio enhancement and noise reduction to content optimization and automated editing. Create consistently engaging episodes with perfect sound quality, whether you're recording in a professional studio or remotely. Save hours of post-production time while maintaining the highest standards of audio excellence. Scale your podcast production without sacrificing quality or authenticity.`;
      case 'audio-translation':
        return `Break language barriers with our sophisticated AI audio translation services, maintaining the natural flow and emotional impact of the original content. Our advanced voice matching technology ensures translations sound authentic and engaging in any target language. Reach global audiences with content that resonates culturally and linguistically, while preserving the original speaker's style and tone. Experience rapid turnaround times and consistent quality across all your translated audio content. Scale your international reach without the need for multiple voice actors or recording sessions.`;
      default:
        return service.description;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Professional AI Audio Solutions`}</title>
        <meta name="description" content={`${service.description} Professional AI-powered audio production services tailored for your business needs.`} />
        <meta name="keywords" content={`${service.features.join(', ')}, ${service.benefits.join(', ')}, AI audio production, professional audio services`} />
        <meta property="og:title" content={`${service.title} | Professional AI Audio Solutions`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mediamentorai.com/audio-services/${service.id}`} />
        <meta property="og:image" content="https://mediamentorai.com/audio-services-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://mediamentorai.com/audio-services/${service.id}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-32 pb-20 bg-black overflow-hidden">
        <ServiceBackground type="audio" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/audio-services"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Audio Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl mr-4">
                <ServiceIcon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">{service.title}</h1>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              {getEnhancedDescription(service)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section ref={ref} className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ServiceFeatureCard
              title="Key Features"
              items={service.features}
              delay={0.2}
            />
            <ServiceFeatureCard
              title="Benefits"
              items={service.benefits}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Use Cases & Process */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ServiceFeatureCard
              title="Use Cases"
              items={service.useCases}
              delay={0.6}
            />
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
              <ProcessTimeline steps={service.process} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AudioServiceDetail;