import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { imageServices, imageServiceCategories } from '../../data/imageServices';

const ImageServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Image Generation & Visual Content Services | Professional Solutions</title>
        <meta name="description" content="Create stunning visuals with AI-powered image generation services. From brand imagery to product visualization, transform your visual content with cutting-edge AI technology." />
        <meta name="keywords" content="AI image generation, brand imagery, product visualization, logo design, YouTube thumbnails, comic generation, custom photo packs, virtual brand representative, virtual staging, AI art creation" />
        <meta property="og:title" content="AI Image Generation & Visual Content Services" />
        <meta property="og:description" content="Create stunning visuals with AI-powered image generation services. Transform your visual content with cutting-edge AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mediamentorai.com/image-services" />
        <meta property="og:image" content="https://mediamentorai.com/image-services-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Image Generation Services" />
        <meta name="twitter:description" content="Create stunning visuals with AI-powered technology." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mediamentorai.com/image-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
                <ImageIcon className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Vision with
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                AI-Powered Imagery
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create stunning visuals and bring your ideas to life with our cutting-edge AI image generation technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {imageServiceCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="text-3xl font-bold text-white mb-12 text-center"
              >
                {category.title}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {imageServices
                  .filter(service => category.services.includes(service.title))
                  .map((service, index) => {
                    const ServiceIcon = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index + categoryIndex) * 0.1 }}
                        className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl hover:transform hover:scale-105 transition-transform duration-300"
                      >
                        <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                          <ServiceIcon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-400 mb-6">{service.description}</p>
                        <div className="space-y-3 mb-6">
                          {service.features?.slice(0, 4).map((feature, i) => (
                            <div key={i} className="flex items-center text-gray-300">
                              <CheckCircle2 className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          to={`/image-services/${service.id}`}
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageServices;