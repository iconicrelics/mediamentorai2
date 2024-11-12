import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { contentServices } from '../../data/contentServices';
import ServiceBackground from '../../components/ServiceBackground';
import ServiceFeatureCard from '../../components/ServiceFeatureCard';
import ProcessTimeline from '../../components/ProcessTimeline';

const ContentServiceDetail = () => {
  const { id } = useParams();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const service = contentServices.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/content-services" className="text-purple-400 hover:text-purple-300">
            Return to Content Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  const getEnhancedDescription = (service: any) => {
    switch (service.id) {
      case 'long-form-content':
        return `Elevate your digital presence with our AI-powered long-form content creation suite, designed to produce comprehensive, engaging, and SEO-optimized content that establishes your authority in your industry. Our advanced natural language processing technology creates in-depth articles, whitepapers, and research papers that maintain your brand's voice while incorporating the latest industry insights and trends. Experience rapid content production without sacrificing quality or depth, as our AI analyzes vast amounts of data to create well-researched, original content that resonates with your target audience. From technical documentation to thought leadership pieces, our platform delivers consistent, high-quality content that drives engagement and improves search rankings.`;
      case 'marketing-content':
        return `Transform your marketing efforts with our comprehensive AI-driven content ecosystem, creating cohesive, compelling marketing materials that drive results across all channels. Our sophisticated algorithms analyze successful marketing patterns and consumer behavior to generate persuasive copy that converts, whether it's for brochures, presentations, or sales proposals. Maintain perfect brand consistency while scaling your content production, as our AI ensures every piece aligns with your brand guidelines and messaging strategy. Experience rapid iteration and testing capabilities that help optimize your marketing messages for maximum impact and engagement.`;
      case 'social-media':
        return `Revolutionize your social media presence with our AI-powered content management and creation platform, delivering engaging, platform-optimized content that drives meaningful engagement. Our advanced algorithms analyze trending topics, audience behavior, and engagement patterns to create compelling posts that resonate with your followers across all major social platforms. Generate consistent, high-quality content that maintains your brand voice while leveraging real-time data to optimize posting schedules and content themes. From viral-worthy posts to community-building conversations, our platform ensures your social media strategy delivers measurable results.`;
      case 'email-automation':
        return `Maximize your email marketing impact with our AI-driven email and newsletter automation platform, creating personalized, engaging campaigns that drive opens, clicks, and conversions. Our sophisticated technology analyzes subscriber behavior and preferences to generate highly targeted content that resonates with each segment of your audience. From welcome sequences to re-engagement campaigns, our system automatically creates and optimizes email content that maintains your brand voice while driving results. Experience the power of intelligent A/B testing and real-time optimization that ensures your email campaigns consistently perform above industry standards.`;
      case 'product-content':
        return `Transform your product messaging with our AI-powered product content creation service, generating compelling descriptions and specifications that drive conversions across all sales channels. Our advanced algorithms analyze successful product content patterns and buyer behavior to create persuasive copy that highlights key benefits and features in ways that resonate with your target audience. Maintain consistent product messaging across all platforms while scaling your content production efficiently. From e-commerce listings to detailed product guides, our platform ensures your product content stands out in crowded marketplaces.`;
      case 'website-content':
        return `Elevate your online presence with our AI-driven website content creation service, delivering engaging, SEO-optimized content that converts visitors into customers. Our sophisticated algorithms analyze user intent and search patterns to create compelling website copy that ranks well and resonates with your target audience. From landing pages to service descriptions, our platform generates content that maintains your brand voice while incorporating proven conversion optimization techniques. Experience rapid content creation and testing capabilities that help you identify and implement the most effective messaging for your website.`;
      case 'technical-content':
        return `Simplify complex information with our AI-powered technical content creation service, producing clear, accurate documentation that enhances user understanding and reduces support needs. Our advanced natural language processing creates precise, well-structured technical content that maintains accuracy while ensuring readability for your target audience. From user manuals to API documentation, our platform generates consistent, high-quality technical content that helps users succeed with your products or services. Experience efficient content production that scales with your technical documentation needs while maintaining perfect accuracy and clarity.`;
      case 'video-audio-content':
        return `Transform your multimedia content with our AI-powered script writing service, creating engaging narratives for videos, podcasts, and other audio-visual content. Our sophisticated algorithms analyze successful content patterns and audience engagement data to generate compelling scripts that maintain your brand voice while maximizing viewer or listener engagement. From promotional videos to podcast episodes, our platform ensures your scripts are perfectly structured for their intended medium while delivering your message effectively. Experience rapid script generation and optimization that helps you produce more high-quality multimedia content efficiently.`;
      case 'multilingual-content':
        return `Break language barriers with our AI-powered multilingual content adaptation service, transforming your content for global audiences while preserving its impact and cultural relevance. Our advanced neural networks ensure translations maintain the nuance and emotional resonance of your original content while adapting it appropriately for each target culture. From marketing materials to technical documentation, our platform handles complex content localization efficiently while maintaining your brand voice across all languages. Experience rapid, accurate content adaptation that helps you reach global audiences effectively.`;
      case 'content-optimization':
        return `Maximize your content's impact with our AI-driven content optimization and distribution platform, ensuring your message reaches and resonates with your target audience across all channels. Our sophisticated algorithms analyze content performance data and audience behavior to optimize every piece of content for maximum engagement and conversion. From SEO enhancement to format adaptation, our system ensures your content performs optimally on every platform while maintaining consistent messaging. Experience data-driven content optimization that helps you achieve better results from your existing and new content assets.`;
      default:
        return service.description;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Professional AI Content Solutions`}</title>
        <meta name="description" content={`${service.description} Professional AI-powered content creation services tailored for your business needs.`} />
        <meta name="keywords" content={`${service.features.join(', ')}, ${service.benefits.join(', ')}, AI content creation, professional content services`} />
        <meta property="og:title" content={`${service.title} | Professional AI Content Solutions`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mediamentorai.com/content-services/${service.id}`} />
        <meta property="og:image" content="https://mediamentorai.com/content-services-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://mediamentorai.com/content-services/${service.id}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-32 pb-20 bg-black overflow-hidden">
        <ServiceBackground type="content" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/content-services"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Content Services
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

export default ContentServiceDetail;