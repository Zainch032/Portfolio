import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, Sparkles, Menu, X, MapPin, Phone, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [repos, setRepos] = useState([]);

  const githubUsername = 'Zainch032';

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=9`)
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(err => console.error('Error fetching repos:', err));
  }, []);

  const skills = {
    'Programming': ['Python (Expert)', 'JavaScript', 'SQL', 'MySQL'],
    'ML & AI': ['Machine Learning', 'NLP', 'Neural Networks', 'Feature Engineering', 'Model Deployment'],
    'Frameworks': ['LangChain', 'LangGraph', 'FastAPI', 'Streamlit', 'Flask', 'Express.js', 'Node.js'],
    'Tools & Cloud': ['Git', 'GitHub', 'AWS', 'VS Code', 'Scikit-learn', 'NLTK', 'Pandas', 'NumPy']
  };

const projects = [
  {
    title: 'SmartPricer — Phone Price Predictor',
    description: 'End-to-end ML project with extensive EDA, feature engineering from raw specs, XGBoost model, and deployed via FastAPI with a custom HTML/CSS/JS frontend',
    tech: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn', 'Pandas', 'HTML/CSS/JS'],
    github: 'https://github.com/Zainch032/SmartPricer',
    highlights: ['24 engineered features', 'End-to-end deployment', 'PKR price prediction']
  },
  {
    title: 'Pakistan Prayer Assistant (Agentic AI)',
    description: 'Engineered an Agentic AI using ReAct pattern to overcome LLM knowledge cutoffs with real-time API tool-calling for 100+ cities',
    tech: ['Python', 'LangChain', 'Groq API', 'Flask', 'Aladhan API'],
    github: 'https://github.com/Zainch032/My-prayer-Bot',
    highlights: ['Eliminated hallucinations', 'Real-time tool calling', '3D UI design']
  },
  {
    title: 'News Multi-Classification System',
    description: 'End-to-end NLP project with EDA dashboard, trained 10 ML classifiers, and deployed Flask-based system for real-time predictions',
    tech: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Flask', 'HTML/CSS'],
    github: 'https://github.com/Zainch032/News-Classification-',
    demo: 'https://zainch12.pythonanywhere.com',
    highlights: ['90%+ accuracy', 'Custom NLP pipeline', 'Real-time predictions']
  },
  {
    title: 'Car Price Prediction',
    description: 'Built feature preprocessing workflow with advanced engineering techniques achieving R² ≈ 0.91',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering'],
    github: 'https://github.com/Zainch032/ML-Project',
    highlights: ['R² ≈ 0.91', 'Advanced preprocessing', 'Noise reduction']
  }
];
  const experience = [
    {
      role: 'NLP Intern',
      company: 'Elevo Pathway',
      period: 'Oct 2025 – Nov 2025',
      achievements: [
        'Built end-to-end NLP models achieving ~90% accuracy on real-world datasets',
        'Applied advanced preprocessing: tokenization, stopword removal, lemmatization, TF-IDF',
        'Gained industry-standard ML workflow experience in handling noisy text data'
      ]
    }
  ];

  const certifications = [
    'Google Data Analytics Professional Certificate (2024)',
    'Python Essentials for MLOps',
    'Introduction to Generative AI',
    'Introduction to Neural Networks and PyTorch'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Muhammad Zain
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-purple-500/20"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Sparkles className="w-16 h-16 mx-auto text-purple-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Muhammad Zain
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-300 mb-6 font-semibold">
            Data Scientist & ML Engineer
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building intelligent systems from data to deployment. Passionate about NLP, MLOps, and GenAI.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-300">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-purple-400" />
              Lahore, Pakistan
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-purple-400" />
              +92 336 0453765
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-purple-400" />
              COMSATS University (3.35 CGPA)
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Zainch032" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-full transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-zain-9710692b4" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-full transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:zc19398@gmail.com"
               className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-full transition-all">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://kaggle.com/muhammadzain" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-full transition-all">
              <Code className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center">
            <Brain className="w-10 h-10 mr-3 text-purple-400" />
            My Journey in AI
          </h2>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm an aspiring <span className="text-purple-400 font-semibold">Data Scientist and ML Engineer</span> currently 
              pursuing my Bachelor's in Artificial Intelligence at COMSATS University Lahore. My journey into AI began with 
              a fascination for how data can tell stories and machines can learn patterns that humans might miss.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              What drives me is building <span className="text-pink-400 font-semibold">end-to-end solutions</span>—from raw data 
              preprocessing to model deployment. I specialize in <span className="text-blue-400 font-semibold">NLP</span>, 
              <span className="text-green-400 font-semibold"> MLOps</span>, and exploring cutting-edge technologies like 
              <span className="text-purple-400 font-semibold"> LangChain and LangGraph</span> for GenAI applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Through my internship at Elevo Pathway and personal projects, I've developed expertise in handling real-world datasets, 
              building production-ready ML pipelines, and creating intelligent systems that solve actual problems. My 
              <span className="text-purple-400 font-semibold"> Pakistan Prayer Assistant</span> project demonstrates my ability 
              to build Agentic AI systems that overcome LLM limitations through real-time tool-calling.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <span className="text-pink-400 font-semibold">eager to learn and grow</span> in the industry, contributing my 
              technical skills while gaining hands-on experience with production AI systems. Whether it's fine-tuning models, 
              building RAG pipelines, or deploying scalable ML solutions—I'm ready to tackle challenges and create impact through AI.
            </p>

            {/* Personal Story */}
            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4">The Story</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                My passion for technology started with a simple question: <span className="text-purple-400 font-semibold">How does this work?</span> That curiosity has driven every step of my journey. I've learned that building AI isn't just about code—it's about solving real problems and creating impact. Every project teaches me something new, and I'm constantly pushing myself to go deeper. My mission is simple: <span className="text-pink-400 font-semibold">build intelligent systems that matter</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex items-center mb-4">
                  {idx === 0 && <Code className="w-6 h-6 text-purple-400 mr-2" />}
                  {idx === 1 && <Brain className="w-6 h-6 text-pink-400 mr-2" />}
                  {idx === 2 && <Sparkles className="w-6 h-6 text-blue-400 mr-2" />}
                  {idx === 3 && <Database className="w-6 h-6 text-green-400 mr-2" />}
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li key={i} className="text-gray-300 flex items-center text-sm">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Briefcase className="w-10 h-10 mr-3 text-purple-400" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300">{exp.role}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
                <h3 className="text-2xl font-bold mb-3 text-purple-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {project.highlights && (
                  <div className="mb-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-sm text-green-400 mb-1">
                        <span className="mr-2">✓</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
            <Award className="w-8 h-8 mr-3 text-purple-400" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 p-4 rounded-lg border border-purple-500/20 flex items-center">
                <Award className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm actively seeking opportunities to contribute, learn, and grow in the AI/ML industry. Let's build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:zc19398@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-zain-9710692b4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-500/20 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/30 transition-all flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/Zainch032"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-500/20 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/30 transition-all flex items-center justify-center"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 text-center text-gray-400">
        <p>© 2026 Muhammad Zain • Data Scientist & ML Engineer • Built with passion for AI</p>
      </footer>
    </div>
  );
}
