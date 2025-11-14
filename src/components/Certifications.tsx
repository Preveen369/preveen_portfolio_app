import { Card, CardContent } from '@/components/ui/card';

export default function Certifications() {
  const certifications = [
    {
      title: 'Java In-Depth: Become a Complete Java Engineer',
      issuer: 'Udemy',
      icon: '☕',
      borderGradient: 'from-orange-500 to-red-500',
      iconGradient: 'from-orange-500/20 to-red-500/20',
      hoverColor: 'hover:shadow-orange-500/20',
    },
    {
      title: 'JavaScript Programming Essentials',
      issuer: 'IBM & Coursera',
      icon: '⚡',
      borderGradient: 'from-yellow-500 to-orange-500',
      iconGradient: 'from-yellow-500/20 to-orange-500/20',
      hoverColor: 'hover:shadow-yellow-500/20',
    },
    {
      title: 'Career Essentials in Generative AI development',
      issuer: 'Microsoft and LinkedIn',
      icon: '🤖',
      borderGradient: 'from-purple-500 to-pink-500',
      iconGradient: 'from-purple-500/20 to-pink-500/20',
      hoverColor: 'hover:shadow-purple-500/20',
    },
  ];

  return (
    <section id="certifications" className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Professional certifications demonstrating my commitment to continuous learning and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="relative group bg-slate-800/40 border border-slate-700/50 overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br ${cert.iconGradient} group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{cert.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h4>
                    <div className={`h-1 w-12 bg-gradient-to-r ${cert.borderGradient} rounded-full`}></div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700/30">
                  <p className="text-sm text-slate-400">
                    <span className="text-blue-400 font-semibold">Issued by: </span>
                    <span className="text-slate-300">{cert.issuer}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            I'm committed to continuous professional development and regularly pursue certifications to stay updated with the latest technologies and best practices in software development.
          </p>
        </div>
      </div>
    </section>
  );
}
