import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Darwix AI',
    role: 'Senior AI Engineer',
    period: 'Jan 2023 - Present',
    location: 'Gurugram, India',
    description:
      'Leading the development of real-time AI systems for predictive analytics and decision support.',
    achievements: [
      'Architected and deployed an end-to-end document intelligence system that reduced manual processing by 85%',
      'Led a team of 5 engineers in developing an NLP-powered customer support automation platform',
      'Optimized ML inference pipelines, reducing latency by 60% and cloud costs by 40%',
    ],
    skills: ['TensorFlow', 'LangChain', 'RAG', 'Python', 'FastAPI', 'AWS'],
  },
  {
    id: 2,
    company: 'Xeloop Media',
    role: 'Backend Developer',
    period: 'Mar 2021 - Dec 2022',
    location: 'Remote',
    description:
      'Designed and implemented the backend infrastructure for an SSP (Supply-Side Platform) in the digital advertising space.',
    achievements: [
      'Built high-throughput API endpoints handling 50,000+ requests per minute',
      'Implemented real-time data processing pipelines for ad performance analytics',
      'Designed and maintained database schemas supporting complex queries across millions of records',
    ],
    skills: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'RESTful APIs'],
  },
  {
    id: 3,
    company: 'StudyAsan',
    role: 'Full Stack Developer',
    period: 'Jun 2020 - Feb 2021',
    location: 'Remote',
    description:
      'Developed an educational platform that connects students with tutors and provides interactive learning tools.',
    achievements: [
      'Created a video conferencing system with integrated whiteboard and document sharing',
      'Implemented an automated scheduling system that increased tutor utilization by 35%',
      'Developed responsive user interfaces that improved user engagement metrics by 45%',
    ],
    skills: ['React', 'Django', 'WebRTC', 'PostgreSQL', 'AWS'],
  },
  {
    id: 4,
    company: 'Tex Pvt. Ltd',
    role: 'Junior Developer',
    period: 'Jan 2019 - May 2020',
    location: 'Delhi, India',
    description:
      'Worked on developing and maintaining e-commerce systems and inventory management solutions.',
    achievements: [
      'Contributed to building a product recommendation engine using collaborative filtering',
      'Implemented automated inventory management features that reduced stockouts by 25%',
      'Assisted in migrating legacy systems to a modern microservices architecture',
    ],
    skills: ['Python', 'Django', 'MySQL', 'JavaScript', 'RESTful APIs'],
  },
];

const ExperienceItem: React.FC<{
  experience: typeof experiences[0];
  index: number;
}> = ({ experience, index }) => {
  const [expanded, setExpanded] = React.useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { threshold: 0.1 });

  return (
    <div
      ref={itemRef}
      className={`mb-8 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex">
        <div className="hidden md:flex flex-col items-center mr-8">
          <div className="w-3 h-3 rounded-full bg-[#00D9FF]"></div>
          {index !== experiences.length - 1 && (
            <div className="w-px h-full bg-gray-700 mt-3"></div>
          )}
        </div>
        <div className="flex-1">
          <div className="bg-[#161A1F] p-6 rounded-lg border border-gray-800 hover:border-[#00D9FF]/30 transition-all duration-300">
            <div className="md:flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                <p className="text-[#00D9FF] font-medium">{experience.company}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <div className="flex items-center text-sm text-gray-400 mb-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  {experience.period}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {experience.location}
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">{experience.description}</p>
            
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-sm text-[#00D9FF] hover:text-[#00D9FF]/80 mb-4 font-medium"
            >
              {expanded ? 'Show Less' : 'Show Achievements'}
              <ChevronRight
                className={`h-4 w-4 ml-1 transform transition-transform ${
                  expanded ? 'rotate-90' : 'rotate-0'
                }`}
              />
            </button>
            
            {expanded && (
              <div className="mt-4 animate-fadeIn">
                <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm">{achievement}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-[#00D9FF]/10 text-[#00D9FF]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="experience"
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
              <h2 className="text-3xl sm:text-4xl font-bold">Work Experience</h2>
              <div className="h-1 w-8 bg-[#00D9FF] ml-4"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey building intelligent systems and robust backend infrastructure.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;