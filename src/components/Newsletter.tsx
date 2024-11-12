import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Mail, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus({
        type: 'success',
        message: 'Thank you for subscribing! Please check your email to confirm your subscription.'
      });
      setEmail('');
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-12 text-center"
    >
      <div className="flex justify-center mb-6">
        <Sparkles className="h-8 w-8 text-purple-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">
        Stay Updated with AI Trends
      </h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Subscribe to our newsletter for the latest insights and updates in AI technology
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              className={`px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center min-w-[120px] ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          {status.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center justify-center p-4 rounded-lg ${
                status.type === 'success'
                  ? 'bg-green-900/50 border border-green-500 text-green-300'
                  : 'bg-red-900/50 border border-red-500 text-red-300'
              }`}
            >
              {status.type === 'success' ? (
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              )}
              {status.message}
            </motion.div>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default Newsletter;