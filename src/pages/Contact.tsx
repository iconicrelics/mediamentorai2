import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Contact Media Mentor AI | Book a Free AI Consultation</title>
        <meta name="description" content="Get in touch with Media Mentor AI for a free consultation. Let's discuss how our AI solutions can transform your business. Expert guidance on AI implementation and strategy." />
        <meta name="keywords" content="contact Media Mentor AI, AI consultation, book consultation, AI solutions contact, business transformation, AI implementation, AI strategy, artificial intelligence consulting" />
        <meta property="og:title" content="Contact Media Mentor AI | Book a Free AI Consultation" />
        <meta property="og:description" content="Get in touch for a free consultation. Let's discuss how our AI solutions can transform your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mediamentorai.com/contact" />
        <meta property="og:image" content="https://mediamentorai.com/contact-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Media Mentor AI" />
        <meta name="twitter:description" content="Book a free AI consultation and transform your business today." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mediamentorai.com/contact" />
      </Helmet>

      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl"
            >
              <h1 className="text-3xl font-bold text-white mb-2">Get in Touch</h1>
              <p className="text-gray-300 mb-8">
                Ready to transform your business with AI? Let's discuss how we can help.
              </p>

              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <a href="mailto:MediaMentorAI@gmail.com" className="text-white hover:text-purple-400">
                        MediaMentorAI@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <a href="tel:+17325977375" className="text-white hover:text-purple-400">
                        (732) 597-7375
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-white">Toms River, New Jersey</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Office Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Book a free consultation and let's discuss how we can help transform your business with AI solutions.
                </p>
                <a
                  href="tel:+17325977375"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;