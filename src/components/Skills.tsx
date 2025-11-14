import { Card, CardContent } from '@/components/ui/card';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'RESTful APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
        { name: 'JDBC', icon: '/src/assets/images/icons/jdbc.png' },
        { name: 'JSP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg' },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { name: 'Generative AI', icon: './public/images/icons/openai.svg' },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', icon: './public/images/icons/problem-solving.svg' },
        { name: 'Quick Learning', icon: './public/images/icons/quick-learn.svg' },
        { name: 'Team Work', icon: './public/images/icons/team-collaboration.svg' },
        { name: 'Agile Method', icon: './public/images/icons/scrum.svg' },
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];



  return (
    <section id="skills" className="min-h-screen pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technical proficiencies and certifications that power my development capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-800/40 border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full mr-3`}></div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col items-center p-3 bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/30 hover:border-blue-500/50 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className={`w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 ${
                            skill.name === 'GitHub' ? 'filter invert brightness-0 invert' : 
                            skill.name === 'Express.js' ? 'bg-white rounded-lg p-1' :
                            skill.name === 'Generative AI' ? 'filter invert brightness-0 invert' : ''
                          }`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling!.textContent = skill.name.charAt(0).toUpperCase();
                          }}
                        />
                        <div className="hidden w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg"></div>
                      </div>
                      <span className="text-xs text-slate-300 text-center font-medium leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
