import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-8">
            <div className="bg-slate-950 rounded-full p-2">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl font-bold text-blue-400">
                PS
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Preveen S
          </span>
        </h1>

        <div className="mb-8 animate-fade-in-up animation-delay-200">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Software Developer
          </p>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Full-Stack Developer crafting innovative solutions with MERN stack and modern technologies
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>

          <Button
            onClick={() => window.open('https://github.com/Preveen369', '_blank')}
            size="lg"
            variant="outline"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Github className="mr-2 h-5 w-5" />
            View GitHub
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-600">
          <a
            href="https://github.com/Preveen369"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/preveen-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:spreveen123@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://preveen-portfolio.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <FileText size={24} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-blue-400 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}
