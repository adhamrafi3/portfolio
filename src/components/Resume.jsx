import { useRef } from 'react'

export default function Resume() {
  const resumeRef = useRef(null)

  const handleDownload = () => {
    const content = resumeRef.current
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Md. Adham Wahid - Resume</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1a1a1a; padding: 40px 50px; line-height: 1.5; max-width: 800px; margin: 0 auto; }
          h1 { font-size: 26px; margin-bottom: 4px; }
          .subtitle { font-size: 14px; color: #555; margin-bottom: 2px; }
          .contact-line { font-size: 12px; color: #666; margin-bottom: 16px; }
          .contact-line a { color: #0066cc; text-decoration: none; }
          h2 { font-size: 15px; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #0066cc; padding-bottom: 4px; margin: 20px 0 12px; color: #0066cc; }
          h3 { font-size: 14px; margin-bottom: 2px; }
          .row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
          .institution { font-size: 13px; color: #555; font-style: italic; }
          .date { font-size: 12px; color: #666; white-space: nowrap; }
          .gpa { font-size: 12px; color: #333; }
          ul { padding-left: 18px; margin: 4px 0 12px; }
          li { font-size: 13px; margin-bottom: 3px; color: #333; }
          .skills-grid { display: grid; grid-template-columns: 140px 1fr; gap: 4px 12px; font-size: 13px; }
          .skills-label { font-weight: 600; color: #333; }
          .skills-value { color: #555; }
          .section-item { margin-bottom: 14px; }
          p { font-size: 13px; color: #444; }
          @media print { body { padding: 20px 30px; } }
        </style>
      </head>
      <body>
        <h1>Md. Adham Wahid</h1>
        <div class="subtitle">Machine Learning Engineer and Researcher</div>
        <div class="subtitle">Bachelor of Computer Science and Engineering — North South University</div>
        <div class="contact-line">
          📞 +880-1971686649 &nbsp;|&nbsp; ✉ adhamrafi3@gmail.com &nbsp;|&nbsp; <a href="https://github.com/">GitHub</a> &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/md-adham-wahid-2a27922b5">LinkedIn</a>
        </div>

        <h2>Education</h2>
        <div class="section-item">
          <div class="row"><h3>Bachelor of Science in CSE (Artificial Intelligence & Computing)</h3><span class="date">2021–2025</span></div>
          <div class="row"><span class="institution">North South University, Dhaka</span><span class="gpa">CGPA: 3.76</span></div>
        </div>
        <div class="section-item">
          <div class="row"><h3>Higher Secondary Certificate (HSC)</h3><span class="date">2020</span></div>
          <div class="row"><span class="institution">Dhaka College, Dhaka</span><span class="gpa">GPA: 5.00</span></div>
        </div>
        <div class="section-item">
          <div class="row"><h3>Secondary School Certificate (SSC)</h3><span class="date">2018</span></div>
          <div class="row"><span class="institution">Ideal School and College, Dhaka</span><span class="gpa">GPA: 5.00</span></div>
        </div>

        <h2>Experience</h2>
        <div class="section-item">
          <div class="row"><h3>Teaching Assistant — Dept. of Mathematics and Physics</h3><span class="date">Jan 2025 – Present</span></div>
          <div class="institution">North South University, Dhaka</div>
          <ul>
            <li>Assisting faculty with course delivery, student queries, and evaluation support.</li>
            <li>Contributing to enhancing student understanding in large foundational courses.</li>
          </ul>
        </div>
        <div class="section-item">
          <div class="row"><h3>AI Engineer and Researcher — Team Atlas (Robotics)</h3><span class="date">2018 – Present</span></div>
          <ul>
            <li>Led AI, CAD design, piloting, and documentation for Mars Rover projects.</li>
            <li>Champions nationally; represented Bangladesh in ARC (Australia), URC (Egypt), and IRDC (India).</li>
          </ul>
        </div>

        <h2>Projects</h2>
        <div class="section-item">
          <div class="row"><h3>Australian Rover Challenge (ARC) — Mars Rover</h3></div>
          <p>Fastest rover, finalist team representing Bangladesh. 3D design, documentation, piloting, deployment. Tech: SolidWorks, ROS, Embedded C.</p>
        </div>
        <div class="section-item">
          <div class="row"><h3>ADHD Detection and Therapy Chatbot (CSE499)</h3></div>
          <p>ML and LLM-based early ADHD predictor with Dialogflow chatbot. Built classifier and virtual therapy bot using BERT and Streamlit.</p>
        </div>
        <div class="section-item">
          <div class="row"><h3>OpenSetWaste — Waste Detection (CSE498R)</h3></div>
          <p>Open-set waste classification using GCN on Dhaka data. Proposed EfficientGraphNet (GCN + EfficientNetB3) for unseen waste detection.</p>
        </div>
        <div class="section-item">
          <div class="row"><h3>Gym Mental Health Analyzer & Virtual Trainer (CSE445)</h3></div>
          <p>NLP-based gym chatbot with ML-powered wellness prediction.</p>
        </div>
        <div class="section-item">
          <div class="row"><h3>Uterus Fibroid Prediction (CSE299)</h3></div>
          <p>ML model for early risk classification using real-world clinical data.</p>
        </div>
        <div class="section-item">
          <div class="row"><h3>World Robotics Championship — Robo-Race & Line Follower</h3></div>
          <p>Represented Bangladesh; 2nd place nationally. Built autonomous robots using sensors and microcontrollers.</p>
        </div>

        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <span class="skills-label">Languages</span><span class="skills-value">Python, C/C++, Java, JavaScript, HTML/CSS</span>
          <span class="skills-label">ML & Data Science</span><span class="skills-value">Scikit-learn, Pandas, NumPy, PyTorch, TensorFlow, OpenCV</span>
          <span class="skills-label">Web/Software</span><span class="skills-value">ReactJS, Node.js, Firebase, MongoDB, MySQL, ExpressJS, Git</span>
          <span class="skills-label">Tools</span><span class="skills-value">Streamlit, Dialogflow, Postman, Google Colab, Jupyter, GitHub, ROS</span>
          <span class="skills-label">Design</span><span class="skills-value">Canva, Draw.io, AutoCAD, SolidWorks, Overleaf, LaTeX</span>
        </div>

        <h2>Achievements</h2>
        <ul>
          <li>75% Merit Waiver (Undergrad); Scholarships — PEC, JSC, SSC (Talentpool), Manarat</li>
          <li>Co-curricular Finalist — ARC 2024 (Australia), WRC 2022 (India), URC (Egypt), IRDC (India)</li>
          <li>Champions — Technovation 2.0 and multiple national-level competitions</li>
        </ul>

        <script>window.onload = () => { window.print(); }</script>
      </body>
      </html>
    `)
    printWindow.document.close()
  }

  return (
    <section className="section" id="resume">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Professional Profile</span>
          <h2 className="section-title">Resume & CV</h2>
          <p className="section-subtitle">
            A comprehensive overview of my academic and professional journey.
          </p>
        </div>

        <div className="resume-actions reveal">
          <button className="btn btn-primary" onClick={handleDownload}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download Resume (PDF)
          </button>
          <button className="btn btn-outline" onClick={() => {
            const cvWindow = window.open('', '_blank')
            cvWindow.document.write(generateCV())
            cvWindow.document.close()
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
            Download CV (PDF)
          </button>
        </div>

        <div className="resume-preview reveal" ref={resumeRef}>
          {/* Education */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              Education
            </h3>
            <div className="resume-entries">
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <div>
                    <h4>B.Sc. in CSE (Artificial Intelligence & Computing)</h4>
                    <span className="resume-inst">North South University, Dhaka</span>
                  </div>
                  <div className="resume-meta">
                    <span className="resume-date">2021 – 2025</span>
                    <span className="resume-gpa">CGPA: 3.76</span>
                  </div>
                </div>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <div>
                    <h4>Higher Secondary Certificate (HSC)</h4>
                    <span className="resume-inst">Dhaka College, Dhaka</span>
                  </div>
                  <div className="resume-meta">
                    <span className="resume-date">2020</span>
                    <span className="resume-gpa">GPA: 5.00</span>
                  </div>
                </div>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <div>
                    <h4>Secondary School Certificate (SSC)</h4>
                    <span className="resume-inst">Ideal School and College, Dhaka</span>
                  </div>
                  <div className="resume-meta">
                    <span className="resume-date">2018</span>
                    <span className="resume-gpa">GPA: 5.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              Experience
            </h3>
            <div className="resume-entries">
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <div>
                    <h4>Teaching Assistant — Dept. of Mathematics and Physics</h4>
                    <span className="resume-inst">North South University, Dhaka</span>
                  </div>
                  <span className="resume-date">Jan 2025 – Present</span>
                </div>
                <ul className="resume-points">
                  <li>Assisting faculty with course delivery, student queries, and evaluation support.</li>
                  <li>Enhancing student understanding in large foundational courses.</li>
                </ul>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <div>
                    <h4>AI Engineer and Researcher — Team Atlas (Robotics)</h4>
                    <span className="resume-inst">Bangladesh</span>
                  </div>
                  <span className="resume-date">2018 – Present</span>
                </div>
                <ul className="resume-points">
                  <li>Led AI, CAD design, piloting, and documentation for Mars Rover projects.</li>
                  <li>Champions nationally; represented Bangladesh in ARC (Australia), URC (Egypt), IRDC (India).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              Technical Skills
            </h3>
            <div className="resume-skills-compact">
              <div className="resume-skill-row"><strong>Languages:</strong> Python, C/C++, Java, JavaScript, HTML/CSS</div>
              <div className="resume-skill-row"><strong>ML & DS:</strong> Scikit-learn, Pandas, NumPy, PyTorch, TensorFlow, OpenCV, Seaborn</div>
              <div className="resume-skill-row"><strong>Web Dev:</strong> ReactJS, Node.js, Firebase, MongoDB, MySQL, ExpressJS, Git</div>
              <div className="resume-skill-row"><strong>Tools:</strong> Streamlit, Dialogflow, Postman, Google Colab, Jupyter, GitHub, ROS, XAMPP</div>
              <div className="resume-skill-row"><strong>Design:</strong> Canva, Draw.io, AutoCAD (2D/3D), SolidWorks, Overleaf, LaTeX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function generateCV() {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Md. Adham Wahid - Curriculum Vitae</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1a1a1a; padding: 40px 50px; line-height: 1.6; max-width: 800px; margin: 0 auto; }
    h1 { font-size: 28px; margin-bottom: 4px; color: #0a0a1a; }
    .subtitle { font-size: 14px; color: #555; margin-bottom: 2px; }
    .contact-line { font-size: 12px; color: #666; margin-bottom: 20px; }
    .contact-line a { color: #0066cc; text-decoration: none; }
    h2 { font-size: 15px; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #0066cc; padding-bottom: 4px; margin: 24px 0 14px; color: #0066cc; }
    h3 { font-size: 14px; margin-bottom: 2px; }
    .row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
    .institution { font-size: 13px; color: #555; font-style: italic; }
    .date { font-size: 12px; color: #666; white-space: nowrap; }
    ul { padding-left: 18px; margin: 4px 0 14px; }
    li { font-size: 13px; margin-bottom: 4px; color: #333; }
    p { font-size: 13px; color: #444; margin: 4px 0 14px; }
    .skills-grid { display: grid; grid-template-columns: 140px 1fr; gap: 6px 12px; font-size: 13px; }
    .skills-label { font-weight: 600; color: #333; }
    .skills-value { color: #555; }
    .section-item { margin-bottom: 16px; }
    .interests { font-size: 13px; color: #444; }
    @media print { body { padding: 20px 30px; } }
  </style>
</head>
<body>
  <h1>Md. Adham Wahid</h1>
  <div class="subtitle">Machine Learning Engineer and Researcher</div>
  <div class="subtitle">Bachelor of Computer Science and Engineering — North South University</div>
  <div class="contact-line">
    📞 +880-1971686649 &nbsp;|&nbsp; ✉ adhamrafi3@gmail.com &nbsp;|&nbsp; <a href="https://github.com/">GitHub</a> &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/md-adham-wahid-2a27922b5">LinkedIn</a>
  </div>

  <h2>Objective</h2>
  <p>Passionate Machine Learning Engineer and Researcher seeking opportunities to apply AI, NLP, and Computer Vision expertise to solve real-world problems. Experienced in building intelligent systems, conducting research, and leading robotics teams at international competitions.</p>

  <h2>Education</h2>
  <div class="section-item">
    <div class="row"><h3>Bachelor of Science in CSE (Artificial Intelligence & Computing)</h3><span class="date">2021–2025</span></div>
    <div class="row"><span class="institution">North South University, Dhaka</span><span class="date">CGPA: 3.76</span></div>
  </div>
  <div class="section-item">
    <div class="row"><h3>Higher Secondary Certificate (HSC)</h3><span class="date">2020</span></div>
    <div class="row"><span class="institution">Dhaka College, Dhaka</span><span class="date">GPA: 5.00</span></div>
  </div>
  <div class="section-item">
    <div class="row"><h3>Secondary School Certificate (SSC)</h3><span class="date">2018</span></div>
    <div class="row"><span class="institution">Ideal School and College, Dhaka</span><span class="date">GPA: 5.00</span></div>
  </div>

  <h2>Professional Experience</h2>
  <div class="section-item">
    <div class="row"><h3>Teaching Assistant — Dept. of Mathematics and Physics</h3><span class="date">Jan 2025 – Present</span></div>
    <span class="institution">North South University, Dhaka</span>
    <ul>
      <li>Assisting faculty with course delivery, student queries, and evaluation support.</li>
      <li>Contributing to enhancing student understanding in large foundational courses.</li>
    </ul>
  </div>
  <div class="section-item">
    <div class="row"><h3>AI Engineer and Researcher — Team Atlas (Robotics)</h3><span class="date">2018 – Present</span></div>
    <ul>
      <li>Led AI, CAD design, piloting, and documentation for Mars Rover projects.</li>
      <li>Champions nationally; represented Bangladesh in ARC (Australia), URC (Egypt), and IRDC (India).</li>
    </ul>
  </div>

  <h2>Research & Projects</h2>
  <div class="section-item">
    <h3>Australian Rover Challenge (ARC) — Mars Rover</h3>
    <p>Fastest rover, finalist team representing Bangladesh. 3D design, documentation, piloting, deployment. Tech: SolidWorks, ROS, Embedded C.</p>
  </div>
  <div class="section-item">
    <h3>ADHD Detection and Therapy Chatbot (CSE499)</h3>
    <p>ML and LLM-based early ADHD predictor with Dialogflow chatbot. Built ADHD classifier and virtual therapy bot using BERT and Streamlit.</p>
  </div>
  <div class="section-item">
    <h3>OpenSetWaste — Waste Detection (CSE498R)</h3>
    <p>Open-set waste classification using GCN on Dhaka data. Proposed EfficientGraphNet (GCN + EfficientNetB3) for unseen waste detection.</p>
  </div>
  <div class="section-item">
    <h3>Gym Mental Health Analyzer & Virtual Trainer (CSE445)</h3>
    <p>Developed NLP-based gym chatbot with ML-powered wellness prediction and virtual training assistance.</p>
  </div>
  <div class="section-item">
    <h3>Uterus Fibroid Prediction (CSE299)</h3>
    <p>ML model for early risk classification. Trained and evaluated classifiers using real-world clinical data.</p>
  </div>
  <div class="section-item">
    <h3>World Robotics Championship — Robo-Race & Line Follower</h3>
    <p>Represented Bangladesh; 2nd place nationally. Built autonomous robots using sensors and microcontrollers.</p>
  </div>

  <h2>Technical Skills</h2>
  <div class="skills-grid">
    <span class="skills-label">Languages</span><span class="skills-value">Python, C/C++, Java, JavaScript, HTML/CSS</span>
    <span class="skills-label">ML & Data Science</span><span class="skills-value">Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, PyTorch, TensorFlow, NetworkX, OpenCV</span>
    <span class="skills-label">Web/Software</span><span class="skills-value">ReactJS, Node.js, Firebase, MongoDB, MySQL, ExpressJS, Git, VS Code</span>
    <span class="skills-label">Tools & Platforms</span><span class="skills-value">Streamlit, Dialogflow, Postman, Google Colab, Jupyter, GitHub, XAMPP, ROS</span>
    <span class="skills-label">Design & Docs</span><span class="skills-value">Canva, Draw.io, AutoCAD (2D/3D), SolidWorks, Overleaf, LaTeX, Filmora, CapCut</span>
  </div>

  <h2>Co-curricular & Competitions</h2>
  <ul>
    <li><strong>ARC 2024 (Australia)</strong> — Finalist, represented Bangladesh with Team Atlas Mars Rover</li>
    <li><strong>WRC 2022 (India)</strong> — World Robotics Championship participant</li>
    <li><strong>URC (Egypt)</strong> — University Rover Challenge international representative</li>
    <li><strong>IRDC (India)</strong> — International Robotics Design Competition representative</li>
    <li><strong>Technovation 2.0</strong> — Champion</li>
    <li><strong>Multiple National-Level Competitions</strong> — Winner in various technology and robotics events</li>
  </ul>

  <h2>Achievements & Scholarships</h2>
  <ul>
    <li>75% Academic Merit Waiver (Undergraduate) — North South University</li>
    <li>Scholarships: PEC, JSC, SSC (Talentpool), Manarat</li>
  </ul>

  <h2>Academic Courses</h2>
  <p>Data Structures & Algorithms, Operating Systems, OOP, DBMS, Software Engineering, Linear Algebra, Discrete Math</p>

  <h2>Interests</h2>
  <p class="interests">Machine Learning, NLP, Robotics, UI/UX Design, Human-AI Interaction, Technical Writing</p>

  <h2>Soft Skills</h2>
  <p>Leadership, Problem Solving, Self-Learning, Teamwork, Communication, Adaptability</p>

  <script>window.onload = () => { window.print(); }</script>
</body>
</html>`
}
