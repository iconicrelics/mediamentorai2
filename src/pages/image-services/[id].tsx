import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { imageServices } from '../../data/imageServices';
import ServiceBackground from '../../components/ServiceBackground';
import ServiceFeatureCard from '../../components/ServiceFeatureCard';
import ProcessTimeline from '../../components/ProcessTimeline';

const ImageServiceDetail = () => {
  const { id } = useParams();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const service = imageServices.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/image-services" className="text-purple-400 hover:text-purple-300">
            Return to Image Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  const getEnhancedDescription = (service: any) => {
    switch (service.id) {
      case 'brand-imagery':
        return `Elevate your brand's visual presence with our cutting-edge AI-powered brand imagery solutions. Our advanced neural networks create stunning, on-brand visuals that maintain perfect consistency across all your marketing channels. Generate unlimited unique images that perfectly capture your brand's essence, style, and values. From social media content to marketing materials, our AI ensures every image aligns with your brand guidelines while standing out in today's competitive digital landscape. Save countless hours of photoshoots and editing while maintaining the highest standards of visual excellence.`;
      case 'product-visualization':
        return `Transform your product presentations with our state-of-the-art AI product visualization technology. Create photorealistic 3D renders and lifestyle contexts that showcase your products in their best light, without expensive photo shoots or physical samples. Our advanced AI generates perfect lighting, shadows, and reflections that make your products look stunning from every angle. Whether you need e-commerce images, catalog shots, or promotional materials, our system delivers professional-quality visuals that drive conversions and enhance your brand's perceived value.`;
      case 'logo-design':
        return `Revolutionize your brand identity with our AI-powered logo design service, combining creativity with data-driven insights to create unique, memorable logos that resonate with your target audience. Our sophisticated algorithms analyze current design trends, color psychology, and industry standards to generate distinctive logos that stand the test of time. Experience rapid iteration and refinement processes, allowing you to explore countless creative possibilities while maintaining complete control over your brand's visual identity. Create a professional, scalable logo that works seamlessly across all platforms and applications.`;
      case 'youtube-thumbnails':
        return `Maximize your video content's impact with our AI-driven thumbnail creation service, designed to boost click-through rates and audience engagement. Our advanced algorithms analyze successful thumbnail patterns and viewer behavior to generate eye-catching designs that stand out in crowded feeds. Create consistent, branded thumbnails that maintain professional quality while saving hours of design time. Whether you're a content creator or brand marketer, our system ensures your videos get the attention they deserve with thumbnails optimized for maximum impact.`;
      case 'comic-illustration':
        return `Bring your stories to life with our AI-powered comic and illustration generation service. Our advanced neural networks create stunning, stylized artwork that captures the perfect mood and atmosphere for your narrative. Whether you need character designs, scene compositions, or complete comic panels, our system delivers professional-quality illustrations that engage and captivate your audience. Transform your ideas into visually compelling stories with consistent style and artistic excellence across every frame.`;
      case 'photo-packs':
        return `Access unlimited, unique visual content with our AI-generated custom photo pack service. Create comprehensive libraries of perfectly matched, royalty-free images that align with your brand's visual identity and messaging needs. Our advanced AI ensures consistent style, lighting, and composition across all generated images, providing you with a cohesive visual language for your marketing materials. Save thousands on traditional stock photo subscriptions while maintaining complete creative control over your visual assets.`;
      case 'virtual-representative':
        return `Create a compelling digital presence with our AI virtual brand representative service. Our advanced technology generates consistent, professional avatars that embody your brand's personality and values across all digital touchpoints. Whether you need a virtual spokesperson, customer service representative, or brand ambassador, our system creates photorealistic digital humans that maintain perfect consistency in appearance, expression, and presentation. Build stronger connections with your audience through personalized, scalable virtual interactions.`;
      case 'virtual-staging':
        return `Transform empty spaces into stunning, fully-furnished environments with our AI-powered virtual staging technology. Create photorealistic interior designs that help potential buyers envision the full potential of any space. Our advanced algorithms generate perfectly lit, professionally styled rooms that enhance property marketing materials while saving thousands on traditional staging costs. Whether you're in real estate, interior design, or architectural visualization, our system delivers compelling, customizable results that drive engagement and sales.`;
      case 'ai-art':
        return `Push the boundaries of creativity with our AI art generation service, combining cutting-edge technology with artistic innovation to create unique, compelling visual assets. Our advanced neural networks can generate stunning artwork in any style, from classical to contemporary, while maintaining consistent quality and artistic vision. Perfect for creating unique NFT collections, digital art installations, or custom decorative elements that set your brand apart. Experience unlimited creative possibilities while maintaining full control over your artistic direction.`;
      case 'image-enhancement':
        return `Elevate your visual content with our comprehensive AI image enhancement service. Our sophisticated algorithms analyze and optimize every aspect of your images, from color correction and sharpness to composition and detail enhancement. Transform ordinary photos into stunning visuals that capture attention and drive engagement across all platforms. Whether you need to enhance product photos, marketing materials, or social media content, our system ensures professional quality results while maintaining natural authenticity.`;
      default:
        return service.description;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Professional AI Image Solutions`}</title>
        <meta name="description" content={`${service.description} Professional AI-powered image generation services tailored for your business needs.`} />
        <meta name="keywords" content={`${service.features.join(', ')}, ${service.benefits.join(', ')}, AI image generation, professional image services`} />
        <meta property="og:title" content={`${service.title} | Professional AI Image Solutions`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mediamentorai.com/image-services/${service.id}`} />
        <meta property="og:image" content="https://mediamentorai.com/image-services-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://mediamentorai.com/image-services/${service.id}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-32 pb-20 bg-black overflow-hidden">
        <ServiceBackground type="image" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/image-services"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Image Services
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

export default ImageServiceDetail;