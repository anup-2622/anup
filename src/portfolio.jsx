import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Palette, Layers, Sparkles, MousePointer2, Database, Phone, MapPin, Calendar, Users, TrendingUp, Shield, Zap, Award, Target } from 'lucide-react';
import { education, experience, projects, skills, stats, technicalSkills } from './util/portfolioUtil';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [experience ,setExperience] = useState(0)
  
  const startDate = "08-08-2023";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  useEffect(()=>{

    const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '-' + mm + '-' + yyyy;
    setExperience(getDateDifference(formattedToday , startDate)
  },[])


  function getDateDifference(date1, date2) {
  // Ensure date1 is earlier than date2 for consistent calculation
  if (date1 > date2) {
    [date1, date2] = [date2, date1]; // Swap dates
  }

  let years = date2.getFullYear() - date1.getFullYear();
  let months = date2.getMonth() - date1.getMonth();

  // Adjust months and years if months is negative
  if (months < 0) {
    years--;
    months += 12;
  }

  // Handle cases where the day of the month in date2 is earlier than date1
  // This means a full month hasn't passed yet in the current month segment
  if (date2.getDate() < date1.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  return {years,months};
}

  console.log("date", experience)

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transition-all duration-300"
          style={{ 
            left: `${mousePosition.x - 192}px`, 
            top: `${mousePosition.y - 192}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Anup Kumar
            </span>
          </h1>
          
          <div className="hidden md:flex gap-8 items-center">
            {/* {['Work', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all relative group ${
                  activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all ${
                  activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))} */}
            <a 
              href="mailto:anupk2622@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
            {/* {['Work', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="text-left text-slate-300 hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))} */}
               <a 
              href="mailto:anupk2622@gmail.com"
           className="text-center text-slate-300 hover:text-blue-400 transition-colors "
              >
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <Sparkles size={16} className="animate-pulse" />
              2.2+ Years Experience • Available for Opportunities
            </div>
            <h2 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Developer
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              Crafting scalable web and mobile applications that serve thousands of users. Specialized in React, Node.js, and modern JavaScript technologies.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3 text-slate-300 bg-white/5 px-4 py-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                <Phone size={18} className="text-blue-400" />
                <span>+91 9470899107</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 bg-white/5 px-4 py-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                <Mail size={18} className="text-cyan-400" />
                <span><a  href="mailto:anupk2622@gmail.com">anupk2622@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 bg-white/5 px-4 py-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                <MapPin size={18} className="text-purple-400" />
                <span>Delhi, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#work"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-3 group hover:scale-105"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="mailto:anupk2622@gmail.com"
                className="bg-white/5 backdrop-blur-sm border-2 border-white/10 px-10 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Floating Code Animation */}
        <div className="absolute right-10 top-40 hidden lg:block">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
            <pre className="text-sm text-cyan-300">
              <code>{`const developer = {
  name: "Anup Kumar",
  role: "Full Stack",
  experience: "2.2 years",
  passion: "Scalable Apps"
};`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 lg:px-8 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform border border-blue-500/30">
                    <Icon className="text-blue-400" size={28} />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-widest">About Me</h3>
            <h4 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Turning Ideas into Reality
            </h4>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                Software developer with 2.2 years of hands-on experience in implementing and supporting mission-critical business solutions. I specialize in full-stack development with expertise in React, Node.js, and modern JavaScript frameworks.
              </p>
              <p className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                My technical expertise includes advanced concepts such as asynchronous programming, higher-order functions, ES6+ features, inheritance, polymorphism, and design pattern implementation. I have successfully delivered projects serving thousands of users with focus on scalability, performance, and user experience.
              </p>
              <p className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                Currently working at Schoofi Software Solution, where I lead development of enterprise applications and have resolved 55+ production bugs while implementing critical features from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-widest">Technical Expertise</h3>
            <h4 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Skills & Technologies
            </h4>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all group">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Code2 className="text-white" size={24} />
                </div>
                <h5 className="text-2xl font-bold">Frontend</h5>
              </div>
              <div className="space-y-5">
                {skills.frontend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 shadow-lg shadow-blue-500/50"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all group">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Database className="text-white" size={24} />
                </div>
                <h5 className="text-2xl font-bold">Backend</h5>
              </div>
              <div className="space-y-5">
                {skills.backend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 shadow-lg shadow-purple-500/50"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 p-8 rounded-3xl border border-indigo-500/20 backdrop-blur-sm hover:border-indigo-500/40 transition-all group">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-br from-indigo-500 to-blue-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Layers className="text-white" size={24} />
                </div>
                <h5 className="text-2xl font-bold">Tools & Others</h5>
              </div>
              <div className="space-y-5">
                {skills.tools.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="text-indigo-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-1000 shadow-lg shadow-indigo-500/50"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-blue-400 group-hover:scale-110 transition-transform" size={20} />
                    <h6 className="font-bold text-white">{category.category}</h6>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-sm bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-xl font-medium backdrop-blur-sm hover:scale-105 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-widest">Portfolio</h3>
            <h4 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Featured Projects
            </h4>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real-world applications serving thousands of users
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden h-80 lg:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 mix-blend-multiply`} />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.category}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-sm text-slate-400">{project.company}</span>
                    </div>
                    <h5 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h5>
                    <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h6 className="font-semibold text-white mb-4 flex items-center gap-2">
                        <Zap className="text-blue-400" size={18} />
                        Key Achievements
                      </h6>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <span className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-sm bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-xl font-medium backdrop-blur-sm hover:bg-white/10 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-widest">Career</h3>
            <h4 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Work Experience
            </h4>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-10 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h5 className="text-3xl font-bold text-white mb-3">{exp.role}</h5>
                    <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {exp.company}
                    </p>
                    <p className="text-slate-400 flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 px-5 py-2.5 rounded-xl font-semibold backdrop-blur-sm">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                  {exp.description}
                </p>
                
                <div>
                  <h6 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="text-blue-400" size={18} />
                    Key Contributions
                  </h6>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <span className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-widest">Education</h3>
            <h4 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Academic Background
            </h4>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-10 lg:p-12 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
              <div>
                <h5 className="text-3xl font-bold text-white mb-3">{education.degree}</h5>
                <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {education.institution}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 px-5 py-2.5 rounded-xl font-semibold">
                <Calendar size={16} />
                {education.period}
              </span>
            </div>
            
            <div>
              <h6 className="font-semibold text-white mb-5 flex items-center gap-2">
                <Award className="text-blue-400" size={18} />
                Relevant Coursework
              </h6>
              <div className="grid md:grid-cols-2 gap-4">
                {education.coursework.map((course, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                    <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h3>
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            I'm currently available for full-time opportunities and freelance projects. Let's discuss how I can contribute to your team or project.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:anupk2622@gmail.com" className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
              <Mail className="w-10 h-10 mb-4 mx-auto text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-white mb-2">Email</div>
              <div className="text-sm text-slate-300">anupk2622@gmail.com</div>
            </a>
            <a href="tel:+919470899107" className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
              <Phone className="w-10 h-10 mb-4 mx-auto text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-white mb-2">Phone</div>
              <div className="text-sm text-slate-300">+91 9470899107</div>
            </a>
            <a href="https://www.linkedin.com/in/anup-kumar-4987821a3/" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
              <Linkedin className="w-10 h-10 mb-4 mx-auto text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-white mb-2">LinkedIn</div>
              <div className="text-sm text-slate-300">Connect with me</div>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="mailto:anupk2622@gmail.com" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105">
              Send Message
            </a>
            <a href="https://www.linkedin.com/in/anup-kumar-4987821a3/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm border-2 border-white/20 px-10 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
              View LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">© 2025 Anup Kumar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/anup-2622" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/anup-kumar-4987821a3/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:anupk2622@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
