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
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link:hover { color: #e8e6f0; }

        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card {
          background: #0c0c14;
          border: 1px solid #1a1a2e;
          border-radius: 4px;
          padding: 2rem;
          transition: border-color 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .project-card:hover { border-color: #2a2a4e; transform: translateY(-4px); }

        .skill-tag {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          border: 1px solid #2a2a4e;
          border-radius: 4px;
          font-size: 0.75rem;
          color: #888;
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
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 2rem;
          border: 1px solid #2a2a4e;
          color: #888;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s;
        }
        .btn-outline:hover { border-color: #6366f1; color: #a5b4fc; }

        .section-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 1rem;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor { animation: blink 1s step-end infinite; }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid #1a1a2e;
          border-radius: 4px;
        }

        .exp-card {
          border-left: 2px solid #6366f1;
          padding-left: 2rem;
          position: relative;
        }
      `}</style>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrollY > 50 ? 'rgba(5,5,8,0.98)' : 'transparent',
        borderBottom: scrollY > 50 ? '1px solid #1a1a2e' : '1px solid transparent',
        transition: '0.3s'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#6366f1' }}>ZAIN.</div>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
          </div>
          <a href="mailto:zc19398@gmail.com" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}>Hire Me</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', paddingTop: 80 }}>
          <div className="section-label">Available for Roles 2026</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: '#f0eeff' }}>
            Data Scientist &<br />
            <span style={{ color: '#6366f1' }}>Machine Learning</span> Engineer
            <span className="cursor">|</span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: 1.6, maxWidth: 550, marginBottom: '2.5rem' }}>
            AI student at COMSATS Lahore specializing in end-to-end ML pipelines, Agentic AI systems, and extracting insights from raw data.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#projects" className="btn-primary">Explore Work <ArrowUpRight size={16} /></a>
            <a href="mailto:zc19398@gmail.com" className="btn-outline">Contact</a>

            {/* 10+ Projects Badge integrated here */}
            <div style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: 4,
              padding: '0.6rem 1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{ fontWeight: 800, fontSize: '1.5rem', color: '#6366f1' }}>10+</span>
              <span style={{ fontSize: '0.7rem', color: '#aaa', fontWeight: 600, textTransform: 'uppercase' }}>ML & DS Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: '8rem 2rem', background: '#080810' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">Portfolio</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem' }}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {projects.map((p, i) => (
              <div key={i} className="project-card" data-animate id={`proj-${i}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span style={{ color: '#6366f1', fontWeight: 700, fontSize: '0.8rem' }}>{p.num}</span>
                  <a href={p.github} style={{ color: '#555' }}><Github size={18} /></a>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem' }}>{p.subtitle}</p>
                <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {p.tech.map(t => <span key={t} className="skill-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Footer simplified similarly... */}
      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a2e' }}>
        <p style={{ fontSize: '0.85rem', color: '#444' }}>© 2026 MUHAMMAD ZAIN • DATA SCIENTIST</p>
      </footer>
    </div>
  );
}