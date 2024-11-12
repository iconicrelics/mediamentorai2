import { 
  Video, 
  Mic, 
  Image as ImageIcon, 
  Cpu, 
  PenTool, 
  BarChart3 
} from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: any;
  link: string;
  features?: string[];
}

export const services: Service[] = [
  {
    title: 'AI Video',
    description: 'Transform your brand with professional AI-enhanced video production',
    icon: Video,
    link: '/video-services',
    features: [
      'AI Presenter Videos',
      'Video Translation',
      'Content Repurposing',
      'Motion Graphics'
    ]
  },
  {
    title: 'AI Audio',
    description: 'Create engaging audio content with AI-powered voice synthesis',
    icon: Mic,
    link: '/audio-services',
    features: [
      'Voice Synthesis',
      'Podcast Production',
      'Audio Translation',
      'Background Music'
    ]
  },
  {
    title: 'AI Image',
    description: 'Generate unique visuals with cutting-edge AI technology',
    icon: ImageIcon,
    link: '/image-services',
    features: [
      'Brand Imagery',
      'Product Visualization',
      'Logo Design',
      'AI Art Creation'
    ]
  },
  {
    title: 'AI Automations',
    description: 'Streamline your workflow with intelligent automation',
    icon: Cpu,
    link: '/automation-services',
    features: [
      'Workflow Automation',
      'Process Optimization',
      'Document Processing',
      'Business Intelligence'
    ]
  },
  {
    title: 'AI Content Creation',
    description: 'Produce engaging content with AI assistance',
    icon: PenTool,
    link: '/content-services',
    features: [
      'Long-form Content',
      'Marketing Copy',
      'Social Media',
      'Email Automation'
    ]
  },
  {
    title: 'AI Analytics',
    description: 'Gain insights with advanced AI analytics',
    icon: BarChart3,
    link: '/analytics-services',
    features: [
      'Performance Analytics',
      'Predictive Analysis',
      'Market Research',
      'Data Visualization'
    ]
  }
];