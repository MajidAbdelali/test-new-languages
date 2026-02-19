import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#001524] text-[#ECE5D9] py-10 px-[10%] mt-auto">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-[#15616D] rounded flex items-center justify-center text-[#ECE5D9] font-bold text-sm">
              PPF
            </div>
            <span className="font-bold text-lg">Project Partner Finder</span>
          </div>
          <p className="text-sm text-[#bcb8b1] max-w-xs">
            La plateforme collaborative dédiée aux étudiants pour trouver des partenaires de projets.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="font-bold mb-3 text-[#15616D]">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#bcb8b1]">
              <li><Link href="/" className="hover:text-[#BC8034] transition-colors">Accueil</Link></li>
              <li><Link href="#features" className="hover:text-[#BC8034] transition-colors">À propos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-[#15616D]">Compte</h4>
            <ul className="space-y-2 text-sm text-[#bcb8b1]">
              <li><Link href="/Account/login" className="hover:text-[#BC8034] transition-colors">Connexion</Link></li>
              <li><Link href="/Account/register" className="hover:text-[#BC8034] transition-colors">Inscription</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#15616D] text-center text-xs text-[#bcb8b1]">
        © {new Date().getFullYear()} Project Partner Finder. Tous droits réservés.
      </div>
    </footer>
  );
}
