import { 
  BarChart3,
  TrendingUp,
  Search,
  Heart,
  UserCheck,
  LineChart,
  DollarSign,
  Globe,
  Share2,
  Target
} from 'lucide-react';

export interface ProcessStep {
  step: string;
  description: string;
}

export interface AnalyticsService {
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

export const analyticsServiceCategories: ServiceCategory[] = [
  {
    title: "Core Analytics Solutions",
    services: [
      "Performance Analytics",
      "Predictive Analysis & Business Forecasting",
      "Comprehensive Market Research",
      "Sentiment & Brand Perception Analysis"
    ]
  },
  {
    title: "Business Intelligence",
    services: [
      "Customer Behavior & Journey Analytics",
      "Real-time Data Visualization & Reporting",
      "Sales & Revenue Analytics"
    ]
  },
  {
    title: "Digital Analytics",
    services: [
      "Digital Performance Analytics",
      "Social Media & Content Analytics",
      "Competitive Intelligence & Market Positioning"
    ]
  }
];

export const analyticsServices: AnalyticsService[] = [
  {
    id: 'performance-analytics',
    title: 'Performance Analytics',
    description: 'Monitor and evaluate your business performance with AI-driven analytics.',
    icon: BarChart3,
    features: [
      'Automated dashboards',
      'Real-time monitoring',
      'KPI tracking',
      'Performance metrics',
      'Custom reporting',
      'Data visualization',
      'Trend analysis',
      'Alert systems'
    ],
    benefits: [
      'Better insights',
      'Data-driven decisions',
      'Improved efficiency',
      'Resource optimization',
      'Quick response',
      'Clear visibility',
      'Strategic planning',
      'Cost savings'
    ],
    useCases: [
      'Business Operations',
      'Team Performance',
      'Project Management',
      'Resource Allocation',
      'Process Optimization',
      'Quality Control',
      'Cost Management',
      'Strategic Planning'
    ],
    process: [
      {
        step: 'Data Collection',
        description: 'Gather metrics'
      },
      {
        step: 'Analysis',
        description: 'Process information'
      },
      {
        step: 'Visualization',
        description: 'Create dashboards'
      },
      {
        step: 'Monitoring',
        description: 'Track performance'
      },
      {
        step: 'Optimization',
        description: 'Implement improvements'
      }
    ]
  },
  {
    id: 'predictive-analysis',
    title: 'Predictive Analysis & Business Forecasting',
    description: 'Anticipate future trends and outcomes with advanced AI predictive analysis.',
    icon: TrendingUp,
    features: [
      'Trend forecasting',
      'Risk assessment',
      'Market prediction',
      'Resource planning',
      'Demand forecasting',
      'Scenario analysis',
      'Pattern recognition',
      'Automated alerts'
    ],
    benefits: [
      'Better planning',
      'Risk reduction',
      'Strategic advantage',
      'Resource efficiency',
      'Cost savings',
      'Market readiness',
      'Competitive edge',
      'Informed decisions'
    ],
    useCases: [
      'Sales Forecasting',
      'Market Trends',
      'Risk Management',
      'Resource Planning',
      'Inventory Management',
      'Financial Planning',
      'Demand Prediction',
      'Strategic Planning'
    ],
    process: [
      {
        step: 'Data Gathering',
        description: 'Collect information'
      },
      {
        step: 'Analysis',
        description: 'Process data'
      },
      {
        step: 'Modeling',
        description: 'Create predictions'
      },
      {
        step: 'Validation',
        description: 'Verify accuracy'
      },
      {
        step: 'Implementation',
        description: 'Apply insights'
      }
    ]
  },
  {
    id: 'market-research',
    title: 'Comprehensive Market Research',
    description: 'Conduct thorough market research using AI tools to gather and analyze data.',
    icon: Search,
    features: [
      'Data collection',
      'Trend analysis',
      'Competitor tracking',
      'Consumer insights',
      'Market segmentation',
      'Industry analysis',
      'Report generation',
      'Recommendation engine'
    ],
    benefits: [
      'Market understanding',
      'Strategic planning',
      'Competitive advantage',
      'Risk reduction',
      'Better targeting',
      'Informed decisions',
      'Growth opportunities',
      'Market positioning'
    ],
    useCases: [
      'Market Entry',
      'Product Launch',
      'Competitive Analysis',
      'Consumer Research',
      'Brand Strategy',
      'Pricing Strategy',
      'Distribution Planning',
      'Market Expansion'
    ],
    process: [
      {
        step: 'Research Planning',
        description: 'Define objectives'
      },
      {
        step: 'Data Collection',
        description: 'Gather information'
      },
      {
        step: 'Analysis',
        description: 'Process findings'
      },
      {
        step: 'Insights',
        description: 'Generate conclusions'
      },
      {
        step: 'Recommendations',
        description: 'Provide guidance'
      }
    ]
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment & Brand Perception Analysis',
    description: 'Understand customer emotions and opinions with AI-powered sentiment analysis.',
    icon: Heart,
    features: [
      'Real-time monitoring',
      'Sentiment tracking',
      'Brand mentions',
      'Emotion analysis',
      'Trend detection',
      'Alert system',
      'Report generation',
      'Channel analysis'
    ],
    benefits: [
      'Brand awareness',
      'Quick response',
      'Customer insight',
      'Risk management',
      'Better engagement',
      'Product improvement',
      'Service enhancement',
      'Market adaptation'
    ],
    useCases: [
      'Brand Monitoring',
      'Product Feedback',
      'Crisis Management',
      'Customer Service',
      'Campaign Analysis',
      'Product Development',
      'Market Research',
      'Competitive Analysis'
    ],
    process: [
      {
        step: 'Data Collection',
        description: 'Gather feedback'
      },
      {
        step: 'Analysis',
        description: 'Process sentiment'
      },
      {
        step: 'Interpretation',
        description: 'Generate insights'
      },
      {
        step: 'Reporting',
        description: 'Share findings'
      },
      {
        step: 'Action',
        description: 'Implement changes'
      }
    ]
  },
  {
    id: 'customer-behavior',
    title: 'Customer Behavior & Journey Analytics',
    description: 'Decode customer actions and preferences with AI-driven behavior analytics.',
    icon: UserCheck,
    features: [
      'Journey mapping',
      'Behavior tracking',
      'Preference analysis',
      'Interaction monitoring',
      'Pattern recognition',
      'Segmentation',
      'Predictive modeling',
      'Attribution analysis'
    ],
    benefits: [
      'Better understanding',
      'Personalization',
      'Higher conversion',
      'Customer retention',
      'Improved experience',
      'Targeted marketing',
      'Increased loyalty',
      'Revenue growth'
    ],
    useCases: [
      'Customer Experience',
      'Marketing Strategy',
      'Product Development',
      'Service Design',
      'Sales Optimization',
      'Channel Strategy',
      'Loyalty Programs',
      'Campaign Planning'
    ],
    process: [
      {
        step: 'Data Collection',
        description: 'Track behavior'
      },
      {
        step: 'Analysis',
        description: 'Process patterns'
      },
      {
        step: 'Mapping',
        description: 'Create journey maps'
      },
      {
        step: 'Insights',
        description: 'Generate findings'
      },
      {
        step: 'Implementation',
        description: 'Apply learnings'
      }
    ]
  },
  {
    id: 'data-visualization',
    title: 'Real-time Data Visualization & Reporting',
    description: 'Transform complex data into intuitive visual dashboards with AI-enhanced visualization.',
    icon: LineChart,
    features: [
      'Real-time updates',
      'Interactive dashboards',
      'Custom visualization',
      'Automated reporting',
      'Data integration',
      'Alert system',
      'Export options',
      'Mobile access'
    ],
    benefits: [
      'Clear insights',
      'Quick decisions',
      'Better understanding',
      'Time savings',
      'Easy sharing',
      'Data accessibility',
      'Informed action',
      'Team alignment'
    ],
    useCases: [
      'Executive Dashboards',
      'Team Reports',
      'Project Tracking',
      'Performance Monitoring',
      'Sales Analytics',
      'Financial Reporting',
      'Operations Management',
      'Marketing Analytics'
    ],
    process: [
      {
        step: 'Requirements',
        description: 'Define needs'
      },
      {
        step: 'Design',
        description: 'Create layouts'
      },
      {
        step: 'Integration',
        description: 'Connect data'
      },
      {
        step: 'Automation',
        description: 'Set up updates'
      },
      {
        step: 'Deployment',
        description: 'Launch dashboards'
      }
    ]
  },
  {
    id: 'sales-analytics',
    title: 'Sales & Revenue Analytics',
    description: 'Improve your sales strategy with AI-based forecasting and analysis.',
    icon: DollarSign,
    features: [
      'Sales forecasting',
      'Revenue tracking',
      'Performance metrics',
      'Pipeline analysis',
      'Conversion tracking',
      'Team analytics',
      'Goal monitoring',
      'Resource planning'
    ],
    benefits: [
      'Better forecasting',
      'Increased revenue',
      'Resource optimization',
      'Performance insight',
      'Strategic planning',
      'Team efficiency',
      'Goal achievement',
      'Cost reduction'
    ],
    useCases: [
      'Sales Planning',
      'Revenue Forecasting',
      'Team Performance',
      'Territory Management',
      'Pipeline Optimization',
      'Resource Allocation',
      'Goal Setting',
      'Strategy Development'
    ],
    process: [
      {
        step: 'Data Collection',
        description: 'Gather metrics'
      },
      {
        step: 'Analysis',
        description: 'Process data'
      },
      {
        step: 'Forecasting',
        description: 'Generate predictions'
      },
      {
        step: 'Planning',
        description: 'Set strategies'
      },
      {
        step: 'Implementation',
        description: 'Execute plans'
      }
    ]
  },
  {
    id: 'digital-performance',
    title: 'Digital Performance Analytics',
    description: 'Optimize your online presence with AI-powered analysis of website traffic and behavior.',
    icon: Globe,
    features: [
      'Traffic analysis',
      'User behavior',
      'Conversion tracking',
      'SEO monitoring',
      'Performance metrics',
      'Site optimization',
      'Campaign tracking',
      'Goal monitoring'
    ],
    benefits: [
      'Better performance',
      'Higher conversion',
      'User experience',
      'SEO improvement',
      'Cost efficiency',
      'Traffic growth',
      'Campaign success',
      'ROI optimization'
    ],
    useCases: [
      'Website Optimization',
      'SEO Strategy',
      'User Experience',
      'Campaign Analysis',
      'Content Strategy',
      'Conversion Optimization',
      'Digital Marketing',
      'Performance Tracking'
    ],
    process: [
      {
        step: 'Data Collection',
        description: 'Track metrics'
      },
      {
        step: 'Analysis',
        description: 'Process data'
      },
      {
        step: 'Optimization',
        description: 'Improve performance'
      },
      {
        step: 'Monitoring',
        description: 'Track changes'
      },
      {
        step: 'Refinement',
        description: 'Enhance results'
      }
    ]
  },
  {
    id: 'social-analytics',
    title: 'Social Media & Content Analytics',
    description: 'Leverage AI to analyze social media performance and content effectiveness.',
    icon: Share2,
    features: [
      'Engagement tracking',
      'Content analysis',
      'Audience insights',
      'Performance metrics',
      'ROI calculation',
      'Trend monitoring',
      'Campaign tracking',
      'Competitor analysis'
    ],
    benefits: [
      'Better engagement',
      'Content strategy',
      'Audience growth',
      'Higher ROI',
      'Brand awareness',
      'Market insight',
      'Campaign success',
      'Competitive edge'
    ],
    useCases: [
      'Content Strategy',
      'Campaign Planning',
      'Audience Analysis',
      'Brand Building',
      'Engagement Optimization',
      'Influencer Marketing',
      'Community Management',
      'Performance Tracking'
    ],
    process: [
      {
        step: 'Data Collection',
        description: 'Gather metrics'
      },
      {
        step: 'Analysis',
        description: 'Process insights'
      },
      {
        step: 'Strategy',
        description: 'Plan content'
      },
      {
        step: 'Implementation',
        description: 'Execute plans'
      },
      {
        step: 'Optimization',
        description: 'Improve results'
      }
    ]
  },
  {
    id: 'competitive-intelligence',
    title: 'Competitive Intelligence & Market Positioning',
    description: 'Stay ahead with AI-driven competitive analysis and market positioning insights.',
    icon: Target,
    features: [
      'Competitor tracking',
      'Market analysis',
      'Strategy monitoring',
      'Benchmark tracking',
      'Trend detection',
      'Position analysis',
      'Opportunity identification',
      'Risk assessment'
    ],
    benefits: [
      'Market insight',
      'Strategic advantage',
      'Better positioning',
      'Risk management',
      'Growth opportunities',
      'Competitive edge',
      'Market adaptation',
      'Strategic planning'
    ],
    useCases: [
      'Market Strategy',
      'Product Development',
      'Pricing Strategy',
      'Market Entry',
      'Brand Positioning',
      'Growth Planning',
      'Risk Management',
      'Strategic Planning'
    ],
    process: [
      {
        step: 'Research',
        description: 'Gather data'
      },
      {
        step: 'Analysis',
        description: 'Process information'
      },
      {
        step: 'Strategy',
        description: 'Develop plans'
      },
      {
        step: 'Implementation',
        description: 'Execute strategy'
      },
      {
        step: 'Monitoring',
        description: 'Track results'
      }
    ]
  }
];