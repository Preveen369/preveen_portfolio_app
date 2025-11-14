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
      demo: 'https://enlightenit-hub-app.onrender.com/',
      image: 'url(/src/assets/images/blogging.png)',
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
      demo: 'https://drive.google.com/file/d/1gQ6X4wJ9jMhEXQ1hP9OGdxOSGhQyI94D/view?usp=sharing',
      image: 'url(/src/assets/images/pets-bussiness.png)',
      features: [
        'List and browse pets catalog',
        'Secure authentication system',
        'Real-time database with Firebase',
        'Native Android experience',
        'Wishlist and favorites management',
      ],
    },
    {
      title: 'WanderWave Chatbot',
      description:
        'A travel-based recommendation chatbot developed for Zoho Cliqtrix 2024 competition. Provides personalized travel recommendations using AI and helps users plan their trips effectively.',
      stack: ['React.js', 'AI/ML', 'API Integration'],
      github: 'https://github.com/Preveen369/WanderWave',
      demo: 'https://preveen369.github.io/WanderWave/',
      image: 'url(/src/assets/images/travel-chatbot.png)',
      features: [
        'AI-powered travel recommendations',
        'Interactive chat interface',
        'Personalized trip planning',
        'Real-time destination suggestions',
      ],
    },
    {
      title: 'Mini Store ERP',
      description:
        'An enterprise resource planning system designed for small retail stores. Manages inventory, sales, and operations efficiently with an intuitive interface for streamlined business processes.',
      stack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Preveen369/Mini-Store-ERP',
      demo: 'https://mini-store-erp-app.onrender.com/',
      image: 'url(/src/assets/images/mini-store-shop.png)',
      features: [
        'Inventory management system',
        'Sales and transaction tracking',
        'Business analytics dashboard',
        'User-friendly interface',
      ],
    },
  ];

  return (
    <section id="projects" className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my skills in full-stack development, mobile apps, and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-200 overflow-hidden group"
            >
              <div 
                className="h-48 flex items-center justify-center relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: project.image, filter: 'blur(0.25px)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-200"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white z-10 text-center px-4 drop-shadow-lg">{project.title}</h3>
              </div>

              <CardContent className="p-6">
                <p className="text-slate-300 mb-5 leading-relaxed text-sm sm:text-base">{project.description}</p>

                <div className="mb-5 pb-5 border-b border-slate-700/30">
                  <p className="text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">Key Features</p>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                        <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
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
                      className="bg-slate-700/50 text-slate-200 hover:bg-blue-600/40 hover:text-blue-200 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-200 text-xs"
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
                    className="flex-1 border-slate-700/50 bg-white text-black hover:bg-slate-200 hover:text-black hover:border-slate-300 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    onClick={() => window.open(project.demo, '_blank')}
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up animation-delay-200">
          <Button
            onClick={() => window.open('https://github.com/Preveen369', '_blank')}
            size="lg"
            variant="outline"
            className="border-slate-700/50 bg-white text-black hover:bg-slate-200 hover:text-black hover:border-slate-300 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
