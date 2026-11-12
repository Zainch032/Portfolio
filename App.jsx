import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import "./style.css";

const motionConfig = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
  stagger: 0.08,
  viewport: { once: true, amount: 0.15 },
};

const revealInitial = { opacity: 0, y: 24 };
const revealVisible = { opacity: 1, y: 0 };

function MotionReveal({ as = "div", children, className, delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : revealInitial}
      whileInView={reduceMotion ? undefined : revealVisible}
      viewport={motionConfig.viewport}
      transition={reduceMotion ? { duration: 0 } : { ...motionConfig, delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) setCount(value);
      return undefined;
    }
    const start = performance.now();
    const frame = (now) => {
      const progress = Math.min(1, (now - start) / (motionConfig.duration * 1000));
      setCount(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) requestAnimationFrame(frame);
    };
    const animationFrame = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, reduceMotion, value]);

  return <span ref={ref}>{String(count).padStart(2, "0")}</span>;
}

const GithubIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const EMAIL = "zc19398@gmail.com";
const GITHUB = "https://github.com/Zainch032";
const LINKEDIN = "https://www.linkedin.com/in/muhammad-zain-9710692b4";
const PHONE = "+92 336 0453765";
const PHOTO = "/profile.jpg";

const featuredProjects = [
  {
    slug: "bank-customer-churn-predictor",
    num: "01",
    title: "Bank Customer Churn Predictor",
    subtitle: "Classification · FastAPI",
    outcome: "A leak-proof churn pipeline that improved F1-score from 0.50 to 0.70.",
    description:
      "End-to-end ML project: hypothesis-driven EDA, SMOTE to correct class imbalance, a leak-proof Scikit-learn pipeline, and a 9-model benchmark. Gradient Boosting was selected and served through a FastAPI prediction API with an EDA insights dashboard.",
    highlights: [
      "F1-score improved from 0.50 to 0.70, ROC-AUC 0.87",
      "Churn cliff found at 3+ products (7.6% to 82.7%)",
      "Live real-time prediction API",
    ],
    tech: ["Python", "Scikit-learn", "SMOTE", "FastAPI", "Pandas"],
    github: "https://github.com/Zainch032/bank-churn-predictor",
    live: "https://zainch032-bank-churn.hf.space",
    metric: "F1 0.70",
    metricLabel: "reported F1-score",
  },
  {
    slug: "ai-jobs-skill-recommender",
    num: "02",
    title: "AI Jobs Skill Recommender",
    subtitle: "Market analysis · Recommender system",
    outcome: "A 93-feature skills recommender built from 1,500+ AI job postings.",
    description:
      "Analysis of 1,500+ AI job postings, from raw CSV to a deployed Streamlit app. Pipe-separated skills were converted into 93 binary features, and a cosine-similarity recommender returns required skills, average salary, posting count, and similar roles for any AI job title.",
    highlights: [
      "1,500+ job postings analysed",
      "93 engineered skill features",
      "Seniority level is the strongest salary signal",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Seaborn"],
    github: "https://github.com/Zainch032/Job-skill-recommender",
    live: "https://job-skill-recommender-hhbxbhg3eshfa0gm.eastasia-01.azurewebsites.net/",
    metric: "1,500+",
    metricLabel: "job postings analysed",
  },
  {
    slug: "pakistan-prayer-assistant",
    num: "03",
    title: "Pakistan Prayer Assistant",
    subtitle: "Agentic AI · LLM tool calling",
    outcome: "A tool-calling assistant that fetches live prayer times across 100+ Pakistani cities.",
    description:
      "Agentic chatbot built with LangChain and Groq (LLaMA-3.3-70B) using the ReAct pattern. It decides when to call a live API instead of answering from model memory, solving the knowledge-cutoff problem for city-specific prayer times across 100+ Pakistani cities.",
    highlights: [
      "Real-time tool calling with the Aladhan API",
      "English and Urdu queries",
      "Dockerized and deployed on Hugging Face Spaces",
    ],
    tech: ["Python", "LangChain", "Groq", "Flask", "Docker"],
    github: "https://github.com/Zainch032/My-prayer-Bot",
    live: "https://zainch032-my-prayer-bot.hf.space",
    metric: "100+",
    metricLabel: "Pakistani cities",
  },
  {
    slug: "diet-mind",
    num: "04",
    title: "Diet Mind",
    subtitle: "AI nutrition coach · Mobile app",
    outcome: "A health-aware mobile app that recommends meals for Pakistani and Indian food preferences.",
    description:
      "Mobile nutrition app for Pakistani and Indian food. A health profile sets a daily calorie and macro budget, meals are logged by photo or name, and a recommendation engine ranks suitable meals and alternatives against the remaining budget, goals, allergies, and health conditions. A chat assistant answers questions from a local food knowledge base.",
    tech: ["React Native", "FastAPI", "PostgreSQL", "YOLO", "Groq"],
    metric: "AI nutrition",
    metricLabel: "personalised mobile app",
  },
];

const secondaryProjects = [
  {
    slug: "smartpricer",
    title: "SmartPricer",
    subtitle: "Phone price predictor",
    outcome: "An XGBoost regression model with a reported R² of 0.903.",
    description:
      "XGBoost regression model built on 24 features engineered from raw phone specifications (R² = 0.903), deployed with FastAPI and a custom frontend.",
    tech: ["Python", "XGBoost", "FastAPI", "Pandas"],
    github: "https://github.com/Zainch032/SmartPricer",
    metric: "R² 0.903",
    metricLabel: "reported score",
  },
  {
    slug: "newsclassify",
    title: "NewsClassify",
    subtitle: "Multi-class news classification",
    outcome: "An NLP benchmark pipeline served through Flask for live category prediction.",
    description:
      "NLP pipeline with an EDA dashboard, TF-IDF features, and 10 benchmarked classifiers, served through Flask for real-time news category prediction (90%+ accuracy).",
    tech: ["Python", "NLTK", "TF-IDF", "Scikit-learn", "Flask"],
    github: "https://github.com/Zainch032/News-Classification",
    live: "https://zainch032-news-classification.hf.space",
    metric: "90%+",
    metricLabel: "reported accuracy",
  },
  {
    slug: "eduroute",
    title: "EduRoute",
    subtitle: "German university advisor",
    outcome: "A NestJS API connecting an n8n agent to university, visa, scholarship, and cost tools.",
    description:
      "A NestJS API sends questions to an n8n agent (Gemini plus university, scholarship, visa, and cost tools) and can email a shortlist through Resend. Swagger docs and Sentry run on live Render deployment.",
    tech: ["NestJS", "n8n", "Gemini", "Resend", "Sentry"],
    github: "https://github.com/Zainch032/german-advisor-nestjs",
    live: "https://german-advisor.onrender.com/api-docs#/",
  },
  {
    slug: "carpredict",
    title: "CarPredict",
    subtitle: "Car price prediction",
    outcome: "A feature-engineering-heavy regression project with a reported R² around 0.91.",
    description:
      "Feature-engineering-heavy regression project: missing-value handling, consolidation of high-cardinality categories, and simplified features extracted from complex fields (R² ~ 0.91).",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/Zainch032/ML-Project",
    metric: "R² ~0.91",
    metricLabel: "reported score",
  },
];

const allProjects = [...featuredProjects, ...secondaryProjects];

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

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const caseStudySections = [
  { id: "problem", label: "Problem" },
  { id: "data", label: "Data" },
  { id: "approach", label: "Approach" },
  { id: "results", label: "Results" },
  { id: "architecture", label: "Architecture" },
  { id: "lessons", label: "Lessons" },
];

const caseStudyDetails = {
  "bank-customer-churn-predictor": {
    problem: "A bank can lose a profitable relationship quietly: a customer stops using the account long before the account is formally closed. The goal was to turn a 10,000-customer book into a ranked retention list that a call centre could actually work, rather than optimising for a misleading accuracy score.",
    facts: [
      ["SOURCE", "Bank Customer Churn · Kaggle"],
      ["SIZE", "10,000 customers · 2,037 exits"],
      ["TARGET", "Exited · 20.4% positive class"],
    ],
    dataNote: "The source data had 0 duplicate rows and 0 missing values. Identifiers (RowNumber, CustomerId, and Surname) were removed so the model could learn customer patterns instead of memorising people. The data was split stratified 80/20; the 2,000-customer test set kept the real churn rate and was never resampled.",
    approach: [
      ["Explore", "Tested every attribute against churn. Age, activity, geography, balance, and product count produced the clearest business signal; credit score, salary, tenure, and card ownership did not become targeting rules."],
      ["Engineer", "Created Zero_Balance, Balance_Salary_Ratio, Products_Bucket, Age_Inactive, and Germany_HighBal from patterns found in EDA. Numeric fields were scaled and categoricals encoded inside a ColumnTransformer."],
      ["Compare", "Benchmarked nine classifiers with SMOTE inside the training pipeline, then tuned XGBoost with SMOTETomek in a 5-fold RandomizedSearchCV. Resampling never touched validation or test rows."],
    ],
    metric: "F1 0.636",
    metricLabel: "held-out test · F1-optimal cutoff",
    results: [
      ["F1-optimal operating point", "64.1% recall · 63.0% precision · threshold 0.545"],
      ["Cost-optimal campaign", "74.7% recall · 52.1% precision · threshold 0.410"],
      ["Capacity-aware contact list", "29.2% of the test set contacted; within the 30% cap"],
      ["Business signal", "Women over 41 with a balance: 51.8% churn in the sharpest pocket"],
    ],
    architecture: ["Raw CSV", "EDA + split", "Feature pipeline", "SMOTETomek + XGBoost", "FastAPI", "Hugging Face"],
    lessons: [
      ["CHALLENGE", "A default 0.5 cutoff would not reflect the cost of a missed churner or the team’s limited call capacity."],
      ["LESSON", "Threshold selection is an operating decision: evaluate recall, precision, workload, and expected cost together."],
      ["NEXT", "Replace the $5,000 missed-value, $10 contact, and 30% save-rate assumptions with measured campaign outcomes and a holdout test."],
    ],
  },
  "ai-jobs-skill-recommender": {
    problem: "The AI job market is noisy: candidates need to know which skills are worth learning, while hiring teams need a grounded view of demand and pay. This project turns raw job postings into an interactive recommender and market analysis tool rather than another static dashboard.",
    facts: [
      ["SOURCE", "AI job postings dataset"],
      ["SIZE", "1,500+ postings · 26 source fields"],
      ["OUTPUT", "93 binary skill features + role profiles"],
    ],
    dataNote: "Skills arrived as pipe-separated text, with inconsistent names such as Cloud (AWS/GCP/Azure), Fine-tuning, and LLM Integration. The pipeline tokenised and exploded the field, selected the top 93 skills, merged naming variants, and wrote a reproducible cleaned_data.csv for analysis and app use.",
    approach: [
      ["Explore", "Compared salary with seniority, demand, growth, company size, industry, and remote-work fields. Seniority and market scarcity were stronger salary signals than remote status."],
      ["Engineer", "Normalised skill names, exploded the skill list, and created one binary feature per selected skill. Job titles became aggregate skill-frequency profiles for the recommender."],
      ["Recommend", "Computed cosine similarity between role profiles. A selected title returns top skills, average salary, posting count, and three similar roles, with a fuzzy fallback for partial title matches."],
    ],
    metric: "93",
    metricLabel: "engineered skill features",
    results: [
      ["Demand signal", "Python appeared in 62.8% of postings; Cloud ranked highest by average salary at about $203k"],
      ["Salary signal", "Senior/lead titles were the strongest salary predictor; Lead ML Engineers peaked at about $310k"],
      ["Market finding", "Remote work showed only 2.7% salary variance across hybrid, remote, and on-site roles"],
      ["Product output", "A role query returns skills, salary, posting count, and similar roles in one Streamlit workflow"],
    ],
    architecture: ["Raw CSV", "Feature engineering", "EDA + profiles", "Cosine similarity", "Streamlit app", "Azure"],
    lessons: [
      ["CHALLENGE", "The most important information was trapped in a single inconsistent text field, so small naming differences could fragment the skill signal."],
      ["LESSON", "A useful recommender needs both a robust representation and a clear fallback when the user’s title is not an exact match."],
      ["NEXT", "Add posting dates, confidence intervals, and geographic controls before treating salary comparisons as market benchmarks."],
    ],
  },
  eduroute: {
    problem: "International applicants often have to search across disconnected university, scholarship, visa, and cost-of-living sources. EduRoute gives Pakistani students one conversational entry point while keeping the backend predictable, documented, observable, and easy to extend.",
    facts: [
      ["USERS", "Students researching Germany"],
      ["INPUT", "Chat questions and email requests"],
      ["OUTPUT", "Grounded answers, shortlists, and guidance"],
    ],
    dataNote: "The service is an API layer rather than a model trained on private student data. It validates request DTOs, forwards questions to an n8n AI Agent, and exposes structured integrations for university data, scholarships, costs, German-grade conversion, visa timelines, eligibility, comparison, and live web fallback.",
    approach: [
      ["Boundaries", "Kept AI orchestration in n8n and the application layer in NestJS. This separates prompt/tool iteration from the stable public API and makes each responsibility easier to test and replace."],
      ["Integrate", "Added chat and email modules with class-validator DTOs, Resend delivery, Swagger/OpenAPI documentation, and environment-based configuration for external services."],
      ["Operate", "Added a global Sentry exception filter so unhandled production failures are reported with stack traces instead of disappearing behind a generic API error."],
    ],
    metric: "9",
    metricLabel: "specialised decision tools",
    results: [
      ["User outcome", "One conversation can combine university, scholarship, cost, eligibility, and visa questions"],
      ["Delivery", "Personalised shortlists and scholarship information can be sent directly by email"],
      ["Developer experience", "Every endpoint is documented through live Swagger/OpenAPI docs"],
      ["Reliability", "Unhandled exceptions are captured centrally by Sentry with production context"],
    ],
    architecture: ["Client / Swagger", "NestJS REST API", "n8n AI Agent", "Gemini + tools", "Resend", "Sentry"],
    lessons: [
      ["CHALLENGE", "A conversational interface is only useful when answers can reach the right source or calculator instead of relying on model memory."],
      ["LESSON", "Separating the API contract from workflow orchestration makes an AI product easier to evolve without breaking clients."],
      ["NEXT", "Add authentication, request-level tracing, tool-result citations, and a small evaluation set for common student questions."],
    ],
  },
  carpredict: {
    problem: "Premium car listings contain high-cardinality brands, sparse categories, and inconsistent specifications. CarPredict turns that messy tabular data into a reproducible regression workflow while also explaining what the premium market looks like.",
    facts: [
      ["SOURCE", "Automotive premium-car dataset"],
      ["SCOPE", "Luxury two-door vehicles above $100,000"],
      ["TARGET", "MSRP price prediction"],
    ],
    dataNote: "The project combines a market-focused EDA with a supervised regression pipeline. Categorical fields are consolidated and encoded, numeric features are cleaned and scaled, and the data is split before model evaluation so the reported score measures generalisation on held-out examples.",
    approach: [
      ["Understand", "Profiled premium brands, prices, body styles, doors, engines, and manufacturer attributes to separate market insight from model input."],
      ["Prepare", "Handled missing values, simplified complex fields, consolidated categories, label-encoded categorical values, and applied StandardScaler where distance or linear models needed it."],
      ["Benchmark", "Compared Linear, Ridge, Decision Tree, Random Forest, and K-Nearest Neighbors regressors using R² and error metrics before selecting the strongest model."],
    ],
    metric: "R² ~0.91",
    metricLabel: "reported regression score",
    results: [
      ["Model result", "RandomForestRegressor was reported as the strongest model in the benchmark"],
      ["Error view", "MAE was about $2,500; MSE was about 7.1e+06"],
      ["Market insight", "Ferrari, Lamborghini, Porsche, Aston Martin, and BMW ranked among the premium brands analysed"],
      ["Product value", "The same workflow explains market structure and predicts a new vehicle’s MSRP"],
    ],
    architecture: ["Raw automotive data", "Cleaning + encoding", "Scaled features", "Regressor benchmark", "Evaluation", "Prediction"],
    lessons: [
      ["CHALLENGE", "Price is affected by both obvious numeric specifications and fragmented brand/body-style categories."],
      ["LESSON", "Feature cleanup and a fair model comparison matter more than choosing a complex algorithm first."],
      ["NEXT", "Use cross-validation and a time-aware split, then add prediction intervals so users see uncertainty alongside the point estimate."],
    ],
  },
  smartpricer: {
    problem: "Phone prices depend on a mix of specifications that are difficult to compare consistently. SmartPricer turns raw phone attributes into a model-backed price estimate so users can understand how a device's configuration affects its predicted value.",
    facts: [
      ["PRODUCT", "Phone price prediction app"],
      ["INPUT", "Raw smartphone specifications"],
      ["FEATURES", "24 engineered input features"],
    ],
    dataNote: "The workflow starts with raw phone specifications, cleans the inputs, and engineers 24 features for training and prediction. A held-out evaluation split is used to report model performance before the predictor is exposed through FastAPI.",
    approach: [
      ["Explore", "Profiled phone specifications and the relationship between device attributes and price to identify useful signals and data-quality issues."],
      ["Engineer", "Cleaned the raw specification fields and transformed them into 24 model-ready features for consistent training and inference."],
      ["Predict", "Benchmarked regression approaches and selected XGBoost for the deployed prediction workflow because it produced the strongest reported result."],
    ],
    metric: "R² 0.903",
    metricLabel: "reported regression score",
    results: [
      ["Model result", "XGBoost achieved the reported R² of 0.903"],
      ["Input coverage", "The model uses 24 engineered features from phone specifications"],
      ["Product output", "A user can submit phone attributes and receive a price estimate through the prediction interface"],
    ],
    architecture: ["Phone specs", "Cleaning + features", "XGBoost regressor", "FastAPI", "Frontend"],
    lessons: [
      ["CHALLENGE", "Phone specifications arrive in heterogeneous fields, so the model needs a stable feature representation for both training and user input."],
      ["LESSON", "Feature engineering and a reproducible inference path are as important as selecting the regression algorithm."],
      ["NEXT", "Add prediction intervals and market-date validation so estimates communicate uncertainty and remain aligned with current prices."],
    ],
  },
  "diet-mind": {
    problem: "Most calorie apps are centred on Western packaged food and fixed calorie targets. Diet Mind is a mobile app for Pakistani and Indian meals that turns a food log into an actionable recommendation: keep the meal, adjust it, or choose a better alternative based on the user's remaining budget, goals, allergies, and health conditions.",
    facts: [
      ["PRODUCT", "Expo mobile app + FastAPI backend"],
      ["DOMAIN", "Pakistani and Indian food"],
      ["OUTPUT", "Meal verdicts, ranked alternatives, and nutrition guidance"],
    ],
    dataNote: "Nutrition values combine a curated South Asian food dataset with a cleaned USDA-backed catalogue. Meals are represented with practical portions such as plates, bowls, and pieces. The app stores user profiles, targets, meals, chat, and progress in PostgreSQL so recommendations can use the current daily context instead of a generic calorie limit.",
    approach: [
      ["Personalise", "Calculate BMR with Mifflin–St Jeor, estimate TDEE from activity, adjust calories for the user’s goal, and derive explainable macro and fibre targets."],
      ["Recognise", "Support manual logging and photo analysis through a YOLO food-recognition service. Detected foods map to the same catalogue and portion logic as manual entries."],
      ["Recommend", "Use remaining daily calories and macros plus goals, allergies, and health constraints to score meals as ACCEPT, WARNING, or NOT_RECOMMENDED, then rank practical alternatives and explain why each option fits."],
    ],
    metric: "3",
    metricLabel: "clear meal decision states",
    results: [
      ["Recommendation workflow", "Profile, plan, scan, log, receive a verdict, and compare ranked alternatives in one mobile app"],
      ["Explainability", "Targets come from Mifflin–St Jeor and meal recommendations use the remaining daily budget"],
      ["Personalisation", "Recommendations account for goals, allergies, health conditions, portions, and local food preferences"],
      ["Safety boundary", "The product provides general nutrition information and explicitly does not replace clinical advice"],
      ["Trust feature", "Writes such as logging or deleting a meal require user confirmation in chat"],
    ],
    architecture: ["Expo app", "FastAPI + JWT", "Nutrition engine", "Food + RAG services", "PostgreSQL", "YOLO / Groq"],
    lessons: [
      ["CHALLENGE", "Food recognition, nutrition math, health constraints, and chat all need to agree on one source of truth for portions and targets."],
      ["LESSON", "A helpful health product should make its calculations explainable and keep irreversible actions behind explicit confirmation."],
      ["NEXT", "Validate portion estimates with real users, add clinician-reviewed guidance, and measure recommendation quality with labelled meal outcomes."],
    ],
  },
  "pakistan-prayer-assistant": {
    problem: "Prayer times change daily and vary by city, so a language model should not answer from stale training data. Pakistan Prayer Assistant lets people ask naturally in English or Urdu while forcing time-sensitive answers through a live source.",
    facts: [
      ["USERS", "People asking for daily prayer times"],
      ["COVERAGE", "100+ Pakistani cities"],
      ["SOURCE", "Live Aladhan API"],
    ],
    dataNote: "There is no static prayer-time dataset to memorise. The assistant extracts the requested city and date context, calls the Aladhan API through a tool, and formats the returned schedule into a concise conversational response.",
    approach: [
      ["Detect", "Use the LLM to understand natural-language questions such as a single prayer request or a full daily schedule, including English and Urdu phrasing."],
      ["Retrieve", "Expose the Aladhan API as a callable tool so the model must fetch current city-specific timings instead of guessing from memory."],
      ["Deliver", "Return only the relevant prayer time or complete schedule through a lightweight Flask app packaged in Docker and deployed on Hugging Face Spaces."],
    ],
    metric: "100+",
    metricLabel: "Pakistani cities supported",
    results: [
      ["Accuracy strategy", "Every time-sensitive answer is backed by a live API response"],
      ["User experience", "Supports natural questions, one prayer, or the full daily schedule"],
      ["Reliability", "Tool calling avoids the knowledge-cutoff failure mode of a static LLM answer"],
      ["Deployment", "Dockerised Flask service runs as a live Hugging Face Space"],
    ],
    architecture: ["User question", "LangChain + Groq", "Aladhan tool", "Live timings", "Flask response", "HF Spaces"],
    lessons: [
      ["CHALLENGE", "The hardest part was deciding when the model must stop generating and call an external source."],
      ["LESSON", "Small tool-calling systems are valuable when the tool is authoritative and the cost of a plausible wrong answer is high."],
      ["NEXT", "Add timezone/date validation, API retries with clear errors, and automated tests for city names, Urdu queries, and daylight-saving edge cases."],
    ],
  },
};

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      return savedTheme === "dark" || savedTheme === "system" ? savedTheme : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = () => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = theme === "system" ? (prefersDark ? "dark" : "light") : theme;
    };
    applyTheme();
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Theme still works for the current session when storage is unavailable.
    }
  }, [theme]);

  return [theme, setTheme];
}

