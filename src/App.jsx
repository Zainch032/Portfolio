import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, Sparkles, Menu, X, MapPin, Phone, Award, Briefcase, GraduationCap, ChevronDown, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true }));
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = {
    'Programming': ['Python (Expert)', 'JavaScript', 'SQL', 'MySQL'],
    'ML & AI': ['Machine Learning', 'NLP', 'Neural Networks', 'Feature Engineering', 'Model Deployment'],
    'Frameworks': ['LangChain', 'LangGraph', 'FastAPI', 'Streamlit', 'Flask', 'Express.js', 'Node.js'],
    'Tools & Cloud': ['Git', 'GitHub', 'AWS', 'VS Code', 'Scikit-learn', 'NLTK', 'Pandas', 'NumPy']
  };

  const projects = [
    {
      title: 'SmartPricer',
      subtitle: 'Phone Price Predictor',
      description: 'End-to-end ML project with extensive EDA, feature engineering from raw specs, XGBoost model deployed via FastAPI with custom frontend.',
      tech: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/Zainch032/SmartPricer',
      highlights: ['24 engineered features', 'End-to-end deployment', 'PKR price prediction'],
      color: '#6366f1',
      num: '01'
    },
    {
      title: 'Prayer Assistant',
      subtitle: 'Pakistan Agentic AI',
      description: 'Agentic AI using ReAct pattern to overcome LLM knowledge cutoffs with real-time API tool-calling for 100+ Pakistani cities.',
      tech: ['Python', 'LangChain', 'Groq API', 'Flask', 'Aladhan API'],
      github: 'https://github.com/Zainch032/My-prayer-Bot',
      highlights: ['Eliminated hallucinations', 'Real-time tool calling', '3D UI design'],
      color: '#8b5cf6',
      num: '02'
    },
    {
      title: 'NewsClassify',
      subtitle: 'Multi-Classification System',
      description: 'End-to-end NLP pipeline with EDA dashboard, 10 ML classifiers, Flask deployment for real-time news category prediction.',
      tech: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Flask'],
      github: 'https://github.com/Zainch032/News-Classification-',
      demo: 'https://zainch12.pythonanywhere.com',
      highlights: ['90%+ accuracy', 'Custom NLP pipeline', 'Real-time predictions'],
      color: '#a855f7',
      num: '03'
    },
    {
      title: 'CarPredict',
      subtitle: 'Price Prediction ML',
      description: 'Feature preprocessing workflow with advanced engineering techniques and noise reduction achieving high prediction accuracy.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering'],
      github: 'https://github.com/Zainch032/ML-Project',
      highlights: ['R² ≈ 0.91', 'Advanced preprocessing', 'Noise reduction'],
      color: '#c026d3',
      num: '04'
    }
  ];

  const experience = [{
    role: 'NLP Intern',
    company: 'Elevo Pathway',
    period: 'Oct 2025 – Nov 2025',
    achievements: [
      'Built end-to-end NLP models achieving ~90% accuracy on real-world datasets',
      'Applied advanced preprocessing: tokenization, stopword removal, lemmatization, TF-IDF',
      'Gained industry-standard ML workflow experience handling noisy text data'
    ]
  }];

  const certifications = [
    'Google Data Analytics Professional Certificate (2024)',
    'Python Essentials for MLOps',
    'Introduction to Generative AI',
    'Introduction to Neural Networks and PyTorch'
  ];

  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#050508',
      color: '#e8e6f0',
      fontFamily: "'DM Sans', system-ui, sans-serif",
      overflowX: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #050508; }
        ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 2px; }

        .nav-link {
          color: #888;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link:hover { color: #e8e6f0; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 1px;
          background: #6366f1;
          transition: width 0.3s;
        }
        .nav-link:hover::after { width: 100%; }

        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card {
          background: #0c0c14;
          border: 1px solid #1a1a2e;
          border-radius: 2px;
          padding: 2rem;
          transition: border-color 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 0;
          transition: height 0.4s ease;
        }
        .project-card:hover { border-color: #2a2a4e; transform: translateY(-4px); }
        .project-card:hover::before { height: 100%; }

        .skill-tag {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border: 1px solid #2a2a4e;
          border-radius: 1px;
          font-size: 0.72rem;
          font-family: 'DM Mono', monospace;
          color: #888;
          letter-spacing: 0.05em;
          transition: all 0.2s;
        }
        .skill-tag:hover { border-color: #6366f1; color: #a5b4fc; }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 2rem;
          background: #6366f1;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 1px;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-primary:hover { background: #4f46e5; transform: translateY(-1px); }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 2rem;
          border: 1px solid #2a2a4e;
          color: #888;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 1px;
          transition: all 0.2s;
        }
        .btn-outline:hover { border-color: #6366f1; color: #a5b4fc; transform: translateY(-1px); }

        .highlight-dot {
          width: 6px; height: 6px;
          background: #6366f1;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 1rem;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float { animation: float 6s ease-in-out infinite; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor { animation: blink 1s step-end infinite; }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          border: 1px solid #1a1a2e;
          border-radius: 1px;
          transition: border-color 0.2s;
        }
        .cert-item:hover { border-color: #2a2a4e; }

        .exp-card {
          border-left: 2px solid #6366f1;
          padding-left: 2rem;
          position: relative;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          left: -5px; top: 0;
          width: 8px; height: 8px;
          background: #6366f1;
          border-radius: 50%;
        }
      `}</style>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrollY > 50 ? 'rgba(5,5,8,0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(12px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid #1a1a2e' : '1px solid transparent',
        transition: 'all 0.3s'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 32, height: 32, background: '#6366f1', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.9rem' }}>Z</span>
            </div>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.02em' }}>Muhammad Zain</span>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem' }} className="hidden-mobile">
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
          </div>
          <a href="mailto:zc19398@gmail.com" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.72rem' }}>
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0 2rem' }}>
        <div className="grid-bg" />
        <div className="glow" style={{ width: 500, height: 500, background: 'rgba(99,102,241,0.08)', top: -100, right: -100 }} />
        <div className="glow" style={{ width: 300, height: 300, background: 'rgba(168,85,247,0.06)', bottom: 100, left: -50 }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', paddingTop: 80 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>
                Available for opportunities
                <span style={{ display: 'inline-block', width: 6, height: 6, background: '#22c55e', borderRadius: '50%', marginLeft: 8, verticalAlign: 'middle' }} />
              </div>
              
              <h1 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
                color: '#f0eeff'
              }}>
                Data<br />
                <span style={{ color: '#6366f1' }}>Scientist</span><br />
                & ML Eng.
                <span className="cursor" style={{ color: '#6366f1', marginLeft: 4 }}>_</span>
              </h1>

              <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: 1.7, maxWidth: 480, marginBottom: '2.5rem' }}>
                Building intelligent systems from raw data to production deployment. 
                Specializing in NLP, MLOps, and actively exploring GenAI — LangGraph & Agentic AI systems at COMSATS University Lahore.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <a href="#projects" className="btn-primary">View Projects <ArrowUpRight size={14} /></a>
                <a href="mailto:zc19398@gmail.com" className="btn-outline">Get in Touch</a>
              </div>

              <div style={{ display: 'flex', gap: '2rem', color: '#555', fontSize: '0.82rem', fontFamily: 'DM Mono, monospace' }}>
                <span>📍 Lahore, PK</span>
                <span>🎓 3.35 CGPA</span>
                <span>💼 NLP Intern</span>
              </div>
            </div>

            <div className="float" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.9 }}>
              {[
                { label: 'Projects', value: '4+' },
                { label: 'ML Models', value: '10+' },
                { label: 'Accuracy', value: '90%+' },
                { label: 'R² Score', value: '0.91' },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: '#0c0c14',
                  border: '1px solid #1a1a2e',
                  borderRadius: 2,
                  padding: '1.25rem 1.75rem',
                  textAlign: 'center',
                  minWidth: 120
                }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: '#6366f1' }}>{stat.value}</div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', color: '#333', animation: 'float 2s ease-in-out infinite' }}>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '8rem 2rem', position: 'relative' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div id="about-left" data-animate className={`fade-up ${visible['about-left'] ? 'visible' : ''}`}>
              <div className="section-label">About Me</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, marginBottom: '2rem', color: '#f0eeff' }}>
                Turning data into<br />
                <span style={{ color: '#6366f1' }}>intelligent systems</span>
              </h2>
              <p style={{ color: '#666', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                I'm an aspiring Data Scientist and ML Engineer pursuing my Bachelor's in Artificial Intelligence at COMSATS University Lahore. My journey into AI began with a simple curiosity — <em style={{ color: '#888' }}>how does this work?</em>
              </p>
              <p style={{ color: '#666', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                I specialize in building <strong style={{ color: '#a5b4fc' }}>end-to-end ML pipelines</strong> — from raw data cleaning and EDA to model training and production deployment. Currently exploring <strong style={{ color: '#a5b4fc' }}>Generative AI</strong>, building Agentic systems with <strong style={{ color: '#a5b4fc' }}>LangGraph</strong> and LangChain, and diving deep into multi-agent orchestration and RAG pipelines.
              </p>
              <p style={{ color: '#666', lineHeight: 1.9 }}>
                Through my internship at Elevo Pathway and personal projects, I've developed a deep appreciation for clean data pipelines, reproducible experiments, and systems that actually work in production.
              </p>
            </div>

            <div id="about-right" data-animate className={`fade-up ${visible['about-right'] ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div style={{ background: '#0c0c14', border: '1px solid #1a1a2e', borderRadius: 2, padding: '2rem' }}>
                <div className="section-label" style={{ marginBottom: '1.5rem' }}>Quick Facts</div>
                {[
                  { label: 'University', value: 'COMSATS Lahore' },
                  { label: 'Degree', value: 'BS Artificial Intelligence' },
                  { label: 'CGPA', value: '3.35 / 4.0' },
                  { label: 'Specialization', value: 'NLP, MLOps & GenAI' },
                  { label: 'Exploring', value: 'LangGraph · Agentic AI · RAG' },
                  { label: 'Experience', value: 'NLP Intern @ Elevo Pathway' },
                  { label: 'Location', value: 'Lahore, Pakistan' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 0', borderBottom: i < 5 ? '1px solid #1a1a2e' : 'none' }}>
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</span>
                    <span style={{ fontSize: '0.88rem', color: '#aaa', textAlign: 'right', maxWidth: '55%' }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                {[
                  { href: 'https://github.com/Zainch032', icon: <Github size={16} />, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/muhammad-zain-9710692b4', icon: <Linkedin size={16} />, label: 'LinkedIn' },
                  { href: 'mailto:zc19398@gmail.com', icon: <Mail size={16} />, label: 'Email' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center', padding: '0.75rem' }}>
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: '8rem 2rem', background: '#080810', position: 'relative' }}>
        <div className="grid-bg" />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">Career</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem', color: '#f0eeff' }}>Experience</h2>

          <div id="exp-card" data-animate className={`fade-up ${visible['exp-card'] ? 'visible' : ''}`}>
            {experience.map((exp, i) => (
              <div key={i} className="exp-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#f0eeff', marginBottom: '0.25rem' }}>{exp.role}</h3>
                    <p style={{ color: '#6366f1', fontFamily: 'DM Mono, monospace', fontSize: '0.82rem' }}>{exp.company}</p>
                  </div>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#555', background: '#0c0c14', border: '1px solid #1a1a2e', padding: '0.375rem 0.875rem', borderRadius: 1 }}>{exp.period}</span>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {exp.achievements.map((a, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'start', gap: '0.875rem', color: '#666', lineHeight: 1.7, fontSize: '0.95rem' }}>
                      <span className="highlight-dot" style={{ marginTop: 8 }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">Expertise</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem', color: '#f0eeff' }}>Technical Skills</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: '#1a1a2e' }}>
            {Object.entries(skills).map(([cat, items], idx) => (
              <div key={idx} id={`skill-${idx}`} data-animate className={`fade-up ${visible[`skill-${idx}`] ? 'visible' : ''}`}
                style={{ background: '#050508', padding: '2rem', transitionDelay: `${idx * 0.1}s` }}>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#6366f1', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>{cat}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: '8rem 2rem', background: '#080810', position: 'relative' }}>
        <div className="grid-bg" />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">Work</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem', color: '#f0eeff' }}>Featured Projects</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {projects.map((p, i) => (
              <div key={i} id={`proj-${i}`} data-animate className={`fade-up project-card ${visible[`proj-${i}`] ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
                onMouseEnter={e => e.currentTarget.querySelector('.proj-bar').style.height = '100%'}
                onMouseLeave={e => e.currentTarget.querySelector('.proj-bar').style.height = '0%'}>
                <div className="proj-bar" style={{ position: 'absolute', top: 0, left: 0, width: 3, height: 0, background: p.color, transition: 'height 0.4s ease' }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: p.color, letterSpacing: '0.1em' }}>{p.num}</span>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: '#555', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#aaa'}
                      onMouseLeave={e => e.currentTarget.style.color = '#555'}>
                      <Github size={16} />
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#555', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#aaa'}
                        onMouseLeave={e => e.currentTarget.style.color = '#555'}>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#f0eeff', marginBottom: '0.25rem' }}>{p.title}</h3>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: p.color, letterSpacing: '0.08em', marginBottom: '1rem' }}>{p.subtitle}</p>
                <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1.5rem' }}>{p.description}</p>

                <div style={{ marginBottom: '1.5rem' }}>
                  {p.highlights.map((h, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#444', fontSize: '0.8rem', marginBottom: '0.375rem', fontFamily: 'DM Mono, monospace' }}>
                      <span style={{ color: p.color }}>✓</span> {h}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {p.tech.map((t, j) => (
                    <span key={j} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#444', border: '1px solid #1a1a2e', padding: '0.2rem 0.5rem', borderRadius: 1 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">Learning</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem', color: '#f0eeff' }}>Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {certifications.map((cert, i) => (
              <div key={i} className="cert-item">
                <Award size={16} style={{ color: '#6366f1', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#888' }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '8rem 2rem', background: '#080810', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" />
        <div className="glow" style={{ width: 400, height: 400, background: 'rgba(99,102,241,0.06)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Contact</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, marginBottom: '1.5rem', color: '#f0eeff' }}>
            Let's build<br /><span style={{ color: '#6366f1' }}>something</span><br />together.
          </h2>
          <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.8, marginBottom: '3rem', maxWidth: 450, margin: '0 auto 3rem' }}>
            I'm actively seeking opportunities in Data Science and ML Engineering. Open to internships, full-time roles, and collaborations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:zc19398@gmail.com" className="btn-primary"><Mail size={14} /> zc19398@gmail.com</a>
            <a href="https://www.linkedin.com/in/muhammad-zain-9710692b4" target="_blank" rel="noopener noreferrer" className="btn-outline"><Linkedin size={14} /> LinkedIn</a>
            <a href="https://github.com/Zainch032" target="_blank" rel="noopener noreferrer" className="btn-outline"><Github size={14} /> GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', borderTop: '1px solid #1a1a2e', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#333' }}>© 2026 Muhammad Zain</span>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#333' }}>Data Scientist & ML Engineer</span>
      </footer>
    </div>
  );
}
