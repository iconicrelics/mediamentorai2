import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Our Services | Media Mentor AI</title>
        <meta 
          name="description" 
          content="Explore our comprehensive AI solutions including video production, audio synthesis, image generation, automation, content creation, and analytics." 
        />
        <meta 
          name="keywords" 
          content="AI services, video production, audio synthesis, image generation, business automation, content creation, analytics, artificial intelligence, digital transformation"
        />
        <meta property="og:title" content="Our Services | Media Mentor AI" />
        <meta 
          property="og:description" 
          content="Explore our comprehensive AI solutions including video production, audio synthesis, image generation, automation, content creation, and analytics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mediamentorai.com/services" />
        <link rel="canonical" href="https://mediamentorai.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center"
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
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                AI Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered solutions designed to elevate your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        <CheckCircle2 className="h-5 w-5 text-purple-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={service.link}
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
      </section>
    </>
  );
};

export default Services;