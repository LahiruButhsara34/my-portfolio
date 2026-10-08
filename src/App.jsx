import React from 'react';
import './App.css';

function App() {
  const profileData = {
    name: "Don Lahiru Buthsara Wijesekara",
    title: "CS & Mathematics Graduate | Aspiring Machine Learning, Data Science & Analytics Professional",
    location: "Panadura, Sri Lanka",
    phone: "+94 702359796",
    email: "lahirubuthsarawijesekara@gmail.com",
    linkedin: "https://linkedin.com/in/lahirubuthsara34",
    github: "https://github.com/LahiruButhsara34",
    summary: "Highly motivated Computer Science and Mathematics graduate from the University of Sri Jayewardenepura. Strong technical background in Machine Learning, Deep Learning (LSTM, CNN, FFNN), Data Analytics, and Business Intelligence. Passionate about applying mathematical optimization, algorithmic problem-solving, and data-driven insights to build actionable AI solutions and business analytics applications.",
    skills: {
      ml_ai: [
        "TensorFlow", "Keras", "CNN", "Deep LSTM", "FFNN", 
        "Scikit-Learn", "Random Forest", "Feature Engineering", "Hyperparameter Tuning"
      ],
      analytics: [
        "Python (Pandas, NumPy, Matplotlib)", "Power BI", "SQL", 
        "MySQL", "Exploratory Data Analysis (EDA)", "MS Excel"
      ],
      tools: [
        "OpenCV", "Flask", "React.js", "REST APIs", 
        "Git", "GitHub", "Docker", "Jupyter Notebook"
      ]
    },
    projects: [
      {
        title: "ETH/SOL Cryptocurrency Price Predictor (Deep LSTM)",
        tech: "Python, Flask, TensorFlow/Keras, LSTM, yfinance API, Scikit-learn, HTML/CSS",
        desc: "Built an end-to-end web application to forecast crypto prices up to 4 years ahead using a 4-layer funnel Deep LSTM neural network with time-series modeling (90-day look-back window).",
        github: "https://github.com/LahiruButhsara34/ETH-SOL-Price-Predictor"
      },
      {
        title: "Cat & Dog Image Classification (CNN)",
        tech: "Python, OpenCV, TensorFlow/Keras, CNN, Computer Vision",
        desc: "Developed a 3-block CNN architecture with Batch Normalization and Dropout layers for binary image classification. Integrated OpenCV for real-time camera inference with confidence thresholding logic.",
        github: "https://github.com/LahiruButhsara34"
      },
      {
        title: "CardioPulse AI - Heart Disease Risk Predictor",
        tech: "Python, TensorFlow, Keras, Flask, Scikit-Learn",
        desc: "Developed a Feedforward Neural Network (FFNN) model using 7 clinical features to predict heart disease risk levels with loss-based model checkpointing.",
        github: "https://github.com/LahiruButhsara34/CardioPulse-AI"
      },
      {
        title: "Laptop Price Predictor (Machine Learning & Flask)",
        tech: "Python, Scikit-learn, Random Forest Regressor, Flask, Pandas, NumPy",
        desc: "Trained and optimized a Random Forest Regressor using GridSearchCV (R² ≈ 0.79) to predict laptop prices based on technical specifications and deployed as a responsive Flask app.",
        github: "https://github.com/LahiruButhsara34/Laptop-Price-Predictor"
      },
      {
        title: "Customer Shopping Behavior Analytics",
        tech: "Python, SQL, Power BI, Data Analytics",
        desc: "Simulated corporate-grade transactions and wrote SQL queries to extract key findings on customer segments, loyalty, and purchase drivers. Created executive visualization dashboards.",
        github: "https://github.com/LahiruButhsara34/Customer-Shopping-Behavior-Analysis"
      },
      {
        title: "Data Jobs Market Dashboard (Power BI)",
        tech: "Power BI, Business Intelligence, Data Visualization",
        desc: "Built an interactive two-page Power BI dashboard to analyze job market trends, salaries, employment types, and platforms using KPI cards, Treemaps, Line/Scatter plots, and interactive slicers.",
        github: "https://github.com/LahiruButhsara34/PowerBI-Data-Jobs-Dashboard-"
      }
    ],
    education: [
      {
        degree: "B.Sc. in Mathematics, Computer Science & Physics",
        institution: "University of Sri Jayewardenepura",
        period: "2023 - 2026"
      },
      {
        degree: "NVQ Level 4 Information Communication Technology Technician",
        institution: "Lalith Athulathmudali Vocational Training Center",
        period: "2022 - 2023"
      }
    ]
  };

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="hero-header">
        <div className="profile-wrapper">
          <img 
            src="/profile.jpg" 
            alt={profileData.name} 
            className="profile-avatar"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
          />
          <h1>{profileData.name}</h1>
          <p className="hero-tagline">{profileData.title}</p>
          
          <div className="contact-pills">
            <span>📍 {profileData.location}</span>
            <span>📞 {profileData.phone}</span>
            <span>✉️ {profileData.email}</span>
          </div>

          <div className="social-links">
            <a href={profileData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profileData.github} target="_blank" rel="noreferrer">GitHub Profile</a>
          </div>
        </div>
      </header>

      {/* Content Body */}
      <main className="content-body">
        
        {/* About Section */}
        <section className="card-section">
          <h2>About Me</h2>
          <p>{profileData.summary}</p>
        </section>

        {/* Technical Skills Section */}
        <section className="card-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-box">
              <h3>Machine Learning & AI</h3>
              <ul>{profileData.skills.ml_ai.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
            </div>
            <div className="skill-box">
              <h3>Data Analytics & BI</h3>
              <ul>{profileData.skills.analytics.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
            </div>
            <div className="skill-box">
              <h3>Tools & Web Technologies</h3>
              <ul>{profileData.skills.tools.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="card-section">
          <h2>Key Projects</h2>
          <div className="projects-grid">
            {profileData.projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <h3>{proj.title}</h3>
                <span className="tech-badge">{proj.tech}</span>
                <p>{proj.desc}</p>
                {proj.github && (
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link"
                  >
                    View Code on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="card-section">
          <h2>Education</h2>
          {profileData.education.map((edu, idx) => (
            <div key={idx} className="education-item">
              <h3>{edu.degree}</h3>
              <p>{edu.institution} | {edu.period}</p>
            </div>
          ))}
        </section>

      </main>

      {/* Footer */}
      <footer className="footer-bar">
        <p>© 2026 {profileData.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;