import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Target, Users, Lightbulb, Award, Shield, Globe } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing the boundaries of AI technology to deliver cutting-edge solutions'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Dedicated to achieving measurable results and exceeding client expectations'
    },
    {
      icon: Lightbulb,
      title: 'Expertise',
      description: 'Deep knowledge and experience in AI and digital transformation'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Commitment to delivering exceptional quality in every project'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building long-term relationships through transparency and reliability'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making AI technology accessible to businesses worldwide'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Media Mentor AI | Our Mission & AI Innovation Journey</title>
        <meta name="description" content="Discover how Media Mentor AI is revolutionizing business through AI innovation. Learn about our mission, values, and commitment to delivering cutting-edge AI solutions." />
        <meta name="keywords" content="Media Mentor AI, about us, AI innovation, company mission, AI expertise, business transformation" />
        <meta property="og:title" content="About Media Mentor AI | Our Mission & AI Innovation Journey" />
        <meta property="og:description" content="Discover how Media Mentor AI is revolutionizing business through AI innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mediamentorai.com/about" />
        <meta property="og:image" content="https://mediamentorai.com/about-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Media Mentor AI" />
        <meta name="twitter:description" content="Revolutionizing business through AI innovation." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mediamentorai.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center"
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
              Transforming Business
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Through AI Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to make advanced AI technology accessible and impactful for businesses worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={ref} className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
            <div className="text-lg text-gray-300 max-w-4xl mx-auto space-y-6">
              <p>
                Media Mentor AI was founded with a simple yet powerful vision: to make cutting-edge AI accessible to businesses of all sizes, empowering them to thrive in a technology-driven world. Based in Toms River NJ, we're a team of AI specialists, data analysts, creative minds, and problem-solvers dedicated to transforming how businesses operate and communicate.
              </p>
              <p>
                Our journey began with a desire to help small, local businesses in Ocean County and all over New Jersey, especially those challenged by the complexities of today's digital landscape. As we watched the demand for high-quality, engaging content and streamlined processes grow, we recognized the potential of AI to bridge the gap. From video and audio production to visual branding, content creation, and advanced analytics, we've built a suite of AI-powered solutions designed to meet the unique needs of modern businesses.
              </p>
              <p>
                But at Media Mentor AI, we're more than just an AI agency. We're your partner in innovation. We believe in the power of intelligent automation, data-driven insights, and creative content to transform businesses. Our approach is rooted in understanding your goals and challenges, so we can provide solutions that don't just meet industry standards but elevate your brand, optimize your workflows, and make data meaningful.
              </p>
              <p>
                With our expertise and dedication to quality, Media Mentor AI is proud to help businesses across New Jersey—and beyond—achieve new levels of engagement, efficiency, and success. We invite you to join us as we continue to push the boundaries of what AI can do for brands, helping them stand out and connect with their audiences in meaningful ways.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;