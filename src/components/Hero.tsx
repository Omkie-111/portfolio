import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; size: number; speed: number }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        ctx.fillStyle = '#00D9FF';
        ctx.globalAlpha = Math.random() * 0.5 + 0.1;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.y -= particle.speed;
        
        if (particle.y < 0) {
          particles[index].y = canvas.height;
          particles[index].x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1419]/90 to-[#1A1A1A]/90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="flex flex-col max-w-3xl md:w-2/3">
            <div className="flex items-center mb-4">
              <div className="h-1 w-16 bg-[#00D9FF] mr-4"></div>
              <span className="text-sm font-medium tracking-wide uppercase text-[#00D9FF]">
                AI Engineer & Backend Architect
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
              <span className="text-white block">Om</span>
              <span className="text-white block">Pachauli<span className="text-[#00D9FF]">.</span></span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Engineering Intelligent Systems That Transform Tomorrow
            </p>
            
            <p className="text-gray-400 mb-8">
              Gurugram, India • Available for Global Opportunities
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#00D9FF] text-[#0F1419] font-medium rounded-md hover:bg-[#00D9FF]/90 transition-all duration-300 flex items-center"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://flowcv.com/resume/lq3dejw66uki"
                target="_blank"
                className="px-6 py-3 border border-[#00D9FF] text-[#00D9FF] font-medium rounded-md hover:bg-[#00D9FF]/10 transition-all duration-300 flex items-center"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#00D9FF] text-[#00D9FF] font-medium rounded-md hover:bg-[#00D9FF]/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/Omkie-111"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-700 hover:border-[#00D9FF] hover:text-[#00D9FF] transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/om-pachauli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-700 hover:border-[#00D9FF] hover:text-[#00D9FF] transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 mt-12 md:mt-0">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00D9FF]/20 to-[#00D9FF]/10 animate-pulse"></div>
              <img
                src="../me.jpeg" 
                alt="Om Pachauli"
                className="rounded-full w-full h-full object-cover border-4 border-[#00D9FF]/30"
              />
              <div className="absolute inset-0 rounded-full border-2 border-[#00D9FF]/20 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;