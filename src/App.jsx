import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  MapPin,
  Phone,
  Award,
  ArrowUpRight,
  Download,
} from "lucide-react";
import "./index.css"; // Ensure this matches your CSS filename

const PHOTO = "/zain.jpeg";

const featuredProjects = [
  {
    num: "01",
    title: "Bank Customer Churn Predictor",
    subtitle: "Classification | FastAPI",
    description:
      "End-to-end ML project: hypothesis-driven EDA, SMOTE to correct class imbalance, a leak-proof Scikit-learn pipeline, and a 9-model benchmark. Gradient Boosting was selected and served through a FastAPI prediction API with an EDA insights dashboard.",
    highlights: [
      "F1-score improved from 0.50 to 0.70, ROC-AUC 0.87",
      "Churn cliff found at 3+ products (7.6% to 82.7%)",
      "Live real-time prediction API",
    ],
    tech: ["Python", "Scikit-learn", "SMOTE", "FastAPI", "Pandas"],
    github: "https://github.com/Zainch032/bank-churn-predictor",
    live: "https://huggingface.co/spaces/Zainch032/Bank_Churn",
  },
  {
    num: "02",
    title: "AI Jobs Skill Recommender",
    subtitle: "Market Analysis | Recommender System",
    description:
      "Analysis of 1,500+ AI job postings, from raw CSV to a deployed Streamlit app. Pipe-separated skills were converted into 93 binary features, and a cosine-similarity recommender returns required skills, average salary, posting count, and similar roles for any AI job title.",
    highlights: [
      "1,500+ job postings analysed",
      "93 engineered skill features",
      "Seniority level is the strongest salary signal",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Seaborn"],
    github: "https://github.com/Zainch032/Job-skill-recommender",
    live: "https://job-skill-recommender-032.streamlit.app/",
  },
  {
    num: "03",
    title: "Pakistan Prayer Assistant",
    subtitle: "Agentic AI | LLM Tool Calling",
    description:
      "Agentic chatbot built with LangChain and Groq (LLaMA-3.3-70B) using the ReAct pattern. It decides when to call a live API instead of answering from model memory, solving the knowledge-cutoff problem for city-specific prayer times across 100+ Pakistani cities.",
    highlights: [
      "Real-time tool calling with the Aladhan API",
      "English and Urdu queries",
      "Dockerized and deployed on Hugging Face Spaces",
    ],
    tech: ["Python", "LangChain", "Groq", "Flask", "Docker"],
    github: "https://github.com/Zainch032/My-prayer-Bot",
    live: "https://huggingface.co/spaces/Zainch032/My-prayer-Bot",
  },
];

const secondaryProjects = [
  {
    title: "Diet Mind",
    subtitle: "AI Nutrition Coach (Final Year Project)",
    description:
      "Nutrition coach for Pakistani and Indian food. A health profile sets a daily calorie and macro budget, meals are logged by photo or name, and each meal is scored against the remaining budget and health conditions. A chat assistant answers questions from a local food knowledge base.",
    tech: ["React Native", "FastAPI", "PostgreSQL", "YOLO", "Groq"],
    github: "https://github.com/Zainch032/Diet-Mind-FYP",
  },
  {
    title: "SmartPricer",
    subtitle: "Phone Price Predictor",
    description:
      "XGBoost regression model built on 24 features engineered from raw phone specifications (R² = 0.903), deployed with FastAPI and a custom frontend.",
    tech: ["Python", "XGBoost", "FastAPI", "Pandas"],
    github: "https://github.com/Zainch032/SmartPricer",
    live: "https://huggingface.co/spaces/Zainch032/SmartPricer",
  },
  {
    title: "NewsClassify",
    subtitle: "Multi-class News Classification",
    description:
      "NLP pipeline with an EDA dashboard, TF-IDF features, and 10 benchmarked classifiers, served through Flask for real-time news category prediction (90%+ accuracy).",
    tech: ["Python", "NLTK", "TF-IDF", "Scikit-learn", "Flask"],
    github: "https://github.com/Zainch032/News-Classification",
    live: "https://huggingface.co/spaces/Zainch032/News-Classification",
  },
  {
    title: "EduRoute",
    subtitle: "German University Advisor",
    description:
      "A NestJS API sends questions to an n8n agent (Gemini plus university, scholarship, visa, and cost tools) and can email a shortlist through Resend. Swagger docs and Sentry run on live Render deployment.",
    tech: ["NestJS", "n8n", "Gemini", "Resend", "Sentry"],
    github: "https://github.com/Zainch032/german-advisor-nestjs",
    live: "https://german-advisor.onrender.com/api-docs#/",
  },
  {
    title: "CarPredict",
    subtitle: "Car Price Prediction",
    description:
      "Feature-engineering-heavy regression project: missing-value handling, consolidation of high-cardinality categories, and simplified features extracted from complex fields (R² ~ 0.91).",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/Zainch032/ML-Project",
  },
];

const workExperience = [
  {
    role: "AI Automation Intern",
    company: "DaFi Labs (EmpRadar.ai)",
    period: "Jul 2026 - Aug 2026",
    points: [
      "Built and deployed n8n workflows integrating AI agents, LLMs, webhooks, and REST APIs to automate multi-step business processes, with conversation memory for stateful interactions.",
      "Developed a Next.js interface on Vercel connecting Gmail and Google Sheets automation pipelines.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Zee Outsourcing Solutions",
    period: "Jun 2026 - Aug 2026",
    points: [
      "Worked on exploratory data analysis and supervised ML modeling with feature engineering and cross-validation.",
      "Used SQL (CTEs, window functions) for data extraction and worked on ETL pipelines in KNIME.",
    ],
  },
  {
    role: "NLP Intern",
    company: "Elevo Pathway",
    period: "Oct 2025 - Nov 2025",
    points: [
      "Built a sentiment analysis pipeline on real customer text data, reaching about 90% classification accuracy with a tuned ML model.",
      "Applied tokenization, stopword removal, lemmatization, and TF-IDF feature extraction; benchmarked classifiers and handled class imbalance.",
    ],
  },
];

const skillsData = {
  "Machine Learning": [
    "Supervised Learning",
    "Unsupervised Learning",
    "Feature Engineering",
    "Model Evaluation",
    "Hyperparameter Tuning",
    "SMOTE",
    "XGBoost",
    "NLP",
  ],
  "Deep Learning & GenAI": [
    "PyTorch",
    "TensorFlow",
    "Neural Networks",
    "LangChain",
    "LangGraph",
    "Prompt Engineering",
    "LLM APIs",
    "Computer Vision",
  ],
  "Data & Languages": [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "JavaScript",
    "C++",
  ],
  "Deployment & Tools": [
    "FastAPI",
    "Flask",
    "REST APIs",
    "Docker",
    "Git / GitHub",
    "Streamlit",
    "Hugging Face Spaces",
    "n8n",
    "AWS",
  ],
};

const certsData = [
  "Google Data Analytics Professional Certificate (2024)",
  "Python Essentials for MLOps",
  "Introduction to Generative AI",
  "Introduction to Neural Networks and PyTorch",
  "Data Science Methodology (Coursera)",
  "Applied Machine Learning with Python",
];

const navLinks = ["About", "Projects", "Experience", "Skills", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(true);
  const [visibleElements, setVisibleElements] = useState({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getFadeProps = (id) => ({
    id,
    "data-animate": true,
    className: `fade-init ${visibleElements[id] ? "fade-in" : ""}`,
  });

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled || menuOpen ? "scrolled" : ""}`}>
        <div className="wrap nav-container">
          <a href="#top" className="brand-logo">
            <span className="brand-icon">Z</span>
            <span>Muhammad Zain</span>
          </a>

          <div className="nav-links">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </div>

          <a href="mailto:zc19398@gmail.com" className="btn btn-primary btn-sm btn-hire-desktop">
            Hire Me
          </a>

          <button
            className="burger-btn"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="mailto:zc19398@gmail.com" className="btn btn-primary btn-sm" style={{ alignSelf: "flex-start" }}>
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* Hero Header */}
      <header id="top" className="hero-section">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="wrap hero-layout">
          <div>
            <div className="status-badge">
              <span className="pulse-dot" /> Open to AI/ML Engineer and Data Scientist roles
            </div>
            <h1 className="hero-title">
              Machine Learning Engineer
              <br />
              &amp; <span className="gradient-text">Data Scientist</span>
            </h1>
            <p className="hero-lead">
              I design, train, and deploy machine learning and LLM-powered systems end to end,
              from data analysis and feature engineering to production APIs that solve real business problems.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="mailto:zc19398@gmail.com" className="btn btn-outline">
                Contact Me
              </a>
              <a href="/Muhammad_Zain_CV.pdf" download className="btn btn-outline">
                <Download size={16} /> Resume
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <b>1.5+</b>
                <span>Years Building ML</span>
              </div>
              <div className="stat-item">
                <b>8</b>
                <span>End-to-End Projects</span>
              </div>
              <div className="stat-item">
                <b>3</b>
                <span>Industry Internships</span>
              </div>
            </div>
          </div>

          <div className="photo-container">
            {photoLoaded ? (
              <img
                src={PHOTO}
                alt="Muhammad Zain"
                className="profile-photo"
                onError={() => setPhotoLoaded(false)}
              />
            ) : (
              <div className="profile-photo profile-fallback">MZ</div>
            )}
          </div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about">
          <div className="wrap about-grid">
            <div {...getFadeProps("about-bio")}>
              <span className="section-label">Profile</span>
              <h2 className="section-title">Engineering intelligence from data</h2>
              <div className="about-text">
                <p>
                  I work across the full machine learning lifecycle: rigorous{" "}
                  <strong>exploratory analysis and feature engineering</strong>, model
                  benchmarking and evaluation, and <strong>deployment as production APIs</strong>.
                  A model is only as strong as the insight behind its features.
                </p>
                <p>
                  My current focus is <strong>LLM and agentic systems</strong>, using LangChain
                  and LangGraph to build tool-calling agents and stateful workflows such as Diet
                  Mind and EduRoute, alongside classical ML work on tabular and text data.
                </p>
              </div>
            </div>

            <div {...getFadeProps("about-details")}>
              <div className="info-card">
                <div className="info-header">DETAILS</div>
                {[
                  ["Name", "Muhammad Zain"],
                  ["Location", "Lahore, Pakistan"],
                  ["Focus", "Machine Learning, NLP, Generative AI"],
                  ["Education", "BS Artificial Intelligence, COMSATS Lahore (2027)"],
                  ["Email", "zc19398@gmail.com"],
                  ["Phone", "+92 336 0453765"],
                ].map(([label, val]) => (
                  <div className="info-row" key={label}>
                    <span className="info-key">{label}</span>
                    <span className="info-value">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="alt-bg">
          <div className="wrap">
            <span className="section-label">Selected Work</span>
            <h2 className="section-title">Featured projects</h2>

            <div className="projects-grid">
              {featuredProjects.map((p) => (
                <article className="project-card" key={p.num}>
                  <div className="card-top">
                    <span className="card-number">{p.num}</span>
                    <div className="card-links">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} repository`}>
                        <Github size={20} />
                      </a>
                      <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live link`}>
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <h3 className="card-title">{p.title}</h3>
                  <div className="card-subtitle">{p.subtitle}</div>
                  <p className="card-description">{p.description}</p>
                  <ul className="highlights-list">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="tech-tags">
                    {p.tech.map((t) => (
                      <span className="tech-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="card-actions">
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                      Live Demo <ArrowUpRight size={14} />
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      <Github size={14} /> Code
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <h3 className="subheading">More projects</h3>
            <div className="projects-grid">
              {secondaryProjects.map((p) => (
                <article className="project-card" key={p.title}>
                  <div className="card-top">
                    <span className="card-number">{p.live ? "Live" : "Code"}</span>
                    <div className="card-links">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} repository`}>
                        <Github size={20} />
                      </a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live link`}>
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="card-title">{p.title}</h3>
                  <div className="card-subtitle">{p.subtitle}</div>
                  <p className="card-description">{p.description}</p>
                  <div className="tech-tags" style={{ paddingBottom: 0 }}>
                    {p.tech.map((t) => (
                      <span className="tech-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <div className="wrap">
            <span className="section-label">Experience</span>
            <h2 className="section-title">Professional experience</h2>
            <div className="timeline">
              {workExperience.map((e) => (
                <div className="timeline-item" key={e.role + e.company}>
                  <div className="job-header">
                    <div>
                      <h3 className="job-role">{e.role}</h3>
                      <div className="job-company">{e.company}</div>
                    </div>
                    <span className="job-period">{e.period}</span>
                  </div>
                  <ul className="job-points">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Toolkit */}
        <section id="skills" className="alt-bg">
          <div className="wrap">
            <span className="section-label">Toolkit</span>
            <h2 className="section-title">Technical skills</h2>
            <div className="skills-grid">
              {Object.entries(skillsData).map(([category, items]) => (
                <div className="skill-category" key={category}>
                  <h3>{category}</h3>
                  <div className="skills-list">
                    {items.map((skill) => (
                      <span className="skill-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="wrap">
            <span className="section-label">Credentials</span>
            <h2 className="section-title">Certifications</h2>
            <div className="certs-grid">
              {certsData.map((cert) => (
                <div className="cert-card" key={cert}>
                  <Award size={20} />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="alt-bg contact-section">
          <div className="wrap">
            <span className="section-label">Contact</span>
            <h2 className="contact-title">
              Let's build reliable
              <br />
              <span className="gradient-text">ML systems</span> together.
            </h2>
            <p className="contact-lead">
              I'm looking for AI/ML Engineer and Data Scientist roles where I can contribute to model
              development, deployment, and LLM-based products.
            </p>
            <div className="contact-actions">
              <a href="mailto:zc19398@gmail.com" className="btn btn-primary">
                <Mail size={16} /> zc19398@gmail.com
              </a>
              <a href="tel:+923360453765" className="btn btn-outline">
                <Phone size={16} /> +92 336 0453765
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-zain-9710692b4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/Zainch032"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <MapPin size={12} style={{ verticalAlign: "-1px", marginRight: 6 }} />
          Lahore, Pakistan &nbsp;|&nbsp; © {new Date().getFullYear()} Muhammad Zain
        </div>
      </footer>
    </div>
  );
}