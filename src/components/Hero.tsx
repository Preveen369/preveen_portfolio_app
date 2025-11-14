import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onScrollClick: () => void;
  isLastSection: boolean;
}

export default function Hero({ onScrollClick, isLastSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-1 animate-fade-in">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-5 shadow-lg shadow-blue-500/30">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-full p-2">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl font-bold text-blue-400 border border-blue-500/20 overflow-hidden">
                <img 
                  src="/images/My_Avatar.jpg" 
                  alt="Preveen S" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent drop-shadow-2xl">
            Preveen S
          </span>
        </h1>

        <div className="mb-8 animate-fade-in-up animation-delay-200">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Software Developer
          </p>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer crafting innovative solutions with MERN stack and modern software technologies
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-7 animate-fade-in-up animation-delay-400">
          <Button
            onClick={() => window.open('https://linkedin.com/in/preveen-s', '_blank')}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            View LinkedIn
          </Button>

          <Button
            onClick={() => window.open('https://github.com/Preveen369', '_blank')}
            size="lg"
            variant="outline"
            className="border-slate-700/50 bg-slate-800/40 text-slate-300 hover:bg-slate-800/60 hover:text-blue-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Github className="mr-2 h-5 w-5" />
            View GitHub
          </Button>
        </div>

        <div className="flex items-center justify-center animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-blue-500/20 rounded-lg px-6 py-4 max-w-2xl">
            <p className="text-slate-300 text-lg font-medium italic text-center leading-relaxed">
              "Code is like humor. When you have to explain it, it's{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                bad
              </span>
              ."
            </p>
            <p className="text-slate-500 text-sm text-center mt-2">- Cory House</p>
          </div>
        </div>

        <button
          onClick={onScrollClick}
          className="fixed bottom-12 right-8 animate-bounce text-slate-400 hover:text-blue-400 transition-all duration-200 p-3 rounded-full hover:bg-slate-800/40 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 group z-40"
          aria-label={isLastSection ? 'Scroll to top' : 'Scroll to next section'}
        >
          <ArrowDown size={32} className={`group-hover:scale-110 transition-transform duration-200 ${isLastSection ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </section>
  );
}
