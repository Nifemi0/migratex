import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  size?: 'standard' | 'large' | 'none';
  id?: string;
  as?: React.ElementType;
}

export const Section = ({
  children,
  className,
  containerClassName,
  size = 'standard',
  id,
  as: Component = 'section',
}: SectionProps) => {
  const sizeClasses = {
    standard: "section-padding",
    large: "section-padding-large",
    none: "",
  };

  return (
    <Component
      id={id}
      className={cn(sizeClasses[size], className)}
    >
      <div className={cn("container-custom", containerClassName)}>
        {children}
      </div>
    </Component>
  );
};
