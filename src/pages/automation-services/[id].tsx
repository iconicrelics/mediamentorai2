import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { automationServices } from '../../data/automationServices';
import ServiceBackground from '../../components/ServiceBackground';
import ServiceFeatureCard from '../../components/ServiceFeatureCard';
import ProcessTimeline from '../../components/ProcessTimeline';

const AutomationServiceDetail = () => {
  const { id } = useParams();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const service = automationServices.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/automation-services" className="text-purple-400 hover:text-purple-300">
            Return to Automation Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  const getEnhancedDescription = (service: any) => {
    switch (service.id) {
      case 'workflow-automation':
        return `Transform your business operations with our intelligent workflow automation solutions, designed to streamline processes and maximize efficiency. Our advanced AI technology analyzes your existing workflows to identify optimization opportunities and implement smart automation strategies that reduce manual tasks and eliminate bottlenecks. Experience seamless integration with your current systems while maintaining complete visibility and control over automated processes. From simple task automation to complex workflow orchestration, our platform adapts to your unique business needs while ensuring compliance and maintaining quality standards. Boost productivity and reduce operational costs with intelligent automation that scales with your business.`;
      case 'website-development':
        return `Revolutionize your digital presence with our AI-powered website and application development services. Our cutting-edge technology creates intelligent, responsive websites that adapt to user behavior and optimize performance in real-time. Leverage advanced analytics and machine learning to deliver personalized user experiences that drive engagement and conversions. From dynamic content management to automated testing and optimization, our solutions ensure your digital platforms stay ahead of the competition. Experience rapid development cycles and continuous improvement while maintaining enterprise-grade security and scalability.`;
      case 'customer-experience':
        return `Elevate your customer service with our comprehensive AI-powered automation suite. Our intelligent systems provide 24/7 support through natural language processing and advanced chatbot technology, ensuring consistent, high-quality customer interactions across all channels. Implement smart routing and automated response systems that learn from each interaction to improve service quality continuously. From initial contact to resolution, our platform manages the entire customer journey while gathering valuable insights for ongoing optimization. Transform your customer service operations with scalable, efficient automation that enhances satisfaction and loyalty.`;
      case 'sales-marketing':
        return `Accelerate your revenue growth with our integrated sales and marketing automation platform. Our AI-driven solutions streamline your entire pipeline, from lead generation to conversion, with intelligent tracking and optimization at every step. Implement sophisticated lead scoring, automated nurture campaigns, and personalized outreach that adapts to prospect behavior in real-time. Leverage predictive analytics to identify high-value opportunities and optimize resource allocation for maximum ROI. Transform your sales and marketing operations with automation that drives results while reducing manual effort.`;
      case 'finance-operations':
        return `Optimize your financial processes with our comprehensive AI-powered automation solutions. From accounts payable and receivable to complex financial reporting, our platform streamlines operations while ensuring accuracy and compliance. Implement intelligent systems that automate data entry, reconciliation, and analysis, reducing manual effort and minimizing errors. Leverage advanced analytics for real-time financial insights and forecasting that drive better business decisions. Transform your financial operations with automation that enhances efficiency while maintaining strict security and regulatory compliance.`;
      case 'project-management':
        return `Enhance project delivery with our AI-driven project and resource management automation platform. Our intelligent systems optimize resource allocation, track progress in real-time, and automatically identify potential risks before they impact your timeline. Implement smart scheduling and task management that adapts to changing priorities and team availability. From automated status updates to predictive analytics for project outcomes, our platform ensures successful delivery while maximizing team efficiency. Transform your project management approach with automation that drives consistency and success across all initiatives.`;
      case 'document-processing':
        return `Revolutionize your document management with our AI-powered intelligent processing solutions. Our advanced OCR and natural language processing technologies automate document classification, data extraction, and routing while maintaining accuracy and security. Implement smart workflows that handle document verification, compliance checking, and automated approvals with minimal human intervention. From invoice processing to contract management, our platform streamlines document-heavy operations while ensuring regulatory compliance. Transform your document handling processes with automation that scales efficiently while reducing errors and processing time.`;
      case 'hr-automation':
        return `Modernize your HR operations with our comprehensive AI-powered automation solutions. From recruitment and onboarding to performance management and benefits administration, our platform streamlines every aspect of human resources. Implement intelligent systems that automate candidate screening, document processing, and employee communications while maintaining a personal touch. Leverage advanced analytics for workforce insights and predictive modeling that enhance decision-making. Transform your HR processes with automation that improves efficiency while enhancing the employee experience.`;
      case 'calendar-intelligence':
        return `Optimize your time management with our AI-powered calendar and meeting intelligence platform. Our sophisticated algorithms analyze scheduling patterns, automate coordination, and optimize meeting times for maximum productivity. Implement smart scheduling that considers time zones, participant preferences, and meeting priorities to create efficient calendars automatically. From automated reminders to intelligent follow-up tracking, our system ensures every meeting drives value. Transform your organizational time management with automation that maximizes productivity while reducing coordination overhead.`;
      case 'business-intelligence':
        return `Empower your decision-making with our AI-driven business intelligence automation platform. Our advanced analytics engine automatically collects, processes, and visualizes data from multiple sources to provide actionable insights in real-time. Implement intelligent reporting systems that identify trends, anomalies, and opportunities while automating routine analysis tasks. From automated data collection to predictive modeling, our platform ensures you always have the insights needed to make informed decisions. Transform your business intelligence capabilities with automation that delivers powerful insights while reducing analytical overhead.`;
      default:
        return service.description;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Professional AI Automation Solutions`}</title>
        <meta name="description" content={`${service.description} Professional AI-powered automation services tailored for your business needs.`} />
        <meta name="keywords" content={`${service.features.join(', ')}, ${service.benefits.join(', ')}, AI automation, professional automation services`} />
        <meta property="og:title" content={`${service.title} | Professional AI Automation Solutions`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mediamentorai.com/automation-services/${service.id}`} />
        <meta property="og:image" content="https://mediamentorai.com/automation-services-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://mediamentorai.com/automation-services/${service.id}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-32 pb-20 bg-black overflow-hidden">
        <ServiceBackground type="automation" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/automation-services"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Automation Services
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

export default AutomationServiceDetail;