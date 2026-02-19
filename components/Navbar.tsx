import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#ECE5D9] py-4 px-[5%] shadow-sm border-b-2 border-[#15616D] sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 no-underline group">
          <div className="w-12 h-12 bg-[#15616D] rounded flex items-center justify-center text-[#ECE5D9] font-bold">
            PPF
          </div>
          <span className="font-bold text-xl text-[#15616D]">Project Partner Finder</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#15616D] font-bold hover:text-[#BC8034] transition-colors">Accueil</Link>
          <Link href="#features" className="text-[#15616D] font-bold hover:text-[#BC8034] transition-colors">À propos</Link>
          <Link href="#contact" className="text-[#15616D] font-bold hover:text-[#BC8034] transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/Account/login" className="text-[#15616D] px-4 py-2 rounded hover:bg-[#bcb8b1] transition-all">
            Connexion
          </Link>
          <Link href="/Account/register" className="bg-[#15616D] text-[#ECE5D9] px-4 py-2 rounded hover:bg-[#10373d] transition-all">
            Inscription
          </Link>
        </div>
      </div>
    </nav>
  );
}