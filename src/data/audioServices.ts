import { 
  Mic, 
  Phone, 
  Radio, 
  Languages, 
  Music, 
  FileText, 
  Waves,
  Speaker,
  UserSquare2,
  BookOpen
} from 'lucide-react';

export interface ProcessStep {
  step: string;
  description: string;
}

export interface AudioService {
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

export const audioServiceCategories: ServiceCategory[] = [
  {
    title: "Core Audio Services",
    services: [
      "Voice Synthesis",
      "Interactive Voice Response (IVR) Systems",
      "Podcast Production",
      "Audio Translation"
    ]
  },
  {
    title: "Creative Audio Solutions",
    services: [
      "Background Music & Sound Effects Generation",
      "Speech-to-Text Transcription",
      "AI Audio Restoration"
    ]
  },
  {
    title: "Advanced Audio Features",
    services: [
      "Dynamic Audio Ads",
      "Voice Cloning",
      "Audiobook Creation"
    ]
  }
];

export const audioServices: AudioService[] = [
  {
    id: 'voice-synthesis',
    title: 'Voice Synthesis',
    description: 'Generate natural-sounding voices for your projects using advanced AI voice synthesis technology.',
    icon: Mic,
    features: [
      'Natural voice generation',
      'Multiple voice options',
      'Emotion control',
      'Language support',
      'Custom voice creation',
      'Real-time synthesis',
      'Voice customization',
      'Accent selection'
    ],
    benefits: [
      'Cost-effective production',
      'Consistent quality',
      'Quick turnaround',
      'Scalable solution',
      'Brand voice control',
      'Global accessibility',
      'Easy updates',
      'Professional sound'
    ],
    useCases: [
      'Corporate Videos',
      'E-Learning',
      'IVR Systems',
      'Video Games',
      'Announcements',
      'Virtual Assistants',
      'Audiobooks',
      'Marketing Content'
    ],
    process: [
      {
        step: 'Voice Selection',
        description: 'Choose your ideal voice'
      },
      {
        step: 'Script Preparation',
        description: 'Prepare and optimize text'
      },
      {
        step: 'Voice Generation',
        description: 'Create synthetic voice'
      },
      {
        step: 'Quality Check',
        description: 'Review and refine'
      },
      {
        step: 'Final Delivery',
        description: 'Export and implement'
      }
    ]
  },
  {
    id: 'ivr-systems',
    title: 'Interactive Voice Response (IVR) Systems',
    description: 'Implement intelligent AI-powered IVR systems for automated customer interactions.',
    icon: Phone,
    features: [
      'Natural language processing',
      'Real-time responses',
      'Multi-language support',
      'Custom flow design',
      'Voice recognition',
      'Analytics dashboard',
      'Integration options',
      'Call routing'
    ],
    benefits: [
      '24/7 availability',
      'Reduced wait times',
      'Cost savings',
      'Scalable solution',
      'Improved efficiency',
      'Better customer experience',
      'Data insights',
      'Consistent service'
    ],
    useCases: [
      'Customer Service',
      'Appointment Scheduling',
      'Order Status',
      'Payment Processing',
      'Information Requests',
      'Survey Collection',
      'Technical Support',
      'Account Management'
    ],
    process: [
      {
        step: 'Flow Design',
        description: 'Plan interaction flow'
      },
      {
        step: 'Voice Setup',
        description: 'Configure voice system'
      },
      {
        step: 'Integration',
        description: 'Connect with systems'
      },
      {
        step: 'Testing',
        description: 'Verify functionality'
      },
      {
        step: 'Deployment',
        description: 'Launch system'
      }
    ]
  },
  {
    id: 'podcast-production',
    title: 'Podcast Production',
    description: 'Elevate your podcast with AI-assisted production services and automated editing.',
    icon: Radio,
    features: [
      'Automated editing',
      'Sound enhancement',
      'Content optimization',
      'Noise reduction',
      'Transcript generation',
      'Music integration',
      'Multi-track support',
      'Format conversion'
    ],
    benefits: [
      'Time savings',
      'Professional quality',
      'Consistent output',
      'Easy distribution',
      'Enhanced engagement',
      'Cost efficiency',
      'Quick turnaround',
      'Scalable production'
    ],
    useCases: [
      'Interview Shows',
      'Educational Content',
      'Business Podcasts',
      'Entertainment Series',
      'News Programs',
      'Story Telling',
      'Tech Reviews',
      'Commentary Shows'
    ],
    process: [
      {
        step: 'Recording',
        description: 'Capture audio content'
      },
      {
        step: 'AI Analysis',
        description: 'Process audio data'
      },
      {
        step: 'Enhancement',
        description: 'Improve sound quality'
      },
      {
        step: 'Review',
        description: 'Quality assessment'
      },
      {
        step: 'Publishing',
        description: 'Distribute content'
      }
    ]
  },
  {
    id: 'audio-translation',
    title: 'Audio Translation',
    description: 'Reach a global audience with accurate AI-driven audio translation services.',
    icon: Languages,
    features: [
      'Multiple languages',
      'Voice matching',
      'Cultural adaptation',
      'Accent preservation',
      'Context awareness',
      'Quick translation',
      'Quality assurance',
      'Format flexibility'
    ],
    benefits: [
      'Global reach',
      'Time efficiency',
      'Cost savings',
      'Accuracy',
      'Cultural relevance',
      'Scalability',
      'Consistency',
      'Easy updates'
    ],
    useCases: [
      'Corporate Training',
      'Marketing Content',
      'Educational Materials',
      'Entertainment Media',
      'Documentation',
      'Public Announcements',
      'Product Guides',
      'International Events'
    ],
    process: [
      {
        step: 'Content Analysis',
        description: 'Evaluate source audio'
      },
      {
        step: 'Translation',
        description: 'Convert content'
      },
      {
        step: 'Voice Synthesis',
        description: 'Generate audio'
      },
      {
        step: 'Quality Check',
        description: 'Verify accuracy'
      },
      {
        step: 'Delivery',
        description: 'Provide final files'
      }
    ]
  },
  {
    id: 'background-music',
    title: 'Background Music & Sound Effects',
    description: 'Enhance your audio projects with AI-generated background music and unique sound effects.',
    icon: Music,
    features: [
      'Custom composition',
      'Genre selection',
      'Mood matching',
      'Tempo control',
      'Effect library',
      'Real-time generation',
      'Style mixing',
      'Length adjustment'
    ],
    benefits: [
      'Unique content',
      'Copyright free',
      'Quick creation',
      'Perfect fit',
      'Cost effective',
      'Easy licensing',
      'Unlimited variations',
      'Professional quality'
    ],
    useCases: [
      'Video Production',
      'Gaming',
      'Advertising',
      'Presentations',
      'Podcasts',
      'Mobile Apps',
      'Website Audio',
      'Social Media'
    ],
    process: [
      {
        step: 'Style Selection',
        description: 'Choose music style'
      },
      {
        step: 'Generation',
        description: 'Create audio'
      },
      {
        step: 'Customization',
        description: 'Adjust parameters'
      },
      {
        step: 'Review',
        description: 'Evaluate output'
      },
      {
        step: 'Export',
        description: 'Deliver files'
      }
    ]
  },
  {
    id: 'speech-to-text',
    title: 'Speech-to-Text Transcription',
    description: 'Convert your audio content into accurate, searchable text using AI-powered transcription.',
    icon: FileText,
    features: [
      'Multiple languages',
      'Speaker identification',
      'Timestamp marking',
      'Format options',
      'Search capability',
      'Auto-punctuation',
      'Custom vocabulary',
      'Batch processing'
    ],
    benefits: [
      'Time savings',
      'High accuracy',
      'Easy editing',
      'Searchable content',
      'Accessibility',
      'Content repurposing',
      'Documentation',
      'Analytics ready'
    ],
    useCases: [
      'Meetings',
      'Interviews',
      'Lectures',
      'Podcasts',
      'Legal Records',
      'Medical Notes',
      'Customer Calls',
      'Research Data'
    ],
    process: [
      {
        step: 'Upload',
        description: 'Submit audio'
      },
      {
        step: 'Processing',
        description: 'Convert to text'
      },
      {
        step: 'Review',
        description: 'Check accuracy'
      },
      {
        step: 'Edit',
        description: 'Refine content'
      },
      {
        step: 'Export',
        description: 'Download transcript'
      }
    ]
  },
  {
    id: 'audio-restoration',
    title: 'AI Audio Restoration',
    description: 'Restore and enhance old or damaged audio recordings with AI-driven restoration tools.',
    icon: Waves,
    features: [
      'Noise reduction',
      'Quality enhancement',
      'Clarity improvement',
      'Format conversion',
      'Volume normalization',
      'Frequency balance',
      'Click removal',
      'Audio repair'
    ],
    benefits: [
      'Preserved content',
      'Improved quality',
      'Historical value',
      'Clear sound',
      'Format updating',
      'Easy sharing',
      'Professional results',
      'Archive protection'
    ],
    useCases: [
      'Historical Records',
      'Music Archives',
      'Family Recordings',
      'Film Audio',
      'Vinyl Transfers',
      'Tape Restoration',
      'Radio Archives',
      'Voice Recordings'
    ],
    process: [
      {
        step: 'Analysis',
        description: 'Assess damage'
      },
      {
        step: 'Processing',
        description: 'Apply restoration'
      },
      {
        step: 'Enhancement',
        description: 'Improve quality'
      },
      {
        step: 'Review',
        description: 'Quality check'
      },
      {
        step: 'Delivery',
        description: 'Provide restored audio'
      }
    ]
  },
  {
    id: 'dynamic-ads',
    title: 'Dynamic Audio Ads',
    description: 'Create personalized and engaging audio advertisements using AI technology.',
    icon: Speaker,
    features: [
      'Personalization',
      'A/B testing',
      'Voice selection',
      'Music integration',
      'Real-time adaptation',
      'Analytics tracking',
      'Multi-format export',
      'Campaign management'
    ],
    benefits: [
      'Higher engagement',
      'Better targeting',
      'Increased ROI',
      'Quick production',
      'Easy updates',
      'Performance tracking',
      'Cost efficiency',
      'Scalable solution'
    ],
    useCases: [
      'Radio Advertising',
      'Podcast Ads',
      'Streaming Services',
      'In-App Audio',
      'Voice Assistants',
      'Digital Radio',
      'Social Media',
      'Website Audio'
    ],
    process: [
      {
        step: 'Strategy',
        description: 'Plan campaign'
      },
      {
        step: 'Creation',
        description: 'Generate content'
      },
      {
        step: 'Testing',
        description: 'Verify effectiveness'
      },
      {
        step: 'Optimization',
        description: 'Improve performance'
      },
      {
        step: 'Launch',
        description: 'Deploy campaign'
      }
    ]
  },
  {
    id: 'voice-cloning',
    title: 'Voice Cloning',
    description: 'Create unique and realistic voice clones with cutting-edge AI technology.',
    icon: UserSquare2,
    features: [
      'Voice matching',
      'Emotion control',
      'Language support',
      'Accent preservation',
      'Real-time synthesis',
      'Quality assurance',
      'Custom training',
      'Security features'
    ],
    benefits: [
      'Brand consistency',
      'Time savings',
      'Cost efficiency',
      'Scalability',
      'Easy updates',
      'Global reach',
      'Flexibility',
      'Quality control'
    ],
    useCases: [
      'Brand Voice',
      'Virtual Assistants',
      'Content Creation',
      'Localization',
      'Audio Books',
      'Gaming',
      'Education',
      'Entertainment'
    ],
    process: [
      {
        step: 'Voice Recording',
        description: 'Capture samples'
      },
      {
        step: 'AI Training',
        description: 'Create voice model'
      },
      {
        step: 'Testing',
        description: 'Verify quality'
      },
      {
        step: 'Refinement',
        description: 'Adjust parameters'
      },
      {
        step: 'Implementation',
        description: 'Deploy voice clone'
      }
    ]
  },
  {
    id: 'audiobook-creation',
    title: 'Audiobook Creation',
    description: 'Produce high-quality audiobooks with AI-powered narration and editing.',
    icon: BookOpen,
    features: [
      'Natural narration',
      'Character voices',
      'Emotion expression',
      'Pacing control',
      'Quality assurance',
      'Format options',
      'Chapter marking',
      'Distribution support'
    ],
    benefits: [
      'Fast production',
      'Cost effectiveness',
      'Consistent quality',
      'Easy updates',
      'Multiple formats',
      'Global reach',
      'Scalable solution',
      'Professional sound'
    ],
    useCases: [
      'Fiction Books',
      'Non-Fiction',
      'Educational Texts',
      'Business Books',
      "Children's Books",
      'Technical Manuals',
      'Poetry Collections',
      'Magazine Articles'
    ],
    process: [
      {
        step: 'Text Preparation',
        description: 'Format manuscript'
      },
      {
        step: 'Voice Selection',
        description: 'Choose narrator voice'
      },
      {
        step: 'Production',
        description: 'Generate narration'
      },
      {
        step: 'Quality Check',
        description: 'Review and edit'
      },
      {
        step: 'Publishing',
        description: 'Distribute audiobook'
      }
    ]
  }
];