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
        tech: "Python, Flask, TensorFlow/Keras, LSTM, yfinance API, Scikit-learn",
        desc: "Built an end-to-end web application to forecast crypto prices up to 4 years ahead using a 4-layer funnel Deep LSTM neural network with time-series modeling."
      },
      {
        title: "CardioPulse AI - Heart Disease Risk Predictor",
        tech: "Python, TensorFlow, Keras, Flask, Scikit-Learn",
        desc: "Developed a Feedforward Neural Network (FFNN) model using 7 clinical features to predict heart disease risk levels with loss-based model checkpointing."
      },
      {
        title: "Data Jobs Market Dashboard & Business Analytics",
        tech: "Power BI, SQL, Python, Business Intelligence",
        desc: "Engineered interactive Power BI dashboards to analyze job market trends, salaries, and employment types. Executed SQL queries and Python EDA for customer segmentation and business insights."
      },
      {
        title: "Laptop Price Predictor",
        tech: "Python, Scikit-learn, Random Forest Regressor, Flask, Pandas, NumPy",
        desc: "Trained and optimized a Random Forest Regressor using GridSearchCV (R² ≈ 0.79) to predict laptop prices and deployed as a responsive Flask web app."
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
            <a href={profileData.github} target="_blank" rel="noreferrer">GitHub</a>
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