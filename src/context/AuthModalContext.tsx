import React, { createContext, useContext, useState, useCallback } from 'react';
import { SignupModal } from '@/components/modals/SignupModal';
import { SigninModal } from '@/components/modals/SigninModal';
import { ForgotPasswordModal } from '@/components/modals/ForgotPasswordModal';

interface AuthModalContextType {
  openSignin: () => void;
  openSignup: () => void;
  openForgotPassword: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

/**
 * AuthModalProvider
 * Renders the Sign In / Sign Up / Forgot Password modals globally.
 * Any component can call openSignin() or openSignup() via useAuthModal().
 */
export const AuthModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const openSignin = useCallback(() => {
    setIsSignupOpen(false);
    setIsForgotPasswordOpen(false);
    setIsSigninOpen(true);
  }, []);

  const openSignup = useCallback(() => {
    setIsSigninOpen(false);
    setIsForgotPasswordOpen(false);
    setIsSignupOpen(true);
  }, []);

  const openForgotPassword = useCallback(() => {
    setIsSigninOpen(false);
    setIsSignupOpen(false);
    setIsForgotPasswordOpen(true);
  }, []);

  return (
    <AuthModalContext.Provider value={{ openSignin, openSignup, openForgotPassword }}>
      {children}

      {/* Global auth modals — mounted once at the root level */}
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSwitchToSignin={openSignin}
      />
      <SigninModal
        isOpen={isSigninOpen}
        onClose={() => setIsSigninOpen(false)}
        onSwitchToSignup={openSignup}
        onForgotPassword={openForgotPassword}
      />
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        onBackToSignin={openSignin}
      />
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
};
