"use client";

import { Button } from "@/components/ui/button";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  external?: boolean; // Whether to open in new tab or navigate internally
}

export function LinkButton({ 
  href, 
  children, 
  className, 
  size = "lg", 
  variant = "default",
  external = false 
}: LinkButtonProps) {
  const handleClick = () => {
    if (external) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
  };

  return (
    <Button 
      size={size}
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
