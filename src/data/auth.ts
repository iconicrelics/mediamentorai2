// Simple authentication for demo purposes
// In production, use a proper authentication system
export const ADMIN_CREDENTIALS = {
  username: 'mediamentorai',
  // Replace this with a secure hashed password in production
  password: 'MM@i2024!' 
};

export const isAuthenticated = () => {
  return localStorage.getItem('isAdminAuthenticated') === 'true';
};