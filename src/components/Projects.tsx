import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Brain, Server } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const projects = [
  {
    id: 1,
    title: 'BioPrid',
    emoji: '🧪',
    description: 'Implemented QSAR and DTI models using CHEMBL and KIBA datasets, improving drug screening accuracy by 15% and reducing development time by 20%.',
    technologies: ['Python', 'Machine Learning', 'TensorFlow'],
    codeSnippet: `def train_dti_model(x_train, y_train):
    model = Sequential([
        Dense(512, activation='relu'),
        Dropout(0.3),
        Dense(1, activation='sigmoid')
    ])
    return model`,
    icon: <Brain className="h-8 w-8" />,
    category: 'AI/ML'
  },
  {
    id: 2,
    title: 'Image Reducer',
    company: 'StudyAsan',
    emoji: '🖼️',
    description: 'Designed an asynchronous image processing API using FastAPI, Celery, Docker, and SQLAlchemy, handling 1,000+ daily tasks with 99% accuracy.',
    technologies: ['FastAPI', 'Celery', 'Docker', 'SQLAlchemy', 'MongoDB'],
    codeSnippet: `@app.post("/process-image")
async def process_image(image: UploadFile):
    task = process_image.delay(image.file)
    return {"task_id": task.id}`,
    icon: <Server className="h-8 w-8" />,
    category: 'Backend'
  },
  {
    id: 3,
    title: 'TuneMentor',
    company: 'Tex Pvt. Ltd.',
    emoji: '🎵',
    description: 'Developed a web app extension using Django and deep learning to identify piano keys from audio with 85% accuracy. Deployed via cPanel on CentOS, resolving 60% of deployment issues.',
    technologies: ['Django', 'Deep Learning', 'MySQL', 'cPanel', 'CentOS'],
    codeSnippet: `class AudioProcessor:
    def process_audio(self, audio_file):
        features = self.extract_features(audio_file)
        return self.model.predict(features)`,
    icon: <Brain className="h-8 w-8" />,
    category: 'AI/ML'
  }
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
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-[#00D9FF]/10 p-3">
              {project.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {project.emoji} {project.title}
              </h3>
              {project.company && (
                <p className="text-[#00D9FF] text-sm">{project.company}</p>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2 py-1 rounded-full bg-[#00D9FF]/10 text-[#00D9FF]"
            >
              {tech}
            </span>
          ))}
        </div>

       

        {showDetails && (
          <div className="mt-4 mb-6 animate-fadeIn">
            <SyntaxHighlighter
              language="python"
              style={atomDark}
              customStyle={{
                backgroundColor: '#1D2026',
                borderRadius: '0.5rem',
                padding: '1rem',
                fontSize: '0.875rem'
              }}
            >
              {project.codeSnippet}
            </SyntaxHighlighter>
          </div>
        )}
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