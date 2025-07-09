import { ReactNode } from "react";
import authHeroImage from "@/assets/auth-hero.jpg";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Side - Hero Section */}
        <div className="flex-1 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-white">
            <div className="max-w-md text-center space-y-6">
              <h1 className="text-4xl font-bold leading-tight">
                Welcome to <span className="text-white/90">SaasFlow</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                The modern platform that streamlines your workflow and boosts productivity.
              </p>
              <div className="mt-8">
                <img
                  src={authHeroImage}
                  alt="SaaS Dashboard Illustration"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-soft-xl bg-white/10 backdrop-blur-sm p-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-foreground">{title}</h2>
              <p className="text-muted-foreground text-lg">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen flex flex-col">
        {/* Top Section - Hero */}
        <div className="bg-gradient-hero text-white p-8 text-center">
          <h1 className="text-2xl font-bold mb-2">SaasFlow</h1>
          <p className="text-white/80 mb-6">Streamline your workflow</p>
          <div className="mx-auto max-w-xs">
            <img
              src={authHeroImage}
              alt="SaaS Dashboard"
              className="w-full rounded-xl shadow-soft-lg bg-white/10 backdrop-blur-sm p-3"
            />
          </div>
        </div>

        {/* Bottom Section - Form */}
        <div className="flex-1 flex items-center justify-center p-6 bg-background">
          <div className="w-full max-w-sm space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">{title}</h2>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};