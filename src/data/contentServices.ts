import { 
  FileText,
  Megaphone,
  Share2,
  Mail,
  ShoppingBag,
  Globe,
  GraduationCap,
  Video,
  Languages,
  Repeat
} from 'lucide-react';

export interface ProcessStep {
  step: string;
  description: string;
}

export interface ContentService {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  benefits: string[];
  useCases: string[];
  process: ProcessStep[];
}

export interface ServiceCategory {
  title: string;
  services: string[];
}

export const contentServiceCategories: ServiceCategory[] = [
  {
    title: "Core Content Solutions",
    services: [
      "Long-Form Content Creation Suite",
      "Marketing Content Ecosystem",
      "Social Media & Community Management",
      "Email & Newsletter Automation"
    ]
  },
  {
    title: "Specialized Content",
    services: [
      "Product & Service Content Creation",
      "Website & Landing Page Content",
      "Technical & Educational Content"
    ]
  },
  {
    title: "Advanced Content Features",
    services: [
      "Video & Audio Content Writing",
      "Multilingual Content Adaptation",
      "Content Optimization & Distribution"
    ]
  }
];

export const contentServices: ContentService[] = [
  {
    id: 'long-form-content',
    title: 'Long-Form Content Creation Suite',
    description: 'Generate comprehensive blog posts, eBooks, whitepapers, and research papers using AI.',
    icon: FileText,
    features: [
      'SEO optimization',
      'Citation management',
      'Industry insights',
      'Brand voice preservation',
      'Research integration',
      'Content structuring',
      'Keyword optimization',
      'Format flexibility'
    ],
    benefits: [
      'Establish authority',
      'Save time',
      'Consistent quality',
      'Better SEO ranking',
      'Increased engagement',
      'Professional content',
      'Regular publishing',
      'Comprehensive coverage'
    ],
    useCases: [
      'Blog Posts',
      'eBooks',
      'Whitepapers',
      'Research Papers',
      'Case Studies',
      'Industry Reports',
      'Thought Leadership',
      'Educational Content'
    ],
    process: [
      {
        step: 'Topic Research',
        description: 'Identify key themes'
      },
      {
        step: 'Content Planning',
        description: 'Structure outline'
      },
      {
        step: 'AI Generation',
        description: 'Create content'
      },
      {
        step: 'Optimization',
        description: 'Enhance for SEO'
      },
      {
        step: 'Review',
        description: 'Quality check'
      }
    ]
  },
  {
    id: 'marketing-content',
    title: 'Marketing Content Ecosystem',
    description: 'Create cohesive marketing materials including brochures, presentations, and sales proposals.',
    icon: Megaphone,
    features: [
      'Brand consistency',
      'Multi-format support',
      'Design integration',
      'Message alignment',
      'Template creation',
      'Visual elements',
      'Content library',
      'Version control'
    ],
    benefits: [
      'Unified messaging',
      'Faster production',
      'Cost efficiency',
      'Brand alignment',
      'Easy updates',
      'Professional quality',
      'Scalable solution',
      'Resource savings'
    ],
    useCases: [
      'Brochures',
      'Presentations',
      'Pitch Decks',
      'Sales Proposals',
      'Press Releases',
      'Marketing Collateral',
      'Campaign Materials',
      'Brand Guidelines'
    ],
    process: [
      {
        step: 'Strategy',
        description: 'Define objectives'
      },
      {
        step: 'Content Creation',
        description: 'Generate materials'
      },
      {
        step: 'Design Integration',
        description: 'Apply visuals'
      },
      {
        step: 'Review',
        description: 'Quality check'
      },
      {
        step: 'Distribution',
        description: 'Share content'
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media & Community Management',
    description: 'Develop platform-optimized social media content with AI-powered content calendars.',
    icon: Share2,
    features: [
      'Platform optimization',
      'Content calendar',
      'Hashtag strategy',
      'Engagement tracking',
      'Auto-responses',
      'Performance analytics',
      'Visual content',
      'Scheduling tools'
    ],
    benefits: [
      'Consistent presence',
      'Higher engagement',
      'Time savings',
      'Better reach',
      'Brand building',
      'Community growth',
      'Content variety',
      'Data insights'
    ],
    useCases: [
      'Social Posts',
      'Platform Content',
      'Community Engagement',
      'Brand Building',
      'Campaign Management',
      'Influencer Content',
      'Event Promotion',
      'Customer Service'
    ],
    process: [
      {
        step: 'Strategy',
        description: 'Plan approach'
      },
      {
        step: 'Content Creation',
        description: 'Generate posts'
      },
      {
        step: 'Optimization',
        description: 'Platform adaptation'
      },
      {
        step: 'Scheduling',
        description: 'Plan distribution'
      },
      {
        step: 'Analysis',
        description: 'Track performance'
      }
    ]
  },
  {
    id: 'email-automation',
    title: 'Email & Newsletter Automation',
    description: 'Design personalized email campaigns and newsletters using AI.',
    icon: Mail,
    features: [
      'Subject line optimization',
      'Personalization',
      'A/B testing',
      'Automated sequences',
      'Template creation',
      'Response tracking',
      'Segment targeting',
      'Performance analytics'
    ],
    benefits: [
      'Higher open rates',
      'Better conversion',
      'Time efficiency',
      'Consistent engagement',
      'Personalized content',
      'Automated workflow',
      'Data-driven decisions',
      'Scalable solution'
    ],
    useCases: [
      'Email Campaigns',
      'Newsletters',
      'Welcome Series',
      'Drip Campaigns',
      'Product Updates',
      'Customer Nurturing',
      'Event Promotion',
      'Re-engagement'
    ],
    process: [
      {
        step: 'Strategy',
        description: 'Define goals'
      },
      {
        step: 'Content Creation',
        description: 'Generate emails'
      },
      {
        step: 'Automation',
        description: 'Set up sequences'
      },
      {
        step: 'Testing',
        description: 'Optimize performance'
      },
      {
        step: 'Analysis',
        description: 'Track results'
      }
    ]
  },
  {
    id: 'product-content',
    title: 'Product & Service Content Creation',
    description: 'Generate compelling product descriptions and service pages across all sales channels.',
    icon: ShoppingBag,
    features: [
      'SEO optimization',
      'Brand voice',
      'Multi-channel content',
      'Specification writing',
      'Feature highlights',
      'Benefit focus',
      'Technical accuracy',
      'Format adaptation'
    ],
    benefits: [
      'Better conversions',
      'Consistent messaging',
      'Time savings',
      'Search visibility',
      'Professional quality',
      'Easy updates',
      'Channel optimization',
      'Brand alignment'
    ],
    useCases: [
      'Product Pages',
      'Service Descriptions',
      'Feature Lists',
      'Specifications',
      'Catalog Content',
      'Marketing Copy',
      'Sales Materials',
      'Technical Details'
    ],
    process: [
      {
        step: 'Analysis',
        description: 'Gather information'
      },
      {
        step: 'Content Creation',
        description: 'Generate copy'
      },
      {
        step: 'Optimization',
        description: 'Enhance for channels'
      },
      {
        step: 'Review',
        description: 'Quality check'
      },
      {
        step: 'Implementation',
        description: 'Deploy content'
      }
    ]
  },
  {
    id: 'website-content',
    title: 'Website & Landing Page Content',
    description: 'Create comprehensive website content optimized for conversion and SEO.',
    icon: Globe,
    features: [
      'SEO optimization',
      'Conversion focus',
      'Brand voice',
      'User experience',
      'Call-to-actions',
      'Mobile optimization',
      'Content structure',
      'Meta content'
    ],
    benefits: [
      'Higher conversion',
      'Better rankings',
      'User engagement',
      'Clear messaging',
      'Professional image',
      'Consistent tone',
      'Lead generation',
      'Brand building'
    ],
    useCases: [
      'Landing Pages',
      'Website Sections',
      'About Pages',
      'Service Pages',
      'Product Pages',
      'Blog Posts',
      'FAQs',
      'Contact Pages'
    ],
    process: [
      {
        step: 'Planning',
        description: 'Define structure'
      },
      {
        step: 'Content Creation',
        description: 'Generate copy'
      },
      {
        step: 'SEO Optimization',
        description: 'Enhance visibility'
      },
      {
        step: 'Review',
        description: 'Quality check'
      },
      {
        step: 'Implementation',
        description: 'Deploy content'
      }
    ]
  },
  {
    id: 'technical-content',
    title: 'Technical & Educational Content',
    description: 'Develop user manuals, technical documentation, and educational content.',
    icon: GraduationCap,
    features: [
      'Clear explanation',
      'Technical accuracy',
      'Audience adaptation',
      'Visual integration',
      'Step-by-step guides',
      'Knowledge base',
      'Format flexibility',
      'Version control'
    ],
    benefits: [
      'Better understanding',
      'Reduced support',
      'User satisfaction',
      'Time savings',
      'Consistent quality',
      'Easy updates',
      'Knowledge sharing',
      'Resource efficiency'
    ],
    useCases: [
      'User Manuals',
      'Technical Docs',
      'How-to Guides',
      'Knowledge Base',
      'Training Materials',
      'Product Guides',
      'API Documentation',
      'Educational Content'
    ],
    process: [
      {
        step: 'Research',
        description: 'Gather information'
      },
      {
        step: 'Planning',
        description: 'Structure content'
      },
      {
        step: 'Creation',
        description: 'Generate documentation'
      },
      {
        step: 'Review',
        description: 'Technical check'
      },
      {
        step: 'Publication',
        description: 'Release content'
      }
    ]
  },
  {
    id: 'video-audio-content',
    title: 'Video & Audio Content Writing',
    description: 'Create engaging scripts for various formats including ads and podcasts.',
    icon: Video,
    features: [
      'Script writing',
      'Storyboarding',
      'Dialogue creation',
      'Format adaptation',
      'Voice guidance',
      'Scene description',
      'Time optimization',
      'Brand alignment'
    ],
    benefits: [
      'Professional quality',
      'Time efficiency',
      'Consistent tone',
      'Format ready',
      'Easy production',
      'Clear direction',
      'Brand voice',
      'Engaging content'
    ],
    useCases: [
      'Video Ads',
      'Explainer Videos',
      'Podcasts',
      'Social Content',
      'Product Videos',
      'Training Content',
      'Presentations',
      'Promotional Content'
    ],
    process: [
      {
        step: 'Concept',
        description: 'Define approach'
      },
      {
        step: 'Script Writing',
        description: 'Create content'
      },
      {
        step: 'Storyboarding',
        description: 'Visualize flow'
      },
      {
        step: 'Review',
        description: 'Quality check'
      },
      {
        step: 'Finalization',
        description: 'Prepare for production'
      }
    ]
  },
  {
    id: 'multilingual-content',
    title: 'Multilingual Content Adaptation',
    description: 'Transform your content into multiple languages while preserving tone and context.',
    icon: Languages,
    features: [
      'Language adaptation',
      'Cultural relevance',
      'Tone preservation',
      'Context matching',
      'Format flexibility',
      'Quality assurance',
      'SEO optimization',
      'Brand consistency'
    ],
    benefits: [
      'Global reach',
      'Cultural alignment',
      'Market expansion',
      'Brand consistency',
      'Time efficiency',
      'Cost savings',
      'Quality content',
      'Local relevance'
    ],
    useCases: [
      'Website Content',
      'Marketing Materials',
      'Product Content',
      'Technical Docs',
      'Social Media',
      'Email Campaigns',
      'Legal Documents',
      'Educational Content'
    ],
    process: [
      {
        step: 'Analysis',
        description: 'Assess content'
      },
      {
        step: 'Translation',
        description: 'Convert content'
      },
      {
        step: 'Adaptation',
        description: 'Cultural alignment'
      },
      {
        step: 'Review',
        description: 'Quality check'
      },
      {
        step: 'Implementation',
        description: 'Deploy content'
      }
    ]
  },
  {
    id: 'content-optimization',
    title: 'Content Optimization & Distribution',
    description: 'Transform and repurpose existing content into multiple formats across platforms.',
    icon: Repeat,
    features: [
      'Format adaptation',
      'Platform optimization',
      'Content repurposing',
      'Distribution planning',
      'Performance tracking',
      'Quality control',
      'Brand consistency',
      'SEO enhancement'
    ],
    benefits: [
      'Wider reach',
      'Resource efficiency',
      'Consistent messaging',
      'Better engagement',
      'Time savings',
      'Content variety',
      'Maximum impact',
      'Cost effectiveness'
    ],
    useCases: [
      'Social Media',
      'Blog Content',
      'Marketing Materials',
      'Email Campaigns',
      'Website Content',
      'Sales Materials',
      'PR Content',
      'Digital Advertising'
    ],
    process: [
      {
        step: 'Analysis',
        description: 'Evaluate content'
      },
      {
        step: 'Planning',
        description: 'Strategy development'
      },
      {
        step: 'Optimization',
        description: 'Content enhancement'
      },
      {
        step: 'Distribution',
        description: 'Content delivery'
      },
      {
        step: 'Monitoring',
        description: 'Track performance'
      }
    ]
  }
];