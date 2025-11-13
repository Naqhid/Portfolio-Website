import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown,
  Monitor,
  Smartphone,
  Server,
  Database,
  Zap,
  Globe,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Calendar,
  Award,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  TrendingUp,
  Activity
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const skills = [
    { name: 'React', level: 95, icon: Zap, details: 'Hooks · Context · Redux · Router · Suspense & Concurrent UI · Testing (Jest/RTL)' },
    { name: 'TypeScript', level: 92, icon: Code2, details: 'Types & Interfaces · Generics · Utility Types · TSConfig · Advanced Types' },
  { name: 'Angular', level: 90, icon: Server, details: 'Components · Services · RxJS · NgRx · Routing · Forms · CLI · Testing' },
  { name: 'JavaScript', level: 88, icon: Code2, details: 'ES6+ · DOM · Async/Await · Fetch/API · Closures & Prototypes' },
  { name: 'Node.js', level: 85, icon: Server, details: 'Express · REST APIs · Middleware · Authentication · Performance & Debugging' },
  { name: 'Tailwind CSS', level: 88, icon: Monitor, details: 'Utility-first · Responsive Design · Customization · Plugins · Dark Mode' },
    { 
      name: 'Flutter', 
      level: 70, 
      icon: Smartphone,
      details: 'Dart · Widgets · State Management · Navigation & Routing · API Integration · Responsive Layouts · Animations · Debugging & Testing'
    },
  { name: 'HTML5', level: 95, icon: Globe, details: 'Semantics · Accessibility · SEO · Forms · Canvas' },
  { name: 'CSS3', level: 90, icon: Monitor, details: 'Flexbox · Grid · Animations · Responsive Layouts · Preprocessors' },
    { name: 'MongoDB', level: 82, icon: Database, details: 'Schema Design · Aggregation · Indexing · Mongoose · Replication' },
    { name: 'MSSQL', level: 80, icon: Database, details: 'T-SQL · Stored Procedures · Query Optimization · Indexing · Backups' },
    { name: 'SQL', level: 85, icon: Database, details: 'Joins · Transactions · Indexing · Query Optimization' },
    { name: 'Git & GitHub', level: 88, icon: Code2, details: 'Branching · PRs · CI Integrations · Rebasing · Workflows' }
  ];


  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'ICAMxperts',
      period: 'May 2024 – Present',
      location: 'Remote',
      description: 'Leading frontend development for SailPoint application automation using modern React ecosystem and advanced data visualization techniques.',
      achievements: [
        'Lead frontend development using React, TypeScript, and Tailwind CSS for automating SailPoint applications',
        'Built complex CRUD operations, data visualizations (graphs), and dashboards to enhance system usability',
        'Collaborated on SQL tasks including database design, query optimization, and report generation',
        'Delivered robust, production-ready features with focus on performance, scalability, and maintainability'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SQL', 'Data Visualization'],
      projects: ['SailPoint Automation Platform', 'Dashboard & Analytics System']
    },
    {
      title: 'Frontend Developer',
      company: 'ZF WABCO',
      period: 'Aug 2021 – Aug 2023',
      location: 'Chennai, India',
      description: 'Developed multiple enterprise-level applications for manufacturing quality control, operations management, and energy optimization across automotive facilities.',
      achievements: [
        'Developed manufacturing quality app capturing real-time data from measurement devices',
        'Built lean operations management tool monitoring production efficiency and loss time tracking',
        'Created defect analysis tools for root cause identification and customer satisfaction improvement',
        'Delivered energy management system optimizing electricity and fuel consumption across facilities'
      ],
      technologies: ['Angular', 'Node.js', 'MongoDB', 'MSSQL', 'Real-time Data Processing'],
      projects: [
        'Digital Statistical Process Control',
        'Digital Loss Time Management', 
        'Digital Live Pareto',
        'EMAS (Energy Management System)'
      ]
    }
  ];

  const projects = [
    {
      title: 'Financial Specialist Portfolio',
      description: 'Professional website for financial advisory services with modern design, client management features, and responsive layout optimized for business growth.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://broerenadministraties.nl',
      tech: ['React', 'TypeScript', 'CSS3', 'Responsive Design'],
      category: 'Business Website'
    },
    {
      title: 'Human Rights Organization',
      description: 'Information platform for human rights advocacy with multilingual support, content management system, and accessibility features for global reach.',
      image: 'https://images.pexels.com/photos/8112198/pexels-photo-8112198.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://aihroei.info/',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'CMS Integration'],
      category: 'Non-Profit Website'
    },
    {
      title: 'Biryani Restaurant Website',
      description: 'Delicious food showcase website with interactive menu display, online ordering system, restaurant information, and customer reviews section.',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://naqhid.github.io/Biryanis-Website/',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'Restaurant Website'
    },
    {
      title: 'Recipe Catalogue Platform',
      description: 'Comprehensive recipe collection with advanced search functionality, category filters, user-friendly interface, and recipe sharing capabilities.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://relaxed-villani-a03192.netlify.app',
      tech: ['React', 'CSS3', 'JavaScript', 'API Integration'],
      category: 'Web Application'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'University',
      year: '2019-2022',
      description: 'Comprehensive study of computer science fundamentals, programming languages, and software development methodologies with focus on web technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 min-w-0">
              <Code2 className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <span className="text-lg sm:text-xl font-bold text-slate-800 truncate max-w-[10rem] sm:max-w-[14rem] md:max-w-none">Mohammed Naqhid</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-200">
              <div className="py-4 space-y-2">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-teal-600/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <Code2 className="w-16 h-16 text-white" />
            </div> */}
            {/* <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4">
              Mohammed Naqhid
            </h1> */}
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-6">
              Frontend Developer
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
             Led SailPoint automation projects at ICAMxperts, developing expertise in enterprise applications, data visualization, and manufacturing systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Frontend developer with expertise in building enterprise-level applications and automation systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Building Enterprise Solutions</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm Mohammed Naqhid, a dedicated frontend developer with extensive experience in creating 
                sophisticated web applications for enterprise environments. Currently leading frontend 
                development at ICAMxperts, I specialize in React, TypeScript, and modern web technologies 
                to build automation platforms and data visualization systems.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                My professional journey includes significant contributions at ZF WABCO, where I developed 
                multiple manufacturing applications including quality control systems, operations management 
                tools, and energy optimization platforms. I have a proven track record of delivering 
                production-ready solutions that enhance system usability and automate complex processes.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                With a Bachelor's degree in Computer Applications and hands-on experience in both frontend 
                and backend technologies, I excel at transforming business requirements into robust, 
                scalable applications that drive operational efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                  <div className="text-slate-600">Enterprise Projects</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-800 mb-2">Frontend Development</h4>
                <p className="text-sm text-slate-600">React, Angular, TypeScript, Modern CSS</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-800 mb-2">Data Visualization</h4>
                <p className="text-sm text-slate-600">Charts, Dashboards, Analytics</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-800 mb-2">Enterprise Systems</h4>
                <p className="text-sm text-slate-600">Automation, CRUD Operations, Workflows</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-800 mb-2">Database Integration</h4>
                <p className="text-sm text-slate-600">SQL, MongoDB, Query Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proficient in modern frontend frameworks and enterprise-level development technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="font-semibold text-slate-800">{skill.name}</span>
                  <span className="ml-auto text-sm text-slate-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                {skill.details && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skill.details.split('·').map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My journey in enterprise frontend development and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-slate-600">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-blue-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-slate-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <Code2 className="w-4 h-4 mr-2 text-blue-600" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                      Key Projects
                    </h4>
                    <ul className="space-y-1">
                      {exp.projects.map((project, idx) => (
                        <li key={idx} className="text-slate-600 text-sm">• {project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{edu.degree}</h4>
                <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                <p className="text-slate-600 mb-3">{edu.year}</p>
                <p className="text-slate-600 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A showcase of my recent work across different industries and technologies, including web and mobile.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need enterprise application development, frontend optimization, 
                or want to discuss automation solutions, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-slate-300">mohammed.naqhid@email.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-slate-300">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="text-slate-300">Available Worldwide (Remote)</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a href="https://github.com/naqhid" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors duration-200">
                  <Github className="w-6 h-6" />
                </a>
                <a href="mailto:mohammed.naqhid@email.com" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors duration-200">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Mohammed Naqhid - Frontend Developer</span>
            </div>
            <p className="text-sm">
              © 2024 Mohammed Naqhid. All rights reserved. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;