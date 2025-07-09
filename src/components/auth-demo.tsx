import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/components/auth-layout";
import { AuthForm } from "@/components/auth-form";

export const AuthDemo = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const toggleMode = () => setIsSignUp(!isSignUp);

  return (
    <div className="min-h-screen bg-background">
      {/* Toggle Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={() => setShowMobile(!showMobile)}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm shadow-soft"
        >
          {showMobile ? "Desktop" : "Mobile"} View
        </Button>
        <Button
          onClick={toggleMode}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm shadow-soft"
        >
          Switch to {isSignUp ? "Sign In" : "Sign Up"}
        </Button>
      </div>

      {/* Mobile Preview */}
      {showMobile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm w-full max-h-[90vh] overflow-y-auto">
            <AuthLayout
              title={isSignUp ? "Create Account" : "Welcome Back"}
              subtitle={
                isSignUp
                  ? "Sign up to get started with SaasFlow"
                  : "Sign in to your account"
              }
            >
              <AuthForm isSignUp={isSignUp} onToggleMode={toggleMode} />
            </AuthLayout>
          </div>
        </div>
      )}

      {/* Desktop View */}
      <AuthLayout
        title={isSignUp ? "Create Account" : "Welcome Back"}
        subtitle={
          isSignUp
            ? "Sign up to get started with SaasFlow"
            : "Sign in to your account"
        }
      >
        <AuthForm isSignUp={isSignUp} onToggleMode={toggleMode} />
      </AuthLayout>
    </div>
  );
};