function useScrollState(ids) {
  const [activeId, setActiveId] = useState(ids[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -65% 0px", threshold: [0.1, 0.4, 0.8] }
    );
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, [ids]);

  return { activeId, progress };
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const elements = ref.current?.querySelectorAll("[data-reveal]");
    if (!elements?.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useTilt() {
  const handlePointerMove = (event) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--spot-x", `${x}%`);
    card.style.setProperty("--spot-y", `${y}%`);
    card.style.setProperty("--tilt-x", `${(50 - y) / 30}deg`);
    card.style.setProperty("--tilt-y", `${(x - 50) / 30}deg`);
  };
  const reset = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };
  return { onPointerMove: handlePointerMove, onPointerLeave: reset };
}

function ThemeToggle({ theme, setTheme }) {
  const nextTheme = theme === "dark" ? "light" : theme === "light" ? "system" : "dark";
  const label = theme === "system" ? "System theme" : `${theme} theme`;
  return (
    <button className="icon-button" onClick={() => setTheme(nextTheme)} aria-label={`Switch from ${label} to ${nextTheme} theme`} title={`Theme: ${label}`}>
      {theme === "light" ? <Sun size={17} /> : theme === "dark" ? <Moon size={17} /> : <Sparkles size={17} />}
    </button>
  );
}

