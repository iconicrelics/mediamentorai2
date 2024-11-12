import { 
  Image,
  Palette,
  Box,
  Youtube,
  BookOpen,
  Images,
  User,
  Building2,
  Paintbrush,
  Maximize
} from 'lucide-react';

export interface ProcessStep {
  step: string;
  description: string;
}

export interface ImageService {
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

export const imageServiceCategories: ServiceCategory[] = [
  {
    title: "Core Image Services",
    services: [
      "Brand Imagery & Visual Content",
      "Product Visualization",
      "Logo & Brand Identity Design",
      "YouTube Thumbnail Creation"
    ]
  },
  {
    title: "Creative Solutions",
    services: [
      "Comic Book & Illustration",
      "Custom Royalty-Free Photos",
      "AI Virtual Brand Representative"
    ]
  },
  {
    title: "Advanced Visualization",
    services: [
      "Virtual Staging & 3D Visualization",
      "AI Art & Digital Assets",
      "Universal Image Enhancement"
    ]
  }
];

export const imageServices: ImageService[] = [
  {
    id: 'brand-imagery',
    title: 'Brand Imagery & Visual Content',
    description: 'Create consistent, on-brand visual content across all marketing materials using AI technology.',
    icon: Image,
    features: [
      'Social media graphics',
      'Blog images',
      'Promotional materials',
      'Brand style matching',
      'Automated generation',
      'Custom templates',
      'Multi-format export',
      'Batch processing'
    ],
    benefits: [
      'Brand consistency',
      'Time savings',
      'Cost efficiency',
      'Unlimited content',
      'Quick turnaround',
      'Professional quality',
      'Scalable solution',
      'Creative flexibility'
    ],
    useCases: [
      'Social Media',
      'Blog Posts',
      'Email Marketing',
      'Website Content',
      'Digital Ads',
      'Presentations',
      'Marketing Materials',
      'Brand Guidelines'
    ],
    process: [
      {
        step: 'Style Definition',
        description: 'Define brand visual style'
      },
      {
        step: 'Content Planning',
        description: 'Plan visual content needs'
      },
      {
        step: 'AI Generation',
        description: 'Create brand imagery'
      },
      {
        step: 'Review',
        description: 'Quality assessment'
      },
      {
        step: 'Optimization',
        description: 'Format for platforms'
      }
    ]
  },
  {
    id: 'product-visualization',
    title: 'Product Visualization',
    description: 'Generate photorealistic product renders and lifestyle context photos without expensive photo shoots.',
    icon: Box,
    features: [
      'Photorealistic rendering',
      'Background removal',
      'Lifestyle contexts',
      'Multiple angles',
      '360° views',
      'Color variations',
      'Scene composition',
      'Lighting control'
    ],
    benefits: [
      'Cost savings',
      'Quick production',
      'Consistent quality',
      'Easy updates',
      'Flexible usage',
      'No photo shoots',
      'Global accessibility',
      'Scale efficiency'
    ],
    useCases: [
      'E-commerce',
      'Product Catalogs',
      'Marketing Materials',
      'Social Media',
      'Website Content',
      'Print Materials',
      'Digital Ads',
      'Sales Presentations'
    ],
    process: [
      {
        step: 'Product Analysis',
        description: 'Assess product details'
      },
      {
        step: 'Scene Setup',
        description: 'Configure visualization'
      },
      {
        step: 'Rendering',
        description: 'Generate images'
      },
      {
        step: 'Enhancement',
        description: 'Refine quality'
      },
      {
        step: 'Export',
        description: 'Prepare for use'
      }
    ]
  },
  {
    id: 'logo-design',
    title: 'Logo & Brand Identity Design',
    description: 'Design unique, professional logos and visual brand elements using AI-powered design tools.',
    icon: Palette,
    features: [
      'Custom logo generation',
      'Style variations',
      'Color schemes',
      'Typography matching',
      'Icon creation',
      'Brand guidelines',
      'Format flexibility',
      'Version control'
    ],
    benefits: [
      'Unique designs',
      'Quick iterations',
      'Cost effective',
      'Professional quality',
      'Brand consistency',
      'Easy updates',
      'Multiple options',
      'Scalable solution'
    ],
    useCases: [
      'New Businesses',
      'Rebranding',
      'Product Lines',
      'Events',
      'Digital Platforms',
      'Mobile Apps',
      'Social Media',
      'Marketing Materials'
    ],
    process: [
      {
        step: 'Brand Analysis',
        description: 'Understand requirements'
      },
      {
        step: 'Design Generation',
        description: 'Create concepts'
      },
      {
        step: 'Refinement',
        description: 'Perfect the design'
      },
      {
        step: 'Guidelines',
        description: 'Document usage'
      },
      {
        step: 'Delivery',
        description: 'Provide assets'
      }
    ]
  },
  {
    id: 'youtube-thumbnails',
    title: 'YouTube Thumbnail Creation',
    description: 'Generate eye-catching, high-converting YouTube thumbnails using AI technology.',
    icon: Youtube,
    features: [
      'Custom design',
      'Text integration',
      'Style matching',
      'A/B testing',
      'Template creation',
      'Quick generation',
      'Brand consistency',
      'Performance tracking'
    ],
    benefits: [
      'Higher CTR',
      'Time savings',
      'Brand alignment',
      'Better performance',
      'Consistent quality',
      'Easy updates',
      'Multiple options',
      'Quick turnaround'
    ],
    useCases: [
      'Video Content',
      'Tutorial Series',
      'Product Reviews',
      'Vlogs',
      'Educational Content',
      'Marketing Videos',
      'Brand Channels',
      'Course Content'
    ],
    process: [
      {
        step: 'Content Analysis',
        description: 'Review video content'
      },
      {
        step: 'Design Creation',
        description: 'Generate thumbnails'
      },
      {
        step: 'Testing',
        description: 'Evaluate options'
      },
      {
        step: 'Optimization',
        description: 'Enhance performance'
      },
      {
        step: 'Implementation',
        description: 'Apply to videos'
      }
    ]
  },
  {
    id: 'comic-illustration',
    title: 'Comic Book & Illustration',
    description: 'Create custom comic books, storyboards, and unique illustrations using AI tools.',
    icon: BookOpen,
    features: [
      'Style customization',
      'Character creation',
      'Scene generation',
      'Panel layout',
      'Text integration',
      'Color schemes',
      'Export options',
      'Batch processing'
    ],
    benefits: [
      'Creative freedom',
      'Quick production',
      'Cost efficiency',
      'Unique content',
      'Easy editing',
      'Style consistency',
      'Scalable creation',
      'Format flexibility'
    ],
    useCases: [
      'Marketing Comics',
      'Educational Content',
      'Storyboards',
      'Brand Stories',
      'Social Media',
      'Presentations',
      'Training Materials',
      'Product Guides'
    ],
    process: [
      {
        step: 'Story Planning',
        description: 'Outline content'
      },
      {
        step: 'Style Selection',
        description: 'Choose visual style'
      },
      {
        step: 'Generation',
        description: 'Create illustrations'
      },
      {
        step: 'Assembly',
        description: 'Compose layout'
      },
      {
        step: 'Finalization',
        description: 'Export final product'
      }
    ]
  },
  {
    id: 'photo-packs',
    title: 'Custom Royalty-Free Photos',
    description: 'Generate customized, branded photo collections for your marketing needs without licensing concerns.',
    icon: Images,
    features: [
      'Custom generation',
      'Brand matching',
      'Style consistency',
      'Unlimited usage',
      'Multiple formats',
      'Batch creation',
      'Easy organization',
      'Quick export'
    ],
    benefits: [
      'No licensing fees',
      'Unique content',
      'Brand alignment',
      'Cost savings',
      'Quick access',
      'Flexible usage',
      'Consistent style',
      'Scalable solution'
    ],
    useCases: [
      'Marketing Materials',
      'Website Content',
      'Social Media',
      'Blog Posts',
      'Presentations',
      'Email Marketing',
      'Advertising',
      'Print Materials'
    ],
    process: [
      {
        step: 'Need Analysis',
        description: 'Define requirements'
      },
      {
        step: 'Style Setup',
        description: 'Configure preferences'
      },
      {
        step: 'Generation',
        description: 'Create photo sets'
      },
      {
        step: 'Organization',
        description: 'Categorize content'
      },
      {
        step: 'Delivery',
        description: 'Provide access'
      }
    ]
  },
  {
    id: 'virtual-representative',
    title: 'AI Virtual Brand Representative',
    description: 'Create and maintain a consistent AI-generated spokesperson or influencer for your brand.',
    icon: User,
    features: [
      'Character creation',
      'Style consistency',
      'Pose generation',
      'Expression control',
      'Outfit variation',
      'Scene placement',
      'Brand alignment',
      'Multi-platform use'
    ],
    benefits: [
      'Brand consistency',
      'Cost efficiency',
      'Always available',
      'Easy updates',
      'Controlled image',
      'Scalable content',
      'Risk reduction',
      'Global appeal'
    ],
    useCases: [
      'Brand Ambassador',
      'Social Media',
      'Marketing Materials',
      'Product Demos',
      'Customer Service',
      'Events',
      'Training Materials',
      'Digital Presence'
    ],
    process: [
      {
        step: 'Character Design',
        description: 'Create persona'
      },
      {
        step: 'Style Definition',
        description: 'Set visual rules'
      },
      {
        step: 'Content Creation',
        description: 'Generate assets'
      },
      {
        step: 'Integration',
        description: 'Implement across channels'
      },
      {
        step: 'Management',
        description: 'Maintain consistency'
      }
    ]
  },
  {
    id: 'virtual-staging',
    title: 'Virtual Staging & 3D Visualization',
    description: 'Create realistic interior designs, staged spaces, and 3D product visualizations using AI technology.',
    icon: Building2,
    features: [
      'Room staging',
      'Furniture placement',
      'Lighting simulation',
      'Material rendering',
      'Style options',
      'View angles',
      'Scene composition',
      'Reality matching'
    ],
    benefits: [
      'Cost savings',
      'Quick turnaround',
      'Multiple options',
      'Easy updates',
      'No physical staging',
      'Flexible design',
      'Professional look',
      'Scale efficiency'
    ],
    useCases: [
      'Real Estate',
      'Interior Design',
      'Retail Spaces',
      'Hospitality',
      'Event Planning',
      'Product Display',
      'Architecture',
      'Space Planning'
    ],
    process: [
      {
        step: 'Space Analysis',
        description: 'Assess requirements'
      },
      {
        step: 'Design Planning',
        description: 'Create concept'
      },
      {
        step: 'Visualization',
        description: 'Generate renders'
      },
      {
        step: 'Refinement',
        description: 'Perfect details'
      },
      {
        step: 'Delivery',
        description: 'Provide assets'
      }
    ]
  },
  {
    id: 'ai-art',
    title: 'AI Art & Digital Assets',
    description: 'Generate unique digital art pieces, NFT collections, and creative assets using AI art styles.',
    icon: Paintbrush,
    features: [
      'Style variety',
      'Custom generation',
      'Collection creation',
      'Unique designs',
      'Format options',
      'Batch processing',
      'Style transfer',
      'Resolution control'
    ],
    benefits: [
      'Original content',
      'Quick creation',
      'Unlimited options',
      'Style flexibility',
      'Cost efficiency',
      'Scalable production',
      'Unique assets',
      'Creative freedom'
    ],
    useCases: [
      'NFT Collections',
      'Digital Art',
      'Brand Assets',
      'Marketing Materials',
      'Social Media',
      'Website Design',
      'Product Art',
      'Special Projects'
    ],
    process: [
      {
        step: 'Concept Development',
        description: 'Define art direction'
      },
      {
        step: 'Style Selection',
        description: 'Choose artistic style'
      },
      {
        step: 'Generation',
        description: 'Create artwork'
      },
      {
        step: 'Curation',
        description: 'Select best pieces'
      },
      {
        step: 'Finalization',
        description: 'Prepare for use'
      }
    ]
  },
  {
    id: 'image-enhancement',
    title: 'Universal Image Enhancement',
    description: 'Transform, upscale, and enhance images while automatically optimizing for different platforms.',
    icon: Maximize,
    features: [
      'Resolution upscaling',
      'Quality enhancement',
      'Style transfer',
      'Format optimization',
      'Platform adaptation',
      'Batch processing',
      'Auto-correction',
      'Size optimization'
    ],
    benefits: [
      'Better quality',
      'Platform ready',
      'Time savings',
      'Consistent look',
      'Easy processing',
      'Multiple formats',
      'Quick delivery',
      'Professional results'
    ],
    useCases: [
      'Social Media',
      'E-commerce',
      'Marketing',
      'Website Content',
      'Print Materials',
      'Digital Ads',
      'Product Images',
      'Archive Enhancement'
    ],
    process: [
      {
        step: 'Analysis',
        description: 'Assess image needs'
      },
      {
        step: 'Enhancement',
        description: 'Improve quality'
      },
      {
        step: 'Optimization',
        description: 'Adapt for platforms'
      },
      {
        step: 'Verification',
        description: 'Quality check'
      },
      {
        step: 'Export',
        description: 'Deliver formats'
      }
    ]
  }
];