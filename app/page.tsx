import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      step: "1. Créez un profil",
      desc: "Mettez en avant vos compétences (Dév, Design, Marketing...)."
    },
    {
      step: "2. Trouvez un projet",
      desc: "Parcourez les offres ou proposez votre propre idée de projet."
    },
    {
      step: "3. Formez l'équipe",
      desc: "Gerez les demandes et commencez à collaborer efficacement."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <header className="relative py-20 px-[10%] text-center border-b-4 border-[#15616D] min-h-[60vh] flex items-center justify-center bg-white">
        {/* Note: In Next.js, use a background Image component or standard CSS for the 'background photo.png' */}
        <div className="max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#15616D] mb-5 leading-tight">
            Trouvez votre équipe.<br />Réussissez vos projets.
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Bienvenue sur <strong className="font-bold">PPF</strong>. La plateforme collaborative dédiée aux étudiants. 
            Postez vos idées, trouvez des partenaires aux compétences complémentaires et formez la "Dream Team".
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/Account/register" className="bg-[#15616D] text-[#ECE5D9] px-6 py-3 rounded font-bold hover:bg-[#BC8034] transition-all transform hover:-translate-y-0.5">
              Rejoindre la communauté
            </Link>
            <Link href="#features" className="border-2 border-[#15616D] text-[#15616D] px-6 py-3 rounded font-bold hover:bg-[#BC8034] hover:text-[#ECE5D9] transition-all">
              En savoir plus
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 px-[10%] text-center">
        <h2 className="text-3xl font-bold text-[#15616D] mb-10">Comment ça marche ?</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-xl flex-1 min-w-[280px] max-w-[350px] shadow-md transition-all duration-400 hover:-translate-y-2 hover:bg-[#bcb8b1] hover:text-white group border border-transparent hover:border-[#BC8034]"
            >
              <h3 className="text-[#BC8034] text-xl font-bold mb-4">{feature.step}</h3>
              <p className="leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}