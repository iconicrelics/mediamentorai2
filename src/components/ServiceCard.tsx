import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  index: number;
}

const ServiceCard = ({ title, description, icon: Icon, features, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl hover:transform hover:scale-105 transition-transform duration-300"
    >
      <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="space-y-3 mb-6">
        {features.slice(0, 4).map((feature, i) => (
          <div key={i} className="flex items-center text-gray-300">
            <ArrowRight className="h-4 w-4 text-purple-400 mr-2" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <a
        href={`/services/${title.toLowerCase().replace(' ', '-')}`}
        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
      >
        View Details
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </motion.div>
  );
};

export default ServiceCard;