import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ServiceFeatureCardProps {
  title: string;
  items: string[];
  delay?: number;
}

const ServiceFeatureCard: React.FC<ServiceFeatureCardProps> = ({ title, items, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50"
    >
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + (index * 0.1) }}
            className="flex items-start"
          >
            <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-300">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceFeatureCard;