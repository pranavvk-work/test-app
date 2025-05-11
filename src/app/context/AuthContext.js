'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie, deleteCookie } from 'cookies-next';

// Create the context
const AuthContext = createContext();

// Hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is already logged in (e.g. from local storage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user", error);
        localStorage.removeItem('user');
        deleteCookie('auth');
      }
    }
    
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // This would be replaced with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data for demo
      const userData = {
        id: '1',
        name: 'Demo User',
        email,
        role: 'admin'
      };
      
      // Set auth cookie - would be set by the server in a real app
      setCookie('auth', 'authenticated', { maxAge: 60 * 60 * 24 * 7 }); // 7 days
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Login failed' };
    }
  };

  const signup = async (name, email, password) => {
    try {
      // This would be replaced with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data for demo
      const userData = {
        id: '1',
        name,
        email,
        role: 'user'
      };
      
      // Set auth cookie - would be set by the server in a real app
      setCookie('auth', 'authenticated', { maxAge: 60 * 60 * 24 * 7 }); // 7 days
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Signup failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    deleteCookie('auth');
    router.push('/sign-in');
  };

  // Context value
  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
} 