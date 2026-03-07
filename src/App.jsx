import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, ChevronDown, ArrowUpRight, MapPin, Target, Zap } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true }));
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const skills = {
    'Programming': ['Python', 'JavaScript', 'SQL', 'C++'],
    'ML & AI': ['Scikit-learn', 'NLP', 'LangChain', 'LangGraph', 'XGBoost'],
    'Frameworks': ['FastAPI', 'Flask', 'Streamlit', 'React'],
    'Tools': ['Git', 'AWS', 'Docker', 'Pandas', 'Selenium']
  };

  const projects = [
    {
      title: 'ChurnPredict',
      subtitle: 'Bank Analytics',
      description: 'End-to-end ML project handling class imbalance via SMOTE. Improved F1-score by 24% and deployed via FastAPI.',
      tech: ['Python', 'FastAPI', 'SMOTE'],
      github: 'https://github.com/Zainch032/bank-churn-predictor',
      color: '#6366f1'
    },
    {
      title: 'Prayer Assistant',
      subtitle: 'Agentic AI',
      description: 'Built with ReAct pattern to eliminate LLM knowledge cutoffs using real-time API tool-calling.',
      tech: ['LangChain', 'Groq', 'Flask'],
      github: 'https://github.com/Zainch032/My-prayer-Bot',
      color: '#6366f1'
    },
    {
        title: 'SmartPricer',
        subtitle: 'XGBoost Prediction',
        description: 'Phone price predictor with R² = 0.903, featuring 24 engineered features and a FastAPI backend.',
        tech: ['XGBoost', 'FastAPI', 'Pandas'],
        github: 'https://github.com/Zainch032/SmartPricer',
        color: '#6366f1'
    }
  ];

  return (
    <div style={{ background: '#050508', color: '#e8e6f0', fontFamily: "'DM Sans', sans-serif", minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@700;800&family=DM+Mono&display=swap');
        html { scroll-behavior: smooth; }
        .fade-up { opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .nav-link { color: #888; text-decoration: none; font-size: 0.75rem; font-family: 'DM Mono'; text-transform: uppercase; transition: 0.3s; }
        .nav-link:hover { color: #6366f1; }
        .glass-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); transition: 0.3s; }
        .glass-card:hover { border-color: rgba(99,102,241,0.3); background: rgba(255,255,255,0.04); }
        @media (max-width: 768px) { .hide-mobile { display: none; } }
      `}</style>

      {/* Simplified Navigation */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrollY > 20 ? 'rgba(5,5,8,0.8)' : 'transparent',
        backdropFilter: 'blur(10px)',
        borderBottom: scrollY > 20 ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: '0.3s'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.2rem' }}>ZAIN<span style={{color: '#6366f1'}}>.</span></div>
          <div className="hide-mobile" style={{ display: 'flex', gap: '2rem' }}>
            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
          </div>
          <a href="mailto:zc19398@gmail.com" style={{
            background: '#6366f1', color: 'white', padding: '0.5rem 1.2rem', 
            borderRadius: '4px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600
          }}>HIRE ME</a>
        </div>
      </nav>

      {/* Hero Section - Fixed Badge Position */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 2rem', position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#6366f1', marginBottom: '1.5rem' }}>
            <span style={{ width: 40, height: 1, background: '#6366f1' }}></span>
            <span style={{ fontFamily: 'DM Mono', fontSize: '0.8rem', letterSpacing: '2px' }}>AVAILABLE FOR INTERNSHIPS 2026</span>
          </div>
          
          <h1 style={{ fontFamily: 'Syne', fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
            Building <span style={{ color: '#6366f1' }}>Intelligent</span><br />Data Pipelines.
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}>
            <p style={{ maxWidth: 500, color: '#999', lineHeight: 1.7, fontSize: '1.1rem' }}>
              BS AI student at COMSATS specializing in Agentic AI, NLP, and Predictive Modeling. 
              I transform raw data into production-ready ML solutions.
            </p>

            {/* The "10+ Projects" Badge - Properly Integrated */}
            <div style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.2)',
              padding: '1.5rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem'
            }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'Syne', fontWeight: 800, color: '#6366f1' }}>10+</div>
              <div style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', color: '#aaa', lineHeight: 1.4, textTransform: 'uppercase' }}>
                Successful ML<br />Deployments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Simplified View */}
      <section id="projects" style={{ padding: '100px 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Syne', fontSize: '2.5rem', marginBottom: '3rem' }}>Selected Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {projects.map((p, i) => (
              <div key={i} id={`p-${i}`} className="fade-up glass-card" style={{ padding: '2rem', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '8px', background: 'rgba(99,102,241,0.1)', borderRadius: '8px' }}>
                    <Zap size={20} color="#6366f1" />
                  </div>
                  <a href={p.github} style={{ color: '#666' }}><ExternalLink size={20} /></a>
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#6366f1', fontFamily: 'DM Mono', fontSize: '0.75rem', marginBottom: '1rem' }}>{p.subtitle}</p>
                <p style={{ color: '#888', fontSize: '0.95rem', marginBottom: '1.5rem', height: '60px' }}>{p.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ fontSize: '0.7rem', color: '#666', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '4px' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" style={{ padding: '150px 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', background: 'linear-gradient(rgba(99,102,241,0.05), transparent)', padding: '4rem 2rem', borderRadius: '24px', border: '1px solid rgba(99,102,241,0.1)' }}>
          <h2 style={{ fontFamily: 'Syne', fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to innovate?</h2>
          <p style={{ color: '#999', marginBottom: '2.5rem' }}>Currently open to Data Science and AI Engineering roles.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:zc19398@gmail.com" style={{ background: '#6366f1', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Email Me</a>
            <a href="https://linkedin.com/in/muhammad-zain-9710692b4" style={{ border: '1px solid #333', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </section>

      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', color: '#444', fontSize: '0.8rem', fontFamily: 'DM Mono' }}>
        © 2026 MUHAMMAD ZAIN — AI ENGINEER
      </footer>
    </div>
  );
}