import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles, Target, Zap, Star, Layers, Cpu, Server } from 'lucide-react';
import { services } from '../data/services';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Local Expertise',
      description: 'Based in Toms River, serving Ocean County and all of New Jersey with personalized AI solutions'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Leveraging the latest AI advancements for business transformation'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Helping businesses achieve measurable growth through AI innovation'
    }
  ];

  const companyStats = [
    {
      icon: Layers,
      value: '25+',
      label: 'AI Platforms',
      description: 'Harnessing a vast network of AI tools to deliver precise, impactful results'
    },
    {
      icon: Cpu,
      value: 'Custom',
      label: 'AI Solutions',
      description: 'Transforming data into growth with solutions tailored to your business'
    },
    {
      icon: Server,
      value: 'Expert Guidance',
      label: 'Every Step of the Way',
      description: 'Dedicated support to unlock AI\'s potential for your success'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Media Mentor AI | Leading AI Solutions for Business Transformation</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions. Expert AI services in video production, audio synthesis, image generation, automation, content creation, and analytics. Start your AI journey today." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900" />
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              with AI Innovation
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Unlock the future of business with our cutting-edge AI solutions tailored for your success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            <a
              href="/services"
              className="inline-flex items-center px-8 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity"
            >
              Where We Can Help
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={ref} className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive AI solutions designed to elevate your business to new heights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <a href={service.link} className="inline-flex items-center mt-4 text-purple-400 hover:text-purple-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose Media Mentor AI
            </h2>
            <p className="text-gray-400 text-lg">
              Your trusted partner in AI-driven business transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl text-center"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyStats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transform rotate-180 translate-y-32 group-hover:translate-y-0 transition-transform duration-700" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <StatIcon className="h-8 w-8 text-purple-400" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="text-xl font-semibold text-purple-400 mb-4"
                  >
                    {stat.label}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    className="text-gray-400"
                  >
                    {stat.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;