import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Brain,
  Sparkles,
  Menu,
  X,
  MapPin,
  Phone,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setVisible((v) => ({ ...v, [e.target.id]: true }));
        }),
      { threshold: 0.1 },
    );
    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = {
    Programming: [
      "Python (Expert)",
      "JavaScript",
      "SQL",
      "MySQL",
      "C++",
      "HTML/CSS",
    ],
    "ML & AI": [
      "Machine Learning",
      "NLP",
      "Neural Networks",
      "Feature Engineering",
      "Model Deployment",
      "Deep Learning",
      "Computer Vision",
    ],
    Frameworks: [
      "LangChain",
      "LangGraph",
      "FastAPI",
      "Streamlit",
      "Flask",
      "Express.js",
      "Node.js",
      "React.js",
      "PyTorch",
    ],
    "Tools & Cloud": [
      "Git",
      "GitHub",
      "AWS",
      "VS Code",
      "Scikit-learn",
      "NLTK",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  };

  const projects = [
    {
      title: "ChurnPredict",
      subtitle: "Bank Customer Churn Predictor",
      description:
        "End-to-end ML project — deep EDA with crosstabs, boxenplots & pivot tables, SMOTE to fix class imbalance, 5-model benchmark. Improved F1-score from 0.50 → 0.62 (+24%). Deployed via FastAPI with an EDA insights dashboard.",
      tech: [
        "Python",
        "scikit-learn",
        "SMOTE",
        "FastAPI",
        "Pandas",
        "HTML/CSS/JS",
      ],
      github: "https://github.com/Zainch032/bank-churn-predictor",
      live: "https://independent-comfort-production-279e.up.railway.app",
      highlights: [
        "F1: 0.50 → 0.62 (+24%)",
        "SMOTE + Gradient Boosting",
        "Live prediction API",
      ],
      color: "#6366f1",
      num: "01",
    },
    {
      title: "SmartPricer",
      subtitle: "Phone Price Predictor",
      description:
        "End-to-end ML project with extensive EDA, feature engineering from raw specs, XGBoost model deployed via FastAPI with custom frontend.",
      tech: ["Python", "XGBoost", "FastAPI", "Scikit-learn", "Pandas"],
      github: "https://github.com/Zainch032/SmartPricer",
      highlights: [
        "24 engineered features",
        "R² = 0.903",
        "End-to-end deployment",
      ],
      color: "#6366f1",
      num: "02",
    },
    {
      title: "Prayer Assistant",
      subtitle: "Pakistan Agentic AI",
      description:
        "Agentic AI using ReAct pattern to overcome LLM knowledge cutoffs with real-time API tool-calling for 100+ Pakistani cities.",
      tech: ["Python", "LangChain", "Groq API", "Flask", "Aladhan API"],
      github: "https://github.com/Zainch032/My-prayer-Bot",
      highlights: [
        "Eliminated hallucinations",
        "Real-time tool calling",
        "3D UI design",
      ],
      color: "#6366f1",
      num: "03",
    },
    {
      title: "NewsClassify",
      subtitle: "Multi-Classification System",
      description:
        "End-to-end NLP pipeline with EDA dashboard, 10 ML classifiers, Flask deployment for real-time news category prediction.",
      tech: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "Flask"],
      github: "https://github.com/Zainch032/News-Classification-",
      demo: "https://zainch12.pythonanywhere.com",
      highlights: [
        "90%+ accuracy",
        "Custom NLP pipeline",
        "Real-time predictions",
      ],
      color: "#6366f1",
      num: "04",
    },
    {
      title: "CarPredict",
      subtitle: "Car Price Prediction ML",
      description:
        "Feature engineering-heavy ML project — addressed missing values, consolidated high-cardinality categories, and extracted simplified representations from complex fields to build a clean, optimized feature set.",
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Feature Engineering",
      ],
      github: "https://github.com/Zainch032/ML-Project",
      highlights: [
        "R² ≈ 0.91",
        "Advanced preprocessing",
        "High-cardinality handling",
      ],
      color: "#6366f1",
      num: "05",
    },
  ];

  const experience = [
    {
      role: "NLP Intern",
      company: "Elevo Pathway",
      period: "Oct 2025 – Nov 2025",
      achievements: [
        "Built end-to-end sentiment analysis pipeline on real-world customer text data — achieving ~90% classification accuracy with a tuned ML model",
        "Applied full text preprocessing: tokenization, stopword removal, lemmatization, and TF-IDF feature extraction to transform raw noisy text into model-ready features",
        "Benchmarked multiple classifiers, handled class imbalance in sentiment labels, and followed industry-standard ML workflows for model evaluation and optimization",
        "Collaborated on documentation of technical workflows and model performance metrics for stakeholder review",
      ],
    },
  ];

  const certifications = [
    "Google Data Analytics Professional Certificate (2024)",
    "Python Essentials for MLOps",
    "Introduction to Generative AI",
    "Introduction to Neural Networks and PyTorch",
    "Data Science Methodology - Coursera",
    "Applied Machine Learning with Python",
  ];

  const navItems = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050508",
        color: "#e8e6f0",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
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
          transition: 0.2s;
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
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
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
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .project-card:hover { border-color: #6366f1; transform: translateY(-5px); box-shadow: 0 10px 30px -15px rgba(99,102,241,0.2); }

        .skill-tag {
          display: inline-block;
          padding: 0.4rem 0.9rem;
          border: 1px solid #1a1a2e;
          background: #050508;
          font-size: 0.75rem;
          color: #888;
          transition: 0.2s;
        }
        .skill-tag:hover { border-color: #6366f1; color: #f0eeff; }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 2.2rem;
          background: #6366f1;
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          transition: 0.2s;
        }
        .btn-primary:hover { background: #4f46e5; transform: translateY(-2px); }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 2.2rem;
          border: 1px solid #1a1a2e;
          color: #888;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          transition: 0.2s;
        }
        .btn-outline:hover { border-color: #6366f1; color: #f0eeff; transform: translateY(-2px); }

        .section-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 1.5rem;
          display: block;
        }

        .cursor { animation: blink 1s step-end infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        .exp-dot {
          width: 9px;
          height: 9px;
          background: #6366f1;
          position: absolute;
          left: -5px;
          top: 0;
        }
      `}</style>

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          background: scrollY > 50 ? "rgba(5,5,8,0.95)" : "transparent",
          borderBottom:
            scrollY > 50 ? "1px solid #1a1a2e" : "1px solid transparent",
          transition: "0.3s",
          backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 80,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: 34,
                height: 34,
                background: "#6366f1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                color: "white",
              }}
            >
              Z
            </div>
            <span
              style={{
                fontWeight: 800,
                fontSize: "1.2rem",
                letterSpacing: "-0.02em",
              }}
            >
              Muhammad Zain
            </span>
          </div>
          <div style={{ display: "flex", gap: "3rem" }}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:zc19398@gmail.com"
            className="btn-primary"
            style={{ padding: "0.6rem 1.4rem", fontSize: "0.7rem" }}
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          padding: "0 2rem",
          overflow: "hidden",
        }}
      >
        <div className="grid-pattern" />
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            paddingTop: 80,
            position: "relative",
            zIndex: 1,
          }}
        >
          <span className="section-label">AI Engineering & Data Science</span>
          <h1
            style={{
              fontSize: "clamp(3rem, 10vw, 6.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "2rem",
              letterSpacing: "-0.05em",
            }}
          >
            Data Scientist &<br />
            <span style={{ color: "#6366f1" }}>ML Engineer</span>
            <span className="cursor">_</span>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: "#888",
              lineHeight: 1.8,
              maxWidth: 620,
              marginBottom: "3.5rem",
            }}
          >
            last-semester AI student at COMSATS Lahore. Specializing in
            end-to-end ML pipelines, Agentic AI architectures, and turning raw
            data into actionable business intelligence.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="#projects" className="btn-primary">
              View Portfolio <ArrowUpRight size={18} />
            </a>
            <a href="mailto:zc19398@gmail.com" className="btn-outline">
              Contact Me
            </a>

            <div
              style={{
                background: "#0c0c14",
                border: "1px solid #1a1a2e",
                padding: "0.8rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <span
                style={{ fontWeight: 900, fontSize: "2rem", color: "#6366f1" }}
              >
                10+
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "#555",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  lineHeight: 1.3,
                }}
              >
                ML & DS Projects
                <br />
                Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "12rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "6rem",
            }}
          >
            <div
              id="about-l"
              data-animate
              className={`fade-up ${visible["about-l"] ? "visible" : ""}`}
            >
              <span className="section-label">Profile</span>
              <h2
                style={{
                  fontSize: "3.5rem",
                  fontWeight: 800,
                  marginBottom: "3rem",
                  letterSpacing: "-0.03em",
                }}
              >
                Engineering Intelligence
              </h2>
              <p
                style={{
                  color: "#888",
                  fontSize: "1.15rem",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
              >
                I specialize in the full lifecycle of data, from rigorous
                Exploratory Data Analysis (EDA) and feature engineering to
                deploying production-grade Machine Learning models. I believe
                that a model is only as strong as the data insights that precede
                it.
              </p>
              <p
                style={{
                  color: "#888",
                  fontSize: "1.15rem",
                  lineHeight: 1.9,
                  marginBottom: "3rem",
                }}
              >
                My current focus is on **Agentic AI workflows**, utilizing
                **LangGraph** to build stateful, multi-agent systems like **Diet
                Mind**. By combining deep Data Science foundations with
                iterative agentic logic, I build AI that doesn't just predict,
                but reasons and acts.
              </p>
              <div style={{ display: "flex", gap: "4rem" }}>
                <div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "#f0eeff",
                    }}
                  >
                    3.35
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#555",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      marginTop: "0.5rem",
                    }}
                  >
                    Current CGPA
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "#f0eeff",
                    }}
                  >
                    02 Mo
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#555",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      marginTop: "0.5rem",
                    }}
                  >
                    Remote Internship
                  </div>
                </div>
              </div>
            </div>

            <div
              id="about-r"
              data-animate
              className={`fade-up ${visible["about-r"] ? "visible" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div
                style={{
                  background: "#0c0c14",
                  border: "1px solid #1a1a2e",
                  padding: "3rem",
                }}
              >
                <div
                  style={{
                    color: "#6366f1",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    marginBottom: "2rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  BIO DATA
                </div>
                {[
                  { k: "Full Name", v: "Muhammad Zain" },
                  { k: "Location", v: "Lahore, Pakistan" },
                  { k: "University", v: "COMSATS Lahore" },
                  { k: "Specialization", v: "DS, ML, Agentic AI" },
                  { k: "Contact No", v: "+92 336 0453765" },
                  { k: "Email", v: "zc19398@gmail.com" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1.2rem 0",
                      borderBottom: i < 5 ? "1px solid #1a1a2e" : "none",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "#444",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      {item.k}
                    </span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "#888",
                        textAlign: "right",
                      }}
                    >
                      {item.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        style={{ padding: "12rem 2rem", background: "#080810" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-label">Trajectory</span>
          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              marginBottom: "6rem",
              letterSpacing: "-0.03em",
            }}
          >
            Experience
          </h2>
          {experience.map((exp, i) => (
            <div
              key={i}
              className="fade-up visible"
              style={{
                borderLeft: "1px solid #1a1a2e",
                paddingLeft: "4rem",
                position: "relative",
              }}
            >
              <div className="exp-dot" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "2.5rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "#f0eeff",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      color: "#6366f1",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {exp.company}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#444",
                    fontWeight: 800,
                    background: "#0c0c14",
                    padding: "0.5rem 1rem",
                    border: "1px solid #1a1a2e",
                  }}
                >
                  {exp.period}
                </div>
              </div>
              <ul style={{ listStyle: "none" }}>
                {exp.achievements.map((a, j) => (
                  <li
                    key={j}
                    style={{
                      color: "#888",
                      marginBottom: "1.5rem",
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                      display: "flex",
                      gap: "1.5rem",
                    }}
                  >
                    <span style={{ color: "#6366f1", fontWeight: 900 }}>—</span>{" "}
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "12rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-label">Toolkit</span>
          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              marginBottom: "6rem",
              letterSpacing: "-0.03em",
            }}
          >
            Competencies
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
            }}
          >
            {Object.entries(skills).map(([cat, list], i) => (
              <div key={i}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 900,
                    marginBottom: "2rem",
                    color: "#f0eeff",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {cat}
                </h3>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
                >
                  {list.map((s) => (
                    <span key={s} className="skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        style={{ padding: "12rem 2rem", background: "#080810" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-label">Works</span>
          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              marginBottom: "6rem",
              letterSpacing: "-0.03em",
            }}
          >
            Selected Portfolio
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 900,
                      color: p.color,
                    }}
                  >
                    {p.num}
                  </span>
                  <div style={{ display: "flex", gap: "1.25rem" }}>
                    <a
                      href={p.github}
                      style={{ color: "#444", transition: "0.2s" }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#6366f1")
                      }
                      onMouseOut={(e) => (e.currentTarget.style.color = "#444")}
                    >
                      <Github size={20} />
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        style={{ color: "#444", transition: "0.2s" }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.color = "#6366f1")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.color = "#444")
                        }
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    marginBottom: "0.6rem",
                    color: "#f0eeff",
                  }}
                >
                  {p.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: p.color,
                    fontWeight: 800,
                    marginBottom: "1.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.subtitle}
                </div>
                <p
                  style={{
                    color: "#666",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  {p.description}
                </p>

                <div style={{ marginBottom: "2rem" }}>
                  {p.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      style={{
                        fontSize: "0.85rem",
                        color: "#444",
                        marginBottom: "0.4rem",
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ color: p.color, marginRight: "0.5rem" }}>
                        ▸
                      </span>{" "}
                      {h}
                    </div>
                  ))}
                </div>

                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.7rem",
                        color: "#444",
                        border: "1px solid #1a1a2e",
                        padding: "0.3rem 0.7rem",
                        fontWeight: 700,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: "10rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-label">Validation</span>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Professional Certifications
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {certifications.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: "2rem",
                  border: "1px solid #1a1a2e",
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "center",
                  background: "#0c0c14",
                }}
              >
                <Award size={22} style={{ color: "#6366f1", flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "0.95rem",
                    color: "#888",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "12rem 2rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        <span className="section-label">Get In Touch</span>
        <h2
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 900,
            marginBottom: "2.5rem",
            letterSpacing: "-0.05em",
            lineHeight: 1.1,
          }}
        >
          Let's build the
          <br />
          <span style={{ color: "#6366f1" }}>future of AI</span> together.
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "1.2rem",
            marginBottom: "4.5rem",
            maxWidth: 550,
            margin: "0 auto 4.5rem",
            lineHeight: 1.8,
          }}
        >
          I am actively seeking Junior AI Engineering and Data Science
          opportunities where I can apply my skills in NLP and end-to-end ML
          pipelines.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="mailto:zc19398@gmail.com" className="btn-primary">
            <Mail size={18} /> zc19398@gmail.com
          </a>
          <a href="tel:+923360453765" className="btn-outline">
            <Phone size={18} /> +923360453765
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-zain-9710692b4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/Zainch032"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "6rem 2rem",
          borderTop: "1px solid #1a1a2e",
          textAlign: "center",
          background: "#050508",
        }}
      >
        <div style={{ marginBottom: "2rem", opacity: 0.5 }}>
          <div
            style={{ fontWeight: 900, fontSize: "1.5rem", color: "#6366f1" }}
          >
            ZAIN.
          </div>
        </div>
        <p
          style={{
            fontSize: "0.85rem",
            color: "#333",
            fontWeight: 800,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          © 2026 MUHAMMAD ZAIN / AI ENGINEER & DATA SCIENTIST
        </p>
      </footer>
    </div>
  );
}
