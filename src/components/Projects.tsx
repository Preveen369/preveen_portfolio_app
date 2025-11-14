import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const projects = [
    {
      title: 'EnlightenIt Hub Blog App',
      description:
        'A comprehensive blogging platform built with MERN stack that supports secure login, profile management, image uploads, and a responsive design. Deployed online for real-time use with seamless user experience.',
      stack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Preveen369/EnlightenIt-Hub-App',
      demo: '#',
      image: 'bg-gradient-to-br from-blue-600 to-cyan-600',
      features: [
        'Secure user authentication and authorization',
        'Profile management with image uploads',
        'Responsive design for all devices',
        'Real-time content publishing',
      ],
    },
    {
      title: 'Nammapets SBA App',
      description:
        'A mobile e-commerce application for pet adoption and sales, built with Android Studio and Firebase. Features secure login, real-time data storage, and intuitive UI for browsing and purchasing pets.',
      stack: ['Android Studio', 'Java', 'Firebase'],
      github: 'https://github.com/Preveen369/NammaPets-SBA',
      demo: '#',
      image: 'bg-gradient-to-br from-green-600 to-emerald-600',
      features: [
        'List and browse pets catalog',
        'Secure authentication system',
        'Real-time database with Firebase',
        'Native Android experience',
      ],
    },
    {
      title: 'WanderWave Chatbot',
      description:
        'A travel-based recommendation chatbot developed for Zoho Cliqtrix 2024 competition. Provides personalized travel recommendations using AI and helps users plan their trips effectively.',
      stack: ['React.js', 'AI/ML', 'API Integration'],
      github: '#',
      demo: '#',
      image: 'bg-gradient-to-br from-purple-600 to-pink-600',
      features: [
        'AI-powered travel recommendations',
        'Interactive chat interface',
        'Personalized trip planning',
        'Real-time destination suggestions',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, mobile apps, and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/30 border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <h3 className="text-3xl font-bold text-white z-10 text-center px-4">{project.title}</h3>
              </div>

              <CardContent className="p-6">
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-400 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-cyan-400 mt-0.5">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-slate-700/50 text-slate-200 border border-slate-600 hover:border-blue-500/50 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open(project.github, '_blank')}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-blue-500/50 transition-all duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    onClick={() => window.open(project.demo, '_blank')}
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://github.com/Preveen369', '_blank')}
            size="lg"
            variant="outline"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-blue-500/50 transition-all duration-300"
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
