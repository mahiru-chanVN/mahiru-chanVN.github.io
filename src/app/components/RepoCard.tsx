import { Star, GitFork } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface RepoCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  delay?: number;
}

export function RepoCard({ name, description, language, stars, forks, delay = 0 }: RepoCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-700 hover:bg-white/15 hover:border-white/30 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-white mb-3">{name}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <div className="flex items-center gap-4 text-sm text-white/60">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <span>{language}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="w-4 h-4" />
          <span>{forks}</span>
        </div>
      </div>
    </div>
  );
}
