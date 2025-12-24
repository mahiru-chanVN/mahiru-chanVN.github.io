import { useEffect, useState } from 'react';
import { Github, Mail, Facebook, MessageSquare } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { InfoCard } from './components/InfoCard';
import { RepoCard } from './components/RepoCard';
import { Clock } from './components/Clock';
import bgImage from 'figma:asset/d2da708bf3fadc50ca55f6079e277f4466706834.png';
import profileImage from 'figma:asset/ab0febcc976193af22bebbab398c92a7a5e0c96e.png';

export default function App() {
  const [scrollBlur, setScrollBlur] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 500;
      const blurAmount = Math.min((scrollPosition / maxScroll) * 20, 20);
      setScrollBlur(blurAmount);
      setIsScrolled(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background with blur effect */}
      <div
        className="fixed inset-0 bg-cover bg-center transition-all duration-300"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: `blur(${scrollBlur}px)`,
          transform: `scale(${1 + scrollBlur * 0.01})`,
        }}
      />
      
      {/* Overlay gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/30 overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl mb-6 text-white">Mahiru</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              I'm Mahiru, a developer from Vietnam. Have a good day&lt;3
            </p>
            
            {/* Clock - Full version in hero */}
            <div className="mt-8 mb-8 flex justify-center">
              <Clock isScrolled={false} />
            </div>
            
            <div className="flex gap-4 justify-center mt-8">
              <a
                href="#"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <MessageSquare className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl text-white mb-12 text-center">Social Media</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             <InfoCard
              icon={Github}
              title="Github"
              description="Check out my repositories and contributions"
              link="https://github.com/mahiru-chanVN"
              delay={0}
              />
              <InfoCard
              icon={Facebook}
              title="Facebook"
              description="Connect with me on Facebook"
              link="https://facebook.com/mahirulikeyou/"
              delay={100}
              />
              <InfoCard
              icon={FaDiscord}
              title="Discord"
              description="Let's chat on Discord"
              link="https://discord.com/users/1053613020338728961"
              delay={200}
              />
          </div>
        </div>

        {/* Repositories Section */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <RepoCard
              name="mahiruchan-VN.github.io"
              description="My personal website lmao xd"
              language="TypeScript, React"
              stars={0}
              forks={0}
              delay={0}
            />
            <RepoCard
              name="KHKTNK25"
              description="My school project btw"
              language="C++"
              stars={0}
              forks={0}
              delay={100}
              
            />
            <RepoCard
              name="20-10 Mahiru"
              description="A public archive of 20-10 in 2025"
              language="JavaScript, HTML, CSS"
              stars={0}
              forks={0}
              delay={200}
            />
            <RepoCard
              name="FreedMahiru"
              description="A repo include all work that i make when i was bored :D"
              language="C++"
              stars={0}
              forks={0}
              delay={300}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-white/60">Made with ❤️ by Mahiru</p>
        </div>
      </div>
    </div>
  );
}