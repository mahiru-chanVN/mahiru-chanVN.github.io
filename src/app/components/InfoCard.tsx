import { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { IconType } from 'react-icons';

interface InfoCardProps {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  delay?: number;
  link?: string;
}

export function InfoCard({ icon: Icon, title, description, delay = 0, link }: InfoCardProps) {
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

  const cardContent = (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-white/20 rounded-xl">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        ref={cardRef}
        className={`block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-700 hover:bg-white/20 hover:scale-105 hover:border-white/30 cursor-pointer ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {cardContent}
    </div>
  );
}