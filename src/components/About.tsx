import React, { useEffect, useRef } from 'react';
import { Users, Code, Server, BookOpen } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(aboutRef, { threshold: 0.2 });

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#0F1419] to-[#121417]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={aboutRef}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center mb-8">
            <div className="h-1 w-16 bg-[#00D9FF] mr-4"></div>
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          </div>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            AI Engineer with proven expertise in architecting scalable machine learning 
            systems and high-performance backend infrastructure. Specialized in transforming 
            complex business challenges into intelligent, automated solutions that drive 
            measurable impact across global markets. Certified in advanced Docker 
            containerization and modern e-commerce architectures, with a track record of 
            optimizing systems for enterprise-scale deployment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#161A1F] p-6 rounded-lg border border-gray-800 hover:border-[#00D9FF]/30 transition-all duration-300">
              <div className="rounded-full bg-[#00D9FF]/10 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-[#00D9FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-gray-400">
                I approach complex challenges with analytical thinking and creative solutions, 
                breaking down problems into manageable components.
              </p>
            </div>

            <div className="bg-[#161A1F] p-6 rounded-lg border border-gray-800 hover:border-[#00D9FF]/30 transition-all duration-300">
              <div className="rounded-full bg-[#00D9FF]/10 w-12 h-12 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-[#00D9FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">System Architect</h3>
              <p className="text-gray-400">
                I design robust, scalable systems that optimize performance while maintaining 
                flexibility for future growth and adaptability.
              </p>
            </div>

            <div className="bg-[#161A1F] p-6 rounded-lg border border-gray-800 hover:border-[#00D9FF]/30 transition-all duration-300">
              <div className="rounded-full bg-[#00D9FF]/10 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#00D9FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Collaborator</h3>
              <p className="text-gray-400">
                I excel in cross-functional environments, communicating complex technical 
                concepts clearly to both technical and non-technical stakeholders.
              </p>
            </div>

            <div className="bg-[#161A1F] p-6 rounded-lg border border-gray-800 hover:border-[#00D9FF]/30 transition-all duration-300">
              <div className="rounded-full bg-[#00D9FF]/10 w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[#00D9FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
              <p className="text-gray-400">
                I stay at the forefront of AI and software development through continuous 
                learning, experimentation, and adaptation to emerging technologies.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="#skills"
              className="px-6 py-3 border border-[#00D9FF] text-[#00D9FF] font-medium rounded-md hover:bg-[#00D9FF]/10 transition-all duration-300"
            >
              Explore My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;