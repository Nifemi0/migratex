import Link from 'next/link';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F2F1EF]">
      <nav className="max-w-[1200px] mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Right: Navigation Links */}
        <div className="hidden md:flex flex-grow justify-end items-center gap-10 lg:gap-14 px-12">
          <Link href="/work" className="font-headline tracking-widest uppercase text-[10px] font-medium text-[#1E2030] hover:opacity-60 transition-opacity">The Work</Link>
          <Link href="/services" className="font-headline tracking-widest uppercase text-[10px] font-medium text-[#1E2030] hover:opacity-60 transition-opacity">Services</Link>
          <Link href="/journal" className="font-headline tracking-widest uppercase text-[10px] font-medium text-[#1E2030] hover:opacity-60 transition-opacity">Journal</Link>
          <Link href="/about" className="font-headline tracking-widest uppercase text-[10px] font-medium text-[#1E2030] hover:opacity-60 transition-opacity">Studio</Link>
        </div>

        {/* Far Right: CTA Button */}
        <div className="flex-shrink-0">
          <Link 
            href="/contact" 
            className="font-headline tracking-widest uppercase text-[10px] font-bold bg-[#1E2030] text-white px-8 py-3 hover:bg-black transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};
