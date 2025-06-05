import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github, Code } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'AI-Powered Document Analysis',
    description:
      'Developed an intelligent document processing system that extracts, categorizes, and summarizes information from unstructured documents using advanced NLP techniques.',
    image: 'https://images.pexels.com/photos/7255573/pexels-photo-7255573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'TensorFlow', 'NLP', 'OCR', 'FastAPI'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    category: 'AI/ML',
    highlights: [
      'Reduced manual processing time by 85%',
      'Achieved 93% accuracy in information extraction',
      'Processed over 10,000 documents daily',
    ],
  },
  {
    id: 2,
    title: 'Scalable E-commerce Backend',
    description:
      'Built a high-performance backend system for an e-commerce platform capable of handling peak traffic loads with efficient caching and database optimization.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    category: 'Backend',
    highlights: [
      'Supported 10,000+ concurrent users',
      'Reduced response time by 60%',
      'Implemented efficient inventory management',
    ],
  },
  {
    id: 3,
    title: 'Conversational AI Assistant',
    description:
      'Created an intelligent virtual assistant capable of natural conversations, task automation, and integration with multiple services and knowledge bases.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'LangChain', 'FastAPI', 'Vector DB', 'RAG'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    category: 'AI/ML',
    highlights: [
      'Handled 5,000+ daily user interactions',
      'Integrated with 15+ external APIs',
      'Reduced customer support tickets by 40%',
    ],
  },
  {
    id: 4,
    title: 'Cloud-Native Microservices Architecture',
    description:
      'Designed and implemented a microservices architecture for a financial services platform, ensuring high availability, fault tolerance, and horizontal scalability.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Kubernetes', 'Docker', 'AWS', 'CI/CD', 'Microservices'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    category: 'Cloud',
    highlights: [
      'Achieved 99.99% uptime',
      'Reduced deployment time by 85%',
      'Implemented zero-downtime updates',
    ],
  },
];

const ProjectCard: React.FC<{
  project: typeof projects[0];
  index: number;
}> = ({ project, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.1 });

  return (
    <div
      ref={cardRef}
      className={`bg-[#161A1F] rounded-lg overflow-hidden transition-all duration-700 ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1419] to-transparent opacity-70"></div>
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-1 rounded-full bg-[#00D9FF]/20 text-[#00D9FF]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-[#00D9FF] hover:text-[#00D9FF]/80 mb-4 font-medium"
        >
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
        
        {showDetails && (
          <div className="mt-4 mb-6 animate-fadeIn">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Highlights:</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-sm">{highlight}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex space-x-3 mt-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-300 hover:text-[#00D9FF] transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-300 hover:text-[#00D9FF] transition-colors"
          >
            <Github className="h-4 w-4 mr-1" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const categories = ['All', 'AI/ML', 'Backend', 'Cloud'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0F1419] to-[#121417]"
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
              <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
              <div className="h-1 w-8 bg-[#00D9FF] ml-4"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my work across AI/ML, backend development, and cloud infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-[#00D9FF] text-[#0F1419]'
                    : 'bg-[#161A1F] text-gray-300 hover:bg-[#00D9FF]/20 hover:text-[#00D9FF]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;