function CopyEmail({ onCopied }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      onCopied();
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
    <button className="text-button" onClick={copy} aria-label="Copy email address">
      {copied ? <Check size={15} /> : <Clipboard size={15} />}
      {copied ? "Copied" : EMAIL}
    </button>
  );
}

function CompactCopyEmail({ onCopied }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      onCopied();
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <span className="copy-email-control">
      <button className="text-button copy-email-button" onClick={copy} aria-label="Copy email address" title={copied ? "Copied" : "Copy email address"}>
        {copied ? <Check size={15} /> : <Clipboard size={15} />}
      </button>
      <span className={`copy-tooltip ${copied ? "is-visible" : ""}`} role="status" aria-live="polite">Copied</span>
    </span>
  );
}

function Header({ theme, setTheme, onToast }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const home = window.location.pathname === "/";

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!home) return;
      const active = navLinks
        .map((link) => ({ link, element: document.querySelector(link.href) }))
        .filter(({ element }) => element && element.getBoundingClientRect().top <= window.innerHeight * 0.35)
        .pop();
      setActiveSection(active?.link.href || "");
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    if (!home) return () => window.removeEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [home]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="progress-bar" aria-hidden="true" style={{ transform: `scaleX(${Math.min(1, window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight))})` }} />
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Muhammad Zain home">
          <span className="brand-mark">MZ</span>
          <span className="brand-name">Muhammad Zain<span>.</span></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {home ? navLinks.map((link) => <a className={activeSection === link.href ? "is-active" : ""} key={link.href} href={link.href} onClick={handleNavClick}>{link.label}</a>) : <a href="/#projects">Work</a>}
          <a className="nav-cta" href={`mailto:${EMAIL}`}>Let's talk <ArrowUpRight size={14} /></a>
        </nav>
        <div className="header-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button className="menu-toggle icon-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label="Toggle navigation">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {home ? navLinks.map((link) => <a className={activeSection === link.href ? "is-active" : ""} key={link.href} href={link.href} onClick={handleNavClick}>{link.label}</a>) : <a href="/#projects">Work</a>}
          <a href={`mailto:${EMAIL}`}>Let's talk <ArrowUpRight size={14} /></a>
        </nav>
      )}
    </header>
  );
}

