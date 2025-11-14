import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Java', 'RESTful APIs', 'JDBC', 'JSP'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database & Tools',
      skills: ['MongoDB', 'MySQL', 'Firebase', 'Git', 'GitHub', 'Android Studio'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Quick Learning', 'Team Collaboration', 'Agile Methodology'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const certifications = [
    {
      title: 'Java In-Depth: Become a Complete Java Engineer',
      provider: 'Udemy',
    },
    {
      title: 'JavaScript Programming Essentials',
      provider: 'IBM & Coursera',
    },
    {
      title: 'Career Essentials in Generative AI',
      provider: 'Microsoft and LinkedIn',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-800/30 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full mr-3`}></div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-slate-700/50 text-slate-200 hover:bg-slate-700 border border-slate-600 hover:border-blue-500/50 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="h-2 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4 group-hover:w-full transition-all duration-300"></div>
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                  <p className="text-sm text-slate-400">{cert.provider}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
