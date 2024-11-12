import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostEditor from '../../components/blog/PostEditor';
import { saveDraft, publishDraft } from '../../data/blog';
import type { BlogPost } from '../../data/blog';

const BlogEditor = () => {
  const navigate = useNavigate();

  const handleSave = (post: Partial<BlogPost>) => {
    saveDraft(post);
    navigate('/admin/dashboard');
  };

  const handlePublish = (post: Partial<BlogPost>) => {
    const savedPosts = saveDraft(post);
    const savedPost = savedPosts.find(p => p.id === post.id);
    if (savedPost) {
      publishDraft(savedPost.id);
    }
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <PostEditor onSave={handleSave} onPublish={handlePublish} />
    </div>
  );
};

export default BlogEditor;