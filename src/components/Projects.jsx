const projects = [
    {
        title: 'Australian Rover Challenge (ARC)',
        subtitle: 'Mars Rover',
        icon: '🚀',
        description:
            'Fastest rover and finalist team representing Bangladesh at the international ARC competition. Worked on 3D design, documentation, piloting, and deployment.',
        tech: ['SolidWorks', 'ROS', 'Embedded C', '3D Design'],
        highlight: '2nd Place National',
    },
    {
        title: 'ADHD Detection & Therapy Chatbot',
        subtitle: 'CSE499',
        icon: '🧠',
        description:
            'Built an ML and LLM-based early ADHD predictor with Dialogflow chatbot. Includes ADHD classifier, virtual therapy bot using BERT and Streamlit.',
        tech: ['Python', 'BERT', 'Dialogflow', 'Streamlit', 'ML'],
    },
    {
        title: 'OpenSetWaste — Waste Detection',
        subtitle: 'CSE498R',
        icon: '♻️',
        description:
            'Open-set waste classification using GCN on Dhaka data. Proposed EfficientGraphNet (GCN + EfficientNetB3) for unseen waste detection.',
        tech: ['GCN', 'EfficientNet', 'Python', 'PyTorch'],
    },
    {
        title: 'Gym Mental Health Analyzer',
        subtitle: 'CSE445',
        icon: '💪',
        description:
            'NLP-based gym chatbot combining mental wellness classification with ML-powered wellness prediction and virtual training assistance.',
        tech: ['NLP', 'ML', 'Python', 'Chatbot'],
    },
    {
        title: 'Uterus Fibroid Prediction',
        subtitle: 'CSE299',
        icon: '🔬',
        description:
            'ML model for early risk classification of uterus fibroids. Trained and evaluated classifiers using real-world clinical data.',
        tech: ['Scikit-learn', 'Python', 'ML', 'Classification'],
    },
    {
        title: 'World Robotics Championship',
        subtitle: 'Robo-Race & Line Follower',
        icon: '🤖',
        description:
            'Represented Bangladesh in WRC 2022 (2nd place nationally). Built autonomous robots using sensors and microcontrollers.',
        tech: ['Arduino', 'Sensors', 'Microcontrollers', 'C'],
    },
]

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Featured Work</span>
                    <h2 className="section-title">Projects & Research</h2>
                    <p className="section-subtitle">
                        From Mars rovers to mental health AI — projects that push boundaries.
                    </p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className={`glass-card project-card reveal reveal-delay-${(idx % 4) + 1}`}
                        >
                            <h3>{project.title}</h3>
                            {project.subtitle && (
                                <div className="project-course">{project.subtitle}</div>
                            )}
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t) => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
