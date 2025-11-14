import { Code2, Rocket, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expertise in MERN stack with proven track record of building scalable applications',
    },
    {
      icon: Zap,
      title: 'Problem Solver',
      description: 'Strong analytical skills with focus on innovative and impactful solutions',
    },
    {
      icon: Rocket,
      title: 'Quick Learner',
      description: 'Rapidly adapts to new technologies and frameworks',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Thrives in agile environments with collaborative mindset',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a <span className="text-blue-400 font-semibold">passionate Software Engineer</span> specializing in
              problem-solving and full-stack development, with a strong commitment to leveraging the latest technologies.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently pursuing <span className="text-blue-400 font-semibold">B.Tech in Information Technology</span> at
              Velammal College of Engineering and Technology with a CGPA of 8.52, I combine academic excellence with
              practical development experience.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Skilled at crafting innovative and impactful solutions, I thrive in agile and dynamic environments.
              My recent achievement includes clearing the first round of Zoho Cliqtrix 2024 by building a
              travel-based recommendation chatbot <span className="text-blue-400 font-semibold">"WanderWave"</span>.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-400 font-medium">B.Tech Information Technology</p>
                    <p className="text-slate-300">Velammal College of Engineering and Technology</p>
                    <p className="text-slate-400 text-sm">2022 - 2026 | CGPA: 8.52</p>
                  </div>
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-slate-300">Senior Secondary: <span className="text-blue-400 font-medium">93%</span></p>
                    <p className="text-slate-300">Secondary: <span className="text-blue-400 font-medium">94.8%</span></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
                <p className="text-slate-300">Madurai, Tamil Nadu, India</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-slate-800/30 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
