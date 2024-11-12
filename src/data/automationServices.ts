import { 
  GitMerge,
  Code,
  HeadsetIcon,
  Target,
  Calculator,
  FolderKanban,
  FileText,
  Users,
  Calendar,
  BarChart3
} from 'lucide-react';

export interface ProcessStep {
  step: string;
  description: string;
}

export interface AutomationService {
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

export const automationServiceCategories: ServiceCategory[] = [
  {
    title: "Core Automation Solutions",
    services: [
      "Intelligent Workflow & Process Automation",
      "AI-Powered Website & Application Development",
      "Customer Experience Automation Suite",
      "Sales & Marketing Automation Platform"
    ]
  },
  {
    title: "Business Operations",
    services: [
      "Finance & Operations Automation",
      "Smart Project & Resource Management",
      "Intelligent Document Processing"
    ]
  },
  {
    title: "Enterprise Solutions",
    services: [
      "HR & Talent Management Automation",
      "Meeting & Calendar Intelligence",
      "Business Intelligence Automation"
    ]
  }
];

export const automationServices: AutomationService[] = [
  {
    id: 'workflow-automation',
    title: 'Intelligent Workflow & Process Automation',
    description: 'Design and implement custom AI-powered workflows that streamline business operations.',
    icon: GitMerge,
    features: [
      'Custom workflow design',
      'Process optimization',
      'Tool integration',
      'Automated task handling',
      'Real-time monitoring',
      'Error detection',
      'Performance analytics',
      'Scalable architecture'
    ],
    benefits: [
      'Increased efficiency',
      'Reduced errors',
      'Time savings',
      'Cost reduction',
      'Better compliance',
      'Improved accuracy',
      'Enhanced productivity',
      'Seamless operations'
    ],
    useCases: [
      'Business Operations',
      'Data Processing',
      'Order Management',
      'Approval Workflows',
      'Document Routing',
      'Inventory Management',
      'Quality Control',
      'Service Delivery'
    ],
    process: [
      {
        step: 'Process Analysis',
        description: 'Evaluate current workflows'
      },
      {
        step: 'Design',
        description: 'Create automation plan'
      },
      {
        step: 'Development',
        description: 'Build custom solution'
      },
      {
        step: 'Integration',
        description: 'Connect systems'
      },
      {
        step: 'Optimization',
        description: 'Refine performance'
      }
    ]
  },
  {
    id: 'website-development',
    title: 'AI-Powered Website & Application Development',
    description: 'Create intelligent websites and applications with AI-driven features.',
    icon: Code,
    features: [
      'AI content management',
      'Personalization',
      'Smart analytics',
      'Automated testing',
      'Performance optimization',
      'Security features',
      'Integration capabilities',
      'Responsive design'
    ],
    benefits: [
      'Enhanced user experience',
      'Higher engagement',
      'Increased conversions',
      'Better performance',
      'Reduced maintenance',
      'Scalable solution',
      'Future-proof design',
      'Cost efficiency'
    ],
    useCases: [
      'E-commerce',
      'Corporate Websites',
      'Customer Portals',
      'Service Platforms',
      'Content Websites',
      'Mobile Apps',
      'Web Applications',
      'Internal Tools'
    ],
    process: [
      {
        step: 'Requirements',
        description: 'Gather specifications'
      },
      {
        step: 'Design',
        description: 'Create solution architecture'
      },
      {
        step: 'Development',
        description: 'Build application'
      },
      {
        step: 'Testing',
        description: 'Ensure quality'
      },
      {
        step: 'Deployment',
        description: 'Launch solution'
      }
    ]
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience Automation Suite',
    description: 'Deploy comprehensive customer service solutions including intelligent chatbots and virtual assistants.',
    icon: HeadsetIcon,
    features: [
      '24/7 availability',
      'Multi-channel support',
      'Natural language processing',
      'Automated responses',
      'Ticket management',
      'Analytics dashboard',
      'Integration options',
      'Customizable flows'
    ],
    benefits: [
      'Improved response time',
      'Consistent service',
      'Cost reduction',
      'Higher satisfaction',
      'Scalable support',
      'Better insights',
      'Reduced workload',
      'Enhanced efficiency'
    ],
    useCases: [
      'Customer Support',
      'Sales Inquiries',
      'Technical Support',
      'Order Status',
      'Product Information',
      'Appointment Booking',
      'FAQ Handling',
      'Service Requests'
    ],
    process: [
      {
        step: 'Analysis',
        description: 'Assess requirements'
      },
      {
        step: 'Configuration',
        description: 'Set up automation'
      },
      {
        step: 'Training',
        description: 'Prepare AI models'
      },
      {
        step: 'Integration',
        description: 'Connect channels'
      },
      {
        step: 'Optimization',
        description: 'Enhance performance'
      }
    ]
  },
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing Automation Platform',
    description: 'Streamline your entire sales and marketing pipeline with AI tools.',
    icon: Target,
    features: [
      'Lead scoring',
      'Email automation',
      'Campaign management',
      'Analytics tracking',
      'CRM integration',
      'A/B testing',
      'Personalization',
      'Performance metrics'
    ],
    benefits: [
      'Higher conversion',
      'Better targeting',
      'Time efficiency',
      'Increased ROI',
      'Data-driven decisions',
      'Improved engagement',
      'Consistent follow-up',
      'Scalable processes'
    ],
    useCases: [
      'Lead Generation',
      'Email Marketing',
      'Social Media',
      'Content Marketing',
      'Sales Outreach',
      'Campaign Management',
      'Market Analysis',
      'Customer Retention'
    ],
    process: [
      {
        step: 'Strategy',
        description: 'Define objectives'
      },
      {
        step: 'Setup',
        description: 'Configure platform'
      },
      {
        step: 'Integration',
        description: 'Connect tools'
      },
      {
        step: 'Launch',
        description: 'Start campaigns'
      },
      {
        step: 'Optimization',
        description: 'Improve results'
      }
    ]
  },
  {
    id: 'finance-operations',
    title: 'Finance & Operations Automation',
    description: 'Integrate AI-powered systems for accounting, expense management, and financial reporting.',
    icon: Calculator,
    features: [
      'Automated accounting',
      'Expense tracking',
      'Financial reporting',
      'Inventory management',
      'Supply chain optimization',
      'Risk assessment',
      'Compliance monitoring',
      'Real-time analytics'
    ],
    benefits: [
      'Accurate reporting',
      'Cost savings',
      'Better compliance',
      'Reduced errors',
      'Faster processing',
      'Enhanced control',
      'Data accuracy',
      'Operational efficiency'
    ],
    useCases: [
      'Accounting',
      'Financial Planning',
      'Expense Management',
      'Supply Chain',
      'Inventory Control',
      'Risk Management',
      'Compliance',
      'Reporting'
    ],
    process: [
      {
        step: 'Assessment',
        description: 'Evaluate needs'
      },
      {
        step: 'Planning',
        description: 'Design solution'
      },
      {
        step: 'Implementation',
        description: 'Deploy system'
      },
      {
        step: 'Integration',
        description: 'Connect processes'
      },
      {
        step: 'Monitoring',
        description: 'Ensure performance'
      }
    ]
  },
  {
    id: 'project-management',
    title: 'Smart Project & Resource Management',
    description: 'Automate project workflows, task assignments, and resource allocation using AI-driven tools.',
    icon: FolderKanban,
    features: [
      'Task automation',
      'Resource optimization',
      'Timeline management',
      'Progress tracking',
      'Team collaboration',
      'Budget monitoring',
      'Risk assessment',
      'Performance analytics'
    ],
    benefits: [
      'Better organization',
      'Resource efficiency',
      'Time savings',
      'Improved collaboration',
      'Clear visibility',
      'Risk reduction',
      'Cost control',
      'Enhanced productivity'
    ],
    useCases: [
      'Project Planning',
      'Team Management',
      'Resource Allocation',
      'Timeline Tracking',
      'Budget Management',
      'Risk Assessment',
      'Status Reporting',
      'Team Collaboration'
    ],
    process: [
      {
        step: 'Setup',
        description: 'Configure system'
      },
      {
        step: 'Planning',
        description: 'Organize resources'
      },
      {
        step: 'Execution',
        description: 'Implement workflows'
      },
      {
        step: 'Monitoring',
        description: 'Track progress'
      },
      {
        step: 'Optimization',
        description: 'Improve efficiency'
      }
    ]
  },
  {
    id: 'document-processing',
    title: 'Intelligent Document Processing',
    description: 'Transform your document management with AI that handles data extraction and processing.',
    icon: FileText,
    features: [
      'Data extraction',
      'Document classification',
      'Content analysis',
      'Format conversion',
      'Automated routing',
      'Version control',
      'Search capabilities',
      'Security features'
    ],
    benefits: [
      'Faster processing',
      'Reduced errors',
      'Better organization',
      'Easy retrieval',
      'Cost savings',
      'Improved compliance',
      'Enhanced security',
      'Efficient workflow'
    ],
    useCases: [
      'Contract Management',
      'Invoice Processing',
      'Legal Documents',
      'HR Records',
      'Financial Reports',
      'Medical Records',
      'Technical Docs',
      'Compliance Documents'
    ],
    process: [
      {
        step: 'Analysis',
        description: 'Assess documents'
      },
      {
        step: 'Setup',
        description: 'Configure system'
      },
      {
        step: 'Processing',
        description: 'Extract data'
      },
      {
        step: 'Organization',
        description: 'Manage content'
      },
      {
        step: 'Integration',
        description: 'Connect workflows'
      }
    ]
  },
  {
    id: 'hr-automation',
    title: 'HR & Talent Management Automation',
    description: 'Streamline recruitment, onboarding, and HR processes with AI-powered tools.',
    icon: Users,
    features: [
      'Recruitment automation',
      'Onboarding workflow',
      'Document management',
      'Performance tracking',
      'Training management',
      'Analytics dashboard',
      'Compliance monitoring',
      'Employee portal'
    ],
    benefits: [
      'Faster hiring',
      'Better candidates',
      'Reduced paperwork',
      'Time savings',
      'Improved compliance',
      'Enhanced experience',
      'Data accuracy',
      'Cost efficiency'
    ],
    useCases: [
      'Recruitment',
      'Onboarding',
      'Performance Management',
      'Training',
      'Benefits Administration',
      'Compliance',
      'Employee Records',
      'Talent Development'
    ],
    process: [
      {
        step: 'Assessment',
        description: 'Evaluate needs'
      },
      {
        step: 'Configuration',
        description: 'Set up system'
      },
      {
        step: 'Integration',
        description: 'Connect processes'
      },
      {
        step: 'Training',
        description: 'Prepare team'
      },
      {
        step: 'Optimization',
        description: 'Enhance efficiency'
      }
    ]
  },
  {
    id: 'calendar-intelligence',
    title: 'Meeting & Calendar Intelligence',
    description: 'Implement smart scheduling systems that handle meeting coordination and calendar management.',
    icon: Calendar,
    features: [
      'Smart scheduling',
      'Meeting transcription',
      'Action tracking',
      'Calendar optimization',
      'Time zone management',
      'Integration options',
      'Analytics tools',
      'Automated reminders'
    ],
    benefits: [
      'Time savings',
      'Better organization',
      'Improved productivity',
      'Reduced conflicts',
      'Enhanced collaboration',
      'Clear communication',
      'Efficient planning',
      'Meeting effectiveness'
    ],
    useCases: [
      'Team Meetings',
      'Client Calls',
      'Project Planning',
      'Event Scheduling',
      'Resource Booking',
      'Time Management',
      'Remote Teams',
      'Cross-zone Coordination'
    ],
    process: [
      {
        step: 'Setup',
        description: 'Configure system'
      },
      {
        step: 'Integration',
        description: 'Connect calendars'
      },
      {
        step: 'Customization',
        description: 'Set preferences'
      },
      {
        step: 'Training',
        description: 'Prepare users'
      },
      {
        step: 'Optimization',
        description: 'Enhance usage'
      }
    ]
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence Automation',
    description: 'Deploy AI systems that automatically collect, analyze, and report on key business metrics.',
    icon: BarChart3,
    features: [
      'Data collection',
      'Automated analysis',
      'Real-time reporting',
      'Predictive analytics',
      'Custom dashboards',
      'Alert system',
      'Data visualization',
      'Integration capabilities'
    ],
    benefits: [
      'Better insights',
      'Faster decisions',
      'Data accuracy',
      'Time efficiency',
      'Cost savings',
      'Competitive advantage',
      'Risk reduction',
      'Performance tracking'
    ],
    useCases: [
      'Performance Monitoring',
      'Market Analysis',
      'Financial Planning',
      'Sales Tracking',
      'Customer Analytics',
      'Operations Management',
      'Risk Assessment',
      'Strategic Planning'
    ],
    process: [
      {
        step: 'Analysis',
        description: 'Assess requirements'
      },
      {
        step: 'Setup',
        description: 'Configure system'
      },
      {
        step: 'Integration',
        description: 'Connect data sources'
      },
      {
        step: 'Automation',
        description: 'Enable reporting'
      },
      {
        step: 'Optimization',
        description: 'Enhance insights'
      }
    ]
  }
];