export default function Journey() {
    const milestones = [
        {
            period: 'Junior Design — CSE299',
            title: 'Where It All Began',
            accent: '#00d4ff',
            content: `My machine learning journey began with a project named "Uterine Fibroids (Myoma) Prediction with Machine Learning" in the Junior Design course. I created a model to detect Myoma in patients and deployed it in a web application built with React and Node.js. This project sparked my passion for Artificial Intelligence and Data Science.`,
        },
        {
            period: 'Senior Design → Capstone — CSE499/498R',
            title: 'ComfortADHD — From Idea to Q1 Journal',
            accent: '#7c3aed',
            content: `In the following semester, I got the opportunity to work with a novel dataset compiled by the Child and Adolescent Health Measurement Initiative (CAHMI) and Johns Hopkins University (USA) on Attention-deficit/hyperactivity disorder (ADHD) for my Senior Design project entitled "ComfortADHD: A Stacking Ensemble Framework for Early ADHD Prediction Integrating Machine Learning, Explainable AI, LLMs, and Dialogflow-Assisted Virtual Therapy Chatbot." This initiative evolved into my Capstone project, where it was showcased for its potential impact on early medical diagnosis. My proposed model achieved state-of-the-art performance, and the manuscript is currently under revision at PLOS ONE (Q1 Journal). As the first author, I was responsible for constructing the data pipelines, proposing the model architecture, and building the virtual therapy chatbot.`,
        },
        {
            period: 'Expanding Research Portfolio',
            title: '3 Papers in Q1 Journals',
            accent: '#10b981',
            content: `I have expanded my research portfolio with two additional manuscripts currently under review at Q1 journals. These works include a Graph Neural Network approach to Open-Set recognition in waste management and a comparative study of supervised and unsupervised learning for gym management systems. All three papers push the boundaries of ML and explainable AI in their respective domains.`,
        },
        {
            period: 'Team Atlas — 2022 & 2024',
            title: 'Representing Bangladesh on the World Stage',
            accent: '#f59e0b',
            content: `I have been an active member of the Bangladeshi Rover Team "Team Atlas." I feel proud representing Bangladesh at the World Robotics Championship (Technoxian) 2022 and the Australian Rover Challenge 2024 as a finalist. Working in a professional environment helped me build a foundation in research and development.`,
        },
        {
            period: 'Multiple Semesters',
            title: 'Teaching Assistant — Mathematics & Physics',
            accent: '#ef4444',
            content: `I have worked as a graduate and undergraduate teaching assistant in the department of Mathematics and Physics at my university for multiple semesters. I got the opportunity to assist faculty members and students through office hours and course management. It was very effective for my professional growth.`,
        },
    ]

    return (
        <section className="section" id="journey">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">My Story</span>
                    <h2 className="section-title">The Journey So Far</h2>
                    <p className="section-subtitle">
                        From a simple ML project to Q1 journal publications — a story of curiosity, persistence, and passion for AI.
                    </p>
                </div>

                <div className="journey-timeline">
                    {milestones.map((m, idx) => (
                        <div key={idx} className={`journey-item reveal ${idx % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="journey-marker" style={{ background: m.accent, boxShadow: `0 0 20px ${m.accent}40` }}></div>
                            <div className="journey-card glass-card">
                                <span className="journey-period" style={{ color: m.accent }}>{m.period}</span>
                                <h3 className="journey-title">{m.title}</h3>
                                <p className="journey-text">{m.content}</p>
                            </div>
                        </div>
                    ))}
                    <div className="journey-line"></div>
                </div>
            </div>
        </section>
    )
}
