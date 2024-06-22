'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import { Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: Session | null;
  isLoading: boolean;
  signup: (credentials: { email: string; password: string }) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session);
      setIsLoading(false);
    };

    checkUser();
  }, []);

  const signup = async ({ email, password }: { email: string; password: string }) => {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      throw new Error('Signup failed');
    }
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });

    if (error) {
      throw new Error('Google Sign-In failed');
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signup, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
