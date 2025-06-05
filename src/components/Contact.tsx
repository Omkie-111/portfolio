import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check } from 'lucide-react';

const ContactItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
  copyable?: boolean;
}> = ({ icon, label, value, link, copyable = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-start mb-6">
      <div className="rounded-full bg-[#00D9FF]/10 w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-400">{label}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00D9FF] transition-colors duration-300"
          >
            {value}
          </a>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
      {copyable && (
        <button
          onClick={handleCopy}
          className="p-1 hover:bg-[#00D9FF]/10 rounded-full transition-colors duration-300"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400 hover:text-[#00D9FF]" />
          )}
        </button>
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({ message: '', type: null });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: 'Your message has been sent successfully!',
        type: 'success',
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ message: '', type: null });
      }, 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
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
              <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
              <div className="h-1 w-8 bg-[#00D9FF] ml-4"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#161A1F] p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <ContactItem
                icon={<Mail className="h-5 w-5 text-[#00D9FF]" />}
                label="Email"
                value="ompachauli007@gmail.com"
                link="mailto:ompachauli007@gmail.com"
                copyable
              />
              
              <ContactItem
                icon={<Phone className="h-5 w-5 text-[#00D9FF]" />}
                label="Phone"
                value="+91 8887965397"
                link="tel:+918887965397"
                copyable
              />
              
              <ContactItem
                icon={<MapPin className="h-5 w-5 text-[#00D9FF]" />}
                label="Location"
                value="Gurugram, India"
              />
              
              <ContactItem
                icon={<Github className="h-5 w-5 text-[#00D9FF]" />}
                label="GitHub"
                value="github.com/Omkie-111"
                link="https://github.com/Omkie-111"
              />
              
              <ContactItem
                icon={<Linkedin className="h-5 w-5 text-[#00D9FF]" />}
                label="LinkedIn"
                value="linkedin.com/in/om-pachauli"
                link="https://linkedin.com/in/om-pachauli"
              />
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-4">Current Local Time</p>
                <p className="text-xl font-semibold">
                  <span id="current-time">
                    {new Date().toLocaleTimeString('en-US', {
                      timeZone: 'Asia/Kolkata',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>{' '}
                  <span className="text-gray-400">(GMT+5:30)</span>
                </p>
              </div>
            </div>
            
            <div className="bg-[#161A1F] p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#1D2026] border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1D2026] border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-[#1D2026] border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                {formStatus.message && (
                  <div
                    className={`mb-4 p-3 rounded-md ${
                      formStatus.type === 'success'
                        ? 'bg-green-900/30 text-green-400 border border-green-800'
                        : 'bg-red-900/30 text-red-400 border border-red-800'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-[#00D9FF] text-[#0F1419] font-medium py-2 px-4 rounded-md hover:bg-[#00D9FF]/90 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;