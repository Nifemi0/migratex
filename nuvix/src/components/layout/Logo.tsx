import Link from 'next/link';
import Image from 'next/image';

export const Logo = ({ className = "", variant = 'light' }: { className?: string, variant?: 'light' | 'dark' }) => {
  return (
    <Link href="/" className={`block py-1 ${className}`}>
      <div className={`relative h-12 md:h-20 aspect-[4/1] transition-all duration-300 flex items-center ${variant === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'}`}>
        <Image 
          src="/logo/alt logo .png" 
          alt="Nuvixes Studio" 
          fill
          className={`object-contain filter ${variant === 'dark' ? 'invert brightness-200' : 'contrast-[1.1] brightness-[1.05]'}`}
          priority
        />
      </div>
    </Link>
  );
};



