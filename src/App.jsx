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

const PHOTO = "/zain.jpg"; // save your photo as public/zain.jpg

const featured = [
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

const moreProjects = [
  {
    title: "Diet Mind",
    subtitle: "AI Nutrition Coach (Final Year Project)",
    description:
      "Nutrition coach for Pakistani and Indian food. A health profile sets a daily calorie and macro budget, meals are logged by photo or name, and each meal is scored against the remaining budget and health conditions. A chat assistant answers questions from a local food knowledge base and the user's own logs.",
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
    subtitle: "German University Admission Advisor",
    description:
      "A NestJS API sends questions to an n8n agent (Gemini plus university, scholarship, visa, and cost tools) and can email a shortlist through Resend. Swagger docs and Sentry run on the live Render deployment.",
    tech: ["NestJS", "n8n", "Gemini", "Resend", "Sentry"],
    github: "https://github.com/Zainch032/german-advisor-nestjs",
    live: "https://german-advisor.onrender.com/api-docs#/",
  },
  {
    title: "CarPredict",
    subtitle: "Car Price Prediction",
    description:
      "Feature-engineering-heavy regression project: missing-value handling, consolidation of high-cardinality categories, and simplified features extracted from complex fields (R² of about 0.91).",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/Zainch032/ML-Project",
  },
];

const experience = [
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

const skills = {
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

const certifications = [
  "Google Data Analytics Professional Certificate (2024)",
  "Python Essentials for MLOps",
  "Introduction to Generative AI",
  "Introduction to Neural Networks and PyTorch",
  "Data Science Methodology (Coursera)",
  "Applied Machine Learning with Python",
];

const navItems = ["About", "Projects", "Experience", "Skills", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [photoOk, setPhotoOk] = useState(true);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setVisible((v) => ({ ...v, [e.target.id]: true }));
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const fade = (id) => ({
    id,
    "data-animate": true,
    className: `fade ${visible[id] ? "in" : ""}`,
  });

  return (
    <div className="app">
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        html,body,#root{margin:0;padding:0;width:100%;max-width:none;min-height:100%;background:#07070c;text-align:left}
        body{display:block;overflow-x:hidden}
        :root{
          --bg:#07070c; --bg2:#0b0b14; --card:#0e0e18; --line:#1c1c2e;
          --text:#ecebf5; --muted:#9a9ab0; --dim:#6b6b82; --accent:#6366f1; --accent2:#818cf8;
        }
        .app{min-height:100vh;background:var(--bg);color:var(--text);
          font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;overflow-x:hidden;line-height:1.6}
        a{color:inherit;text-decoration:none}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:var(--bg)}
        ::-webkit-scrollbar-thumb{background:var(--accent);border-radius:2px}
        .wrap{max-width:1180px;margin:0 auto;padding:0 1.5rem}
        section{padding:7rem 0;scroll-margin-top:60px}
        .label{display:block;font-size:.72rem;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:var(--accent2);margin-bottom:.9rem}
        h2.title{font-size:clamp(2rem,4.5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem;line-height:1.15}

        .fade{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}
        .fade.in{opacity:1;transform:none}

        /* nav */
        .nav{position:fixed;top:0;left:0;right:0;z-index:50;transition:.3s;border-bottom:1px solid transparent}
        .nav.s{background:rgba(7,7,12,.88);backdrop-filter:blur(12px);border-bottom-color:var(--line)}
        .nav-in{display:flex;align-items:center;justify-content:space-between;height:68px}
        .brand{display:flex;align-items:center;gap:.7rem;font-weight:800;letter-spacing:-.02em}
        .logo{width:34px;height:34px;border-radius:8px;background:linear-gradient(135deg,var(--accent),#8b5cf6);display:grid;place-items:center;color:#fff;font-weight:900}
        .links{display:flex;gap:2.2rem}
        .nl{font-size:.78rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);transition:.2s}
        .nl:hover{color:var(--text)}
        .burger{display:none;background:none;border:0;color:var(--text);cursor:pointer}
        .mobile{display:none}

        /* buttons */
        .btn{display:inline-flex;align-items:center;gap:.5rem;padding:.8rem 1.6rem;border-radius:8px;font-size:.78rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;transition:.2s;cursor:pointer;border:1px solid transparent}
        .btn-p{background:var(--accent);color:#fff}.btn-p:hover{background:#4f46e5;transform:translateY(-2px)}
        .btn-o{border-color:var(--line);color:var(--muted);background:transparent}.btn-o:hover{border-color:var(--accent);color:var(--text);transform:translateY(-2px)}
        .btn-sm{padding:.55rem 1.1rem;font-size:.7rem}

        /* hero */
        .hero{min-height:100vh;display:flex;align-items:center;position:relative;padding:6.5rem 0 4rem;overflow:hidden}
        .glow{position:absolute;width:560px;height:560px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,.22),transparent 65%);top:-120px;right:-120px;pointer-events:none}
        .grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(99,102,241,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.04) 1px,transparent 1px);background-size:54px 54px;pointer-events:none;
          mask-image:radial-gradient(ellipse at center,#000 30%,transparent 75%);-webkit-mask-image:radial-gradient(ellipse at center,#000 30%,transparent 75%)}
        .hero-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:4rem;align-items:center;position:relative;z-index:1}
        .status{display:inline-flex;align-items:center;gap:.55rem;font-size:.78rem;font-weight:600;color:var(--muted);border:1px solid var(--line);background:var(--card);padding:.4rem .9rem;border-radius:999px;margin-bottom:1.6rem}
        .dot{width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 4px rgba(34,197,94,.18)}
        h1.name{font-size:clamp(2.4rem,6.2vw,4.6rem);font-weight:900;line-height:1.05;letter-spacing:-.045em;margin-bottom:1.4rem}
        .grad{background:linear-gradient(90deg,var(--accent),#a78bfa);-webkit-background-clip:text;background-clip:text;color:transparent}
        .lead{font-size:1.08rem;color:var(--muted);max-width:600px;margin-bottom:2.2rem;line-height:1.8}
        .cta{display:flex;flex-wrap:wrap;gap:.9rem;margin-bottom:2.6rem}
        .stats{display:flex;flex-wrap:wrap;gap:2.5rem}
        .stat b{display:block;font-size:1.9rem;font-weight:900;letter-spacing:-.02em}
        .stat span{font-size:.72rem;color:var(--dim);text-transform:uppercase;letter-spacing:.1em;font-weight:700}
        .photo-wrap{position:relative;justify-self:center;width:min(100%,340px)}
        .photo-wrap::before{content:"";position:absolute;inset:-14px;border-radius:28px;background:linear-gradient(135deg,var(--accent),#8b5cf6 60%,transparent);opacity:.55;filter:blur(22px)}
        .photo{position:relative;width:100%;aspect-ratio:4/5;border-radius:24px;object-fit:cover;object-position:center top;border:1px solid var(--line);background:var(--card);display:block}
        .photo-fallback{display:grid;place-items:center;font-size:5rem;font-weight:900;color:var(--accent2)}

        /* about */
        .about-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:4rem}
        .about p{color:var(--muted);font-size:1.05rem;line-height:1.9;margin-bottom:1.3rem}
        .about p b{color:var(--text);font-weight:600}
        .info{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:2rem}
        .info-t{font-size:.72rem;font-weight:800;letter-spacing:.2em;color:var(--accent2);margin-bottom:1rem}
        .row{display:flex;justify-content:space-between;gap:1rem;padding:.95rem 0;border-bottom:1px solid var(--line)}
        .row:last-child{border:0}
        .row span:first-child{font-size:.72rem;color:var(--dim);font-weight:700;text-transform:uppercase;letter-spacing:.08em;flex-shrink:0}
        .row span:last-child{font-size:.9rem;color:var(--muted);text-align:right}

        /* projects */
        .alt{background:var(--bg2)}
        .feat{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.6rem;margin-bottom:5rem}
        .card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:1.9rem;display:flex;flex-direction:column;transition:.3s}
        .card:hover{border-color:var(--accent);transform:translateY(-5px);box-shadow:0 18px 40px -22px rgba(99,102,241,.45)}
        .card-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.6rem}
        .num{font-size:.8rem;font-weight:900;color:var(--accent2)}
        .icons{display:flex;gap:1rem;color:var(--dim)}
        .icons a{transition:.2s}.icons a:hover{color:var(--accent2)}
        .card h3{font-size:1.4rem;font-weight:800;letter-spacing:-.02em;margin-bottom:.4rem}
        .sub{font-size:.74rem;color:var(--accent2);font-weight:800;text-transform:uppercase;letter-spacing:.06em;margin-bottom:1.1rem}
        .card p{color:var(--muted);font-size:.93rem;line-height:1.7;margin-bottom:1.2rem}
        .hl{list-style:none;margin-bottom:1.3rem}
        .hl li{font-size:.84rem;color:var(--text);opacity:.8;margin-bottom:.35rem;display:flex;gap:.55rem}
        .hl li::before{content:"▸";color:var(--accent2)}
        .tags{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:auto;padding-bottom:1.3rem}
        .tag{font-size:.7rem;color:var(--muted);border:1px solid var(--line);padding:.28rem .65rem;border-radius:6px;font-weight:600;background:var(--bg)}
        .card-cta{display:flex;gap:.7rem;flex-wrap:wrap}
        .more-t{font-size:1.1rem;font-weight:800;margin-bottom:1.6rem;letter-spacing:-.01em}
        .more{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.6rem}
        .more .card h3{font-size:1.2rem}

        /* experience */
        .tl{border-left:1px solid var(--line);padding-left:2.2rem;margin-left:.4rem}
        .job{position:relative;margin-bottom:3.2rem}
        .job:last-child{margin-bottom:0}
        .job::before{content:"";position:absolute;left:calc(-2.2rem - 5px);top:.55rem;width:9px;height:9px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px rgba(99,102,241,.2)}
        .job-h{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:.8rem;margin-bottom:1rem}
        .job h3{font-size:1.4rem;font-weight:800;letter-spacing:-.02em}
        .co{color:var(--accent2);font-weight:700;margin-top:.15rem}
        .per{font-size:.8rem;color:var(--muted);font-weight:700;background:var(--card);padding:.4rem .9rem;border:1px solid var(--line);border-radius:999px}
        .job ul{list-style:none}
        .job li{color:var(--muted);margin-bottom:.8rem;line-height:1.75;display:flex;gap:.9rem}
        .job li::before{content:"";width:6px;height:1px;background:var(--accent2);margin-top:.85rem;flex-shrink:0}

        /* skills */
        .sk{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:2rem}
        .sk h3{font-size:.82rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1.1rem}
        .sk-l{display:flex;flex-wrap:wrap;gap:.55rem}
        .skill{font-size:.78rem;color:var(--muted);border:1px solid var(--line);background:var(--card);padding:.4rem .85rem;border-radius:8px;transition:.2s}
        .skill:hover{border-color:var(--accent);color:var(--text)}

        /* certs */
        .certs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.1rem}
        .cert{display:flex;gap:1rem;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:1.3rem 1.4rem;color:var(--muted);font-size:.92rem}
        .cert svg{color:var(--accent2);flex-shrink:0}

        /* contact */
        .contact{text-align:center}
        .contact h2{font-size:clamp(2.2rem,6vw,4.2rem);font-weight:900;letter-spacing:-.04em;line-height:1.1;margin-bottom:1.5rem}
        .contact p{color:var(--muted);font-size:1.1rem;max-width:560px;margin:0 auto 2.8rem;line-height:1.8}
        .contact-cta{display:flex;flex-wrap:wrap;gap:.9rem;justify-content:center}
        footer{padding:2.5rem 0;border-top:1px solid var(--line);text-align:center;font-size:.76rem;color:var(--dim);font-weight:700;letter-spacing:.18em;text-transform:uppercase}

        /* tablet */
        @media (max-width:1000px){
          .feat,.more,.certs{grid-template-columns:repeat(2,minmax(0,1fr))}
          .sk{grid-template-columns:repeat(2,minmax(0,1fr))}
          .about-grid{grid-template-columns:1fr;gap:2.5rem}
        }
        /* mobile */
        @media (max-width:820px){
          section{padding:5rem 0}
          .links,.nav .btn-hire{display:none}
          .burger{display:block}
          .mobile{display:flex;flex-direction:column;gap:1.1rem;padding:1.2rem 1.5rem 1.6rem;background:rgba(7,7,12,.97);border-bottom:1px solid var(--line)}
          .hero{padding-top:6rem}
          .hero-grid{grid-template-columns:1fr;gap:2.6rem}
          .photo-wrap{order:-1;width:min(70%,250px);justify-self:start}
          .lead{font-size:1rem}
        }
        @media (max-width:640px){
          .feat,.more,.certs,.sk{grid-template-columns:1fr}
          .tl{padding-left:1.5rem}
          .job::before{left:calc(-1.5rem - 5px)}
          .stats{gap:1.6rem}
          .btn{padding:.75rem 1.3rem}
          .row{flex-direction:column;gap:.15rem}
          .row span:last-child{text-align:left}
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled || menuOpen ? "s" : ""}`}>
        <div className="wrap nav-in">
          <a href="#top" className="brand">
            <span className="logo">Z</span>
            <span>Muhammad Zain</span>
          </a>
          <div className="links">
            {navItems.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="nl">
                {n}
              </a>
            ))}
          </div>
          <a href="mailto:zc19398@gmail.com" className="btn btn-p btn-sm btn-hire">
            Hire Me
          </a>
          <button
            className="burger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile">
            {navItems.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="nl"
                onClick={() => setMenuOpen(false)}
              >
                {n}
              </a>
            ))}
            <a href="mailto:zc19398@gmail.com" className="btn btn-p btn-sm" style={{ alignSelf: "flex-start" }}>
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header id="top" className="hero">
        <div className="grid-bg" />
        <div className="glow" />
        <div className="wrap hero-grid">
          <div>
            <div className="status">
              <span className="dot" /> Open to AI/ML Engineer and Data Scientist roles
            </div>
            <h1 className="name">
              Machine Learning Engineer
              <br />
              &amp; <span className="grad">Data Scientist</span>
            </h1>
            <p className="lead">
              I design, train, and deploy machine learning and LLM-powered
              systems end to end, from data analysis and feature engineering to
              production APIs that solve real business problems.
            </p>
            <div className="cta">
              <a href="#projects" className="btn btn-p">
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="mailto:zc19398@gmail.com" className="btn btn-o">
                Contact Me
              </a>
              <a href="/Muhammad_Zain_CV.pdf" download className="btn btn-o">
                <Download size={16} /> Resume
              </a>
            </div>
            <div className="stats">
              <div className="stat">
                <b>1.5+</b>
                <span>Years Building ML</span>
              </div>
              <div className="stat">
                <b>8</b>
                <span>End-to-End Projects</span>
              </div>
              <div className="stat">
                <b>3</b>
                <span>Industry Internships</span>
              </div>
            </div>
          </div>

          <div className="photo-wrap">
            {photoOk ? (
              <img
                src={PHOTO}
                alt="Muhammad Zain"
                className="photo"
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <div className="photo photo-fallback">MZ</div>
            )}
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap about-grid about">
          <div {...fade("about-l")}>
            <span className="label">Profile</span>
            <h2 className="title">Engineering intelligence from data</h2>
            <p>
              I work across the full machine learning lifecycle: rigorous{" "}
              <b>exploratory analysis and feature engineering</b>, model
              benchmarking and evaluation, and <b>deployment as production
              APIs</b>. A model is only as strong as the insight behind its
              features.
            </p>
            <p>
              My current focus is <b>LLM and agentic systems</b>, using
              LangChain and LangGraph to build tool-calling agents and stateful
              workflows such as Diet Mind and EduRoute, alongside classical ML
              work on tabular and text data.
            </p>
          </div>
          <div {...fade("about-r")} style={{ transitionDelay: ".15s" }}>
            <div className="info">
              <div className="info-t">DETAILS</div>
              {[
                ["Name", "Muhammad Zain"],
                ["Location", "Lahore, Pakistan"],
                ["Focus", "Machine Learning, NLP, Generative AI"],
                ["Education", "BS Artificial Intelligence, COMSATS Lahore (2027)"],
                ["Email", "zc19398@gmail.com"],
                ["Phone", "+92 336 0453765"],
              ].map(([k, v]) => (
                <div className="row" key={k}>
                  <span>{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="alt">
        <div className="wrap">
          <span className="label">Selected Work</span>
          <h2 className="title">Featured projects</h2>

          <div className="feat">
            {featured.map((p) => (
              <article className="card" key={p.num}>
                <div className="card-top">
                  <span className="num">{p.num}</span>
                  <div className="icons">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source code`}>
                      <Github size={20} />
                    </a>
                    <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`}>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3>{p.title}</h3>
                <div className="sub">{p.subtitle}</div>
                <p>{p.description}</p>
                <ul className="hl">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="tags">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="card-cta">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-p btn-sm">
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-o btn-sm">
                    <Github size={14} /> Code
                  </a>
                </div>
              </article>
            ))}
          </div>

          <h3 className="more-t">More projects</h3>
          <div className="more">
            {moreProjects.map((p) => (
              <article className="card" key={p.title}>
                <div className="card-top">
                  <span className="num">{p.live ? "Live" : "Code"}</span>
                  <div className="icons">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source code`}>
                      <Github size={20} />
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`}>
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h3>{p.title}</h3>
                <div className="sub">{p.subtitle}</div>
                <p>{p.description}</p>
                <div className="tags" style={{ paddingBottom: 0 }}>
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="wrap">
          <span className="label">Experience</span>
          <h2 className="title">Professional experience</h2>
          <div className="tl">
            {experience.map((e) => (
              <div className="job" key={e.role + e.company}>
                <div className="job-h">
                  <div>
                    <h3>{e.role}</h3>
                    <div className="co">{e.company}</div>
                  </div>
                  <span className="per">{e.period}</span>
                </div>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="alt">
        <div className="wrap">
          <span className="label">Toolkit</span>
          <h2 className="title">Technical skills</h2>
          <div className="sk">
            {Object.entries(skills).map(([cat, list]) => (
              <div key={cat}>
                <h3>{cat}</h3>
                <div className="sk-l">
                  {list.map((s) => (
                    <span className="skill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section>
        <div className="wrap">
          <span className="label">Credentials</span>
          <h2 className="title">Certifications</h2>
          <div className="certs">
            {certifications.map((c) => (
              <div className="cert" key={c}>
                <Award size={20} />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="alt contact">
        <div className="wrap">
          <span className="label">Contact</span>
          <h2>
            Let's build reliable
            <br />
            <span className="grad">ML systems</span> together.
          </h2>
          <p>
            I'm looking for AI/ML Engineer and Data Scientist roles where I can
            contribute to model development, deployment, and LLM-based products.
          </p>
          <div className="contact-cta">
            <a href="mailto:zc19398@gmail.com" className="btn btn-p">
              <Mail size={16} /> zc19398@gmail.com
            </a>
            <a href="tel:+923360453765" className="btn btn-o">
              <Phone size={16} /> +92 336 0453765
            </a>
            <a href="https://www.linkedin.com/in/muhammad-zain-9710692b4" target="_blank" rel="noopener noreferrer" className="btn btn-o">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://github.com/Zainch032" target="_blank" rel="noopener noreferrer" className="btn btn-o">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <MapPin size={12} style={{ verticalAlign: "-1px", marginRight: 6 }} />
          Lahore, Pakistan &nbsp;|&nbsp; © 2026 Muhammad Zain
        </div>
      </footer>
    </div>
  );
}