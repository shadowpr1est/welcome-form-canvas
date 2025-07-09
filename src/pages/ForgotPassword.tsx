import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/auth-layout";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Reset link sent!",
      description: "Check your email for password reset instructions.",
    });

    setIsLoading(false);
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email to receive reset instructions"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Back to Sign In Link */}
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to sign in
        </Link>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark shadow-soft transition-all duration-200 font-medium text-base"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <span>Sending reset link...</span>
            </div>
          ) : (
            <span>Send reset link</span>
          )}
        </Button>

        {/* Help Text */}
        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link
              to="/"
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;