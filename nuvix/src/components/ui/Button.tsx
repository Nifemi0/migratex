import React from 'react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  href,
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3.5 text-base font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary-navy/20 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-container rounded-[4px] font-bold tracking-widest text-[11px] uppercase transition-all duration-300",
    secondary: "bg-surface-container-high text-primary hover:bg-surface-container-highest rounded-[4px] font-bold tracking-widest text-[11px] uppercase transition-all duration-300",
    outline: "bg-transparent text-primary border border-primary/20 hover:bg-primary hover:text-white rounded-[4px] font-bold tracking-widest text-[11px] uppercase transition-all duration-300",
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
