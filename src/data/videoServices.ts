import { 
  Video, 
  Languages, 
  Repeat, 
  Presentation, // Changed from PresentationScreen
  UserCircle, 
  Wand2,
  Film,
  Box,
  GraduationCap,
  Share2
} from 'lucide-react';

export interface ProcessStep {
  step: string;
  description: string;
}

export interface VideoService {
  id: string;
  title: string;
  description: string;
  icon: any; // LucideIcon type
  features: string[];
  benefits: string[];
  useCases: string[];
  process: ProcessStep[];
}

export interface ServiceCategory {
  title: string;
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Core Video Services",
    services: [
      "AI Presenter Videos",
      "Video Translation & Localization",
      "Content Repurposing",
      "Explainer Videos"
    ]
  },
  {
    title: "Advanced Features",
    services: [
      "AI Interactive Avatars",
      "AI Motion Graphics and Special Effects",
      "Custom B-Roll Footage"
    ]
  },
  {
    title: "Business Solutions",
    services: [
      "Product Demo Videos",
      "Training Video Generation",
      "Social Media Video Optimization"
    ]
  }
];

export const videoServices: VideoService[] = [
  {
    id: 'ai-presenter',
    title: 'AI Presenter Videos',
    description: 'Create professional, lifelike digital presenters for your corporate communications and training videos.',
    icon: Video,
    features: [
      'Lifelike AI presenters',
      'Natural voice synthesis',
      'Custom script generation',
      'Multiple languages',
      'Brand voice matching',
      'Gesture control',
      'Emotion expression',
      'Real-time rendering'
    ],
    benefits: [
      'Cost-effective production',
      'Consistent messaging',
      'Quick turnaround',
      'Global accessibility',
      'Brand consistency',
      'Scalable content',
      'Professional quality',
      'Easy updates'
    ],
    useCases: [
      'Corporate Training',
      'Product Demonstrations',
      'Company Updates',
      'Educational Content',
      'Sales Presentations',
      'Customer Support',
      'Internal Communications',
      'Event Announcements'
    ],
    process: [
      {
        step: 'Script Creation',
        description: 'Develop your presentation script'
      },
      {
        step: 'Presenter Selection',
        description: 'Choose from our AI presenter library'
      },
      {
        step: 'Voice Configuration',
        description: 'Select and customize the voice'
      },
      {
        step: 'Video Generation',
        description: 'Create the presenter video'
      },
      {
        step: 'Review & Refine',
        description: 'Make adjustments as needed'
      }
    ]
  },
  {
    id: 'video-translation',
    title: 'Video Translation & Localization',
    description: 'Transform your video content for global audiences with AI-powered translation and lip-sync technology.',
    icon: Languages,
    features: [
      'Multi-language support',
      'Lip-sync technology',
      'Cultural adaptation',
      'Voice matching',
      'Subtitle generation',
      'Accent customization',
      'Context preservation',
      'Quality assurance'
    ],
    benefits: [
      'Global reach',
      'Native experience',
      'Cost efficiency',
      'Quick localization',
      'Cultural relevance',
      'Consistent quality',
      'Market expansion',
      'Brand integrity'
    ],
    useCases: [
      'Marketing Videos',
      'Training Materials',
      'Product Launches',
      'Educational Content',
      'Corporate Messages',
      'Customer Support',
      'Social Media',
      'Global Events'
    ],
    process: [
      {
        step: 'Content Analysis',
        description: 'Analyze video for translation'
      },
      {
        step: 'Translation',
        description: 'Convert content to target language'
      },
      {
        step: 'Voice Synthesis',
        description: 'Generate localized voiceover'
      },
      {
        step: 'Lip-Sync',
        description: 'Apply lip-sync technology'
      },
      {
        step: 'Quality Check',
        description: 'Verify translation accuracy'
      }
    ]
  },
  {
    id: 'content-repurposing',
    title: 'Content Repurposing',
    description: 'Automatically convert long-form videos into engaging short-form content for social media.',
    icon: Repeat,
    features: [
      'Auto-summarization',
      'Format conversion',
      'Highlight extraction',
      'Caption generation',
      'Thumbnail creation',
      'Platform optimization',
      'Content scheduling',
      'Analytics tracking'
    ],
    benefits: [
      'Content maximization',
      'Time efficiency',
      'Increased reach',
      'Consistent branding',
      'Enhanced engagement',
      'Resource optimization',
      'Multi-platform presence',
      'ROI improvement'
    ],
    useCases: [
      'Webinar Highlights',
      'Podcast Clips',
      'Tutorial Snippets',
      'Event Recaps',
      'Interview Excerpts',
      'Product Features',
      'Social Stories',
      'Marketing Teasers'
    ],
    process: [
      {
        step: 'Content Upload',
        description: 'Upload your long-form video'
      },
      {
        step: 'Analysis',
        description: 'Identify key moments'
      },
      {
        step: 'Segmentation',
        description: 'Create short-form clips'
      },
      {
        step: 'Optimization',
        description: 'Enhance for platforms'
      },
      {
        step: 'Distribution',
        description: 'Share across channels'
      }
    ]
  },
  {
    id: 'explainer-videos',
    title: 'Explainer Videos',
    description: 'Generate compelling animated explainer videos using AI technology.',
    icon: Presentation, // Changed from PresentationScreen
    features: [
      'Custom animation',
      'Script generation',
      'Voice synthesis',
      'Visual storytelling',
      'Brand integration',
      'Multiple styles',
      'Interactive elements',
      'Easy editing'
    ],
    benefits: [
      'Clear communication',
      'Engaging content',
      'Cost-effective',
      'Quick production',
      'Brand alignment',
      'Easy updates',
      'Versatile use',
      'High retention'
    ],
    useCases: [
      'Product Explanations',
      'Service Overviews',
      'Process Guides',
      'Feature Highlights',
      'Company Introductions',
      'How-to Tutorials',
      'Value Propositions',
      'Onboarding'
    ],
    process: [
      {
        step: 'Concept Development',
        description: 'Define key messages'
      },
      {
        step: 'Script Writing',
        description: 'Create engaging narrative'
      },
      {
        step: 'Style Selection',
        description: 'Choose animation style'
      },
      {
        step: 'Production',
        description: 'Generate video content'
      },
      {
        step: 'Refinement',
        description: 'Polish final output'
      }
    ]
  },
  {
    id: 'interactive-avatars',
    title: 'AI Interactive Avatars',
    description: 'Create personalized, interactive digital avatars that engage with your audience in real-time.',
    icon: UserCircle,
    features: [
      'Real-time interaction',
      'Personality customization',
      'Voice recognition',
      'Natural responses',
      'Emotion detection',
      'Multi-language support',
      'Brand alignment',
      'Analytics tracking'
    ],
    benefits: [
      'Enhanced engagement',
      'Personal connection',
      '24/7 availability',
      'Scalable support',
      'Consistent experience',
      'Data insights',
      'Cost efficiency',
      'Brand representation'
    ],
    useCases: [
      'Customer Service',
      'Virtual Events',
      'Educational Programs',
      'Sales Assistance',
      'Product Demos',
      'Virtual Reception',
      'Training Programs',
      'Brand Ambassador'
    ],
    process: [
      {
        step: 'Avatar Design',
        description: 'Create custom avatar'
      },
      {
        step: 'Personality Setup',
        description: 'Define interaction style'
      },
      {
        step: 'Knowledge Base',
        description: 'Input relevant information'
      },
      {
        step: 'Integration',
        description: 'Deploy on platforms'
      },
      {
        step: 'Optimization',
        description: 'Refine interactions'
      }
    ]
  },
  {
    id: 'motion-graphics',
    title: 'AI Motion Graphics and Special Effects',
    description: 'Enhance your videos with cutting-edge AI-generated motion graphics and special effects.',
    icon: Wand2,
    features: [
      'AI-powered motion design',
      'Custom visual effects',
      'Brand-specific animations',
      'Dynamic transitions',
      'Real-time rendering',
      'Template customization',
      '3D element integration',
      'Color grading'
    ],
    benefits: [
      'Professional polish',
      'Unique visual identity',
      'Faster production time',
      'Cost-effective creation',
      'Consistent branding',
      'Engaging visuals',
      'Scalable solutions',
      'High-quality output'
    ],
    useCases: [
      'Brand Videos',
      'Social Media Content',
      'Product Launches',
      'Event Promotions',
      'Digital Advertising',
      'Title Sequences',
      'Video Intros/Outros',
      'Presentation Enhancement'
    ],
    process: [
      {
        step: 'Style Definition',
        description: 'Choose your desired motion graphics style'
      },
      {
        step: 'Asset Preparation',
        description: 'Upload or create necessary elements'
      },
      {
        step: 'AI Generation',
        description: 'Generate motion graphics'
      },
      {
        step: 'Integration',
        description: 'Combine with video content'
      },
      {
        step: 'Refinement',
        description: 'Fine-tune final output'
      }
    ]
  },
  {
    id: 'b-roll-footage',
    title: 'Custom B-Roll Footage',
    description: 'Generate high-quality, contextual B-roll footage using AI technology.',
    icon: Film,
    features: [
      'AI scene generation',
      'Context-aware footage',
      'Custom styling options',
      'High-resolution output',
      'Seamless integration',
      'Quick generation',
      'Multiple aspect ratios',
      'Style matching'
    ],
    benefits: [
      'Reduce filming costs',
      'Instant availability',
      'Unlimited variations',
      'Perfect scene matching',
      'Time efficiency',
      'Location independence',
      'Consistent quality',
      'Creative flexibility'
    ],
    useCases: [
      'Documentary Films',
      'Corporate Videos',
      'News Coverage',
      'Product Reviews',
      'Travel Content',
      'Educational Videos',
      'Marketing Materials',
      'Social Media Content'
    ],
    process: [
      {
        step: 'Scene Description',
        description: 'Define required footage'
      },
      {
        step: 'Style Selection',
        description: 'Choose visual parameters'
      },
      {
        step: 'AI Generation',
        description: 'Create custom footage'
      },
      {
        step: 'Review',
        description: 'Select and refine'
      },
      {
        step: 'Integration',
        description: 'Incorporate into content'
      }
    ]
  },
  {
    id: 'product-demos',
    title: 'Product Demo Videos',
    description: 'Generate dynamic product demonstrations using AI technology.',
    icon: Box,
    features: [
      '3D product visualization',
      'Feature highlighting',
      'Interactive elements',
      'Custom branding',
      'Multiple angles',
      'Benefit visualization',
      'Technical specifications',
      'Call-to-action integration'
    ],
    benefits: [
      'Increased conversions',
      'Clear communication',
      'Consistent messaging',
      'Cost-effective demos',
      'Quick updates',
      'Global accessibility',
      'Scalable production',
      'Professional quality'
    ],
    useCases: [
      'E-commerce Products',
      'Software Demos',
      'Hardware Showcases',
      'Feature Tutorials',
      'Sales Presentations',
      'Trade Shows',
      'Website Content',
      'Social Media Marketing'
    ],
    process: [
      {
        step: 'Product Analysis',
        description: 'Identify key features'
      },
      {
        step: 'Script Creation',
        description: 'Develop demonstration flow'
      },
      {
        step: 'Visual Design',
        description: 'Create product visuals'
      },
      {
        step: 'Demo Generation',
        description: 'Produce complete demo'
      },
      {
        step: 'Optimization',
        description: 'Enhance final video'
      }
    ]
  },
  {
    id: 'training-videos',
    title: 'Training Video Generation',
    description: 'Quickly create customized training videos with AI-powered scenarios.',
    icon: GraduationCap,
    features: [
      'Custom scenarios',
      'Interactive elements',
      'Assessment integration',
      'Multi-language support',
      'Progress tracking',
      'Template library',
      'Branching scenarios',
      'Quiz generation'
    ],
    benefits: [
      'Consistent training',
      'Rapid deployment',
      'Cost reduction',
      'Easy updates',
      'Engaging content',
      'Measurable results',
      'Global accessibility',
      'Scalable solution'
    ],
    useCases: [
      'Employee Onboarding',
      'Safety Training',
      'Product Knowledge',
      'Compliance Training',
      'Soft Skills Development',
      'Technical Training',
      'Process Documentation',
      'Customer Service Training'
    ],
    process: [
      {
        step: 'Content Planning',
        description: 'Define training objectives'
      },
      {
        step: 'Script Development',
        description: 'Create educational content'
      },
      {
        step: 'Visual Creation',
        description: 'Generate visual elements'
      },
      {
        step: 'Assembly',
        description: 'Combine all components'
      },
      {
        step: 'Testing',
        description: 'Verify effectiveness'
      }
    ]
  },
  {
    id: 'social-optimization',
    title: 'Social Media Video Optimization',
    description: 'Automatically optimize your videos for different social media platforms.',
    icon: Share2,
    features: [
      'Multi-platform optimization',
      'Automatic resizing',
      'Caption generation',
      'Engagement analytics',
      'Thumbnail creation',
      'Trend analysis',
      'Content scheduling',
      'Performance tracking'
    ],
    benefits: [
      'Increased engagement',
      'Time savings',
      'Platform optimization',
      'Consistent branding',
      'Better reach',
      'Higher conversion',
      'Automated workflow',
      'Data-driven results'
    ],
    useCases: [
      'Social Media Marketing',
      'Influencer Content',
      'Brand Campaigns',
      'Product Launches',
      'Event Coverage',
      'Educational Content',
      'Behind-the-Scenes',
      'Customer Stories'
    ],
    process: [
      {
        step: 'Content Analysis',
        description: 'Analyze video content'
      },
      {
        step: 'Platform Selection',
        description: 'Choose target platforms'
      },
      {
        step: 'Optimization',
        description: 'Apply platform specs'
      },
      {
        step: 'Enhancement',
        description: 'Add platform features'
      },
      {
        step: 'Distribution',
        description: 'Schedule and publish'
      }
    ]
  }
];