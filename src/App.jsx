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
      title: 'ChurnPredict',
      subtitle: 'Bank Customer Churn Predictor',
      description: 'End-to-end ML project — deep EDA with crosstabs, boxenplots & pivot tables, SMOTE to fix class imbalance, 5-model benchmark. Improved F1-score from 0.50 → 0.62 (+24%). Deployed via FastAPI with an EDA insights dashboard.',
      tech: ['Python', 'scikit-learn', 'SMOTE', 'FastAPI', 'Pandas', 'HTML/CSS/JS'],
      github: 'https://github.com/Zainch032/bank-churn-predictor',
      highlights: ['F1: 0.50 → 0.62 (+24%)', 'SMOTE + Gradient Boosting', 'Live prediction API'],
      color: '#6366f1',
      num: '01'
    },
    {
      title: 'SmartPricer',
      subtitle: 'Phone Price Predictor',
      description: 'End-to-end ML project with extensive EDA, feature engineering from raw specs, XGBoost model deployed via FastAPI with custom frontend.',
      tech: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/Zainch032/SmartPricer',
      highlights: ['24 engineered features', 'R² = 0.903', 'End-to-end deployment'],
      color: '#6366f1',
      num: '02'
    },
    {
      title: 'Prayer Assistant',
      subtitle: 'Pakistan Agentic AI',
      description: 'Agentic AI using ReAct pattern to overcome LLM knowledge cutoffs with real-time API tool-calling for 100+ Pakistani cities.',
      tech: ['Python', 'LangChain', 'Groq API', 'Flask', 'Aladhan API'],
      github: 'https://github.com/Zainch032/My-prayer-Bot',
      highlights: ['Eliminated hallucinations', 'Real-time tool calling', '3D UI design'],
      color: '#6366f1',
      num: '03'
    },
    {
      title: 'NewsClassify',
      subtitle: 'Multi-Classification System',
      description: 'End-to-end NLP pipeline with EDA dashboard, 10 ML classifiers, Flask deployment for real-time news category prediction.',
      tech: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Flask'],
      github: 'https://github.com/Zainch032/News-Classification-',
      demo: 'https://zainch12.pythonanywhere.com',
      highlights: ['90%+ accuracy', 'Custom NLP pipeline', 'Real-time predictions'],
      color: '#6366f1',
      num: '04'
    },
    {
      title: 'CarPredict',
      subtitle: 'Car Price Prediction ML',
      description: 'Feature engineering-heavy ML project — addressed missing values, consolidated high-cardinality categories, and extracted simplified representations from complex fields to build a clean, optimized feature set.',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Feature Engineering'],
      github: 'https://github.com/Zainch032/ML-Project',
      highlights: ['R² ≈ 0.91', 'Advanced preprocessing', 'High-cardinality handling'],
      color: '#6366f1',
      num: '05'
    }
  ];

  const experience = [{
    role: 'NLP Intern',
    company: 'Elevo Pathway',
    period: 'Oct 2025 – Nov 2025',
    achievements: [
      'Built end-to-end sentiment analysis pipeline on real-world customer text data — achieving ~90% classification accuracy with a tuned ML model',
      'Applied full text preprocessing: tokenization, stopword removal, lemmatization, and TF-IDF feature extraction to transform raw noisy text into model-ready features',
      'Benchmarked multiple classifiers, handled class imbalance in sentiment labels, and followed industry-standard ML workflows for model evaluation and optimization'
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
      fontFamily: "system-ui, -apple-system, sans-serif",
      overflowX: 'hidden'
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #050508; }
        ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 2px; }

        .nav-link {
          color: #888;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link:hover { color: #e8e6f0; }

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
          padding: 2.5rem;
          transition: border-color 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .project-card:hover { border-color: #2a2a4e; transform: translateY(-4px); }

        .skill-tag {
          display: inline-block;
          padding: 0.35rem 0.85rem;
          border: 1px solid #1a1a2e;
          border-radius: 2px;
          font-size: 0.72rem;
          color: #888;
          transition: all 0.2s;
        }
        .skill-tag:hover { border-color: #6366f1; color: #f0eeff; }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.2rem;
          background: #6366f1;
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: 0.2s;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.2rem;
          border: 1px solid #1a1a2e;
          color: #888;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: all 0.2s;
        }
        .btn-outline:hover { border-color: #6366f1; color: #f0eeff; }

        .section-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 1.5rem;
        }

        .cursor { animation: blink 1s step-end infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
      `}</style>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrollY > 50 ? 'rgba(5,5,8,0.98)' : 'transparent',
        borderBottom: scrollY > 50 ? '1px solid #1a1a2e' : '1px solid transparent',
        transition: '0.3s'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 32, height: 32, background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>Z</div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>Muhammad Zain</span>
          </div>
          <div style={{ display: 'flex', gap: '3rem' }}>
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
          </div>
          <a href="mailto:zc19398@gmail.com" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}>Hire Me</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', padding: '0 2rem' }}>
        <div className="grid-bg" />
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', paddingTop: 80 }}>
          <div className="section-label">Available for Roles 2026</div>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.04em' }}>
            Data Scientist &<br />
            <span style={{ color: '#6366f1' }}>ML Engineer</span>
            <span className="cursor">_</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: 1.8, maxWidth: 580, marginBottom: '3.5rem' }}>
            I specialize in end-to-end ML pipelines, Agentic AI systems, and extracting insights from raw data. 7th Semester AI Student at COMSATS Lahore.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View Portfolio <ArrowUpRight size={16} /></a>
            <a href="mailto:zc19398@gmail.com" className="btn-outline">Get in Touch</a>
            
            <div style={{ background: '#0c0c14', border: '1px solid #1a1a2e', padding: '0.8rem 1.4rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <span style={{ fontWeight: 900, fontSize: '1.8rem', color: '#6366f1' }}>10+</span>
              <span style={{ fontSize: '0.65rem', color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.3 }}>
                Projects<br />Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '10rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem' }}>
            <div id="about-l" data-animate className={`fade-up ${visible['about-l'] ? 'visible' : ''}`}>
              <div className="section-label">Profile</div>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2.5rem' }}>Engineering Intelligence</h2>
              <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                Aspiring Data Scientist and ML Engineer pursuing BS in AI. I bridge the gap between raw data and actionable intelligence through robust, production-ready pipelines.
              </p>
              <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                My focus lies in NLP and Generative AI, specifically multi-agent orchestration via LangGraph. I believe in clean code and measurable model performance.
              </p>
              <div style={{ display: 'flex', gap: '3rem' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>3.35</div>
                  <div style={{ fontSize: '0.7rem', color: '#555', textTransform: 'uppercase' }}>CGPA</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>02 Mo</div>
                  <div style={{ fontSize: '0.7rem', color: '#555', textTransform: 'uppercase' }}>Internship</div>
                </div>
              </div>
            </div>
            <div id="about-r" data-animate className={`fade-up ${visible['about-r'] ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div style={{ background: '#0c0c14', border: '1px solid #1a1a2e', padding: '2.5rem' }}>
                <div style={{ color: '#6366f1', fontWeight: 700, fontSize: '0.8rem', marginBottom: '1.5rem' }}>QUICK SPECS</div>
                {[
                  { k: 'Education', v: 'BS Artificial Intelligence' },
                  { k: 'Institution', v: 'COMSATS Lahore' },
                  { k: 'Focus', v: 'NLP, ML, Agentic AI' },
                  { k: 'Location', v: 'Lahore, Pakistan' },
                  { k: 'Contact', v: '+92 336 0453765' }
                ].map((d, i) => (
                  <div key={i} style={{ padding: '1rem 0', borderBottom: i < 4 ? '1px solid #1a1a2e' : 'none', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.8rem', color: '#444', fontWeight: 600 }}>{d.k}</span>
                    <span style={{ fontSize: '0.85rem', color: '#888' }}>{d.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: '10rem 2rem', background: '#080810' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label">Trajectory</div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '5rem' }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="fade-up visible" style={{ borderLeft: '1px solid #6366f1', paddingLeft: '3rem', position: 'relative' }}>
              <div style={{ width: 8, height: 8, background: '#6366f1', position: 'absolute', left: -4, top: 0 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{exp.role}</h3>
                  <div style={{ color: '#6366f1', fontWeight: 700, marginTop: '0.5rem' }}>{exp.company}</div>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#444', fontWeight: 700 }}>{exp.period}</div>
              </div>
              <ul style={{ listStyle: 'none' }}>
                {exp.achievements.map((a, j) => (
                  <li key={j} style={{ color: '#888', marginBottom: '1.2rem', lineHeight: 1.7, display: 'flex', gap: '1rem' }}>
                    <span style={{ color: '#6366f1' }}>—</span> {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: '10rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label">Toolkit</div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '5rem' }}>Competencies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {Object.entries(skills).map(([cat, list], i) => (
              <div key={i}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '1.5rem' }}>{cat}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {list.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: '10rem 2rem', background: '#080810' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label">Works</div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '5rem' }}>Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 900, color: p.color }}>{p.num}</span>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={p.github} style={{ color: '#444' }}><Github size={18} /></a>
                    {p.demo && <a href={p.demo} style={{ color: '#444' }}><ExternalLink size={18} /></a>}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{p.title}</h3>
                <div style={{ fontSize: '0.75rem', color: p.color, fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase' }}>{p.subtitle}</div>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {p.tech.map(t => <span key={t} style={{ fontSize: '0.65rem', color: '#444', border: '1px solid #1a1a2e', padding: '0.3rem 0.6rem' }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certs */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label">Validation</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '4rem' }}>Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {certifications.map((c, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid #1a1a2e', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Award size={18} style={{ color: '#6366f1' }} />
                <span style={{ fontSize: '0.9rem', color: '#888' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
        <div className="section-label">Connect</div>
        <h2 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.04em' }}>Build with me.</h2>
        <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: 500, margin: '0 auto 4rem' }}>
          Open to Junior AI, Data Science, and ML Engineering roles.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:zc19398@gmail.com" className="btn-primary"><Mail size={16} /> zc19398@gmail.com</a>
          <a href="https://www.linkedin.com/in/muhammad-zain-9710692b4" className="btn-outline"><Linkedin size={16} /> LinkedIn</a>
          <a href="https://github.com/Zainch032" className="btn-outline"><Github size={16} /> GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '5rem 2rem', borderTop: '1px solid #1a1a2e', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: '#333', fontWeight: 700, letterSpacing: '0.2em' }}>
          © 2026 MUHAMMAD ZAIN / DATA SCIENCE & ML
        </p>
      </footer>
    </div>
  );
}