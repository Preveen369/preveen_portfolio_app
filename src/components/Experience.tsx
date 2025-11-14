import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Web Development Internship',
      company: 'Recssar Company Pvt. Ltd',
      location: 'Madurai',
      period: 'Dec 2023 - Jan 2024',
      description:
        'Developed end-to-end full-stack web applications using MERN stack, with responsive interfaces & client-side validations enhancing UI/UX.',
      achievements: [
        'Built complete MERN stack application from scratch',
        'Implemented responsive design and client-side validation',
        'Enhanced user experience with modern UI patterns',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      role: 'Java Web Development Internship',
      company: 'Elysium Technologies Pvt. Ltd',
      location: 'Madurai',
      period: 'June 2024 - July 2024',
      description:
        'Created dynamic web pages using Java Swing, JSP, JDBC, integrated MySQL with JDBC for seamless backend connectivity.',
      achievements: [
        'Developed dynamic web pages with Java technologies',
        'Implemented database integration using JDBC',
        'Ensured seamless backend connectivity with MySQL',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const achievement = {
    title: 'Zoho Cliqtrix 2024',
    description:
      'Cleared the first round of Zoho Cliqtrix 2024 by building a travel-based recommendation chatbot "WanderWave"',
    icon: '🏆',
  };

  return (
    <section id="experience" className="min-h-screen pt-20 pb-16 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Professional journey and notable achievements in software development
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-slate-800/40 border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group overflow-hidden"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${exp.color}`}></div>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-300 mb-2">
                      <Briefcase size={18} className="text-blue-400" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-400">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative group bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">🏆</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>

            <Card className="relative group bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">⭐</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                      Recognition
                    </h4>
                    <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Passionate developer committed to building innovative solutions and continuously improving technical expertise through real-world projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
