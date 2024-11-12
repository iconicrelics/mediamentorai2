import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  step: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-12"
          >
            {/* Step number bubble */}
            <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>

            {/* Step content */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
              <h3 className="text-white font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;