function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="ambient-orb ambient-orb-one" />
      <span className="ambient-orb ambient-orb-two" />
      <span className="ambient-grid" />
    </div>
  );
}

function ButtonLink({ href, children, variant = "primary", external = false }) {
  return (
    <a className={`button button-${variant}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {children}
    </a>
  );
}

function ProjectCard({ project, featured = false }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className={`project-card ${featured ? "project-card-featured" : ""}`}
      initial={reduceMotion ? false : revealInitial}
      whileInView={reduceMotion ? undefined : revealVisible}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.005 }}
      viewport={motionConfig.viewport}
      transition={reduceMotion ? { duration: 0 } : motionConfig}
    >
      <div className="project-card-top">
        <span className="project-index">{project.num || "↗"}</span>
        <span className="project-kind">{featured ? "Featured build" : "Project"}</span>
      </div>
      <div className="project-card-content">
        <p className="eyebrow">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p className="project-outcome">{project.outcome}</p>
        <p className="project-description">{project.description}</p>
        <div className="tag-row">{project.tech.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      </div>
      <div className="project-card-footer">
        <a className="case-link" href={`/projects/${project.slug}/`}>View case study <ArrowUpRight size={15} /></a>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}><GithubIcon /></a>
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}><ExternalLink size={17} /></a>}
        </div>
      </div>
    </motion.article>
  );
}

function SectionHeading({ eyebrow, title, copy, action }) {
  return (
    <MotionReveal className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
      {action}
    </MotionReveal>
  );
}

function HomePage({ onToast }) {
  const revealRef = useReveal();
  const reduceMotion = useReducedMotion();
  const ids = useMemo(() => ["projects", "experience", "skills", "contact"], []);
  const { activeId, progress } = useScrollState(ids);
  const [photoLoaded, setPhotoLoaded] = useState(true);
  const [skillFilter, setSkillFilter] = useState("All");
  const skillCategories = ["All", ...Object.keys(skillsData)];

  return (
    <div ref={revealRef} className="page-shell">
      <div className="scroll-progress" aria-hidden="true" style={{ width: `${progress}%` }} />
      <section className="hero" id="top">
        <AmbientBackground />
        <div className="container hero-layout">
          <div className="hero-copy">
            <motion.p className="kicker" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { ...motionConfig, delay: 0 }}>MACHINE LEARNING · DATA SCIENCE · LAHORE, PAKISTAN</motion.p>
            <motion.h1 className="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { ...motionConfig, delay: motionConfig.stagger }}>Machine Learning Engineer <span>&amp; Data Scientist</span></motion.h1>
            <motion.p className="hero-summary" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { ...motionConfig, delay: motionConfig.stagger * 2 }}>I build practical ML and AI systems end to end—from evidence-led data analysis and model evaluation to production APIs and tool-using applications. I’m naturally curious about people and love learning how they think, work, and solve problems. That curiosity shapes the human, useful products I aim to build.</motion.p>
            <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { ...motionConfig, delay: motionConfig.stagger * 3 }}>
              <ButtonLink href="#projects">Explore my work <ArrowDownRight size={16} /></ButtonLink>
              <ButtonLink href={`mailto:${EMAIL}`} variant="secondary">Get in touch <ArrowUpRight size={16} /></ButtonLink>
            </motion.div>
            <motion.div className="hero-meta" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { ...motionConfig, delay: motionConfig.stagger * 4 }}>
              <span><i className="status-dot" /> Open to AI/ML Engineer and Data Scientist roles</span>
              <span className="mono">BS AI · COMSATS Lahore · Graduating Dec 2026</span>
            </motion.div>
          </div>
          <motion.div className="hero-portrait" initial={reduceMotion ? false : { opacity: 0, x: 22 }} animate={reduceMotion ? undefined : { opacity: 1, x: 0 }} transition={reduceMotion ? { duration: 0 } : { ...motionConfig, delay: motionConfig.stagger * 2 }}>
            <div className="portrait-frame">
              {photoLoaded ? <img src={PHOTO} alt="Muhammad Zain" onError={() => setPhotoLoaded(false)} /> : <div className="portrait-fallback">MZ</div>}
              <div className="portrait-caption"><span>Approach</span><strong>Evidence-led. Production-minded.</strong></div>
            </div>
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
          </motion.div>
        </div>
        <div className="container hero-bottom">
          <span className="mono">SCROLL TO EXPLORE</span>
          <span className="hero-line" />
          <span className="mono">01 — 05</span>
        </div>
      </section>

      <main id="main">
        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="Selected work" title="Projects with a point of view." copy="From leak-proof classical ML pipelines to tool-calling agents, these are the systems I have built across the full lifecycle." action={<span className="section-count mono"><CountUp value={featuredProjects.length} /> / FEATURED</span>} />
            <div className="projects-grid featured-grid">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}</div>
            <div className="section-subheading" data-reveal><span className="eyebrow">More experiments</span><span className="mono"><CountUp value={secondaryProjects.length} /> / BUILDS</span></div>
            <div className="projects-grid secondary-grid">{secondaryProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div data-reveal><p className="eyebrow">A little context</p><h2>Engineering intelligence from data.</h2></div>
            <div className="about-copy">
              <p className="about-intro">I turn messy data into reliable machine learning systems, from cleaning and analysis to model improvement and deployment as production APIs. I'm also building LLM applications with RAG and agentic workflows.</p>
              <div className="about-skills">
                {[
                  ["DATA CLEANING & EDA", "Missing values, outliers, leakage checks, feature engineering.", ["pandas", "NumPy", "Matplotlib", "Seaborn"]],
                  ["MODEL BUILDING & IMPROVEMENT", "Benchmarking, cross-validation, tuning, error analysis.", ["Scikit-learn", "XGBoost", "LightGBM"]],
                  ["GENERATIVE AI", "RAG pipelines, embeddings and vector search, tool-calling agents.", ["LangChain", "LangGraph", "RAG", "Vector DB"]],
                  ["DEPLOYMENT", "Model serving through REST APIs.", ["FastAPI", "Docker", "Git"]],
                ].map(([label, description, tools], index) => (
                  <MotionReveal as="article" className="about-skill-block" delay={index * 0.06} key={label}>
                    <span className="mono">{label}</span>
                    <p>{description}</p>
                    <div className="about-skill-chips">{tools.map((tool) => <span className="skill-chip" key={tool}>{tool}</span>)}</div>
                  </MotionReveal>
                ))}
              </div>
              <p className="about-shipped">Shipped in projects like <a href="/projects/diet-mind/">Diet Mind</a> and <a href="/projects/eduroute/">EduRoute</a>.</p>
            </div>
            <div className="about-details" data-reveal>
              <div><span className="mono">BASED IN</span><strong>Lahore, Pakistan</strong></div>
              <div><span className="mono">FOCUS</span><strong>Applied ML · Data Science · RAG &amp; LLM Agents</strong></div>
              <div><span className="mono">EMAIL</span><div className="about-email"><a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL}</a><CompactCopyEmail onCopied={onToast} /></div></div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <SectionHeading eyebrow="Experience" title="Learning by shipping." copy="Internships where analysis, automation, and product delivery met real workflows." />
            <div className="experience-list">{workExperience.map((experience, index) => <MotionReveal as="article" className="experience-row" delay={index * motionConfig.stagger} key={`${experience.role}-${experience.company}`}><span className="experience-index mono">0{index + 1}</span><div className="experience-main"><div className="experience-header"><div><h3>{experience.role}</h3><p>{experience.company}</p></div><span className="mono">{experience.period}</span></div><ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></div></MotionReveal>)}</div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading eyebrow="Technical toolkit" title="Tools for the whole loop." copy="A practical toolkit spanning data, models, interfaces, and deployment." />
            <div className="filter-row" role="tablist" aria-label="Filter skills">{skillCategories.map((category) => <button key={category} className={skillFilter === category ? "filter-button is-active" : "filter-button"} onClick={() => setSkillFilter(category)} role="tab" aria-selected={skillFilter === category}>{category}</button>)}</div>
            <div className="skills-display">{Object.entries(skillsData).filter(([category]) => skillFilter === "All" || category === skillFilter).map(([category, skills], groupIndex) => <MotionReveal className="skill-group" delay={groupIndex * motionConfig.stagger} key={category}><div className="skill-group-title"><Code2 size={17} /><h3>{category}</h3></div><div className="tag-row">{skills.map((skill, skillIndex) => <motion.span className="skill-chip" initial={reduceMotion ? false : { opacity: 0, y: 8 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={motionConfig.viewport} transition={reduceMotion ? { duration: 0 } : { duration: 0.35, delay: skillIndex * 0.03 }} key={skill}>{skill}</motion.span>)}</div></MotionReveal>)}</div>
          </div>
        </section>

        <section className="section credentials-section" id="credentials">
          <div className="container credentials-layout">
            <div><p className="eyebrow">Credentials</p><h2>Always learning.</h2></div>
            <div className="cert-list">{certsData.map((cert) => <div className="cert-item" key={cert}><Award size={17} /><span>{cert}</span></div>)}</div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <AmbientBackground />
          <div className="container contact-layout" data-reveal>
            <p className="eyebrow">Have a problem worth solving?</p>
            <h2>Let's build something <span>useful.</span></h2>
            <p>I'm looking for AI/ML Engineer and Data Scientist roles where I can contribute to model development, deployment, and LLM-based products.</p>
            <div className="contact-actions"><ButtonLink href={`mailto:${EMAIL}`}>Start a conversation <ArrowUpRight size={16} /></ButtonLink><CopyEmail onCopied={onToast} /></div>
            <div className="social-links"><a href={GITHUB} target="_blank" rel="noopener noreferrer"><GithubIcon size={16} /> GitHub</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><LinkedinIcon /> LinkedIn</a><a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">Kaggle <ExternalLink size={14} /></a></div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container"><span>© {new Date().getFullYear()} Muhammad Zain</span><span className="mono">BUILT WITH DATA & CURIOSITY</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div></footer>
      <div className="active-section" aria-hidden="true">{activeId}</div>
    </div>
  );
}

function CaseStudyPage({ project }) {
  const revealRef = useReveal();
  const { activeId, progress } = useScrollState(caseStudySections.map((section) => section.id));
  const index = allProjects.findIndex((item) => item.slug === project.slug);
  const previous = allProjects[(index - 1 + allProjects.length) % allProjects.length];
  const next = allProjects[(index + 1) % allProjects.length];
  const hasResults = project.highlights || project.metric;
  const detail = caseStudyDetails[project.slug];
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={revealRef} className="page-shell case-study-page">
      <div className="scroll-progress" aria-hidden="true" style={{ width: `${progress}%` }} />
      <main id="main">
        <section className="case-hero">
          <AmbientBackground />
          <div className="container">
            <a className="back-link" href="/"><ArrowLeft size={15} /> Back to all work</a>
            <div className="case-hero-grid">
              <div>
                <p className="kicker">CASE STUDY · {String(index + 1).padStart(2, "0")} / {String(allProjects.length).padStart(2, "0")}</p>
                <h1>{project.title}</h1>
                <p className="case-outcome">{project.outcome}</p>
                <div className="tag-row">{project.tech.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                {(project.live || project.github) && <div className="hero-actions">{project.live && <ButtonLink href={project.live} external>Live demo <ExternalLink size={15} /></ButtonLink>}{project.github && <ButtonLink href={project.github} variant="secondary" external>View code <GithubIcon size={15} /></ButtonLink>}</div>}
                {project.live && <p className="hosting-note"><Sparkles size={14} /> Free hosting may take about a minute to wake up.</p>}
              </div>
              <div className="case-stamp"><span className="mono">SYSTEM NOTE</span><strong>{project.subtitle}</strong><span className="stamp-line" /><span className="mono">ML / PRODUCT / DEPLOYMENT</span></div>
            </div>
          </div>
        </section>
        <div className="container case-layout">
          <aside className="case-toc" aria-label="Case study table of contents"><span className="mono">ON THIS PAGE</span>{caseStudySections.map((section) => <button key={section.id} className={activeId === section.id ? "is-active" : ""} onClick={() => scrollTo(section.id)}>{section.label}</button>)}</aside>
          <article className="case-content">
            <CaseSection id="problem" title="Problem & why it matters"><p>{detail?.problem || project.description}</p>{!detail && <p className="todo-note">[TODO] Add the original problem framing, user or business context, and why this project mattered.</p>}</CaseSection>
            <CaseSection id="data" title="Data"><div className="case-facts">{(detail?.facts || [["SOURCE", "[TODO] Dataset source"], ["SIZE", "[TODO] Rows, images, or documents"], ["SIGNAL", "[TODO] Key fields and target"]]).map(([label, value]) => <div key={label}><span className="mono">{label}</span><strong>{value}</strong></div>)}</div><p>{detail?.dataNote || "[TODO] Document provenance, data quality, privacy considerations, and the train/validation/test split."}</p></CaseSection>
            <CaseSection id="approach" title="Approach"><div className="approach-steps">{(detail?.approach || [["Explore", "[TODO] EDA decisions and meaningful patterns."], ["Engineer", "[TODO] Features, preprocessing, and leakage controls."], ["Compare", "[TODO] Models benchmarked and selection rationale."]]).map(([title, copy], stepIndex) => <div key={title}><span>0{stepIndex + 1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></CaseSection>
            <CaseSection id="results" title="Results"><div className="results-highlight">{detail ? <><strong>{detail.metric}</strong><span>{detail.metricLabel}</span></> : project.metric ? <><strong>{project.metric}</strong><span>{project.metricLabel}</span></> : <><strong>[TODO]</strong><span>Metric to be documented</span></>}</div><div className="result-table"><div><span>Reported evidence</span><span>Context</span></div>{(detail?.results || (project.highlights || ["[TODO] Add metric and comparison"]).map((highlight) => [highlight, "Source-reported result"])).map(([highlight, context]) => <div key={highlight}><strong>{highlight}</strong><span>{context || "[TODO] Evaluation split / baseline"}</span></div>)}</div>{!detail && <p className="todo-note">[TODO] Add a reproducible comparison table, chart, and evaluation context. Only the source-reported values above are currently included.</p>}</CaseSection>
            <CaseSection id="architecture" title="Architecture"><div className="architecture-diagram">{(detail?.architecture || ["Data", "Features", "Model / Agent", "API", "UI", "Deploy"]).map((node, nodeIndex) => <React.Fragment key={node}><span>{node}</span>{nodeIndex < (detail?.architecture || ["Data", "Features", "Model / Agent", "API", "UI", "Deploy"]).length - 1 && <ArrowRight />}</React.Fragment>)}</div>{!detail && <p>[TODO] Replace this generic flow with project-specific components, data stores, and service boundaries.</p>}</CaseSection>
            <CaseSection id="lessons" title="Challenges, lessons & next steps"><div className="lesson-grid">{(detail?.lessons || [["CHALLENGE", "[TODO] The hardest implementation constraint."], ["LESSON", "[TODO] What changed in your engineering approach."], ["NEXT", "[TODO] The next measurable improvement."]]).map(([label, copy]) => <div key={label}><span className="mono">{label}</span><p>{copy}</p></div>)}</div></CaseSection>
            <div className="case-nav"><a href={`/projects/${previous.slug}/`}><ArrowLeft size={16} /><span><small>Previous project</small><strong>{previous.title}</strong></span></a><a href={`/projects/${next.slug}/`}><span><small>Next project</small><strong>{next.title}</strong></span><ArrowRight size={16} /></a></div>
          </article>
        </div>
      </main>
    </div>
  );
}

function CaseSection({ id, title, children }) {
  return <MotionReveal as="section" className="case-section" id={id}><p className="eyebrow">{String(caseStudySections.findIndex((section) => section.id === id) + 1).padStart(2, "0")}</p><h2>{title}</h2>{children}</MotionReveal>;
}

function App() {
  const [theme, setTheme] = useTheme();
  const [toast, setToast] = useState("");
  const path = window.location.pathname.replace(/\/+$/, "");
  const projectSlug = path.startsWith("/projects/") ? path.split("/")[2] : null;
  const project = allProjects.find((item) => item.slug === projectSlug);

  useEffect(() => {
    const title = project ? `${project.title} — Muhammad Zain` : "Muhammad Zain — ML Engineer & Data Scientist";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", project ? project.outcome : "Muhammad Zain builds and deploys machine learning, data science, and LLM applications.");
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setToast("");
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project]);

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  };

  return (
    <>
      <Header theme={theme} setTheme={setTheme} onToast={() => showToast("Email copied to clipboard")} />
      {project ? <CaseStudyPage project={project} /> : <HomePage onToast={() => showToast("Email copied to clipboard")} />}
      {toast && <div className="toast" role="status"><Check size={15} /> {toast}</div>}
    </>
  );
}

export default App;
