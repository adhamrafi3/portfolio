const skillCategories = [
    {
        title: 'Programming Languages',
        skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'HTML/CSS'],
    },
    {
        title: 'ML & Data Science',
        skills: [
            'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
            'PyTorch', 'TensorFlow', 'NetworkX', 'Joblib', 'OpenCV',
        ],
    },
    {
        title: 'Web & Software Dev',
        skills: [
            'ReactJS', 'Node.js', 'Firebase', 'MongoDB', 'MySQL',
            'ExpressJS', 'Git', 'VS Code',
        ],
    },
    {
        title: 'Tools & Platforms',
        skills: [
            'Streamlit', 'Dialogflow', 'Postman', 'Google Colab',
            'Jupyter', 'GitHub', 'XAMPP', 'ROS',
        ],
    },
    {
        title: 'Design & Documentation',
        skills: [
            'Canva', 'Draw.io', 'AutoCAD (2D/3D)', 'SolidWorks',
            'Overleaf', 'LaTeX', 'Filmora', 'CapCut',
        ],
    },
    {
        title: 'Vibe Coding & AI-Assisted Dev',
        skills: [
            'Cursor AI', 'GitHub Copilot', 'Claude', 'ChatGPT',
            'Prompt Engineering', 'AI Pair Programming',
            'Rapid Prototyping', 'AI-Driven Debugging',
        ],
    },
]

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Skills & Technologies</span>
                    <h2 className="section-title">My Technical Toolkit</h2>
                    <p className="section-subtitle">
                        From ML pipelines to pixel-perfect UI — I design, build, and ship end-to-end.
                        Strong in research pipeline architecture, visual design systems, and vibe coding with AI.
                    </p>
                </div>

                {/* Pipeline & Design Highlight */}
                <div className="skills-highlight reveal">
                    <div className="skills-highlight-item">
                        <h4>Pipeline Architecture</h4>
                        <p>End-to-end ML pipelines: data curation → feature engineering → model training → evaluation → deployment. Built modular, reproducible research workflows for 3 Q1 journal papers.</p>
                    </div>
                    <div className="skills-highlight-item">
                        <h4>Design & Visual Systems</h4>
                        <p>Crafting premium UI/UX with dark themes, glassmorphism, micro-animations, and responsive layouts. Every project gets a polished, production-grade interface.</p>
                    </div>
                    <div className="skills-highlight-item">
                        <h4>Vibe Coding</h4>
                        <p>Leveraging AI tools like Cursor, Copilot, and Claude for rapid prototyping and pair programming. Turning ideas into working products at 10x speed with AI-assisted development flows.</p>
                    </div>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((cat, idx) => (
                        <div
                            key={cat.title}
                            className={`glass-card skill-category reveal reveal-delay-${(idx % 4) + 1}`}
                        >
                            <div className="skill-category-header">
                                <h3>{cat.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {cat.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
