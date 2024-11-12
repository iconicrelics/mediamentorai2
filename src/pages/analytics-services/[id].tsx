import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { analyticsServices } from '../../data/analyticsServices';
import ServiceBackground from '../../components/ServiceBackground';
import ServiceFeatureCard from '../../components/ServiceFeatureCard';
import ProcessTimeline from '../../components/ProcessTimeline';

const AnalyticsServiceDetail = () => {
  const { id } = useParams();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const service = analyticsServices.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/analytics-services" className="text-purple-400 hover:text-purple-300">
            Return to Analytics Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  const getEnhancedDescription = (service: any) => {
    switch (service.id) {
      case 'performance-analytics':
        return `Transform your business decision-making with our comprehensive AI-powered performance analytics platform. Our advanced machine learning algorithms continuously monitor and analyze your key performance indicators, providing real-time insights and actionable recommendations. Experience the power of predictive analytics that not only tracks current performance but anticipates future trends and potential opportunities. From operational efficiency to strategic planning, our platform delivers deep insights that drive measurable improvements across your organization. Leverage automated reporting and intelligent alerts that keep stakeholders informed and enable proactive decision-making at every level.`;
      case 'predictive-analysis':
        return `Unlock the future of your business with our sophisticated AI-driven predictive analysis and forecasting platform. Our advanced neural networks analyze historical data patterns and market indicators to generate highly accurate predictions of future trends and outcomes. From sales forecasting to risk assessment, our system provides actionable insights that help you stay ahead of market changes and optimize resource allocation. Experience the power of machine learning that continuously improves its predictions while adapting to changing business conditions and emerging patterns.`;
      case 'market-research':
        return `Revolutionize your market understanding with our AI-powered comprehensive market research platform. Our sophisticated algorithms analyze vast amounts of market data, consumer behavior patterns, and competitive intelligence to provide deep insights into market opportunities and challenges. From consumer sentiment analysis to competitive positioning, our system delivers actionable insights that drive strategic decision-making. Experience rapid, data-driven market analysis that helps you identify emerging trends and opportunities before your competitors.`;
      case 'sentiment-analysis':
        return `Transform your brand perception management with our advanced AI-powered sentiment analysis platform. Our cutting-edge natural language processing algorithms analyze customer feedback across all channels to provide real-time insights into brand perception and customer satisfaction. From social media monitoring to customer review analysis, our system delivers detailed emotional intelligence that helps you understand and improve customer relationships. Experience comprehensive sentiment tracking that enables proactive brand management and customer experience optimization.`;
      case 'customer-behavior':
        return `Optimize your customer understanding with our AI-driven behavior analytics platform. Our sophisticated machine learning algorithms analyze customer interactions across all touchpoints to create detailed behavioral profiles and journey maps. From purchase patterns to engagement preferences, our system provides deep insights into customer motivations and decision-making processes. Experience comprehensive customer analytics that enable personalized marketing strategies and improved customer experiences across all channels.`;
      case 'data-visualization':
        return `Transform complex data into compelling visual insights with our AI-enhanced data visualization platform. Our advanced algorithms automatically process and present data in intuitive, interactive formats that make complex information accessible and actionable. From real-time dashboards to comprehensive reports, our system creates engaging visualizations that drive understanding and decision-making. Experience dynamic data presentation that adapts to user needs while maintaining consistency and clarity across all levels of your organization.`;
      case 'sales-analytics':
        return `Maximize your revenue potential with our AI-powered sales analytics platform. Our advanced algorithms analyze sales patterns, customer behavior, and market conditions to provide actionable insights that drive sales performance. From pipeline optimization to territory management, our system delivers comprehensive analytics that help you identify opportunities and improve conversion rates. Experience predictive sales intelligence that enables data-driven decision-making and strategic planning across your entire sales organization.`;
      case 'digital-performance':
        return `Optimize your online presence with our comprehensive AI-driven digital performance analytics platform. Our sophisticated algorithms track and analyze all aspects of your digital footprint, from website performance to user engagement metrics. From conversion optimization to content effectiveness, our system provides detailed insights that drive digital success. Experience real-time performance monitoring that helps you maximize the impact of your digital investments while continuously improving user experience.`;
      case 'social-analytics':
        return `Transform your social media strategy with our AI-powered social analytics platform. Our advanced algorithms analyze social media engagement, content performance, and audience behavior across all major platforms to provide comprehensive insights into your social media effectiveness. From content optimization to influencer analysis, our system delivers actionable intelligence that drives social media success. Experience detailed social analytics that help you build stronger connections with your audience while maximizing your social media ROI.`;
      case 'competitive-intelligence':
        return `Stay ahead of the competition with our AI-driven competitive intelligence platform. Our sophisticated algorithms continuously monitor and analyze competitor activities, market positioning, and industry trends to provide strategic insights that inform your business decisions. From pricing strategies to market opportunities, our system delivers comprehensive competitive analysis that helps you maintain your competitive advantage. Experience real-time market intelligence that enables proactive strategy development and market positioning.`;
      default:
        return service.description;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Professional AI Analytics Solutions`}</title>
        <meta name="description" content={`${service.description} Professional AI-powered analytics services tailored for your business needs.`} />
        <meta name="keywords" content={`${service.features.join(', ')}, ${service.benefits.join(', ')}, AI analytics, professional analytics services`} />
        <meta property="og:title" content={`${service.title} | Professional AI Analytics Solutions`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mediamentorai.com/analytics-services/${service.id}`} />
        <meta property="og:image" content="https://mediamentorai.com/analytics-services-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://mediamentorai.com/analytics-services/${service.id}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-32 pb-20 bg-black overflow-hidden">
        <ServiceBackground type="analytics" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/analytics-services"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Analytics Services
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

export default AnalyticsServiceDetail;