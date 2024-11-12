import { User, Calendar, Clock } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  status: 'draft' | 'published' | 'scheduled';
  scheduledDate?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  lastSaved?: string;
}

export const blogCategories = [
  'AI Trends',
  'AI Video',
  'AI Audio',
  'AI Image',
  'AI Business Automation',
  'AI Content Creation',
  'AI Analytics',
  'Industry Insights',
  'Case Studies',
  'Technology Updates',
  'Best Practices'
];

export const serviceTags = [
  // Video Services
  'AI Presenter Videos',
  'Video Translation',
  'Content Repurposing',
  'Explainer Videos',
  'AI Interactive Avatars',
  'Motion Graphics',
  'Custom B-Roll',
  'Product Demo Videos',
  'Training Videos',
  'Social Media Videos',
  
  // Audio Services
  'Voice Synthesis',
  'IVR Systems',
  'Podcast Production',
  'Audio Translation',
  'Background Music',
  'Speech-to-Text',
  'Audio Restoration',
  'Dynamic Audio Ads',
  'Voice Cloning',
  'Audiobook Creation',
  
  // Image Services
  'Brand Imagery',
  'Product Visualization',
  'Logo Design',
  'YouTube Thumbnails',
  'Comic Generation',
  'Custom Photo Packs',
  'Virtual Brand Rep',
  'Virtual Staging',
  'AI Art Creation',
  'Image Enhancement',
  
  // Business Automation
  'Workflow Automation',
  'AI Website Development',
  'Customer Experience',
  'Sales Automation',
  'Finance Automation',
  'Project Management',
  'Document Processing',
  'HR Automation',
  'Calendar Intelligence',
  'Business Intelligence',
  
  // Content Creation
  'Long-Form Content',
  'Marketing Content',
  'Social Media Management',
  'Email Automation',
  'Product Content',
  'Website Content',
  'Technical Content',
  'Video Scripts',
  'Content Translation',
  'Content Optimization',
  
  // Analytics
  'Performance Analytics',
  'Predictive Analysis',
  'Market Research',
  'Sentiment Analysis',
  'Customer Analytics',
  'Data Visualization',
  'Sales Analytics',
  'Digital Analytics',
  'Social Analytics',
  'Competitive Analysis'
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Content Creation: Trends to Watch',
    excerpt: 'Discover the emerging trends in AI-powered content creation and how they\'re reshaping the digital landscape.',
    content: 'Full article content here...',
    author: {
      name: 'Sarah Chen',
      role: 'AI Research Director',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'AI Trends',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    tags: ['AI', 'Content Creation', 'Digital Marketing'],
    status: 'published'
  }
];

// Get all blog posts
export const getBlogPosts = () => {
  const storedPosts = localStorage.getItem('blogPosts');
  if (storedPosts) {
    return JSON.parse(storedPosts);
  }
  return blogPosts;
};

// Get drafts only
export const getDrafts = () => {
  const posts = getBlogPosts();
  return posts.filter(post => post.status === 'draft');
};

// Get published posts only
export const getPublishedPosts = () => {
  const posts = getBlogPosts();
  return posts.filter(post => post.status === 'published');
};

// Save a draft
export const saveDraft = (draft: Partial<BlogPost>) => {
  const posts = getBlogPosts();
  const now = new Date().toISOString();
  
  const newDraft: BlogPost = {
    ...draft,
    id: draft.id || Math.random().toString(36).substr(2, 9),
    status: 'draft',
    lastSaved: now,
    date: now,
    author: {
      name: 'Admin',
      role: 'Content Manager',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    }
  } as BlogPost;

  const existingDraftIndex = posts.findIndex(p => p.id === newDraft.id);
  
  if (existingDraftIndex !== -1) {
    posts[existingDraftIndex] = {
      ...posts[existingDraftIndex],
      ...newDraft,
      lastSaved: now
    };
  } else {
    posts.push(newDraft);
  }
  
  localStorage.setItem('blogPosts', JSON.stringify(posts));
  return posts;
};

// Save or update a blog post
export const saveBlogPost = (post: BlogPost) => {
  const posts = getBlogPosts();
  const existingPostIndex = posts.findIndex(p => p.id === post.id);
  
  if (existingPostIndex !== -1) {
    posts[existingPostIndex] = post;
  } else {
    posts.push(post);
  }
  
  localStorage.setItem('blogPosts', JSON.stringify(posts));
  return posts;
};

// Delete a blog post
export const deleteBlogPost = (postId: string) => {
  const posts = getBlogPosts();
  const updatedPosts = posts.filter(post => post.id !== postId);
  localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  return updatedPosts;
};

// Delete a draft
export const deleteDraft = (draftId: string) => {
  const posts = getBlogPosts();
  const updatedPosts = posts.filter(post => !(post.id === draftId && post.status === 'draft'));
  localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  return updatedPosts;
};

// Get a single post by ID
export const getPostById = (postId: string) => {
  const posts = getBlogPosts();
  return posts.find(post => post.id === postId);
};

// Publish a draft
export const publishDraft = (draftId: string) => {
  const posts = getBlogPosts();
  const updatedPosts = posts.map(post => {
    if (post.id === draftId && post.status === 'draft') {
      return {
        ...post,
        status: 'published',
        date: new Date().toISOString()
      };
    }
    return post;
  });
  localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  return updatedPosts;
};

// Schedule a post
export const schedulePost = (postId: string, scheduledDate: string) => {
  const posts = getBlogPosts();
  const updatedPosts = posts.map(post => {
    if (post.id === postId) {
      return {
        ...post,
        status: 'scheduled',
        scheduledDate
      };
    }
    return post;
  });
  localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  return updatedPosts;
};