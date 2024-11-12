import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImagePlus, X, Eye, Calendar, Save } from 'lucide-react';
import { blogCategories, serviceTags } from '../../data/services';
import { BlogPost } from '../../data/blog';

interface PostEditorProps {
  post?: BlogPost;
  onSave: (post: Partial<BlogPost>) => void;
  onPublish?: (post: Partial<BlogPost>) => void;
}

const PostEditor: React.FC<PostEditorProps> = ({ post, onSave, onPublish }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [slug, setSlug] = useState(post?.id || '');
  const [content, setContent] = useState(post?.content || '');
  const [category, setCategory] = useState(post?.category || '');
  const [selectedTags, setSelectedTags] = useState<string[]>(post?.tags || []);
  const [customTag, setCustomTag] = useState('');
  const [metaDescription, setMetaDescription] = useState(post?.metaDescription || '');
  const [metaKeywords, setMetaKeywords] = useState<string[]>(post?.metaKeywords || []);
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(post?.image || '');
  const [status, setStatus] = useState<'draft' | 'published' | 'scheduled'>(post?.status || 'draft');
  const [scheduledDate, setScheduledDate] = useState<string>(post?.scheduledDate || '');
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    if (!isSlugManuallyEdited && title) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setSlug(generatedSlug);
    }
  }, [title, isSlugManuallyEdited]);

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSlugManuallyEdited(true);
    setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''));
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleAddCustomTag = () => {
    if (customTag && !selectedTags.includes(customTag)) {
      setSelectedTags(prev => [...prev, customTag]);
      setCustomTag('');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      setFeaturedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFeaturedImage(null);
    setImagePreview('');
  };

  const handlePreview = () => {
    const previewWindow = window.open('', '_blank');
    if (previewWindow) {
      const previewContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>${title} - Preview</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
              body { background: #000; color: #fff; }
              .content img { max-width: 100%; height: auto; }
              .content { max-width: 800px; margin: 0 auto; padding: 2rem; }
            </style>
          </head>
          <body class="bg-black text-white">
            <div class="content">
              ${imagePreview ? `<img src="${imagePreview}" alt="${title}" class="w-full h-64 object-cover rounded-lg mb-8">` : ''}
              <h1 class="text-4xl font-bold mb-4">${title}</h1>
              <div class="prose prose-invert max-w-none">
                ${content}
              </div>
            </div>
          </body>
        </html>
      `;
      previewWindow.document.write(previewContent);
      previewWindow.document.close();
    }
  };

  const handleSave = () => {
    const postData: Partial<BlogPost> = {
      id: slug,
      title,
      content,
      category,
      tags: selectedTags,
      metaDescription,
      metaKeywords,
      image: imagePreview,
      status,
      scheduledDate: status === 'scheduled' ? scheduledDate : undefined
    };

    onSave(postData);
    setSaveMessage('Draft saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handlePublish = () => {
    if (onPublish) {
      const postData: Partial<BlogPost> = {
        id: slug,
        title,
        content,
        category,
        tags: selectedTags,
        metaDescription,
        metaKeywords,
        image: imagePreview,
        status: 'published'
      };

      onPublish(postData);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          {post ? 'Edit Post' : 'Create New Post'}
        </h1>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handlePreview}
            className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800"
          >
            <Eye className="h-5 w-5 mr-2" />
            Preview
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Draft
          </button>
          {onPublish && (
            <button
              onClick={handlePublish}
              className="inline-flex items-center px-4 py-2 bg-purple-600 rounded-lg text-sm font-medium text-white hover:bg-purple-700"
            >
              Publish
            </button>
          )}
        </div>
      </div>

      {saveMessage && (
        <div className="bg-green-900/50 border border-green-500 text-green-300 px-4 py-2 rounded-lg">
          {saveMessage}
        </div>
      )}

      <div className="space-y-6">
        {/* Featured Image */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Featured Image
            <span className="text-gray-500 ml-2">(Max size: 5MB)</span>
          </label>
          
          {!imagePreview ? (
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-400">
                  <label htmlFor="featured-image" className="relative cursor-pointer rounded-md font-medium text-purple-400 hover:text-purple-300">
                    <span>Upload an image</span>
                    <input
                      id="featured-image"
                      name="featured-image"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              </div>
            </div>
          ) : (
            <div className="relative mt-2">
              <img
                src={imagePreview}
                alt="Featured"
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>
          )}
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white"
            required
          />
        </div>

        {/* URL Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            URL Slug
          </label>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">/blog/</span>
            <input
              type="text"
              value={slug}
              onChange={handleSlugChange}
              className="flex-1 bg-gray-900 border border-gray-700 rounded-lg p-3 text-white"
              required
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white"
            required
          >
            <option value="">Select a category</option>
            {blogCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {serviceTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTags.includes(tag)
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              value={customTag}
              onChange={(e) => setCustomTag(e.target.value)}
              placeholder="Add custom tag"
              className="flex-1 bg-gray-900 border border-gray-700 rounded-lg p-2 text-white"
            />
            <button
              type="button"
              onClick={handleAddCustomTag}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Add Tag
            </button>
          </div>
        </div>

        {/* Content Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
          <div className="bg-white rounded-lg">
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={modules}
              className="h-[450px]"
            />
          </div>
        </div>

        {/* Meta Description */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Meta Description
            <span className="text-gray-500 ml-2">(Recommended: 150-160 characters)</span>
          </label>
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white h-24"
            placeholder="Enter a compelling description for search results..."
          />
          <div className="text-sm text-gray-500 mt-1">
            Characters: {metaDescription.length}/160
          </div>
        </div>

        {/* Publishing Options */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Publishing Options</h2>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="draft"
                checked={status === 'draft'}
                onChange={(e) => setStatus(e.target.value as 'draft')}
                className="form-radio text-purple-600"
              />
              <span className="ml-2 text-gray-300">Save as Draft</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="published"
                checked={status === 'published'}
                onChange={(e) => setStatus(e.target.value as 'published')}
                className="form-radio text-purple-600"
              />
              <span className="ml-2 text-gray-300">Publish Now</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="scheduled"
                checked={status === 'scheduled'}
                onChange={(e) => setStatus(e.target.value as 'scheduled')}
                className="form-radio text-purple-600"
              />
              <span className="ml-2 text-gray-300">Schedule</span>
            </label>
          </div>

          {status === 'scheduled' && (
            <div className="flex items-center space-x-4">
              <Calendar className="h-5 w-5 text-gray-400" />
              <input
                type="datetime-local"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-white"
                required
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostEditor;