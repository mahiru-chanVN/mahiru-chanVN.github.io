import { useEffect, useState } from 'react';

interface ClockProps {
  isScrolled: boolean;
}

export function Clock({ isScrolled }: ClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isScrolled) {
    // Small bar clock
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-white/80 text-sm">{formatDate(time)}</span>
          <span className="text-white">{formatTime(time)}</span>
        </div>
      </div>
    );
  }

  // Full clock display
  return (
    <div className="transition-all duration-500">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 inline-block">
        <div className="text-center">
          <div className="text-5xl md:text-6xl text-white mb-3 font-mono tabular-nums">
            {formatTime(time)}
          </div>
          <div className="text-lg md:text-xl text-white/70">
            {formatDate(time)}
          </div>
        </div>
      </div>
    </div>
  );
}
