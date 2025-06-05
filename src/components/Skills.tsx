import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  Brain, Database, Cloud, Code, Terminal, Monitor, Layers, Link
} from 'lucide-react';

const skillCategories = [
  {
    title: 'AI/ML Stack',
    icon: <Brain className="h-6 w-6 text-[#00D9FF]" />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'LangChain', level: 80 },
      { name: 'RAG Systems', level: 80 },
      { name: 'Neural Networks', level: 75 },
    ],
  },
  {
    title: 'Backend Mastery',
    icon: <Database className="h-6 w-6 text-[#00D9FF]" />,
    skills: [
      { name: 'Django', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
  {
    title: 'Cloud Infrastructure',
    icon: <Cloud className="h-6 w-6 text-[#00D9FF]" />,
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Azure', level: 75 },
      { name: 'Kubernetes', level: 70 },
      { name: 'CI/CD Pipelines', level: 80 },
    ],
  },
  {
    title: 'Integration Expertise',
    icon: <Link className="h-6 w-6 text-[#00D9FF]" />,
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 80 },
      { name: 'WebSockets', level: 75 },
      { name: 'Third-party Services', level: 85 },
    ],
  },
];

const SkillBar: React.FC<{ name: string; level: number; delay: number }> = ({
  name,
  level,
  delay,
}) => {
  const skillRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillRef, { threshold: 0.1 });

  return (
    <div ref={skillRef} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-[#00D9FF]">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div
          className="bg-[#00D9FF] h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#121417] to-[#0F1419]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-8 bg-[#00D9FF] mr-4"></div>
              <h2 className="text-3xl sm:text-4xl font-bold">Technical Skills</h2>
              <div className="h-1 w-8 bg-[#00D9FF] ml-4"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My expertise spans across AI systems, backend development, and cloud infrastructure, 
              allowing me to build end-to-end intelligent solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-[#161A1F] p-6 rounded-lg border border-gray-800 hover:border-[#00D9FF]/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="rounded-full bg-[#00D9FF]/10 w-10 h-10 flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={(categoryIndex * 100) + (skillIndex * 100)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;