import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { PlusCircle, LogOut, FileText, Trash2, Edit } from 'lucide-react';
import { getBlogPosts, getDrafts, deleteBlogPost, deleteDraft, BlogPost } from '../../data/blog';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [drafts, setDrafts] = useState<BlogPost[]>([]);
  const [deleteModal, setDeleteModal] = useState<{
    show: boolean;
    postId: string;
    title: string;
  }>({ show: false, postId: '', title: '' });

  useEffect(() => {
    setPosts(getBlogPosts());
    setDrafts(getDrafts());
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleDelete = (id: string) => {
    const updatedPosts = deleteBlogPost(id);
    const updatedDrafts = deleteDraft(id);
    
    setPosts(updatedPosts);
    setDrafts(updatedDrafts);
    setDeleteModal({ show: false, postId: '', title: '' });
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Blog Management</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/admin/posts/new')}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              New Post
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-lg shadow-sm text-sm font-medium text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Drafts Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Drafts</h2>
          <div className="bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-800">
              {drafts.map((draft) => (
                <div
                  key={draft.id}
                  className="p-6 flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <FileText className="h-6 w-6 text-purple-400" />
                    <div>
                      <h3 className="text-lg font-medium text-white">{draft.title}</h3>
                      <p className="text-sm text-gray-400">
                        Last saved: {new Date(draft.date).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => navigate(`/admin/posts/edit/${draft.id}`)}
                      className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteModal({ 
                        show: true, 
                        postId: draft.id, 
                        title: draft.title 
                      })}
                      className="inline-flex items-center text-sm text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {drafts.length === 0 && (
                <div className="p-6 text-center text-gray-500">
                  No drafts yet
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Published Posts Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Published Posts</h2>
          <div className="bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-800">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <FileText className="h-6 w-6 text-purple-400" />
                    <div>
                      <h3 className="text-lg font-medium text-white">{post.title}</h3>
                      <p className="text-sm text-gray-400">
                        Published: {new Date(post.date).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => navigate(`/admin/posts/edit/${post.id}`)}
                      className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteModal({ 
                        show: true, 
                        postId: post.id, 
                        title: post.title 
                      })}
                      className="inline-flex items-center text-sm text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {posts.length === 0 && (
                <div className="p-6 text-center text-gray-500">
                  No published posts yet
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {deleteModal.show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-white mb-4">Delete Post</h3>
              <p className="text-gray-300 mb-6">
                Are you sure you want to delete "{deleteModal.title}"? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setDeleteModal({ show: false, postId: '', title: '' })}
                  className="px-4 py-2 text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteModal.postId)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;