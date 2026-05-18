import Link from 'next/link';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#1E2030] dark:bg-[#070918] w-full px-12 py-24 flex flex-col md:flex-row justify-between items-end gap-12 font-headline uppercase tracking-widest text-[10px] md:text-xs">
      <div className="w-full md:w-auto">
        <div className="mb-12">
          <Logo variant="dark" className="mb-8" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <Link href="/work" className="text-[#424379] hover:text-white transition-colors duration-500">The Work</Link>
          <Link href="/services" className="text-[#424379] hover:text-white transition-colors duration-500">Services</Link>
          <Link href="/process" className="text-[#424379] hover:text-white transition-colors duration-500">Method</Link>
          <Link href="/journal" className="text-[#424379] hover:text-white transition-colors duration-500">Journal</Link>
          <Link href="/about" className="text-[#424379] hover:text-white transition-colors duration-500">Studio</Link>
          <Link href="/contact" className="text-[#424379] hover:text-white transition-colors duration-500">Contact</Link>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[#F2F1EF] opacity-50 max-w-xs mb-8 ml-auto">
          NO TEMPLATES. NO SHORTCUTS. JUST RESULTS.
        </p>
        <p className="text-[#F2F1EF] font-bold">© 2024 NUVIXES STUDIO. WEBSITES PEOPLE TRUST.</p>
      </div>
    </footer>
  );
};
