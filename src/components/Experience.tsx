import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Darwix AI',
    role: 'Software Development Engineer (Artificial Intelligence)',
    period: 'Jan 2025 – Present',
    location: 'Gurugram, Haryana, India',
    achievements: [
      'Optimized AI infrastructure for 10K+ concurrent users, improving availability by 35%',
      'Developed scalable transcription-analysis pipelines and RAG-based compliance tools, achieving 90% speech-to-text accuracy',
      'Built and fine-tuned LLMs for real-time sales feedback with sub-2s latency',
      'Reviewed 100+ pull requests, enforcing best practices and reducing production issues by 30%'
    ],
    projects: [
      {
        name: 'Realtime Conversational AI Assist',
        description: 'Developed a scalable, real-time conversational AI system for sales call transcription and analysis. Leveraged FastAPI, Redis, and AWS to process over 100K calls monthly with sub-2s latency and 90% speech-to-text accuracy. Integrated LangChain, GPT-4.1, and RAG with ChromaDB for efficient vector storage and retrieval, enabling advanced analytics of salesperson-customer interactions. Utilized prompt engineering to provide actionable insights, significantly enhancing sales team performance.'
      },
      {
        name: 'Conversational AI Agent',
        description: 'Created a robust outbound calling agent system using LangChain, GPT-4.2, and RAG with PostgreSQL, enhanced by Twilio integration. Enabled automated, high-accuracy customer interactions, revolutionizing outreach efficiency and engagement.'
      }
    ]
  },
  {
    id: 2,
    company: 'Xeloop Media',
    role: 'Software Development Engineer',
    period: 'Feb 2024 – Dec 2024',
    location: 'Lucknow, Uttar Pradesh, India',
    achievements: [
      'Led backend development for an SSP platform serving 100+ clients, improving system performance by 90%',
      'Integrated Appsflyer, Razorpay, Branch, and Trackier APIs, enhancing campaign attribution and payment workflows',
      'Reduced deployment time from 2 hours to 15 minutes using GitLab CI/CD and Docker',
      'Mentored interns and collaborated with frontend teams for 100% API compatibility'
    ],
    projects: [
      {
        name: 'SSP Service Website',
        description: 'Led the development of a high-performance supply-side platform (SSP) backend and service website using Django, FastAPI, Docker, and Redis. Achieved a 90% performance improvement and seamlessly integrated key APIs (Appsflyer, Razorpay, Branch) for enhanced analytics and payment processing. Implemented a RAG pipeline with ChromaDB to deliver actionable insights on ad coverage, optimizing client placements and maximizing revenue.'
      }
    ]
  },
  {
    id: 3,
    company: 'StudyAsan',
    role: 'Freelance Software Developer',
    period: 'Nov 2022 – Aug 2023',
    location: 'Haldwani, Uttarakhand, India',
    achievements: [
      'Developed backend systems for web applications using Django, Flask, and MongoDB, ensuring 99% uptime',
      'Built Image Reducer API, automating workflows and saving 10+ hours/day of manual effort',
      'Fixed 50+ bugs on the main website, improving performance by 20%'
    ]
  },
  {
    id: 4,
    company: 'Tex Pvt. Ltd.',
    role: 'Software Development Intern',
    period: 'Nov 2021 – Mar 2022',
    location: 'Lucknow, Uttar Pradesh, India',
    achievements: [
      'Built TuneMentor, a web app extension using Django and deep learning for piano key detection with 85% accuracy',
      'Deployed via cPanel on CentOS, resolving 60% of deployment issues',
      'Collaborated with AI engineers to debug 10% of critical integration issues'
    ]
  }
];

const ExperienceItem: React.FC<{
  experience: typeof experiences[0];
  index: number;
}> = ({ experience, index }) => {
  const [expanded, setExpanded] = useState(false);
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

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm">{achievement}</li>
                ))}
              </ul>
            </div>

            {experience.projects && (
              <>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center text-sm text-[#00D9FF] hover:text-[#00D9FF]/80 mt-4 font-medium"
                >
                  {expanded ? 'Hide Projects' : 'View Projects'}
                  <ChevronRight
                    className={`h-4 w-4 ml-1 transform transition-transform ${
                      expanded ? 'rotate-90' : 'rotate-0'
                    }`}
                  />
                </button>

                {expanded && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    {experience.projects.map((project, i) => (
                      <div
                        key={i}
                        className="bg-[#1D2026] p-4 rounded-md border border-gray-700"
                      >
                        <h5 className="text-white font-medium mb-2">{project.name}</h5>
                        <p className="text-sm text-gray-400">{project.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
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